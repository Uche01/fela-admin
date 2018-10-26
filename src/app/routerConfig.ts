import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { Routes } from '@angular/router';
import { AuthGuardService } from "./services/auth-guard.service";

export const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: 'login',
        pathMatch: 'full'
    },
    
    {
      path: 'login',
      component: LoginComponent
    },
    
    { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [AuthGuardService]
    }
]