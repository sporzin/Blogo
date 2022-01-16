import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PublicLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
