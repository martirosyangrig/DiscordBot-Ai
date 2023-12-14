import allEvents from "../events";
import { MyClient } from "./myClient";

const setAllEvents = (client: MyClient) => {
  for (const event of allEvents) {
    client.on(event.name, (interaction) => event.execute(interaction, client));
  }
};

export default setAllEvents;
