import { CommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
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
    await interaction.deferReply();
    try {
      const aiResponse = await askAi(question?.value);
      const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`${question?.value}`)
        .setDescription(`AI Response: ${aiResponse}`)
        
      await interaction.followUp({embeds: [exampleEmbed]});
    } catch (error) {
      console.error(error);
      await interaction.followUp(`Try agin`);
    }
  },
};

export default commandTalk;
