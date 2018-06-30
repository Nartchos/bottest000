const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDUyNTA0OTI1NDg2OTcyOTM4.DfRTlQ.HRXiToIjH1ZYM2MglxcdQL46Tfg");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help \n -*salut \n -*bot \n -*serveur \n -*info* \n -*blague* \n La commande salut n'a pas besoin de *");
    }

    if (message.content === "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "bot"){
        message.channel.sendMessage("A propos de moi: \n -Je suis le bot d'entasia et j'ai été créé pars Narcos ! \n -Je suis encore en développement !");
    }

    if (message.content === prefix + "Bot"){
        message.channel.sendMessage("A propos de moi: \n -Je suis le bot d'entasia et j'ai été créé pars Narcos ! \n -Je suis encore en développement !");
    }
 
    if (message.content === prefix + "BOt"){
        message.channel.sendMessage("A propos de moi: \n -Je suis le bot d'entasia et j'ai été créé pars Narcos ! \n -Je suis encore en développement !");
    }

    if (message.content === prefix + "BOT"){
        message.channel.sendMessage("A propos de moi: \n -Je suis le bot d'entasia et j'ai été créé pars Narcos ! \n -Je suis encore en développement !");
    }

    if (message.content === prefix + "iTrooz_"){
        message.channel.sendMessage("Testeur du Bots <3");
    }

    if (message.content === prefix + "serveur"){
        message.channel.sendMessage("Entasia ! \n ip: En Maintenance");
    }

    if (message.content === prefix + "Serveur"){
        message.channel.sendMessage("Entasia ! \n ip: En Maintenance");
    }
    
    if (message.content === prefix + "cookie"){
        message.channel.sendMessage("i like cookies !");
    }

    if (message.content === prefix + "cacher"){
        message.channel.sendMessage("La commande cacher ! Mon discord: https://discord.gg/8ZBTmPz !");
    }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
            .setTitle("Entasia")
            .setDescription("En Maintenance")
            .addField("Nouveautés","1) Réouverture du serveur le 16/06/2018 !\n \n 2) Nous recherchons des Buildeurs ! \n \n 3) Des memes ! sur #memes ! \n \n 4) Site en développement ! ", true)
            .addField("Staff","Itrooz_ \n zuki_24 \n Corbeau \n DragPainHD \n ItsMyLife \n Narcos \n Tekeer_", true)
            .addField("Règles","Pas d'insulte et s'amuser ! :)")
            .setColor("0x0000FF")
            .setFooter("Bon moment parmis nous ! :)")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "blague"){
        message.channel.sendMessage("La blague du jour: \nJ'ai une blague sur carrefour ! mais elle n'a pas supermarché :(")
    }

});
