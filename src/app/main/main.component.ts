import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content/content.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  title = 'blog';

  public content;
  constructor(private _contentService: ContentService ) {
  }

  ngOnInit() {
    this.content = this._contentService.getAll();
  }
}
