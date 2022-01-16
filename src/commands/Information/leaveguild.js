module.exports = {
  name: "leaveguild",
  description: "Leaves a guid by the Id (who do care maje me banaya hai command so jyada dimaga mat lagao)",
  category: "Owner",
  ownerOnly: true,
  args:true,
usage: "ID of guild",
  execute: async (message, args, client, prefix) => {
  if(message.author.id !== '531063766645997570') return;

    console.table(message.options) 
    const id = args[0]

    const guild = client.guilds.cache.get(id);

    if (!guild)
      return message.reply(`No guild was found with id \`${id}\`.`);

    await guild.leave();

    return message.reply(`Left **${guild.name}** guild with id \`${id}\`.`);
  }
};

