# User Directory App

This is a simple user directory application built with React that consumes data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/). You can view a live version of the app [here](https://nimble-croquembouche-b8d0b0.netlify.app/).

## Features

- User list: displays a list of users with their names and basic details
- Full user details: clicking on a user displays their full details, including address and company information
- Consistent brand style: pays homage to the style of the Social Security Scotland homepage, including the same color palette, fonts, and design elements
- Responsive design: fully responsive and accessible to users of many abilities, with special consideration given to people who use screen readers through the use of aria label formatting for phone numbers
- ⭐Loading bar!⭐ while not strictly necessary, the app includes a loading bar that appears for a brief moment when loading the user data from the server. This colorful and bouncy loading bar is sure to bring a smile to your face and help pass the time while waiting for the app to load.

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[API](#api)
[Helper Functions](#helper-functions)
[Architecture](#architecture)
[Possible Future Improvements](#possible-future-improvements)
[Presentation](#presentation)

## Installation

To get started, clone the repository and navigate to the project directory:
`git clone https://github.com/<username>/<repo-name>.git cd <repo-name>`
Then install the required dependencies using npm:
`npm install`

## Usage

To start the app in development mode, run:
`npm start`
This will open the app in your default browser at [http://localhost:3000](http://localhost:3000/).
To build the app for production, run:
`npm run build`
This will create an optimized production build in the `build` folder.

## API

This app consumes data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), which provides a fake REST API for testing and prototyping. The app fetches user data from the `/users` endpoint.

## Helper Functions

### formatAriaPhoneNumber

The `formatAriaPhoneNumber` function is used to format a phone number in a way that is more accessible for screen readers. The function takes a string argument `phoneNumber` and removes any non-numeric characters, replaces 'x' or 'X' with the string "extension", and inserts a space after each individual digit. The resulting formatted phone number is returned as a string.

```js
const formatAriaPhoneNumber = (phoneNumber: string): string => {
  // Match "x" or "X" in the phone number string and set "extension " as the value of the "extension" variable if there is a match; otherwise, set it to an empty string
  const extension = phoneNumber.match(/[xX]/) ? 'extension ' : '';
  // Replace any characters in the phone number string that are not digits or "x" with an empty string
  const formatted = phoneNumber
    .replace(/[^0-9x]/g, '')
    // Replace any instances of "x" or "X" with the value of the "extension" variable
    .replace(/[xX]/g, extension)
    // Insert a space after each one-digit group in the phone number string
    .replace(/(\d)/g, '$1 ');
  // Remove any whitespace characters at the beginning and end of the phone number string and return the formatted phone number
  return formatted.trim();
};
```

### formatNameWithoutTitles

The `formatNameWithoutTitles` function is used to format a name by removing any titles that may be included in the name string (e.g. "Mr.", "Mrs.", "Dr.", etc.) and capitalizing the first letter of each name segment. The function takes a string argument `name` and uses a regular expression to match and remove any titles at the beginning of the string. The resulting formatted name is returned as a string.

```js
const formatNameWithoutTitles = (name: string): string => {
  // Define a regular expression to match any titles that may appear at the beginning of the name string
  const removeTitlesRegex =
    /^(mr|mr\.|mrs|mrs\.|ms|ms\.|dr|dr\.|prof|rev|fr|sir|madam|sra|srta|srt|hr)\.? /i;
  // Remove any titles that match the regular expression from the beginning of the name string
  const formattedName =
    name
      .replace(removeTitlesRegex, '')
      // Capitalize the first letter of the first and last name in the name string and return the formatted name
      .charAt(0)
      .toUpperCase() +
    name
      .slice(name.indexOf(' ') + 1)
      .charAt(0)
      .toUpperCase();
  return formattedName;
};
```

### searchByName

The `searchByName` function takes in two arguments - an array of users and a search term to filter the array by.

```js
const searchByName = (
  users: UsersListUser[],
  searchTerm: string
): UsersListUser[] => {
  // The function uses the "filter" method to create a new array containing only the elements of "users" that match a certain condition.
  // In this case, the condition is that the name of each user in "users" (converted to lowercase using the "toLowerCase" method) must include the search term (also converted to lowercase using the "toLowerCase" method).
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
// The function then returns the new filtered array, containing only the elements that match the search term.
```

## Architecture

This app is built using React and uses the `react-router-dom` library for routing. The data is obtained from the `jsonplaceholder` API. The `UsersList` component displays the user list, and the `SingleUser` component displays the full details of a selected user.

## Possible Future Improvements

While this app is functional and user-friendly, there is always room for improvement. Some possible future improvements include:

- Adding pagination to handle larger data sets more efficiently
- User search: allows users to search for specific users based on their name, company, or other details
- Sorting options: allows users to sort the user list by different criteria, such as name, company, or location
- User filtering: allows users to filter the user list based on different criteria, such as location or company

## Presentation

This app was built as part of a Technical Assessment for the B2 Frontend Software Developer position. During the interview, I will present the app and discuss my thought process and decision-making. I will explain the architecture and design of the app, including the choice to use React and `react-router-dom`, the use of the `jsonplaceholder` API for data, and the features included in the app. I will also be able to discuss any challenges I faced during development and how I overcame them.
The interviewers will have the opportunity to ask questions about the app and my development process. I look forward to discussing my work on this project and demonstrating my skills as a frontend software developer.
