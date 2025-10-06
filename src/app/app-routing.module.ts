import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowListComponent } from './components/cow-list/cow-list.component';
import { CowDetailComponent } from './components/cow-detail/cow-detail.component';
import { CowFormComponent } from './components/cow-form/cow-form.component';

export const routes: Routes = [
  { path: '', component: CowListComponent },
  { path: 'detail/:id', component: CowDetailComponent },
  { path: 'new', component: CowFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
