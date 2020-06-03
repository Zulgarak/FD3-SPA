import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {logger} from 'codelyzer/util/logger';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Car} from '../../shared/models/cars.model';
import {CarsService} from '../cars.service';
import {Router} from '@angular/router';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {AuthService} from '../../auth/auth.service';





@Component({
  selector: 'app-add-form-car',
  templateUrl: './add-form-car.component.html',
  styleUrls: ['./add-form-car.component.scss']
})
export class AddFormCarComponent implements OnInit {

  public form: FormGroup;
  public amountDoors: string[] = ['1', '2', '3', '4', '5'];

  public car;
  public user;
  public path: string;
  public imgUrl: AngularFireStorageReference;

  constructor(private carsService: CarsService,
              private router: Router,
              private authService: AuthService,
              private angularFireStorage: AngularFireStorage) { }


  ngOnInit(): void {
    this._initForm();
    this.authService.getUser().subscribe((data) => {
      this.user = data;
    });
  }

  deleteFile() {
    const storage = this.angularFireStorage.storage;
    const storageRef = storage.ref();
    const imagesRef = storageRef.child(this.path);
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
    this.carsService.addCar(this.car).subscribe((data) => {
      this.router.navigate(['/cars']);
    });
  }

  private _initForm() {
    this.form = new FormGroup({
      brand: new FormControl('' ,{
        validators: [Validators.required, Validators.pattern(/^([a-zа-яё]+)$/)]
      }),
      model: new FormControl('', Validators.required),
      year: new FormControl('', {
        validators: [Validators.required, Validators.pattern(/^(\d+)$/)]
      }),
      color: new FormControl('', {
        validators: [Validators.required, Validators.pattern(/^([a-zа-яё]+)$/)]
      }),
      amountDoors: new FormControl('', Validators.required),
      bodyType: new FormControl('', Validators.required),
      driveType: new FormControl('', Validators.required),
      transmission: new FormControl('', Validators.required),
      engineType: new FormControl('', Validators.required),
      engineCapacity: new FormControl('', Validators.required),
      condition: new FormControl(''),
      mileage: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      equipment: new FormControl(''),
    });
  }

}
