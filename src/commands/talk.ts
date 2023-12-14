import { CommandInteraction, SlashCommandBuilder } from "discord.js";

const commandTalk = {
  data: new SlashCommandBuilder()
    .setName("talk")
    .setDescription("Answeres the wuestion")
    .addStringOption((option) =>
      option.setName("question").setDescription("The Question to answere")
    ),
  async execute(interaction: CommandInteraction) {
    const reason = interaction.options.get("question");
    console.log(reason);

    await interaction.reply(`${reason?.value} is the resan`);
  },
};

export default commandTalk;
