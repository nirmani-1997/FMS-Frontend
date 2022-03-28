import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./pages/signup/signup.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard/user-dashboard.component";
import {AdminGuard} from "./services/admin.guard";
import {NormalGuard} from "./services/normal.guard";
import {ProfileComponent} from "./pages/profile/profile.component";
import {WelcomeComponent} from "./pages/admin/welcome/welcome.component";
import {EmployeeComponent} from "./pages/admin/employee/employee.component";
import {VehicleComponent} from "./pages/admin/vehicle/vehicle.component";
import {TireComponent} from "./pages/admin/tire/tire.component";
import {FuelComponent} from "./pages/admin/fuel/fuel.component";
import {JobComponent} from "./pages/admin/job/job.component";
import {ServicesComponent} from "./pages/admin/services/services.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
    children:[
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'vehicle',
        component: VehicleComponent,
      },
      {
        path: 'tire',
        component: TireComponent,
      },
      {
        path: 'fuel',
        component: FuelComponent,
      },
      {
        path: 'job',
        component: JobComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
