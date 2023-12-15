import {
  CommandInteraction,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import askAI from "../openAI/openAi";

const commandTalk = {
  data: new SlashCommandBuilder()
    .setName("talk")
    .setDescription("Answeres the wuestion")
    .addStringOption((option) =>
      option.setName("question").setDescription("The Question to answere")
    ),
  async execute(interaction: CommandInteraction) {
    const question = interaction.options.get("question");
    await interaction.deferReply();
    try {
      const aiResponse = await askAI(question?.value);
      const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`${question?.value}`)
        .setDescription(`AI Response: ${aiResponse}`);

      await interaction.followUp({ embeds: [exampleEmbed] });
    } catch (error) {
      console.error(error);
      await interaction.followUp(`Try agin`);
    }
  },
};

export default commandTalk;
