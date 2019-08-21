import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss']
})
export class Exercise2Component implements OnInit {
  @Input() params;
  @Output() checkAnswear = new EventEmitter();

  selectedAnswear;
  checked = false;
  latestId;
  filler = '';

  check() {
    this.checked = false;

    if (this.latestId !== this.params.id * 1 && this.selectedAnswear != null && !this.checked) {
      this.checkAnswear.emit(this.selectedAnswear);
      this.checked = true;
      this.latestId = this.params.id;
      this.selectedAnswear = null;
    }
  }

  select(id) {
    this.selectedAnswear = id * 1;
    this.filler = this.params.options.find(obj => {
      return obj.id === id * 1;
    }).caption;
  }

  constructor() { }

  ngOnInit() {
  }

}
