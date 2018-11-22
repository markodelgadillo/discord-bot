# discord-bot
Creating a discord bot for the TGCID Free Company discord channel

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Homebrew: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

NodeJs: brew install node

npm: automatically installed with node
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
While in the project directory in the terminal, input *npm init -y*
```

This will create the package.json and skip through all the questions by automatically answering hes to all.
Next, install the following devDependecies:

```
nodemon: npm install nodemon --save-dev
```
In the package.json file, add the following to the "scripts" values:
```
"watch": "nodemon index.js",
```

## Running the node server

input the following in the terminal:

```
npm run watch
```
This will allow the node server to run and restart anytime a change has been saved to the index.js file.

## Deployment @WIP

Add additional notes about how to deploy this on a live system

## Built With

* [DiscordJS](https://discordjs.guide/#/) - The JavaScript framework used by Discord

## Authors

* **Marko Delgadillo** - *All work* - [Git Repo](https://github.com/markodelgadillo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
- Discord Channels
* Discord API
* DiscordJS Official
* TGCID - Final Fantasy XIV channel
