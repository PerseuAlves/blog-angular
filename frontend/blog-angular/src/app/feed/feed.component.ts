import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] = [];
  post: Post = new Post;
  id: string = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: any) => {
      this.listPost = data;
    });
  }

  findPostById() {
    this.postService.getPostById(this.id).subscribe((data: any) => {
      this.post = data;
      location.assign('/feed');
    });
  }

  cadastrarPost() {
    this.postService.postPost(this.post).subscribe((data: any) => {
      this.post = data;
      location.assign('/feed');
    });
  }

  deletarPost() {
    this.postService.deletePost(this.id).subscribe((data: any) => {
      this.id = data;
      location.assign('/feed');
    });
  }
}
