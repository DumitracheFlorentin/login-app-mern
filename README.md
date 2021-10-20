# Documentation

## Description

The project was finished using a MERN Stack, React JS as the frontend library, React Redux for state management and React Bootstrap for the UI part. In the backend I used MongoDB as a NoSQL database where I kept all my data, Node JS with Express for creating the server and all routes (e.g create user, update user, delete user etc) for the API. Also, I installed axios for fetching data in the frontent.

## Features

- Any customer can create his own account, using the correct URL ( localhost:3000/register ) or clicking on register button from main page
- After creating an account, you can log in to the app ( localhost:3000/login or clicking to the login button ). If someone logged in, he will be redirected to the main page and see all the content (the content is users only)
- If you want to logout you can do it by clicking the logout button
- If someone is logged in to the app and he is trying to acces the login page he will be pushed back to the main page

```
NOTE: All features related to data storage are made with redux
```

## Usage

### Env Variables

Create .env file in then root and add the following

```
PORT = xxxx ( e.g 5000 )
TYPE = xxxx ( You have to choose between 'production' and 'development' )
MONGO_URI = YOUR_MONGO_URI
```

### Install Dependencies

```
npm install
```

### Run The Application

```
npm run dev ( This command allow you to start both fields, frontend and backend )
```

## License

The MIT License

Copyright (c) 2021 Dumitrache Florentin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
