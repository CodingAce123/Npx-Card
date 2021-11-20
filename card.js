#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What Do You Want to Do?",
        choices: [
            {
                name: `Send Me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:aaryan.bizoara16@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                            Aaryan Bizoara"),
    handle: chalk.white("@CodingAce123"),
    work: `${chalk.white("Student at")} ${chalk
        .hex("#f50a5c")
        .bold("WhiteHat Juniour")}`,
     roblox:  chalk.grey("https://web.roblox.com/users/1992108766/profile"),
     github:  chalk.white("https://github.com/CodingAce123"),
    youtube:  chalk.red("https://www.youtube.com/channel/UC5kSlDs_uZs6mr-GeJfC8tg"),
     twitch:  chalk.yellow("https://twitch.tv/crazysnapshotgamer99"),
    discord:  chalk.magenta("https://discord.gg/4CpjK2vveY"),
    twitter:  chalk.blue("https://twitter.com/CrzSnapshotGamr"),
    spotify:  chalk.green("https://open.spotify.com/user/3rpxiap4czveo8clwzcqaf68e"),
        web:  chalk.cyan("https://aaryanbizoara.whjr.site/"),
    npx:     chalk.yellow("npx") + " " + chalk.red("aaryan"),
    
    labelWork: chalk.white.bold("                  Work:"),
    labelRoblox: chalk.white.bold("      Roblox:"),
    labelGitHub: chalk.white.bold("      GitHub:"),
    labelYoutube: chalk.white.bold("     Youtube:"),
    labelTwitch: chalk.white.bold("      Twitch:"),
    labelDiscord: chalk.white.bold("     Discord:"),
    labelTwitter: chalk.white.bold("     Twitter:"),
    labelSpotify: chalk.white.bold("     Spotify:"),
    labelWeb: chalk.white.bold("         Web:"),
    labelCard: chalk.white.bold("                           Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
            `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelRoblox}   ${data.roblox}`,
        `${data.labelGitHub}   ${data.github}`,
        `${data.labelYoutube}   ${data.youtube}`,
        `${data.labelTwitch}   ${data.twitch}`,
        `${data.labelDiscord}   ${data.discord}`,
        `${data.labelTwitter}   ${data.twitter}`,
        `${data.labelSpotify}   ${data.spotify}`,
        `${data.labelWeb}   ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            chalk.redBright("Hey, I am Aaryan, a.k.a CodingAce123")
        )}`,
        `${chalk.italic(
            chalk.blueBright("I am a Student, A Sport Lover and A Coder!")
        )}`,
        `${chalk.italic(
            chalk.whiteBright("I am Looking Up For ")+ chalk.yellowBright("New Opportunities In Future!!!, My Inbox is Open")
        )}`,
        `${chalk.italic(
            chalk.green("Whether you have a Question or Just Want to say Hi!"))}`,
        `${chalk.italic(
            chalk.green("I Will Try My") + chalk.magentaBright(" Best") + chalk.green(" to Get") + chalk.magentaBright(" Back To You!"))}`,
        `${chalk.italic(
            chalk.yellow("Email Me:- ") + " " + chalk.red("aaryan.bizoara16@gmail.com"),)}`,
        `${chalk.italic(
            chalk.blue("Thanks For Visiting"),)}`,
        `${chalk.italic(
            chalk.magenta("See You Again!!!"),)}`
        
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
