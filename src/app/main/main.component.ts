//Home page with post cards
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  title = 'blog';

  public content;
  constructor(private _contentService: ContentService, private router: Router ) {
  }

  ngOnInit() {
    this.content = this._contentService.getAll(); //Initial card adding
  }

  createPost() {
    const id = this._contentService.createPost();
    this.router.navigate(["post", id]);
    return id;
  }
}
