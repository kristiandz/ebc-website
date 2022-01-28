# Explicit Bouncers Website [![Build](https://github.com/kristiandz/ebc-website/actions/workflows/ci.yml/badge.svg)](https://github.com/kristiandz/ebc-website/actions) [![CodeFactor](https://www.codefactor.io/repository/github/kristiandz/ebc-website/badge)](https://www.codefactor.io/repository/github/kristiandz/ebc-website) ![GitHub](https://img.shields.io/github/license/kristiandz/ebc-website)

### This project is still under active development, feel free to contribute!

This is a website for an online gaming community, used to provide information about the community, to check the active servers and info about them, to provide a place to apply to the community or to appeal a ban from the game servers or socials, league statistics, information about our services, api's and playerbase info. It is providing admin features to manage the community and the servers with various integrations. It uses Discord OAuth to provide authorization for certain functionalities.

## How to build and run
This website is built using JavaScript and React. Currently its using JSON servers as a mock backend for development. For the backend it will utilize NodeJS and ExpressJS connected to a MySQL database, along with discord.js module for discord integration. Game servers will be connected via REST API using HTTP. 

### Pre-Requisites:
- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
### Build (Any platform)
Clone the code locally and change the directory path and then simply run.
```
npm install
npm run server (for JSON server fake backend)
npm run build (if you want to build and deploy)
npm start (for development)
```


- The README will be updated with more info once the website has been finished.
