import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit, OnChanges {
  @Input() champion: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.champion){
      this.animBar(document.getElementById('life'), 'Vida', this.champion.stats.hp, 650, '#1f995c');
      this.animBar(document.getElementById('mana-energy'), 'Mana/Energia', this.champion.stats.mp, 700, '#0099cc');
      this.animBar(document.getElementById('armor'), 'Armadura', this.champion.stats.armor, 60, '#c9aa71');
      this.animBar(document.getElementById('def-magic'), 'Defensa magica', this.champion.stats.spellblock, 60, '#800080');
      this.animBar(document.getElementById('damage'), 'Daño', this.champion.stats.attackdamage, 100, '#944b00');
    }
  }

  animBar(c: any, name: string, curent: number, max: number, color: any) {
    c.setAttribute('title', name + ': ' + curent);
    const h = c.getAttribute('height') ? c.getAttribute('height') : 150;
    const w = c.getAttribute('width') ? c.getAttribute('width') : 300;
    const ctx = c.getContext("2d");

    const num = w * (curent / max);

    var i: number = 0;
    var anim: any = null;

    ctx.clearRect(0, 0, w, h);
    anim = window.setInterval(() => {
      i = i + 4;

      if (i > num) {
        window.clearInterval(anim);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, i, h);
      }
    }, 1000/num);
  }

}
