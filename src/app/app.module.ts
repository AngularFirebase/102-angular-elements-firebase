import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { createCustomElement } from '@angular/elements';
import { UserPollComponent } from './user-poll/user-poll.component';

const config = {
  apiKey: "AIzaSyAc9Tt8pQQF3ntu2Tz66iUKl_fXHtdhIyc",
  authDomain: "firestarter-96e46.firebaseapp.com",
  databaseURL: "https://firestarter-96e46.firebaseio.com",
  projectId: "firestarter-96e46",
  storageBucket: "firestarter-96e46.appspot.com",
  messagingSenderId: "581326886241",
  automaticDataCollectionEnabled: false
}
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    UserPollComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  entryComponents:[
    UserPollComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(UserPollComponent, { injector: this.injector });
    
    customElements.define('user-poll', el);
   }
}
