import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';
import {CommonModule} from '@angular/common';
import { ToastrModule } from "ngx-toastr";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactiveFormComponent,
    UserDeatilsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
     ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
  ],
  providers: [NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
