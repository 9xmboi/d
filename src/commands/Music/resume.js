const { MessageEmbed } = require("discord.js");

module.exports = {
	  name: "resume",
    aliases: ["r"],
    category: "Music",
    description: "Resume currently playing music",
    args: false,
    usage: "<Number of song in queue>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
  
		const player = client.manager.get(message.guild.id);
    const song = player.queue.current;

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const emojiresume = client.emoji.resume;

        if (!player.paused) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`<a:stop:919229116136448020>** | The player is already Resumed**.`)
                .setTimestamp()
          return message.reply({embeds: [thing]});
        }

        player.pause(false);

        let thing = new MessageEmbed()
            .setDescription(`<a:tick:919227918738133022>** | Resumed**\n[${song.title}](${song.uri})`)
            .setColor('#ff0000')
            .setTimestamp()
        return message.reply({embeds: [thing]});
	
    }
};