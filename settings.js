module.exports = {
  timer: 61000, // Is in milliseconds. Default: 61000 ms = 1 minute & 1 second.
  twitch: {
    clientID: '5gxrza9za9tylnpjk3htmx5d7gfpb8' // Make a Twitch application at https://glass.twitch.tv/console/apps
  },
  discord: {
    token: 'NTI5MDc2OTYyNjU3MDQyNDQy.DwrlhA.5gw1bE8AVJZHJD5EDkQm_xlrhYk', // https://discordapp.com/developers/applications/me/
    permissionForCommands: 'ADMINISTRATOR' // https://discordapp.com/developers/docs/topics/permissions
  }
}

/**
 *Example invite link for bot
 *https://discordapp.com/oauth2/authorize?&client_id=529076962657042442&scope=bot&permissions=8
 */