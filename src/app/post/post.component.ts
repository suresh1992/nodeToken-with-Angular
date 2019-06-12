import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postMsg = '';
  constructor(private apiService: ApiService) { }

  postdata() { 
    this.apiService.postMessages({msg: this.postMsg}).subscribe(res => {

    })
    console.log(this.postMsg);
  }

  ngOnInit() {
  }

}
