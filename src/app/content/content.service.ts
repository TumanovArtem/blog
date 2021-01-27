//import { Injectable } from '@angular/core';
//
//@Injectable({
//  providedIn: 'root'
//})
export class ContentService {

  content = [
    {title: "Some title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!", 
    id: 1},
    {title: "Very very very very long title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!",
    id: 2},
    {title: "Another title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!",
    id: 3},
    {title: "Different title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat!",
    id: 4}
  ]

  public getAll() {
    return this.content;
  }
}
