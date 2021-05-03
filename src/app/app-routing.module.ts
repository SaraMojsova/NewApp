import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { ClubmemberComponent } from './clubmember/clubmember.component';
import { ClubmembershipsComponent } from './clubmemberships/clubmemberships.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembershipfeesComponent } from './membershipfees/membershipfees.component';

const routes: Routes = [
    { path: 'clubmember', component: ClubmemberComponent },
    { path: 'club', component: ClubComponent },
    { path: 'clubmemberships', component: ClubmembershipsComponent },
    { path: 'membershipfees', component: MembershipfeesComponent },
    { path: 'member-detail', component: MemberDetailComponent },
    // { path: '/', redirectTo: 'club' },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
