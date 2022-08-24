import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import { Post } from '../models/post.model';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
post!:Post
  constructor(private route:ActivatedRoute , private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      console.log(params.get('id'))
      const id=params.get('id');

      // this.store.select().subscribe((data=>{
        
      // }))

    })
  }

  
}
