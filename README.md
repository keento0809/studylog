# CountryBeen

A web application memorizing countries where you've ever been before and analyzing them visually with React and Typescript.

## Demo link:

Access this project at [CountryBeen](https://country-been.vercel.app/)!

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App

[CountryBeen](https://country-been.vercel.app/) is one of my personal projects focusing on taking advantage of REST API (Country REST API), using React with Typescript to strictly check every variable in my projects to make the development more smoothly. Also, I adopt managing state by Redux-toolkit.

Users can search countries and add them to BucketList (list of countries where users want to visit someday) and Record (list of countries where users have been), and once a country is added to Record, react-simple-map showcases it on the map enabling users to check which countries they've been to visually and easily.

What I'm working on now to improve is fixing the layouts of components later on.

## Screenshots

![CountryBeen](https://user-images.githubusercontent.com/65790344/181345386-feb6a6d5-04d7-401c-ad3f-d30f44687ad4.png)

## Technologies

- `React` - version 18.1.0
- `Redux` - version 4.2.0
- `Typescript` - version 4.6.4
- `TailWind CSS` - version 3.0.24

## Setup

- Download or clone the repository
- Run `npm install`
- Run `npm run dev` to start running the app

## Approach

- Utilize React.js and Redux with Typescript to make state management easier and improve the efficiency of developing the application thanks to the power of Typescript.
- Introducing `react-simple-map`, a library for React.js showcasing the world map with countries filled with colors where users have been before.
- Users can search countries using the search bar on the nav section or looking for them from regions via the 'countries' link on the home page.
- Adding features such as registrations to add countries to the bucket list (list of countries where users would like to visit in their future) and to the records (list of countries where users have been to) respectively utilizing the cloud firestore (firebase) as the database.
- Being considered to have a good user interface and is designed by `TailWind CSS` and `DaisyUI`, a third-party library for Tailwind CSS.

## Status

[CountryBeen](https://country-been.vercel.app/) is still in progress (cleaning up components). Currently I'm creating additional components for improving the structures of codes much simpler than now.

## Credits

- [Kento Honda](https://github.com/keento0809)

## License

©︎KENTO HONDA 2022. All Rights Reserved.
