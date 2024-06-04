# WORKOUTZ - Your personal workout assistant

## Overview:
In this project I have created a SPA called Workoutz. Workoutz is an easy-to-use workout tracking application. It tracks every aspect of your workout, from pause time, to current compound lifts. Some info is just tracked, whereas other info is calculated from all or a subset of former workouts.

&nbsp;

## Version Control:
For version control this Project utilizes GitHub to track the current version and all other iterations of the application. 

[Click me](https://github.com/yungtoby/deco2017-workoutz) to be redirected to GitHub repo.

&nbsp;

## Features:
The Workoutz SPA has a wide variety of features meant to help the user on its fitness journey. Some of the features include (but not restricted to):

- **Compound lifts:** The application calculates your compound lifts from your previous lifts.

- **Proposed next workout:** The application gives you recommendation on next workout based on previous workouts.

- **Viewing specific exercises:** Via the application you can go and watch your previous workouts.

- **Averages:** The application calculates averages of your workouts.

- And more...

&nbsp;

## Setup:
**Dependencies:**

The application has several dependencies which it has utilized to work. These dependencies need to be downloaded before runnng the program. The following list provides an overlook of them:

> `React.js` - A JS library for developing web applications created by Meta.

> `Vite.js` - A local dev server tool for setting up enviorment for react.

> `Express.js`- Node.js based minimalistic and fast webserver framework. 

&nbsp;

**How to run:**
*To run this application you can either:*
- (a) Open up the `start_application.py` and run the script

- (b) Navigate to the via terminal to the repo directory after cloning and execute the following lines:
```bash
npm run build
npm run start
```

After one of the two operations are done, open up a webbrowser and go to `http://localhost:3000/`.

Then your program should be running. As of now, the login menu in the start is just a "artistic touch" and you can simply click login without any actual login details. The standard user `my_fitness_user_1` is then the standard user for which you can track workouts for.

&nbsp;

## Other information:
**Limitations:**
The SPA uses `localStorage` in JS to store data. This may yield bad results if you switch browsers or clearing browser history.

Also, I have only added the 3 most common muscle groups to choose from when specifying muscle group for an exercise in a workout. This is because of time constraints.

**Iteration changes:**
During the course of developing the application there has been some minor changes which makes the application differ in some ways from its original proposal. The following includes:

- _Add Pause Time / Set Button:_ The add set button was deprecated and switched to input fields which yielded faster writing and appending for better user experience.
- _Add Note:_ The add note button when creating a workout was not implemented because of time constraints.

&nbsp;

&nbsp;

&nbsp;

## Acknowledgements:
**Sources:**

CodinCat. (15 03 2017). _How to use onClick event on react Link component?_. Stack Overflow. Accessed on 01.06.2024: https://stackoverflow.com/questions/42800815/how-to-use-onclick-event-on-react-link-component

Minaidis, K. (5 04 2015). _Loop inside React JSX_. Stack Overflow. Accessed on 02.06.2024: https://stackoverflow.com/questions/22876978/loop-inside-react-jsx

Gallay, L. (10 12 2017). _JSON.parse returning [Object Object] instead of value_. Stack Overflow. Accessed on 02.06.2024: https://stackoverflow.com/questions/47737093/json-parse-returning-object-object-instead-of-value

Demydiuk, P. (06 07 2022). _React - state on multiple pages_. Stack Overflow. Accessed on 31.05.2024: https://stackoverflow.com/questions/72880492/react-state-on-multiple-pages

Amruth. (21 09 2018). _How do you update the div with React?_. Stack Overflow. Accessed on 03.06.2024: https://stackoverflow.com/questions/52436594/how-do-you-update-the-div-with-react


&nbsp;

**AI Acknowledgement:**

I hereby acknowledge my use of AI tools for completing this assignment. The tool in which I used for generating content was the following:
- ChatGPT 3.5 (April 29th Version)

Version number found [here](https://help.openai.com/en/articles/6825453-chatgpt-release-notes).

ChatGPT was used for initiating the project, aka. laying down the base for me to start building on top of. After this initial stage it was merely used for small syntax based questions in JS like for example:
- How do I cast from Str to Int in a quick manner?
- Why cant I pass args to funcs the funcs I pass to `onClick` and is there a workaround?
- and alike.

The initial prompt for generating the "layout" for the project was the following:
- Make me a shell for an SPA project utilizing vite and react. Also include express for a minimal webserver.
