import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {
  @Input() params;
  @Output() checkAnswear = new EventEmitter();

  selectedAnswear;
  checked = false;
  latestId;

  check() {
    this.checked = false;

    if (this.latestId !== this.params.id * 1 && this.selectedAnswear != null && !this.checked) {
      this.checkAnswear.emit(this.selectedAnswear);
      this.checked = true;
      this.latestId = this.params.id;
      this.selectedAnswear = null;
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}
