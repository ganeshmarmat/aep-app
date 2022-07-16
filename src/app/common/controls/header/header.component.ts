import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/erp-models/menu/menuitem.model';
import { CustomAuthService } from 'src/app/erp-services/auth/custom-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavEvent = new EventEmitter<void>();
  constructor(public tokenStorage: CustomAuthService) { 
  }

  ngOnInit() {
  }
  public togglenav()
  {
    this.sideNavEvent.emit();
  }
  logout(){
    this.tokenStorage.RemoveLocalStorage();
    window.location.reload();
  }
}
