import { MyClient } from "./myClient";
import allCommands from "../commands";

const setAllCommands = (client: MyClient) => {
  for (const command of allCommands) {
    client.commands.set(command.data.name, command);
  }
};

export default setAllCommands;
