import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {logger} from 'codelyzer/util/logger';
import {Observable, Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Car} from '../../shared/models/cars.model';
import {CarsService} from '../cars.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {AuthService} from '../../auth/auth.service';
import {CanComponentDeactivate} from '../car-form.guard';


@Component({
  selector: 'app-add-form-car',
  templateUrl: './add-form-car.component.html',
  styleUrls: ['./add-form-car.component.scss']
})
export class AddFormCarComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  public form: FormGroup;
  public amountDoors: string[] = ['1', '2', '3', '4', '5'];

  public car;
  public user;
  public userSubscription: Subscription;
  public path: string;
  public imgUrl: AngularFireStorageReference;

  carSubscription: Subscription;
  carId;
  activeCar;
  paramMapId;

  constructor(private carsService: CarsService,
              private router: Router,
              private authService: AuthService,
              private angularFireStorage: AngularFireStorage,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.userSubscription = this.authService.getUser().subscribe((data) => {
      this.user = data;
    });
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.paramMapId = this.activatedRoute.snapshot.paramMap.get('id');
      this.carSubscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.carId = paramMap.get('id');
        console.log(this.carId);
        this.activeCar = this.carsService.getCar(this.carId);
        this.imgUrl = this.activeCar.img;
      });
    }
    this._initForm();
  }

  deleteFile() {
    const storage = this.angularFireStorage.storage;
    const storageRef = storage.ref();
    let imagesRef;
    if (this.activeCar) {
       imagesRef = storageRef.child(this.activeCar.img);
    } else {
       imagesRef = storageRef.child(this.path);
    }
    // const imagesRef = storageRef.child(this.path);
    console.log(imagesRef);
    imagesRef.delete().then(() => {
      console.log('deleted');
        }
      );
  }

  onFileChange(event) {
    if (this.imgUrl) {
      this.deleteFile();
    }
    const file = event.target.files[0];
    const filePath = `/cars-images/${file.name}`;
    const ref = this.angularFireStorage.ref(filePath);
    this.path = filePath;
    const task = ref.put(file);
    task.then((data) => {
      this.angularFireStorage.ref(this.path)
        .getDownloadURL()
        .subscribe((data) => {
          this.imgUrl = data;
          console.log(this.imgUrl);
        });
    });
  }

  onSubmit() {
    this.car = this.form.value;
    //можно добавить стандартное фото через или из стора
    this.car.img = this.imgUrl;
    this.car.userId = this.user.id;
    this.car.date = new Date();
    if (this.activeCar) {
      this.carsService.updateCar(this.activeCar.id, this.car).subscribe((data) => {
        this.router.navigate(['/cars']);
      });
      return false;
    }
    this.carsService.addCar(this.car).subscribe((data) => {
      this.router.navigate(['/cars']);
    });
  }

  canDeactivate() {
    return confirm('Вы действительно хотите покинуть страницу?');
  }

  private _initForm() {
    this.form = new FormGroup({
      brand: new FormControl(`${this.activeCar ? this.activeCar?.brand : ''}` ,{
        validators: [Validators.required]
      }),
      model: new FormControl(`${this.activeCar ? this.activeCar?.model : ''}`, Validators.required),
      year: new FormControl(`${this.activeCar ? this.activeCar?.year : ''}`, {
        validators: [Validators.required]
      }),
      color: new FormControl(`${this.activeCar ? this.activeCar?.color : ''}`, {
        validators: [Validators.required]
      }),
      amountDoors: new FormControl(`${this.activeCar ? this.activeCar?.amountDoors : ''}`, Validators.required),
      bodyType: new FormControl(`${this.activeCar ? this.activeCar?.model : ''}`, Validators.required),
      driveType: new FormControl(`${this.activeCar ? this.activeCar?.driveType : ''}`, Validators.required),
      transmission: new FormControl(`${this.activeCar ? this.activeCar?.transmission : ''}`, Validators.required),
      engineType: new FormControl(`${this.activeCar ? this.activeCar?.engineType : ''}`, Validators.required),
      engineCapacity: new FormControl(`${this.activeCar ? this.activeCar?.engineCapacity : ''}`, Validators.required),
      condition: new FormControl(`${this.activeCar ? this.activeCar?.condition : ''}`),
      mileage: new FormControl(`${this.activeCar ? this.activeCar?.mileage : ''}`, Validators.required),
      price: new FormControl(`${this.activeCar ? this.activeCar?.price : ''}`, Validators.required),
      description: new FormControl(`${this.activeCar ? this.activeCar?.description : ''}`, Validators.required),
      equipment: new FormControl(`${this.activeCar ? this.activeCar?.equipment : ''}`),
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
