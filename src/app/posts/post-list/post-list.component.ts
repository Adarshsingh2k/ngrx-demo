import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/state/app.state';
import { Post } from '../models/post.model';
import { getPosts } from '../state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts!:Observable<Post[]>

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.posts=this.store.select(getPosts)

  }

}
