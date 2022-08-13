# StudyLog

A web application memorizing countries where you've ever been before and analyzing them visually with React and Typescript.

## Demo link:

Access this project at [StudyLog](https://studylog-three.vercel.app/)!

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

[StudyLog](https://studylog-three.vercel.app/) is one of my personal projects that records and visualizes data about the daily study histories that include the date, how many hours do users study, the location or place to study, the costs for studying (for instance, expenses for buying a cup of coffee at the cafe), and so on.

In this project, I utilize firebase a lot as the database storing users' data correctly and as the library of implementing user authentication to showcase the study history correctly. Indeed, in order to make study data of users visible, I introduce the Ant Design Chart, a third-party library visualizing data with the good-looking line graph. Data regarding locations are stored as the lat and lng

In terms of the design, I take advantage of `TailWind CSS` and `Meraki-UI`, a library providing UI components made by Tailwind CSS to make this project simple but having good UI/UX.

This application has mainly four sections as the page structure, home page, analyze page, history page, and location page. In the home page, users can see the overview of each section at the same time. Also, they can add new study history by filling out the form. Analyze page enables users to check their daily study hours and costs for their study by the line graph reflecting the users' study data. On the other hand, in the history page users can look over all study data which have been recorded on the application in the order of timestamps. Lastly, Location page also enables users to look out the places where users have studied at before.

Users can toggle the screen mode both light mode and dark mode.

## Screenshots

![StudyLog](https://user-images.githubusercontent.com/65790344/184463458-3931c515-6634-4c1c-8d19-d13bb5adc488.png)

## Technologies

- `React` - version 18.1.0
- `Redux` - version 4.2.0
- `Typescript` - version 4.6.4
- `TailWind CSS` - version 3.0.24

## Setup

- Download or clone the repository
- Run `npm install`
- Run `npm start` to start running the app

## Approach

- Built and created by React.js with Typescript, minimizing errors and bugs on the process of developing the project.
- Utilizing Maps Javascript API and Geocoding API to showcase locations where users have been as the places to study. Maps Javascript API is used for the form that adds new study history to the study record, while Geocoding API is used for showcasing all locations on each user's study record.
- Introducing `Ant Design Chart`, a third-party library offering variable react components, to analyze users' data by using line graphs with good UI.
- Users can login with their google account in addition to login with email and password by firebase authentication.
<!-- - Adding features such as registrations to add countries to the bucket list (list of countries where users would like to visit in their future) and to the records (list of countries where users have been to) respectively utilizing the cloud firestore (firebase) as the database.
- Being considered to have a good user interface and is designed by `TailWind CSS` and `DaisyUI`, a third-party library for Tailwind CSS. -->

## Status

[StudyLog](https://studylog-three.vercel.app/) is still in progress to be updated. What I'm working on now to improve this application is to add a new feature showing basic information about the place where users have studied before on the map (Currently users can just check the place by seeing pins on the map).

## Credits

- [Kento Honda](https://github.com/keento0809)

## License

©︎KENTO HONDA 2022. All Rights Reserved.
