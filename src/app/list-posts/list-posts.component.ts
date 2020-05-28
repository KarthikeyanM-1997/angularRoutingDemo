import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { DataService } from '../data-service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  constructor(private data: DataService) { }

  allPosts: Post[] = [];

  ngOnInit(): void {
    this.data.currentAllPosts.subscribe((posts) => { this.allPosts = posts });
  }


}
