const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
        name: "skip",
        description: "To skip a song/track from the queue.",
    
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String} color 
     */

  run: async (client, interaction) => {
    await interaction.deferReply({
            ephemeral: false
        });
      if(!interaction.member.voice.channel) return interaction.editReply({embeds: [new MessageEmbed ().setColor('#ff0000').setDescription("You are not connect in vc")]});
      if(interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({embeds: [new MessageEmbed ().setColor('#ff0000').setDescription(`You are not connected to <#${interaction.guild.me.voice.channelId}> to use this command.`)]});

   	const emojiskip = client.emoji.skip;
  if(!interaction.member.voice?.channel) return await interaction.editReply({embeds: [new MessageEmbed().setColor('#ff0000').setDescription("You are not connected to a voice channel to use this command.")]
    }).catch(() => {});
    
  if(interaction.guild.me.voice.channel && interaction.member.voice?.channelId !== interaction.guild.me.voice.channelId) return await interaction.editReply({ embeds: [new MessageEmbed().setColor('#ff0000').setDescription(`are not connected to ${interaction.guild.me.voice.channel} to use this command.`)]
    }).catch(() => {});
      const player = client.manager.get(interaction.guildId);
    if(!player) return await interaction.editReply({ embeds: [new MessageEmbed().setColor('#ff0000').setDescription(`Nothing is playing right now.`)]
    }).catch(() => {});
    if(player && player.state !== "CONNECTED") {
       player.destroy(); 
      return await interaction.editReply({ embeds: [new MessageEmbed().setColor('#ff0000').setDescription(`Nothing is playing right now.`)]
      }).catch(() => {});
    };
   if(!player.queue) return await interaction.editReply({ embeds: [new MessageEmbed().setColor('#ff0000').setDescription("Nothing is playing right now.")]
   }).catch(() => {});
        if(!player.queue.current) return await interaction.editReply({ embeds: [new MessageEmbed().setColor('#ff0000').setDescription("Nothing is playing right now.")]
      }).catch(() => {});

        if(!player.queue.size) return await interaction.editReply({ embeds: [new MessageEmbed().setColor('#ff0000').setDescription("No songs left in the queue to skip.")]
      }).catch(() => {});

        player.stop();
        return await interaction.editReply({
            embeds: [new MessageEmbed().setColor('#ff0000').setDescription(`<a:tick:919227918738133022>** | Skipped** \n[${player.queue.current.title}](${player.queue.current.uri})`)]
        }).catch(() => {});
  }
					}
          