import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {
  @Input() car;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!this.car.img) {
      //вроде не должно работать
      this.car.img = 'https://firebasestorage.googleapis.com/v0/b/fe3-angular.appspot.com/o/default%2Fdefault.jpg?alt=media&token=2511c9db-87b6-4c71-b08e-7311ff511d02';
    }
  }

  redirectToCar() {
    this.router.navigate(['/cars', this.car.id]);
  }

}
