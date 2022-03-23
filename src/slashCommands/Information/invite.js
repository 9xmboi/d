const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "get my invite link",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Erica")
    .setStyle("LINK")
    .setURL(`https://discord.com/oauth2/authorize?client_id=938473008551575552&permissions=3525712&scope=bot`),
			new MessageButton()
    .setLabel("Erica 2")
    .setStyle("LINK")
    .setURL("https://github.com/"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/D6SFg5XHYu")
			);

          const mainPage = new MessageEmbed()
          
            .setColor('#ff0000')
            .setDescription('**KEEP ENJOY AND KEEP SUPPORTING OUR BOT #DIL SE ERICA**')
           await interaction.followUp({embeds: [mainPage], components: [row]})
    }
		}
