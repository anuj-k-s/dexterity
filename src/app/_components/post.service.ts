import { Injectable } from '@angular/core';
import { Post } from '../common/Post';
import { Posts } from '../common/Posts';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { error } from 'util';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts: Array<Post> = new Array<Post>();
  myFokos: Observable<any[]>;
  constructor(public db: AngularFireDatabase) { }

  populatePosts(childSnapshot: firebase.database.DataSnapshot) {
    debugger;
    let post = new Post();
    post.author = childSnapshot.child('author').val();
    post.id = childSnapshot.child('id').val();
    post.value = childSnapshot.child('value').val();
    this.posts.push(post);
  }


  getPosts() {
    debugger;
    this.myFokos.subscribe(data => {
      console.log(data)
    },
    error =>{
      console.log(error);
    })
  //  return this.posts;
 //   return this.postsObj.posts;
  }

  getDatafromFirebase(){
    this.myFokos = this.db.list('posts').snapshotChanges();
  }
}
