const mcServer = require('flying-squid')

mcServer.createMCServer({
  'motd': 'SurfMC\nRunning Beta',
  'port': 25565,
  'max-players': 10,
  'online-mode': false,
  'logging': true,
  'gameMode': 1,
  'difficulty': 1,
  'worldFolder':'world',
  'generation': {
    'name': 'diamond_square',
    'options':{
      'worldHeight': 80
    }
  },
  'kickTimeout': 10000,
  'plugins': {

  },
  'modpe': false,
  'view-distance': 10,
  'player-list-text': {
    'header':'SurfMC',
    'footer':'Beta Test'
  },
  'everybody-op': true,
  'max-entities': 100,
  'version': '1.12.2'
})
