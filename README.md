# wBot
A simple bot which consists of giving you a default rank and displaying a welcome message

How to configure the bot ?

before configuring it, we will create the bot, for that go to the site 

https://discord.com/developers/applications

once register click on the button on the right "New application"
enter the name of your bot
then click "bot" on the left
then click on "Add Bot"
→ Yes, do it !

now click on "copy" this will copy your bot token
and insert it between the quotes in the settings.json

now we will invite the robot to the server
in General information in the Parameters category, you will copy the client id
https://discord.com/oauth2/authorize?client_id=ID&scope=bot&permissions=305196094

you will put it in place of "ID" on the link above

to launch the bot on your computer, you need to install nodejs
https://nodejs.org/en/

once installed, you have 2 methods to start the bot

› launch the .bat which is in the wBot folder
› go to command prompt (cmd) , and type cd (and the destination) example: C:\Users\sebas\OneDrive\Bureau\wBot then type node index.js

to launch the bot on your vps, you must follow the steps below

» apt-get update && apt-get upgrade -y
» apt-get install screen
»
»
»
   
    "wBot": "0.1", 

    "token": "insert your token here",
    "BotStatus": "set a status for your bot",

    "welcome_channel": "name of the welcome lounge",

    "colour": "embed color",
    "title": "set the title of your bot",
    "description": "set the description of your bot",
    "footer": "set the footer of your bot",

    "auto_role": "default grade name"
    
    


