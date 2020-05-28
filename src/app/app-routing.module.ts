import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ViewPostComponent } from './view-post/view-post.component';



const routes: Routes = [{
  path : '',
  component : ListPostsComponent
},{
  path:'about',
  component : AboutPageComponent
},{
  path : "viewPost/:id",
  component : ViewPostComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
