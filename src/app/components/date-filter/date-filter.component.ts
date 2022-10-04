import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() emitter:EventEmitter<Date> = new EventEmitter<Date>();
  filterDate(fDate:Date){
    this.emitter.emit(fDate);
  }

}
