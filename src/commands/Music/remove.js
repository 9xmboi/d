const { MessageEmbed } = require("discord.js");

module.exports = {
  	name: "remove",
    category: "Music",
  	description: "Remove song from the queue",
	  args: true,
    usage: "<Number of song in queue>",
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

    const position = (Number(args[0]) - 1);
       if (position > player.queue.size) {
        const number = (position + 1);
         let thing = new MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`No songs at number ${number}.\nTotal Songs: ${player.queue.size}`);
            return message.reply({embeds: [thing]});
        }

    const song = player.queue[position]
		player.queue.remove(position);

		const emojieject = client.emoji.remove;

		let thing = new MessageEmbed()
			.setColor('#ff0000')
			.setTimestamp()
			.setDescription(`<a:tick:919227918738133022>** | Removed**\n[${song.title}](${song.uri})`)
		  return message.reply({embeds: [thing]});
	
    }
};