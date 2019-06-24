import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Posts } from 'src/app/common/Posts';
import { Post } from 'src/app/common/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  public posts: Array<Post> = new Array<Post>();
  constructor(private postService: PostService) {
  }


  ngOnInit() {
    this.postService.getPosts();
    this.getPosts();
  }


  public getPosts() {
    this.posts = this.postService.getDatafromFirebase();
    console.log(this.posts);
  }



}
