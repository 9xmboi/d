const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "skip",
	aliases: ["s"],
	category: "Music",
	description: "Skip the currently playing song",
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
    const song = player.queue.current;

           player.stop();
           
		const emojiskip = message.client.emoji.skip;

		let thing = new MessageEmbed()
			.setDescription(`<a:tick:919227918738133022>** | Skipped**\n[${song.title}](${song.uri})`)
			.setColor('#ff0000')
			.setTimestamp()
		return message.reply({embeds: [thing]}).then(msg => { setTimeout(() => {msg.delete()}, 3000);
       })
	
    }
};