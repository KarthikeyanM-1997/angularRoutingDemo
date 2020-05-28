import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { DataService } from '../data-service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  
  currentID;

  thisPost : Post;

  constructor(private activatedRoute:ActivatedRoute, private data: DataService) { 
    this.currentID = this.activatedRoute.snapshot.params.id;
    
  }

  ngOnInit(): void {
    this.data.currentAllPosts.subscribe((posts) => { this.thisPost = posts[this.currentID] });
  }

}
