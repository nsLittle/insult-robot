## Insult Robot

This project was created by Mutsumi Hata, a student at Parsity, an online engineering program. The work in this repository is wholly of the student based on a prompt to build a React/Redux application using APIs.

If you have any questions about this project or the program in general, visit [parsity.io](https://parsity.io/) or email hello@parsity.io.

### Project Description

This simple React application takes two free APIs to generate a robot that hurls uniquely lame dad jokes. The project started as a insult hurling robot, but this project gave me the opportunity to encoutner CORS policy issues with APIs. I learned that I could circumnavigate this issue by either (a) using a browser extension, (b) building a backend API on my end to mediate between user's browser and the free insult generating API. I chose a simpler solution of finding another API without the CORS issue. A dad joke generating API. It doesn't have the ^&\*() I was looking for, but it will suffice for this particular project.

### Table of Contents

Insult-Robot

- app
  - components
    - insults.js
    - robot.js
  - globals.css
  - layout.js
  - page.js
- README.md

### How to Run Application

1. Open terminal
2. Locate file: rtk-weather
3. Type: npm run dev
4. Type: open http://localhost:3000 (or other appropriate host)

### Things to Add/Edit

1. Convert app to Redux to proactice Redux syntax
2. Use browser extension to bypass CORS issue
