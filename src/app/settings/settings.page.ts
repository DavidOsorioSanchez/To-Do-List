import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/components/footer/footer.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
