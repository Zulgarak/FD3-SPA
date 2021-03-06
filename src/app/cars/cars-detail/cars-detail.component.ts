import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../../shared/models/cars.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { LoginUser } from '../../auth/user';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.scss']
})
export class CarsDetailComponent implements OnInit {
  car: Car;
  carId: string;
  carSubscription: Subscription;
  userSubscription: Subscription;
  user: LoginUser;
  public access: boolean;
  public userBookmarks;

  constructor(private carsService: CarsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
             ) { }

  ngOnInit(): void {
    this.carSubscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.carId = paramMap.get('id');
      this.car = this.carsService.getCar(this.carId);
    });
    this.userSubscription = this.authService.getUser().subscribe((data) => {
      this.user = data;
    });
    this.access = this.getAccess();
    this.userBookmarks = this.isUserBookmarks();
  }

  getAccess(): boolean {
    return this.user.id === this.car.userId;
  }

  onDelete() {
    this.carsService.deleteCar(this.car.id).subscribe((data) => {
      this.router.navigate(['/cars']);
    });
  }

  onEdit() {
    this.router.navigate(['/cars', `${this.carId}`, 'edit']);
  }

  onBookmarks() {
    const index = this.isUserBookmarks();
    if (index > -1) {
      this.car.inBookmarks.splice(index, 1);
      this.carsService.updateCar(this.carId, this.car).subscribe( (data)=> {
          this.userBookmarks = -1;
        }
      );
    } else {
      if (!this.car.inBookmarks) {
        this.car.inBookmarks = [this.user.id];
      } else {
        this.car.inBookmarks.push(this.user.id);
      }
      this.carsService.updateCar(this.carId, this.car).subscribe( (data)=> {
          // console.log(data);
        this.userBookmarks = this.isUserBookmarks();
        }
      );
    }
  }

  isUserBookmarks() {
    return this.car.inBookmarks?.indexOf(this.user.id);
  }

}
