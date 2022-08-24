import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'counter',
    component:CounterComponent

  },
  {
    path:'postList',
    component:PostListComponent,
    children:[
      {path:'add', component:AddPostComponent},
      {path:'edit/:id', component:EditPostComponent},

      
    ]
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
