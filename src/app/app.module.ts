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
import { ChuckapiComponent } from './chuckapi/chuckapi.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ClubmemberComponent,
    MemberDetailComponent,
    SnackComponent,
    ChuckapiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  entryComponents: [
    SnackComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
