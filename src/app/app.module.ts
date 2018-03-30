import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from 'angular-icon'; 

import { routing } from './app.routing';

import {MatFormFieldModule, MatInputModule,MatButtonModule,
    MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import { UserdataService } from './userdata.service';
import { ProductdataService } from './productdata.service';
import { OrderdataService } from './orderdata.service';
import { LogindataService } from './logindata.service';
import { FeedbackdataService } from "./feedbackdata.service";
import { EmaildataService } from "./emaildata.service";
import { CatdataService } from "./catdata.service";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { EdituserComponent } from "./edituser/edituser.component";
import { ForgetpwComponent } from './forgetpw/forgetpw.component';
//import { MenComponent } from './men/men.component';
import { MenaddComponent } from './menadd/menadd.component';
import { EditmenComponent } from './editmen/editmen.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgetComponent } from './forget/forget.component';
import { CategoryComponent } from './category/category.component';
import { AddcatComponent } from "./addcat/addcat.component";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    OrderComponent,
    HeaderComponent,
    AdduserComponent,
    LoginComponent,
    EdituserComponent,
    ForgetpwComponent,
   // MenComponent,
    MenaddComponent,
    EditmenComponent,
    FeedbackComponent,
    ForgetComponent,
    CategoryComponent,
    AddcatComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    IconModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
     MatTableModule,
    MatPaginatorModule
  ],
  providers: [UserdataService,ProductdataService,OrderdataService,LogindataService,FeedbackdataService,EmaildataService,CatdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
