import { Collection, IntentsBitField } from "discord.js";
import dotenv from "dotenv";
import setAllCommands from "./utils/setAllCommands";
import setAllEvents from "./utils/setAllEvents";
import { MyClient } from "./utils/myClient";

dotenv.config();

const client = new MyClient({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.commands = new Collection();

(() => {
  setAllCommands(client);
  setAllEvents(client);

  client.login(process.env.DS_TOKEN);
})();
