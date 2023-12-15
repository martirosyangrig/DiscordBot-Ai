import { CacheType, Interaction } from "discord.js";
import { MyClient } from "../utils/myClient";

const onCommand = {
  name: "interactionCreate",
  async execute(interaction: Interaction<CacheType>, client: MyClient) {
    if (!interaction.isCommand()) return;

    console.log(interaction);
    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};

export default onCommand;
