import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyC9-qh97lIneDYbqbA8XCn1-XT4rLDh3Mc",
  authDomain: "contactlist-b3174.firebaseapp.com",
  databaseURL: "https://contactlist-b3174.firebaseio.com",
  projectId: "contactlist-b3174",
  storageBucket: "contactlist-b3174.appspot.com",
  messagingSenderId: "188726472244"
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
