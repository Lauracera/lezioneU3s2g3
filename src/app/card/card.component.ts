import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @ViewChild(ChildComponent, { static: true }) child!: ChildComponent; //@ViewChild(cosa vuoi vedere, {sempre a true}) nome!: dove lo metti;

  constructor() {}

  ngOnInit(): void {}
}
