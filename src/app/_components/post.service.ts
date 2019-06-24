import { Injectable } from '@angular/core';
import { Post } from '../common/Post';
import { Posts } from '../common/Posts';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { error } from 'util';
import { DataSnapshot } from '@angular/fire/database/interfaces';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts: Array<Post> = new Array<Post>();
  myFokos: Observable<any[]>;
  constructor(public db: AngularFireDatabase) { }
  getPosts(){
    this.myFokos = this.db.list('posts').snapshotChanges();
    this.myFokos.subscribe(data => {
      data.forEach(snapshot => {
        let childsnapshot = snapshot['payload'];
        let post = new Post();
        post.author = childsnapshot.child('author').val();
        post.id = childsnapshot.child('id').val();
        post.value = childsnapshot.child('value').val();
        this.posts.push(post);
        console.log(this.posts);
      });
    },
      error => {
        console.log(error);
      })
  }

  getDatafromFirebase() {
    console.log(this.posts);
   return this.posts;
  }
}
