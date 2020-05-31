import { Component, OnInit } from '@angular/core';
import { ErrorsService } from './errors.service';
import { CustomError } from './error.interface';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  error: CustomError = null;
  constructor(private errorService: ErrorsService) {
  }

  ngOnInit(): void {
    this.errorService.error
      .subscribe((error: CustomError) => {
        this.error = error;
      })
  }

}
