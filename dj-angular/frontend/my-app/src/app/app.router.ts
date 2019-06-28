import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserLoginComponent} from './user-login/user-login.component'
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import {Register2Component} from './register2/register2.component'
import {MoodOfDayComponent} from './mood-of-day/mood-of-day.component'
import{RegisteruserComponent} from './registeruser/registeruser.component'

const appRoutes: Routes = [
    // {
    //     path:"",
    //     component: ShowDataComponent,
    // },
    // {
    //     path:"**",
    //     component: PagenotfoundComponent,
    // }
    {
        path:"userLogin",
        component: UserLoginComponent,
    },
    
    { path:"home",
      component:HomeComponent,

    },
    { path:"Register",
     component:RegisteruserComponent,

   },
   { path:"Register2",
     component:Register2Component,

   },
   { path:"Mood",
   component:MoodOfDayComponent,

 },
    { path:"ViewDetails",
      component:ViewDetailsComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}