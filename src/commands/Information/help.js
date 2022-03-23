const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    category: "InformatioN",
    aliases: [ "addme" ],
    description: "help command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Erica")
    .setStyle("LINK")
    .setEmoji(`<:invites:932282296768299050>`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=938473008551575552&permissions=3525712&scope=bot`),			
    new MessageButton()
     .setLabel("Server")
    .setStyle("LINK")
    .setEmoji(`<:oop:935545051214381186>`)
    .setURL("https://discord.gg/D6SFg5XHYu"),
    new MessageButton()
    .setLabel("Vote")
    .setStyle("LINK")
    .setEmoji(`<:topgg:932339752923967589>`)
    .setURL("https://top.gg/bot/938473008551575552/vote"),
			);

          const mainPage = new MessageEmbed()
            
            .setColor("#ff0000")
 .setAuthor("Help Menu Of Erica",client.user.displayAvatarURL())
 
.addField('**Configuration**',` \`\`\`\n 24/7 , Setprefix \`\`\` `)
.addField("**Information**",`\`\`\`\n Help , Invite , Ping , Stats   \`\`\``)
.addField("**Music**",`\`\`\`\n Autoplay , Clearqueue , Join ,
 Loop , Grab , Nowplaying , Pause ,
 Play , Queue , Remove , Resume ,
 Seek , Shuffle , Skip , Skipto ,
 Stop , Leave , Volume , Search , \`\`\` `)
 .addField("**Filters**",`\`\`\`\n Just Type +filters
 After Playing Any Song
\`\`\``) 
 .setDescription(`**Our Official [Website](http://ericamusic.c1.biz/) For Erica Music Bot**`) 
 .setFooter("Developed with ❤️ by ! Yuvraj⛓#4578")
 .setTimestamp()
           message.reply({embeds: [mainPage], components: [row]})
    }
				}
