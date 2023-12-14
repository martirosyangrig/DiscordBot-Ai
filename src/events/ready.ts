import { Client } from "discord.js";

const onReady = {
  name: "ready",
  async execute(client: Client<true>) {
    console.log(`Bot ${client.user.tag} is online`);
  },
};

export default onReady;
