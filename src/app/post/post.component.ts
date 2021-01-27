//Post page for create, edit and delete posts
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../content/content.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  private id;
  public content;
  titleControl: FormControl;
  contentControl: FormControl;
  constructor(private _contentService: ContentService,
              private route: ActivatedRoute,
              private router: Router) 
  {
    this.route.params.subscribe(param => (this.id = param.postId));
  }

  ngOnInit(): void {
    this.content = this._contentService.getPost(this.id);
    
    this.titleControl = new FormControl(this.content.title);
    this.titleControl.valueChanges.subscribe(value => this.content.title = value);

    this.contentControl = new FormControl(this.content.content);
    this.contentControl.valueChanges.subscribe(value => this.content.content = value);
  }

  savePost() {
    this._contentService.savePost(this.content);
    this.router.navigate([""]);
  }

  deletePost() {
    if (confirm("Вы действительно хотите удалить запись?")){
      this._contentService.deletePost(this.id);
      this.router.navigate([""]);
    }
  }

}
