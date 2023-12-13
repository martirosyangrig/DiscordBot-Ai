import { REST, Routes, ApplicationCommandOptionType } from 'discord.js'
import dotenv from "dotenv";

dotenv.config();

const commands = [
    {
        name: 'add',
        description: 'Adding two numbers',
        options: [
            {
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: 1
                    },
                    {
                        name: 'two',
                        value: 2
                    },
                    {
                        name: 'three',
                        value: 3
                    },
                ],
                required: true
            },
            {
                name: 'second-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: 1
                    },
                    {
                        name: 'two',
                        value: 2
                    },
                    {
                        name: 'three',
                        value: 3
                    },
                ],
                required: true
            }

        ]
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.DS_TOKEN || '');

(async () => {
    try {
        console.log('Register / commands');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID || '', process.env.GUILD_ID || ''),
            { body: commands }
        )

        console.log('Commands were registered');
    } catch (error) {
        console.log(error, 'errr');
    }
})()