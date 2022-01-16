const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "shuffle",
    description: "Shuffle queue",
	
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
        player.queue.shuffle();
        
        const emojishuffle = client.emoji.shuffle;

        let thing = new MessageEmbed()
            .setDescription(`<a:tick:919227918738133022>** | Shuffled the queue**`)
            .setColor('#ff0000')
            .setTimestamp()
         return interaction.editReply({embeds: [thing]});
	
    }
};
