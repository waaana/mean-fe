import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { routing } from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { EventService } from './services/event/event.service';

import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { EventComponent } from './components/event/event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';
import { Page404Component } from './components/page-404/page-404.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    EventComponent,
    EventListComponent,
    EventEditComponent,
    Page404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    routing,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
