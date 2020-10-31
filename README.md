# 📦 Node.js Express API Boilerplate

Express is a great package for getting a small API up and running real quick, however there's a lot of base setup that you always end up doing that frankly gets boring after you've done it more than once.

To keep things clean, the directory structure for the API is setup in the `src` folder. From there, all you need to do is create your routes and point them at the relevant controllers and you're in business. Optionally you can then go further and setup a models directory and connect to your database.

## Prerequisites

- [Node.js](https://nodejs.org) & [Yarn](https://yarnpkg.com/) installed on your machine.
- An API idea

## Initial Setup

1.  Clone this repo
2.  `cd` into where you cloned
3.  Run `yarn`
4.  Navigate to `localhost:3000` and you're ready to go

## Dependencies

[express](https://classic.yarnpkg.com/en/package/express)
[morgan](https://classic.yarnpkg.com/en/package/morgan)
[dotenv](https://classic.yarnpkg.com/en/package/dotenv)
[debug](https://classic.yarnpkg.com/en/package/debug)
[http-errors](https://classic.yarnpkg.com/en/package/http-errors)
[cookie-parser](https://classic.yarnpkg.com/en/package/cookie-parser)
