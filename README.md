# Portfolio Code

Hi, this is my latest version of my portfolio with Next.js, Let's Encrypt and Nginx on Docker.

If you have any questions feel free to email: [thealbertyang@gmail.com](mailto:thealbertyang@gmail)

## Demo

You can test the live of the app deployed to on Vercel: [https://thealbertyang.com/](https://thealbertyang.com/)


## Getting Started

To run the development server:

```bash
docker-compose build && docker-compose up
```

## Technologies Used
- Docker
- linuxserver/letsencrypt (Nginx)
- Github Actions (Ci/ CD)
- Next.js
- React

## Docker

Used [docker-compose](docker-compose.yml) to setup two containers: 
- portfolio
- nginx w/ letsencrypt for SSL

## Github Actions (CI/ CD)

Here I used Github Actions to setup my CI/CD pipline with Vercel.

Whenever a pull request to merge into the development, or master branch is called for, [build.yml](./\.github/workflows/build.yml) is called to run tests and check the validity of the code. If it passes the pull request will be merged into the respective branch.

If the pull request is specifically for the master branch, [deploy.yml](./\.github/workflows/deploy.yml) will be ran to ssh into the server, pull the code and instatiate the docker containers to run the application.

## Next.js and React

The frontend of this app is built with Next.js. Styling is built with Sass. Components and pages are written with React.

### Assets 
Here you can find the entry for the Sass file with typography, mixins and styles with Boostrap: [app.scss](portfolio\assets\styles\app.scss)

More recently I've begun to use modular scss with Styled components, however this is my previous use of styling applications using a utility class from bootstrap (similar to tailwind)

### Pages

Next.js uses a dynamic approach to routing and files which map directly to each other. Reason for this is because it's easier to locate files when working with an app, and there is no need to write logic for routing. This solves the disorganization with React Router when a codebase gets large and files are not mapped 1:1 to the route confusing developers. Any files that does use a directory as a parameter (eg. /portfolio/[slug]/) will automatically contain the variable "slug" within the code of the page, which can be accessed like so:

`
    const router = useRouter()
    const { slug } = router.query
`

way simplier than writing routes for each file with React Router.

### Components

Although not my latest approach, in this repository, I break my components down by:

- form
- page
- pages (specific pages because Next.js does not currently allow directories to contain anything other than files that are used in routes)
- typography