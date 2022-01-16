const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js')
const ms = require('ms');

module.exports = {
  	name: "seek",
  	aliases: [],
  	category: "Music",
  	description: "Seek the currently playing song",
  	args: true,
    usage: "<10s || 10m || 10h>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
  
		const player = client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const time = ms(args[0])
        const position = player.position;
        const duration = player.queue.current.duration;

        const emojiforward = client.emoji.forward;
        const emojirewind = client.emoji.rewind;

        const song = player.queue.current;
        
        if (time <= duration) {
            if (time > position) {
                player.seek(time);
                let thing = new MessageEmbed()
                    .setDescription(`<a:playing:919227920260694087>** |Forward**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``)
                    .setColor('#ff0000')
                    .setTimestamp()
                return message.reply({embeds: [thing]});
            } else {
                player.seek(time);
                let thing = new MessageEmbed()
                    .setDescription(`<a:playing:919227920260694087>** | Rewind**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``)
                    .setColor('#ff0000')
                    .setTimestamp()
          return message.reply({embeds: [thing]});
            }
        } else {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`Seek duration exceeds Song duration.\nSong duration: \`${convertTime(duration)}\``);
            return message.reply({embeds: [thing]});
        }
	
    }
};