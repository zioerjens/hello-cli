import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PregnancyChecksComponent } from './pregnancy-checks/pregnancy-checks.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pregnancy-checks', component: PregnancyChecksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
