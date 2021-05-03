import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubmemberComponent } from './clubmember/clubmember.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClubmembershipsComponent } from './clubmemberships/clubmemberships.component';
import { ClubComponent } from './club/club.component';
import { MembershipfeesComponent } from './membershipfees/membershipfees.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import{MatTableModule} from '@angular/material/table';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    ClubmemberComponent,
    MemberDetailComponent,
    ClubmembershipsComponent,
    ClubComponent,
    MembershipfeesComponent,
    HeaderComponent,
    DropdownDirective
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule
    
  ],
  entryComponents: [
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
