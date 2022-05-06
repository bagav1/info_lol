import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.sass']
})
export class ChampionComponent implements OnInit, AfterContentInit {

  params: { id: string } = { id: '' };
  champion: any;
  element: any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private content_lol: ContentService
  ) { }

  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
    this.params = {
      id: this.rutaActiva.snapshot.params['id']
    };
    this.content_lol.champ(this.params.id).subscribe((res) => {
      console.log(res.data[this.params.id]);
      this.champion = res.data[this.params.id];
      document.getElementById('defaultOpen')?.click();
    });
  }

  openTab(event: any, tabName: string) {
    var i, tabcontent, tablinks, tab, bar;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.replace('blockDysplay', 'noneDysplay');
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    tab = document.getElementById(tabName);
    if (tab) {
      tab.classList.replace('noneDysplay', 'blockDysplay');
    }

    event.currentTarget.className += ' active';
  }

}
