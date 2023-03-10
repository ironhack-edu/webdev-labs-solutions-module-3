![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON dataset of countries](https://ih-countries-api.herokuapp.com/countries), and you decided to use it to create your Wikipedia of countries!

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-wiki-countries-1.gif" alt="Example - Finished LAB" />
</p>



## Setup

- Fork this repo

- Clone this repo

- Open the LAB and start:

  ```bash
  $ cd lab-wiki-countries
  $ npm install
  $ npm start
  ```


## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.


## Getting Started

Clean the `App.js` component so that it has the following structure:

```jsx
// src/App.js
import "./App.css";

function App() {
  return <div className="App"></div>;
}
export default App;
```

<br>

## Instructions

### Iteration 0 | React Router installation

Remember to install the React Router:

```shell
$ npm install react-router-dom
```

And setup the router in your `src/index.js` file:

```jsx
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// comment skipped to stay organized
reportWebVitals();
```

### Bootstrap installation

We will use [Bootstrap V4](https://getbootstrap.com/) for the design :+1:

```sh
$ npm install bootstrap
```

To make the Bootstrap styles available in the entire app, import the stylesheet in `index.js`:

```javascript
// src/index.js
import 'bootstrap/dist/css/bootstrap.css';
```

## Instructions

### Iteration 1.1 | Create components

In this iteration, we will focus on the general layout. Before you start, inside the `src` folder, create the `components` folder. There you will create at least 3 components:

- `Navbar`: Displaying the basic navbar with the LAB name

- `CountriesList`: Displays the list of links with the country names. Each link should be a `react-router-dom` `Link` which we will use to <u>send</u> the country code (`alpha3Code`) via the URL.

- `CountryDetails`: This is the component that we will render via the `react-router-dom`'s `Route`, and it should <u>receive</u> the country code (`alpha3Code`) via the URL.

  This is the id of the country (example: `/ESP` for Spain, `/FRA` for France).

To help you with the structure of the components, we gave you an example of a page inside `example.html`.

If you want to style it, refresh your memory on Bootstrap in the [docs](https://getbootstrap.com/docs/4.0) or check out how we approached styling in the `example.html`.

### Iteration 1.2 | Navbar component

Create a navbar component that displays the title *LAB - WikiCountries*.

### Iteration 1.3 | CountriesList component

This component should render a list of `Link`s, each having the country's `alpha3Code` embedded in the URL. Click on a `Link` should render the country details component.

### Iteration 1.4 | CountryDetails component and `Route` setup

Now that our list of countries is ready, we should create the `CountryDetails` component. This component should receive the array of countries as a prop. Here's a reminder on how to do this:

```jsx
// Example
<Route path="/:id" element={ <SomeComponent someData={someData} /> } />
```



The `alpha3Code` of the country will be available throught the URL parameters. To access the URL parameters, from the browser's URL bar, use the React Routers hooks `useParams`. For a reminder on setting up and accessing the URL parameters with React Router, check [this example](https://reactrouter.com/docs/en/v6/api#useparams).



**NOTE:** For the small picture of the flag, you can use the lowercased `alpha2Code` and embed it in the URL as shown below:



- France: https://flagpedia.net/data/flags/icon/72x54/fr.png
- Germany: https://flagpedia.net/data/flags/icon/72x54/de.png
- Brazil: https://flagpedia.net/data/flags/icon/72x54/br.png
- etc.

----

### Iteration 2 | Linking it all together

`App` should have a state variable `countries` holding the data coming from the `src/countries.json` file. The data from the state variable `countries` should then be passed to the `CountriesList` component as a prop.

Once done creating the components, the structure of elements that your `App.js` will render should look somewhat like this:

```jsx
// ...

<div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList countries={countries} />
      {/* React-Router Route rendering the CountryDetails should go here */}
    </div>
  </div>
</div>

// ...
```

----

### Iteration 3 | Fetch countries data from an API

Instead of relying on the static data from a `json` file, let's do something more interesting and get the data from an actual API.

In `App.js`, make a `GET` request to the URL [https://ih-countries-api.herokuapp.com/countries](https://ih-countries-api.herokuapp.com/countries). Use the data returned from the response as the list of the countries. You can use either `fetch` or `axios` to make the request. 

You should use the `useEffect()` hook to set an effect that runs only once and makes a request to the API. Once you receive the response data, save it in a state variable. The request should happen first thing when the application loads.

----

### Iteration 4 | Bonus | Fetch one country data from an API

Using the `useEffect` hook set an effect in the `CountriesDetails` component. The effect should make a request to the RestCountries API and fetch the data for the specific country. You can construct the request URL using the country's `alpha3Code`. Example:

- United States: https://ih-countries-api.herokuapp.com/countries/USA

- Japan: https://ih-countries-api.herokuapp.com/countries/JPN

- India: https://ih-countries-api.herokuapp.com/countries/IND

The effect should run after the initial render, and each time the URL parameter with the `alpha3Code` changes.

Happy coding! :heart:
