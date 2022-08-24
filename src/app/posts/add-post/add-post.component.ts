import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import { Post } from '../models/post.model';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm!: FormGroup;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get title(): any {
    return this.postForm.get('title')
  }

  get description(): any {
    return this.postForm.get('description')
  }
  

  showDescriptionErrors():any {
    // const descriptionForm = this.postForm.desc;
    if (this.description.touched && !this.description.valid) {
      if (this.description.errors.required) {
        return 'Description is required';
      }

      if (this.description.errors.minlength) {
        return 'Description should be of minimum 10 characters length';
      }
    }

  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));
    console.log(this.postForm.value)

  }

}
