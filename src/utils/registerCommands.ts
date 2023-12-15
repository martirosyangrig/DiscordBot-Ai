import { Client } from "discord.js";
import allCommands from "../commands";

async function registerCommands(client: Client<true>) {
  console.log("Registering / commands");

  const registerPromises = allCommands.map(async (command) => {
    const { data } = command;
    const options = data.options.map((el) => el.toJSON());

    await client.application?.commands.create({
      name: data.name,
      description: data.description,
      options: options,
    });
  });

  await Promise.all(registerPromises);

  console.log("Registering / commands succeded");
}

export default registerCommands;
