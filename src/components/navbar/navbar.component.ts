import { Component, Input, OnInit } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class NavbarComponent  implements OnInit {

  @Input() title: string = "To-Do List";
  @Input() logo: string = "home";

  constructor() { }

  ngOnInit() {}

}
