import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cards = [
    {
      title: "Casablanca",
      description: "Etes-vous confus à <br/><b>Choisir un endroit à visiter ? </b><br/><b>Plannifier votre voyage ? </b> <br/> vous étes dans le meilleur endroit <br/>",
      image: "assets/imgs/casablanca.jpg",
      liked : true
    },
    {
      title: "Rabat",
      description: "<b>Smart Planner</b> </br> Visitez les meilleurs endroits au Maroc visuellement pour choisir votre destination et plannifier votre séjour",
      image: "assets/imgs/rabat.jpg",
      liked: false
    },
    {
      title: "Marrakech",
      description: "<b>Smart Planner</b> </br> Visitez les meilleurs endroits au Maroc visuellement pour choisir votre destination et plannifier votre séjour",
      image: "assets/imgs/marrakech.jpg",
      liked:true
    }
];

discover(title){
  alert(title);
}
like(title){
  for (var i = 0; i < this.cards.length; i++) { 
    if(this.cards[i].title==title) {
      this.cards[i].liked=true;
    }
  }
}
dislike(title){
  for (var i = 0; i < this.cards.length; i++) { 
    if(this.cards[i].title==title) {
     this.cards[i].liked=false;
    }
  }
}

}
