import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/components/footer/footer.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonLabel, IonDatetime, IonItem, IonInput, IonTextarea, IonButton, IonSelect, IonSelectOption, IonContent, IonAccordion } from "@ionic/angular/standalone";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonAccordion, IonButton, IonTextarea, IonInput, IonItem, IonDatetime, IonLabel, IonCardContent, IonCardHeader, IonCardTitle, IonCard, NavbarComponent, FooterComponent, IonSelectOption, IonSelect, IonContent],
})
export class SettingsPage implements OnInit {
  navigateTo(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit() {
  }

}
