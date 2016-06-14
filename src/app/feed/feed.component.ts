import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {CommentDropComponent} from '../comment-drop/';
import {BlogComponent} from '../';


@Component({
  moduleId: module.id,
  selector: 'feed-for-user',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.css'],
  directives:[MD_GRID_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, CommentDropComponent]
})
export class FeedComponent implements OnInit {
  posts=[
    {content:'good to eat good, stay away from emotional stuff', cols: 1 , rows:1, color:'lightblue', id:0, showComment:false},
    {content:'Eat meet yo', cols: 1 ,rows:1,color:'#990066', id:1, showComment: false},
    {content:'This is a potray of some feed for the user- blogposts to keep\'em occupied', cols:2,rows:1,color:'#8C0073', id:2, showComment:false}
]
  constructor() {}

  ngOnInit() {
  }

  add_post(){
    
  }
  upvote(thepost){
    console.log('upvote click recorded');
  }
  comment(thepost){
    console.log('wants to comment');
  }

  changeValue(id){
    this.posts[id].showComment = !this.posts[id].showComment;
    }
  }
