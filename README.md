## Introduction

This Project contains a business place details page. It contains its name, address and opening hours. 

This project is deployed using vercel and can be viewed at https://business-directory-places.vercel.app/ 


## Available Scripts to run in local

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## Views
In order to view a business place detail page, place id can be passed to the below url
http://localhost:3000/places/{placeId}

Temporarily the homepage http://localhost:3000 by default renders Business details page of placeId 'ohGSnJtMIC5nPfYRi_HTAg'

## utils

Utility functions can go inside this folder. Currently it contains utility file group-opening-hours which groups the opening days with same hours. 

## API 

The Business place details are fetched from API endpoint 'https://business-places-directory.herokuapp.com/places/${placeID}' 




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).