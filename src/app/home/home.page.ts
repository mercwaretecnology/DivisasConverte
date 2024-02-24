/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCardContent, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { CalltoapiService } from '../services/calltoapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  imports: [IonCard, IonCardHeader, IonCardContent, IonButton,
    IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  DOGS: string[] = [];
  constructor(private myCallApi: CalltoapiService) { }
  async ngOnInit() {
    await this.gettingResultServices();
  }
  async gettingResultServices() {
    this.myCallApi.getCalltoApi().then((res) => {
      console.log('OBTENIENDO RESULTADOS DE LA CONSULTA', res);
    });
  }
  goToDashBoard() { }
  // for(let values of res.data) {
  //   this.words.push(values);

  // }

}

