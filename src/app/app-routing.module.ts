import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SocketDetailComponent} from "./pages/socket-detail/socket-detail.component";

const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'socket/:deviceId/detail', component: SocketDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
