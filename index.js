const MusicBot = require("./src/structures/MusicClient");
require("./src/utils/lavamusic");
const client = new MusicBot();

client.connect()

module.exports = client; 
