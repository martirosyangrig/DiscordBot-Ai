import { Client } from "discord.js";
import registerCommands from "../utils/registerCommands";

const onReady = {
  name: "ready",
  async execute(client: Client<true>) {
    await registerCommands(client)
    console.log(`Bot ${client.user.tag} is online`);
  },
};

export default onReady;
