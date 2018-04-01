import { Routes,RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
//import { ForgetpwComponent } from './forgetpw/forgetpw.component';
//import { MenComponent } from './men/men.component';
import { MenaddComponent } from './menadd/menadd.component';
import { EditmenComponent } from './editmen/editmen.component';
import { OrderComponent } from './order/order.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgetComponent } from './forget/forget.component';
import { CategoryComponent } from './category/category.component';
import { AddcatComponent } from './addcat/addcat.component';
import {ComboComponent} from "./combo/combo.component";

const router:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'user',component:UserComponent},
    {path:'products',component:ProductComponent},
    {path:'login',component:LoginComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'edituser/:email_id',component:EdituserComponent},
    //{path:'forgetpw',component:ForgetpwComponent},
    //{path:'men',component:MenComponent},
    {path:'menadd',component:MenaddComponent},
    {path:'editmen/:pk_pro_id',component:EditmenComponent},
    {path:'order',component:OrderComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'forgot',component:ForgetComponent},
    {path:'category',component:CategoryComponent},
    {path:'addcat',component:AddcatComponent},
    {path:'combo',component:ComboComponent}

];

export const routing=RouterModule.forRoot(router);

