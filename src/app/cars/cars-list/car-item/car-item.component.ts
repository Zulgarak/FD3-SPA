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
  }

  redirectToCar() {
    this.router.navigate(['/cars', this.car.id]);
  }

}
