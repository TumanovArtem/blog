import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private _contentService: ContentService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => (this.id = param.postId));
  }

  ngOnInit(): void {
    this.content = this._contentService.getPost(this.id);
    console.log(this.content);
    this.titleControl = new FormControl(this.content.title);
    this.contentControl = new FormControl(this.content.content);
  }

}
