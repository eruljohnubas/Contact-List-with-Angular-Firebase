import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyBbRBtapTtPv6MSZjB2PJnzawjnxzCXJXs",
  authDomain: "firestore-309b7.firebaseapp.com",
  databaseURL: "https://firestore-309b7.firebaseio.com",
  projectId: "firestore-309b7",
  storageBucket: "",
  messagingSenderId: "8912526197"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
