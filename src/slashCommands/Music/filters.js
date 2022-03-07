const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
  name: "filters",
  description: "Set EqualizerBand",
  options: [
    {
        name: "filter",
        description: "Set EqualizerBand",
        type: "STRING",
        required: true,
        choices: [
            {
                name: "Clear",
                value: "clear"
            },
            {
                name: "Bass",
                value: "bass",
            },
            {
                name: "Night Core",
                value: "night"
            },
            {
                name: "Pitch",
                value: "pitch"
            },
            {
                name: "Distort",
                value: "distort"
            }, 
            {
                name: "Equalizer",
                value: "eq"
            },
            {
                name: "8D",
                value: "8d"
            },
            {
                name: "Bassboost",
                value: "bassboost"
            },
            {
                name: "Speed",
                value: "speed"
            },
            {
                name: "Vaporwave",
                value: "vapo"
            }
        ]
    }  
],

  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false
    });
      if(!interaction.member.voice.channel) return interaction.editReply({embeds: [new MessageEmbed ().setColor(client.embedColor).setDescription("You are not connect in vc")]});
      if(interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({embeds: [new MessageEmbed ().setColor(client.embedColor).setDescription(`You are not connected to <#${interaction.guild.me.voice.channelId}> to use this command.`)]});
    const filter = interaction.options.getString("filter");

    const player = interaction.client.manager.get(interaction.guildId);
    if (!player.queue.current) {
      const thing = new MessageEmbed()
        .setDescription('There is nothing playing')
        .setColor(client.embedColor)
      return interaction.editReply({ embeds: [thing] });
     }
      const emojiequalizer = client.emoji.filter;

        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setTimestamp()
       switch(filter) {   
       
        case 'bass':
            player.setBassboost(true);
            thing.setDescription(`<:filters:943550716902002719>**| Bass mode is ON**`);
            break;
        case 'eq':   
            player.setEqualizer(true);
            thing.setDescription(`<:filters:943550716902002719>**| Equalizer mode is ON**`);
            break;
        case 'bassboost':
            var bands = new Array(7).fill(null).map((_, i) => (
                { band: i, gain: 0.25 }
            ));
            player.setEQ(...bands);
            thing.setDescription(`<:filters:943550716902002719>**| Bassboost mode is ON**`);
            break;
        case'night':    
            player.setNightcore(true);
            thing.setDescription(`<:filters:943550716902002719>**| Night Core Equalizer mode is ON**`);
            break;
        case'pitch':   
            player.setPitch(2); 
            thing.setDescription(`<:filters:943550716902002719>**| Pitch Equalizer mode is ON**`);
            break;
        case'distort':
            player.setDistortion(true); 
            thing.setDescription(`<:filters:943550716902002719>**| Distort Equalizer mode is ON**`);
            break;
        case'vapo':
            player.setVaporwave(true); 
            thing.setDescription(`<:filters:943550716902002719>**| Vaporwave Equalizer mode is ON**`);
            break;
        case 'clear': 
            player.clearEffects();
            thing.setDescription(`<:filters:943550716902002719>**| Equalizer mode is OFF**`);
            break;
        case 'speed': 
            player.setSpeed(2);
            thing.setDescription(`<:filters:943550716902002719>**| Speed mode is ON**`);
            break;
        case '8d': 
            player.set8D(true);
            thing.setDescription(`<:filters:943550716902002719>**| 8D mode is ON**`);
        }
         return interaction.editReply({embeds: [thing]});
    }
};
