import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';
import {Car} from '../../shared/models/cars.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {LoginUser} from '../../auth/user';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars: Car[];
  subscription: Subscription;
  // limit: string = '6';
  // previousLength = this.limit;
  userSubscription: Subscription;
  user: LoginUser;
  header: string;



  constructor( private carsService: CarsService,
               private activatedRoute: ActivatedRoute,
               private authService: AuthService,
               private router: Router) { }

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
      }
    });
  }
      // console.log(data.cars);
      // console.log(this.activatedRoute.snapshot.paramMap.get('user'));
      // this.cars = data.cars;
    // });
  // }
  // nextCars() {
  //   // console.log(this.carsService.getCars('9'));
  //   this.carsService.getCars().subscribe( (data) => {
  //   // this.carsService.getCars('9').subscribe( (data) => {
  //     console.log(data);
  //     this.cars = data;
  //     }
  //   );
  //   //должен вызывать гет карс но с лимитом другим
  //   // работает значит нужно взять текущий стэйс и добавить новый
  // }

  // showMore() {
  //   this.productsService.loadMore()
  //     .subscribe((data: Product[]) => {
  //       this.products = data;
  //       this.productsService.products = data;
  //       if (data.length === this.previousQueryLength) {
  //         this.isPart = false;
  //       }
  //       this.previousQueryLength = data.length;
  //     });
  // }

  redirectToCars() {
    this.router.navigate(['/cars', 'add']);
  }


}
