import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { HomeComponent } from './home/home.component';
import { SocietyDashboardComponent } from './society-dashboard/society-dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'volunteerForm', component: SocietyDashboardComponent},
  {path: 'codeofconduct', component: CodeOfConductComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
