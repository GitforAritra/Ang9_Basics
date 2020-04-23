import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient){ }

  getPosts(){
    return this.http.get(this.url);
  }
}
