const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pause",
    category: "Music",
    description: "Pause the currently playing music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
    
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const emojipause = client.emoji.pause;

        if (player.paused) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`<a:stop:919229116136448020>** | The player is already paused.**`)
                .setTimestamp()
                return message.reply({embeds: [thing]});
        }

        player.pause(true);

        const song = player.queue.current;

        let thing = new MessageEmbed()
            .setColor('#ff0000')
            .setTimestamp()
            .setDescription(`<:pause:919236040470966273>** | Paused**\n[${song.title}](${song.uri})`)
          return message.reply({embeds: [thing]});
	
    }
};
