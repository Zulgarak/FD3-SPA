import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../../shared/models/cars.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { LoginUser } from '../../auth/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit, OnDestroy {

  public filterStr: string = '';
  public filterField: string = 'brand';
  public filterFields = [
    {value: 'brand', text: 'Марка авто'},
    {value: 'year', text: 'Год авто'},
  ];
  cars: Car[];
  userSubscription: Subscription;
  user: LoginUser;
  header: string;

  constructor( private carsService: CarsService,
               private activatedRoute: ActivatedRoute,
               private authService: AuthService,
               private router: Router,
               private http: HttpClient) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser().subscribe((data) => {
      this.user = data;
    });

    this.activatedRoute.data.subscribe((data) => {
      //перенести
      if (this.activatedRoute.snapshot.url.join(',') === 'user,bookmarks') {
        // console.log('работает');
        this.cars = data.cars.filter((item) => {
          return item.inBookmarks?.includes(this.user.id);
        });
        this.cars.length ? this.header = 'my-bookmarks-no-empty' : this.header = 'my-bookmarks-empty';
      } else if (this.activatedRoute.snapshot.url.join(',') === 'user,my-cars') {
         this.cars = data.cars?.filter((item) => {
          return item?.userId === this.user.id;
        });
         this.cars.length ? this.header = 'my-cars-no-empty' : this.header = 'my-cars-empty';
      } else {
         this.cars = data.cars;
         this.header = 'all-cars';
      }
    });
  }

  redirectToCars() {
    this.router.navigate(['/cars', 'add']);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
