// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const version_lol = 'https://ddragon.leagueoflegends.com/api/versions.json';
const actual_version = version_lol[0];

export const environment = {
  production: false,

  version_lol,
  actual_version,
  rotation_champ:'https://la1.api.riotgames.com/lol/platform/v3/champion-rotations',
  queue:'https://static.developer.riotgames.com/docs/lol/queues.json',
  url_all_champs: 'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/data/es_MX/champion.json',
  url_champ: 'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/data/es_MX/champion/',
  url_items:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/data/es_MX/item.json',
  url_summoner_spell:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/data/es_MX/summoner.json',
  url_profile_icon:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/data/es_MX/profileicon.json',
  img_splash:'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/',
  img_loading:'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/',
  img_champ:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/img/champion/',
  img_passive:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/img/passive/',
  img_spell:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/img/spell/',
  img_item:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/img/item/',
  img_summoner_spell:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/img/spell/',
  img_profile_icon:'http://ddragon.leagueoflegends.com/cdn/' + actual_version + '/img/profileicon/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
