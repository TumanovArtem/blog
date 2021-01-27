import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { ContentService } from './content/content.service';
import { PostComponent } from './post/post.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PostComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ContentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
