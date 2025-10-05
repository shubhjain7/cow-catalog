import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CowListComponent } from './features/cow-list/cow-list.component';
import { CowFormComponent } from './features/cow-form/cow-form.component';
import { CowDetailComponent } from './features/cow-detail/cow-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CowService } from './core/services/cow.service';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

import { TimelineModule } from 'primeng/timeline';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePipe } from '@angular/common';

export const routes: Routes = [
  { path: '', component: CowListComponent },
  { path: 'add', component: CowFormComponent },
  { path: 'cows/:id', component: CowDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CowListComponent,
    CowFormComponent,
    CowDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormlyModule.forRoot({}),
    FormlyPrimeNGModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    TagModule,
    TimelineModule
  ],
  providers: [CowService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
