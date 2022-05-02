import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor(private content_lol: ContentService) { }

  ngOnInit(): void {
    this.content_lol.matchList().subscribe((res) =>{
      console.log(res);
    });
  }

}
