import { Component, OnInit, ViewChild } from '@angular/core';
import { MenubarComponent } from 'src/app/common/controls/menubar/menubar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('menubar') public menubar:MenubarComponent;
  constructor() { }

  ngOnInit(): void {
  }
  


}
