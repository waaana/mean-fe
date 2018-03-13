import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';
import { Page404Component } from './components/page-404/page-404.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'event', component: EventComponent,
    children: [
      { path: '', component: EventListComponent},
      { path: 'edit/:id', component: EventEditComponent},
    ]
  },
  { path: '**', component: Page404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });