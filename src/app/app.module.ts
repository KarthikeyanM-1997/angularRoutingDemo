import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { DataService } from './data-service';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    AboutPageComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
