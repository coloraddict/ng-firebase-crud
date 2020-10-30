import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CloudFirestoreComponent } from './cloud-firestore/cloud-firestore.component';
import { RealTimeDatabaseComponent } from './real-time-database/real-time-database.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudFirestoreComponent,
    RealTimeDatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,  
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
