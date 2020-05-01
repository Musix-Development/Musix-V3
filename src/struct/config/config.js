require("dotenv/config");

module.exports = {
  token: process.env.TOKEN,
  devToken: process.env.DEVTOKEN,
  dblKey: process.env.DBLKEY,
  bodKey: process.env.BODKEY,
  api_key: process.env.GOOGLE_API_KEY,
  genius_api_key: process.env.GENIUS_API_KEY,
  soundCloud_api_key: process.env.SOUNDCLOUD_API_KEY,
  spotify_access_key: process.env.SPOTIFY_ACCESS_KEY,
  spotify_client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  spotify_client_id: process.env.SPOTIFY_CLIENT_ID,
  spotify_refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
  port: 8888,
  redirectUri: "http://localhost:8888/callback/",
  testServer: "489111553321336832",
  primary_test_channel: "617633098296721409",
  secondary_test_channel: "570531724002328577",
  devId: "360363051792203779",
  embedColor: "#b50002",
  invite: "https://discordapp.com/oauth2/authorize?client_id=607266889537945605&permissions=3427328&scope=bot",
  supportServer: "https://discord.gg/rvHuJtB",
  devMode: false,
  api: false,
  saveDB: true,
  respawn: true,
  shards: 10,
  shardDelay: 10000,
  spawnTimeout: 60000,
  respawnDelay: 1000,
  prefix: ">",
  devPrefix: "-",
  defaultVolume: 5,
  permissions: false,
  dj: false,
  djrole: null,
  startPlaying: true,
  bass: 1,
};
