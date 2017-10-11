import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
  	firebase.initializeApp({
  		apiKey: "AIzaSyA80dY86HHDK11frGMIDxDXFBpIyagPXIA",
    	authDomain: "ng-recipe-book-ed58d.firebaseapp.com"
  	});
  }

  onNavigate(feature: string){
  	console.log(feature);
  	this.loadedFeature = feature;
  };
}
