import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';
import { PartialObserver } from 'rxjs/Observer';

interface Post {
FirstName : string;
LastName:string;
Phone :string;
Mobile :string;
Email :string;
Address :string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts :any;
  postsCol: AngularFirestoreCollection<Post>;
  post: Observable<Post[]>;

  constructor(private afs: AngularFirestore){


  }
ngOnInit(){
  this.postsCol = this.afs.collection('posts');
  this.posts = this.postsCol.valueChanges();

}
}