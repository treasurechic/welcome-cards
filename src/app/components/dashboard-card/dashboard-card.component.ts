import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  @Input() image: string = '';
  @Input() image_alt: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() appUrl: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
