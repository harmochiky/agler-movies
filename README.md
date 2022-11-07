<h1 align="center">
<img
		width="250"
		alt="Aglet - Movies"
		src="https://github.com/harmochiky/aglet-movies/blob/master/preview/aglet_logo.png">
</h1>
<h3 align="center">
	Aglet Fullstack (MERN) Movies
</h3>

<p align="center">
	<img src="https://github.com/harmochiky/aglet-movies/blob/master/preview/capture-1.png?raw=true" width="400">
</p>

## Overview

**Ready to start movie MERN movie app.** 5 pages availables : Home, Favourites, Login,Contact and Search. You will also find components like movie cards to pass props and whilst redux connected for a smoother flow.

- **Built using the MERN stack**
- **Made with React**
- **Redux state management**
- **Working contact page**
- **Autocomplete search as you type**🌞
- **Persistant favourite movies**
- **Mobile responsive**🌞
- **Authentication on both server and front end**
- **Uses ExpressJS**
- **Uses webtokens**
- **MongoDB database**
- **Beautifully crafted UI**🌞
- **Search page**🌞
- **Persistant Auth**
- **Built with SCSS**
- **Includes popup to see more movie information**🌞
- **NodeJS server**

NOTE : Points marked a "🌞" were marked as brownie points and completed

## Screenshots

<img
width="355"
alt="Capture 1"
src="https://github.com/harmochiky/aglet-movies/blob/master/preview/capture-1.png">
<img
width="355"
alt="Capture 2"
src="https://github.com/harmochiky/aglet-movies/blob/master/preview/capture-2.png">
<img
width="355"
alt="Capture 3"
src="https://github.com/harmochiky/aglet-movies/blob/master/preview/capture-3.png">
<img
width="355"
alt="Capture 4"
src="https://github.com/harmochiky/aglet-movies/blob/master/preview/capture-4.png">
<img
width="355"
alt="Capture 5"
src="https://github.com/harmochiky/aglet-movies/blob/master/preview/capture-5.png">

## Mobile Screenshots

<img
width="205"
alt="Capture 1 Mobile"
src="https://github.com/harmochiky/aglet-movies/blob/master/preview/mobile-capture-1.png">
<img
width="205"
alt="Capture 2 Mobile"
src="https://github.com/harmochiky/aglet-movies/blob/master/preview/mobile-capture-1.png">

## Installation and usage

Be sure, you have installed all dependencies and applications to run the MERN project on your computer.

MongoDB Atlas (Online DB Dump) is connected to the server for easier startup [MongoDB Atlas](https://www.mongodb.com/atlas/database).

### Running the client project

Clone this repository :

```
git clone https://github.com/harmochiky/aglet-movies.git
cd aglet-movies
```

Install packages :

```
yarn install or npm install
```

When installation is complete, run it :

```
yarn start or npm start
```

### Running the server

The server is included in the aboved cloned file but you need to install packages to successfully run it

Go into the server directory **whilst in the client file above** :

```
cd aglet-movies-api
```

Install packages :

```
yarn install or npm install
```

When installation is complete, run server on port :5000 :

```
yarn start or npm start
```

## Database

Data is currently stored on the mongodb atlas online (Online version of MongoDB). The database dump has also been attached at this [file here](https://github.com/harmochiky/aglet-movies/tree/master/database-dump/test).

To access the altas account with the database. An invitation has been sent to jointheteam@aglet.co.za email for a personal organization called "Harmony's Org" accessing the project database clusters for "Aglet Movies". Simply open your email and check for an email **from MongoDB Cloud** with an invitation and click the accept invitation in which you will be taken directly to the live database.

## Default login details

After running the project, for you to see and add favourite movies you need to be logged in. Navigate to the login page using the top menu. The following details can be used to login and test the app functionality.

|  Field   |          Value          |
| :------: | :---------------------: |
|  Email   | jointheteam@aglet.co.za |
| Password |       @TeamAglet        |

## Logic

The project has been build using the MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS). Movies are sources from the moviedb api -> https://developers.themoviedb.org/3/getting-started/introduction. Stack was used to work better with the JSON movie responses received from the MovieDB API to cater for the easy storage of the JSON movie in the MongoDB database (NOSQL) and an easy authentication and querying of the stored movies. To also help with a stable use of authenticated end points, the NodeJS server was tied with ExpressJS.

When the user signs in, the user can add/remove movies to favourites and load all movies stored. ReduxJS was also used to easily store and manage the app state including the loaded movies, authentication and the movie popup.

ReactJS was to provide component based functionality.

## Issues ?

Feel free to email me harmochiky2@gmail.com if you need assistance with anything regarding this project
