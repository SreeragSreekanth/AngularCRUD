import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LapComponent } from './lap/lap.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'lap', component:LapComponent},
  { path: 'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
