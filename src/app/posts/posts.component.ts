import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private service: PostsService) {}

  ngOnInit(): void {
    this.service.getPosts()
          .subscribe((response: Post[]) => {
            this.posts = response;
          });
  }

  /*createPost(input: HTMLInputElement){
    const post: any = { title: input.value};
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe();
  }*/
}
