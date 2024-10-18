## Project Title and Description
The React Quiz is an interactive web-based quiz application designed to test users' knowledge of React, a popular JavaScript library. The quiz consists of multiple questions, tracking scores, high scores, and allows users to restart the quiz or finish it once they have answered all questions.

## Badges
![Static Badge](https://img.shields.io/badge/status-active-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/84c42359-770e-4cc1-b959-67efbb347cc5" width="700" alt="React Quiz App">

## Table of Contents
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Multiple questions testing React knowledge
- Score tracking and high score saving
- Time-limited questions with a timer
- Option to restart or finish the quiz
- Dynamic UI with interactive question feedback

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/react-quiz.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-quiz
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm start
```

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Quests</th>
    <th>Finish Quiz</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/f578f2cc-9fbe-4540-817a-e55acf40fd2e" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/user-attachments/assets/f578f2cc-9fbe-4540-817a-e55acf40fd2e" width="300" height="300" alt="Homepage">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/df1d2a72-35b5-4fa5-948d-f6786f2a1383" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/user-attachments/assets/df1d2a72-35b5-4fa5-948d-f6786f2a1383" width="300" height="300" alt="Ordering Pizza">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/3f954c04-50a9-4a2f-a3a8-6341b28b12eb" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/user-attachments/assets/3f954c04-50a9-4a2f-a3a8-6341b28b12eb" width="300" height="300" alt="Order Cart">
      </a>
    </td>
  </tr>
</table>

## Demo (link)

Check out the live demo of the application [here](https://v1-quiz.netlify.app/).

## Project Structure

```css
React-Quiz/
├── public/
│   ├── logo512.png
├── src/
│   ├── components/
│   │   ├── FinishScreen.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Main.js
│   │   ├── NextQuestion.js
│   │   ├── Options.js
│   │   ├── Progress.js
│   │   ├── Question.js
│   │   ├── StartScreen.js
│   │   ├── Timer.js
│   ├── data.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── .gitignore
├── README.md
├── package.json
└── yarn.lock
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![Vite Badge](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&labelColor=black&logo=vite&logoColor=646CFF)](#)

## Third-Party Libraries
* None

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.
