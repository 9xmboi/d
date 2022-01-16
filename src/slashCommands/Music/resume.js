const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "resume",
    description: "Resume currently playing music",
	
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
        const song = player.queue.current;

       if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription("There is no music playing.");
             return interaction.editReply({embeds: [thing]});
        }

        const emojiresume = client.emoji.resume;

        if (!player.paused) {
            let thing = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`<a:stop:919229116136448020>** | The player is already Resumed**.`)
                .setTimestamp()
           return interaction.editReply({embeds: [thing]});
        }

        player.pause(false);

        let thing = new MessageEmbed()
            .setDescription(`<a:tick:919227918738133022>** | Resumed**\n[${song.title}](${song.uri})`)
            .setColor('#ff0000')
            .setTimestamp()
         return interaction.editReply({embeds: [thing]});
	
    }
};
