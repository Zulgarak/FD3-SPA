import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CarsService} from '../cars.service';
import {Car} from '../../shared/models/cars.model';
import {Subscription} from 'rxjs';
import {logger} from 'codelyzer/util/logger';
import {AuthService} from '../../auth/auth.service';
import {LoginUser} from '../../auth/user';
import {map, tap} from 'rxjs/operators';
import {AuthResponse} from '../../auth/auth-response';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AngularFireModule, FirebaseApp} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

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
              private http: HttpClient,
              private firebase: AngularFireAuth,

  ) { }

  ngOnInit(): void {
    this.carSubscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.carId = paramMap.get('id');
      this.car = this.carsService.getCar(this.carId);
    });
    this.userSubscription = this.authService.getUser().subscribe((data) => {
      console.log(data);
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
          console.log(data);
          this.userBookmarks = -1;
        }
      );
    } else {
      if (!this.car.inBookmarks) {
        console.log('нету нигде');
        this.car.inBookmarks = [this.user.id];
      } else {
        this.car.inBookmarks.push(this.user.id);
        console.log('уже в закладках других');
      }
      this.carsService.updateCar(this.carId, this.car).subscribe( (data)=> {
          console.log(data);
        this.userBookmarks = this.isUserBookmarks();
        }
      );
      console.log(this.car);
    }
  }

  isUserBookmarks() {
    return this.car.inBookmarks?.indexOf(this.user.id);
  }



}
