import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDatepickerModule} from '@angular/material/datepicker';


import {MatTreeModule} from '@angular/material/tree';
// import {
//   DateTimeAdapter,
//   OWL_DATE_TIME_FORMATS,
//   OWL_DATE_TIME_LOCALE,
//   OwlDateTimeModule,
//   OwlNativeDateTimeModule
// } from 'ng-pick-datetime';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {authInterceptorProviders} from "./services/auth.interceptor";
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { EmployeeCreationComponent } from './pages/admin/employee/employee-creation/employee-creation.component';
import { EmployeeSearchComponent } from './pages/admin/employee/employee-search/employee-search.component';
import { EmployeeComponent } from './pages/admin/employee/employee.component';
import { VehicleComponent } from './pages/admin/vehicle/vehicle.component';
import { TireComponent } from './pages/admin/tire/tire.component';
import { FuelComponent } from './pages/admin/fuel/fuel.component';
import { JobComponent } from './pages/admin/job/job.component';
import { ServicesComponent } from './pages/admin/services/services.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import { VehicleCreationComponent } from './pages/admin/vehicle/vehicle-creation/vehicle-creation.component';
import { VehicleSearchComponent } from './pages/admin/vehicle/vehicle-search/vehicle-search.component';
import { TireCreationComponent } from './pages/admin/tire/tire-creation/tire-creation.component';
import { TireSearchComponent } from './pages/admin/tire/tire-search/tire-search.component';
// import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    EmployeeCreationComponent,
    EmployeeSearchComponent,
    EmployeeComponent,
    VehicleComponent,
    TireComponent,
    FuelComponent,
    JobComponent,
    ServicesComponent,
    VehicleCreationComponent,
    VehicleSearchComponent,
    TireCreationComponent,
    TireSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatGridListModule,
    ScrollingModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,






    // OwlDateTimeModule,
    // OwlNativeDateTimeModule
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}

