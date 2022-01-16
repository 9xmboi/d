const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { progressbar } = require('../../utils/progressbar.js')

module.exports = {
    name: "nowplaying",
    aliases: ["np"],
    category: "Music",
    description: "Show now playing song",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
execute: async (message, args, client, prefix) => {
  
        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription("There is no music playing.");
            return message.channel.send(thing);
        }
        const song = player.queue.current
        const emojimusic = client.emoji.music;
        var total = song.duration;
        var current = player.position;
        
        let embed = new MessageEmbed()
            .setDescription(`<a:playing:919227920260694087>** | Now Playing**\n[${song.title}](${song.uri}) - \`[${convertTime(song.duration)}]\`- [${song.requester}] \n\n\`${progressbar(player)}\``)
            .setThumbnail(song.displayThumbnail("3"))
            .setColor('#ff0000')
            .addField("\u200b", `\`${convertTime(current)} / ${convertTime(total)}\``)
            return message.channel.send({embeds: [embed]})

    }
}
