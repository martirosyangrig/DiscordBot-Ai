import { Client, ClientOptions, Collection } from "discord.js";

export class MyClient extends Client {
  commands: Collection<string, any>;

  constructor(options: ClientOptions) {
    super(options);
    this.commands = new Collection();
  }
}
