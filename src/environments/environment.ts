// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const actual_version = '12.8.1';

export const environment = {
  production: false,

  API_URL: 'http://localhost:3000',
  actual_version: actual_version,

  img_splash:`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/`,
  img_loading:`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/`,
  img_champ:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/champion/`,
  img_passive:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/passive/`,
  img_spell:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/spell/`,
  img_item:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/item/`,
  img_summoner_spell:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/spell/`,
  img_profile_icon:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/profileicon/`,
  img_runes_perks:`http://ddragon.leagueoflegends.com/cdn/img/`,

  queueId: {
      soloDuo_5v5:'RANKED_SOLO_5x5',
      flex_5v5:'RANKED_FLEX_SR'
  },
  tier: {
    IRON: 'IRON',
    BRONZE: 'BRONZE',
    SILVER: 'SILVER',
    GOLD: 'GOLD',
    PLATINUM: 'PLATINUM',
    DIAMOND: 'DIAMOND'
  },
  division:{
    IV: 'IV',
    III: 'III',
    II: 'II',
    I: 'I'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
