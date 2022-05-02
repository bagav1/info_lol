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
  env = environment;
  champion_list:any = [];
  skin:any = [];

  constructor(private content_lol: ContentService) { }

  ngOnInit(): void {
    this.content_lol.all_champs().subscribe((res) =>{
      Object.keys(res.data).forEach((d:any) => {
        this.content_lol.champ(d).subscribe((resp) => {
          this.champion_list.push(resp.data[d]);
        })
      });
    });
  }

  consulta(){
    console.log('consulta');
  }

}
