import { CommandInteraction, SlashCommandBuilder } from "discord.js";

const commandPing = {
  data: new SlashCommandBuilder().setName("ping").setDescription("pong"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(`pong`);
  },
};

export default commandPing;
