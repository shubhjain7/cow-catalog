// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { CowListComponent } from './components/cow-list/cow-list.component';
// import { CowFormComponent } from './components/cow-form/cow-form.component';
// import { CowDetailComponent } from './components/cow-detail/cow-detail.component';
// import { CommonModule } from '@angular/common';
// import { CowSearchComponent } from './components/cow-search/cow-search.component';

// @NgModule({
//   // declarations: [
//   //   AppComponent,
//   //   CowListComponent,
//   //   CowFormComponent,
//   //   CowDetailComponent
//   // ],
//   imports: [CommonModule,BrowserModule, FormsModule, AppRoutingModule,
//     AppComponent,
//     CowListComponent,
//     CowFormComponent,
//     CowDetailComponent
//   ],
//   bootstrap: [AppComponent],
//   declarations: [
//     CowSearchComponent
//   ]
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CowListComponent } from './components/cow-list/cow-list.component';
import { CowDetailComponent } from './components/cow-detail/cow-detail.component';
import { CowFormComponent } from './components/cow-form/cow-form.component';
import { CowSearchComponent } from './components/cow-search/cow-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CowListComponent,
    CowDetailComponent,
    CowFormComponent,
    CowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
