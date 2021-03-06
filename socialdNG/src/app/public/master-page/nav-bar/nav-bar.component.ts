import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import  M  from "materialize-css";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLogged: Boolean = false;
  role: string;

  subscription: Subscription;

  constructor(private service: SecurityService) {}

  ngOnInit(): void {
    this.subscription = this.service.getUserData().subscribe((data) => {
      this.isLogged = data.isLogged;
    });
  }
}
