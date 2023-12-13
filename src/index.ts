import { Client, IntentsBitField } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`Bot ${c.user.tag} is online`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;

    if (msg.content === 'hi') {
        msg.reply('hi');
    }
});

client.on('interactionCreate', (interaction) => {
    if ( !interaction.isChatInputCommand() ) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('hey');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('pong');
    }

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number') ;
        const num2 = interaction.options.get('second-number') 

        if ( typeof num1?.value !== 'number' || typeof num2?.value !== 'number') return;

        console.log(typeof num1.value, num2.value);

        interaction.reply(`The sum is ${num1.value + num2.value}`);

    }
});

client.login(process.env.DS_TOKEN);