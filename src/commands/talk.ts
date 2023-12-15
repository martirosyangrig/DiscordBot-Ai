import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import askAi from "../utils/openAi";

const commandTalk = {
  data: new SlashCommandBuilder()
    .setName("talk")
    .setDescription("Answeres the wuestion")
    .addStringOption((option) =>
      option.setName("question").setDescription("The Question to answere")
    ),
  async execute(interaction: CommandInteraction) {
    const question = interaction.options.get("question");

    const aiAnswere = await askAi(question?.value);

    await interaction.reply(`${aiAnswere}`);
  },
};

export default commandTalk;
