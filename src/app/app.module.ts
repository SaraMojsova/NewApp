import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubmemberComponent } from './clubmember/clubmember.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackComponent } from './snack/snack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClubmembershipsComponent } from './clubmemberships/clubmemberships.component';
import { ClubComponent } from './club/club.component';
import { MembershipfeesComponent } from './membershipfees/membershipfees.component';



@NgModule({
  declarations: [
    AppComponent,
    ClubmemberComponent,
    MemberDetailComponent,
    SnackComponent,
    ClubmembershipsComponent,
    ClubComponent,
    MembershipfeesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    
    
  ],
  entryComponents: [
    SnackComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
