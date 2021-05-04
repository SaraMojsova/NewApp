import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { ClubmemberComponent } from './clubmember/clubmember.component';
import { ClubmembershipsComponent } from './clubmemberships/clubmemberships.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembershipfeesComponent } from './membershipfees/membershipfees.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'clubmember', component: ClubmemberComponent },
    { path: 'club', component: ClubComponent },
    { path: 'clubmemberships', component: ClubmembershipsComponent },
    { path: 'membershipfees', component: MembershipfeesComponent },
    { path: 'member-detail', component: MemberDetailComponent },
    { path:'', component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
    // { path: '/', redirectTo: 'club' },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
