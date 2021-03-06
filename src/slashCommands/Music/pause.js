const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "pause",
    description: "Pause the currently playing music",

	
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
          ephemeral: false
        });
      if(!interaction.member.voice.channel) return interaction.editReply({embeds: [new MessageEmbed ().setColor('#ff0000').setDescription("You are not connect in vc")]});
      if(interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({embeds: [new MessageEmbed ().setColor('#ff0000').setDescription(`You are not connected to <#${interaction.guild.me.voice.channelId}> to use this command.`)]});

        const player = interaction.client.manager.get(interaction.guildId);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription("There is no music playing.");
            return interaction.editReply({embeds: [thing]});
        }

        const emojipause = client.emoji.pause;

        if (player.paused) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`<a:stop:919229116136448020>** | The player is already paused.**`)
                .setTimestamp()
                return interaction.editReply({embeds: [thing]});
        }

        player.pause(true);

        const song = player.queue.current;

        let thing = new MessageEmbed()
            .setColor('#ff0000')
            .setTimestamp()
            .setDescription(`<:pause:919236040470966273>** | Paused**\n[${song.title}](${song.uri})`)
          return interaction.editReply({embeds: [thing]});
	
    }
};
