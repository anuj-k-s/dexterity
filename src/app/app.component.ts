import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { PostService } from './_components/post.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myFokos: Observable<any[]>;
  constructor(public db: AngularFireDatabase, public postService: PostService) {
    this.myFokos = db.list('posts').snapshotChanges();
      
    const leadsRef = db.database.ref('posts');
    leadsRef.on('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        debugger;
        postService.populatePosts(childSnapshot);
      });
    });
  }
}
