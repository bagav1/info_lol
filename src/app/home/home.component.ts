import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  env = environment;
  champion_list: any = [];
  skin: any = [];
  summoner: any;

  constructor(private content_lol: ContentService) { }

  ngOnInit(): void {
    this.content_lol.all_champs().subscribe((res) => {
      Object.keys(res.data).forEach((d: any) => {
        this.champion_list.push(res.data[d]);
      });
    });
  }

  consulta() {
    this.content_lol.summoner_data('WIDO').subscribe((res) => {
      console.log('Summoner Data ==>>');
      console.log(res);
      console.log(new Date(res.revisionDate).toLocaleString('es-CO', { timeZone: 'UTC', hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', weekday: 'long' }));
    });
    console.log('Champion List ==>>');
    console.log(this.champion_list);
  }
  league() {
    this.content_lol.entire_league(this.env.queueId.soloDuo_5v5, this.env.tier.DIAMOND, this.env.division.I).subscribe((res) => {
      console.log(res[1]);
      if (res?.status !== 'false') {
        for (let i = 0; i < 5; i++) {
          this.content_lol.summoner_data_id(res[i].summonerId).subscribe((resp) => {
            console.log(`${i} ::: league ==>>`);
            console.log(resp);
            console.log(res[i]);
          });
        }
      }
    });
  }

}
