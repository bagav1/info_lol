import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.sass']
})
export class LeagueComponent implements OnInit {
  OKeys = Object.keys;
  env = environment;

  summoner: any = [];
  matchs: any;

  queryLeague = this.formBuilder.group({
    queueId: '',
    tier: '',
    division: ''

  });

  constructor(private content_lol: ContentService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.content_lol.summoner_data('Wido').subscribe((res2) => {
      this.content_lol.match_list(res2.puuid).subscribe((res) => {
        this.content_lol.match(res[0]).subscribe((res1) => {
          console.log(res1);
          console.log(res1.info.gameCreation);
          console.log(new Date(res1.info.gameCreation).toLocaleString('es-CO', { hour12: true, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', weekday: 'long' }));
        });
      });
    });
  }

  consultar() {
    this.content_lol.entire_league(this.queryLeague.value.queueId, this.queryLeague.value.tier, this.queryLeague.value.division).subscribe((res1) => {
      if (res1?.status !== 'false') {
        for (let i = 0; i < 5; i++) {
          this.content_lol.summoner_data_id(res1[i].summonerId).subscribe((res2) => {
            this.content_lol.match_list(res2.puuid,5,'ranked').subscribe((res3) => {
              this.summoner.push({ 'data': res2, 'league': res1[i], 'matchs': res3 });
              i == 4 ? this.content_lol.match(this.summoner[0].matchs[0]).subscribe((res) => console.log(res)) : null;
            });
          });
        }
      }
    });
  }

}
