import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }

  getPostById(id: string) {
    return this.http.get('http://localhost:3000/posts/' + id);
  }

  postPost(post: Post) {
    return this.http.post('http://localhost:3000/posts', post);
  }

  deletePost(id: string) {
    return this.http.delete('http://localhost:3000/posts/' + id);
  }
}
