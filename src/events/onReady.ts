import { Client } from "discord.js";
import { MyClient } from "../utils/myClient";
import allCommands from "../commands";

const onReady = {
  name: "ready",
  async execute(c: Client<true>, client: MyClient) {
    const modifeidCommands = allCommands.map(el => {
      return { ...el.data.toJSON() }
    })
    await client.application?.commands.set(modifeidCommands)

    console.log(`Bot ${c.user.tag} is online`);
  },
};

export default onReady;
