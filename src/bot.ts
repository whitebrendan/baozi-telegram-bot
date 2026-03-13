import { Bot } from 'grammy';
import dotenv from 'dotenv';
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN || '');

bot.command('start', (ctx) => ctx.reply('Welcome to Baozi Market Feed!'));
bot.command('markets', (ctx) => ctx.reply('Fetching active markets...'));

console.log('Bot is running...');
bot.start();
