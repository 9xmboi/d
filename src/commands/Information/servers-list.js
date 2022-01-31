const { MessageEmbed, MessageButton, MessageActionRow } = require(`discord.js`);
  
module.exports = {
	name: `serverslist`,
	category: `Owner`,
	aliases: [`slist`],
	description: `Shows servers list`,
	usage: `servers-list`,
execute: async (message, args, client, prefix, guildData, player) => {
		if (message.author.id !== "531063766645997570") return;
        let btn = new MessageActionRow().addComponents([
          new MessageButton()
            .setStyle("SECONDARY")
            .setCustomId("sr-back")
            .setLabel("Back"),
          new MessageButton()
            .setStyle("SECONDARY")
            .setCustomId("sr-next")
            .setLabel("Next"),
        ]);
        let i0 = 0;
        let i1 = 10;
        let page = 1;
        let description =
          `Total Servers - ${client.guilds.cache.size}\n\n` +
          client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map((r) => r)
            .map(
              (r, i) =>
                `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${
                  r.id
                }`
            )
            .slice(0, 100)
            .join("\n");

        let embed = new MessageEmbed()
          .setColor("BLUE")
          .setTitle(
            `Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`
          )
          .setDescription(description);

        let msg = await message.channel.send({
          embeds: [embed],
          components: [btn],
        });

        let collector = await msg.createMessageComponentCollector({
          filter: (m) => m.user.id === message.author.id,
        });
        collector.on("collect", async (btn) => {
          if (btn.isButton()) {
            await btn.deferUpdate().catch((e) => {});
            if (btn.customId === "sr-back") {
              i0 = i0 - 10;
              i1 = i1 - 10;
              page = page - 1;

              // if there is no guild to display, delete the message
              if (i0 + 1 < 0) {
                i0 = i0 + 10;
                i1 = i1 + 10;
                page = page + 1;
              }
              if (!i0 || !i1) {
                i0 = i0 + 10;
                i1 = i1 + 10;
                page = page + 1;
              }

              description =
                `Total Servers - ${client.guilds.cache.size}\n\n` +
                client.guilds.cache
                  .sort((a, b) => b.memberCount - a.memberCount)
                  .map((r) => r)
                  .map(
                    (r, i) =>
                      `**${i + 1}** - ${r.name} | ${r.memberCount} Members`
                  )
                  .slice(i0, i1)
                  .join("\n");

              // Update the embed with new informations
              embed
                .setTitle(
                  `Page - ${page}/${Math.round(
                    client.guilds.cache.size / 10 + 1
                  )}`
                )
                .setDescription(description);

              // Edit the message
              msg.edit({ embeds: [embed] });
            } else if (btn.customId === "sr-next") {
              i0 = i0 + 10;
              i1 = i1 + 10;
              page = page + 1;

              // if there is no guild to display, delete the message
              if (i1 > client.guilds.cache.size + 10) {
                i0 = i0 - 10;
                i1 = i1 - 10;
                page = page - 1;
              }
              if (!i0 || !i1) {
                i0 = i0 - 10;
                i1 = i1 - 10;
                page = page - 1;
              }

              description =
                `Total Servers - ${client.guilds.cache.size}\n\n` +
                client.guilds.cache
                  .sort((a, b) => b.memberCount - a.memberCount)
                  .map((r) => r)
                  .map(
                    (r, i) =>
                      `**${i + 1}** - ${r.name} | ${r.memberCount} Members`
                  )
                  .slice(i0, i1)
                  .join("\n");

              // Update the embed with new informations
              embed
                .setTitle(
                  `Page - ${page}/${Math.round(
                    client.guilds.cache.size / 10 + 1
                  )}`
                )
                .setDescription(description);

              // Edit the message
              msg.edit({ embeds: [embed] });
            }
          }
        });
  }
}
servers.js
5 KB
