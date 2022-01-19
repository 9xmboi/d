const { MessageEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: "status",
    category: "Information",
    aliases: [ "stats" , "Stats" ],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
       try {
            let totalSeconds = message.client.uptime / 1000;
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            
            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  
            let connectedchannelsamount = 0;
            let guilds = client.guilds.cache.map((guild) => guild);
            for (let i = 0; i < guilds.length; i++) {
                if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
            }
            if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;

          const mainPage = new MessageEmbed()
            .setColor("#ff0000")
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
    
       
            .setFooter("Developed with ❤️ by ! Yuvraj⛓#4578")
            
            .addFields (
                { name: `<:Servers:933067738321141770> **Servers**`, value: `\`\`\`Total: ${client.guilds.cache.size} servers\`\`\``, inline: true },
                { name: `<:user:933067645417312256> **Users**`, value: `\`\`\`Total: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} users\`\`\``, inline: true },
                { name: `<:nodejs:933067418165715034> **Node Version**`, value: `\`\`\`v${process.versions.node}\`\`\``, inline: true },
                { name: `<:djs:933066181680717896> **Discord.js**`, value: `\`\`\`v13.1.0\`\`\``, inline: true },
                { name: `<a:uptimeduck1:933066810192973865> **Uptime**`, value: `\`\`\`${uptime}\`\`\``, inline: true },

                { name: `<:musiccc:933068876139356231> **Music**`, value: `\`\`\`Playing Music In ${connectedchannelsamount} Servers\`\`\``, inline: true }
            )
            message.channel.send({embeds: [mainPage]});
        } catch (e) {
            console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor("#ff0000")
			.setAuthor(`An Error Occurred`)
			return message.channel.send({embeds: [emesdf]});
        }
    }
	}
