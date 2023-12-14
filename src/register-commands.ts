import { REST, Routes, ApplicationCommandOptionType } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  {
    name: "talk",
    description: "answering-questions",
    options: [
      {
        name: "question",
        description: "The-reason-for-banning",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DS_TOKEN || "");

(async () => {
  try {
    console.log("Register / commands");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID || "",
        process.env.GUILD_ID || ""
      ),
      { body: commands }
    );

    console.log("Commands were registered");
  } catch (error) {
    console.log(error, "errr");
  }
})();
