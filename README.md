# Portfolio Code

Hi, this is my latest version of my portfolio with Next.js, Let's Encrypt and Nginx on Docker.

If you have any questions feel free to email: [thealbertyang@gmail.com](mailto:thealbertyang@gmail)

## Demo

You can test the live of the app deployed to on Vercel: [https://thealbertyang.com/](https://thealbertyang.com/)


## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

## Technologies Used
- Docker
- linuxserver/letsencrypt (Nginx)
- Github Actions (Ci/ CD)
- Next.js
- React

## Docker

Used docker-compose to setup two containers: 
- portfolio
- nginx w/ letsencrypt for SSL

## Github Actions (CI/ CD)

Here I used Github Actions to setup my CI/CD pipline with Vercel.

Whenever a pull request to merge into the development, or master branch is called for, [build.yml](\./github/workflows/build.yml) is called to run tests and check the validity of the code. If it passes the pull request will be merged into the respective branch.

If the pull request is specifically for the master branch, [deploy.yml](\./github/workflows/deploy.yml) will be ran to ssh into the server, pull the code and instatiate the docker containers to run the application.

