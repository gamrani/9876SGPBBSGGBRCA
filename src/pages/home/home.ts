import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormPage} from '../form/form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  slides = [
    {
      title: "Planificateur intelligent à la portée de tous les voyageurs",
      description: "Etes-vous confus à <br/><b>Choisir un endroit à visiter ? </b><br/><b>Plannifier votre voyage ? </b> <br/> vous étes dans le meilleur endroit <br/>",
      image: "assets/imgs/icon-traveller.png",
    },
    {
      title: "Que benifissez vous?",
      description: "<b>Smart Planner</b> </br> Visitez les meilleurs endroits au Maroc visuellement pour choisir votre destination et plannifier votre séjour",
      image: "assets/imgs/icon-attraction.png",
    }
];

submit(){
  this.navCtrl.push(FormPage,{});
}

}
