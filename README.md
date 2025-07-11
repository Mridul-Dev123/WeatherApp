# Weather App

A dynamic and interactive web application that allows users to check the current weather conditions for any city worldwide. This project was developed as part of [The Odin Project's JavaScript curriculum](https://www.theodinproject.com/lessons/node-path-javascript-weather-app), focusing on asynchronous JavaScript, API integration, and DOM manipulation.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Setup](#setup)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Project Overview

This Weather App provides real-time weather information by integrating with a third-party weather API. Users can search for a specific location, view essential weather details, and switch between Celsius and Fahrenheit temperature units. The application features a clean, responsive design that dynamically updates based on the weather conditions.

## Features

- **Search by Location:** Easily get weather forecasts for any city you search for.
- **Temperature Toggle:** Switch between Celsius and Fahrenheit temperature units with a single click.
- **Dynamic Backgrounds:** The application's background or styling changes to visually represent current weather conditions (e.g., sunny, cloudy, rainy).
- **Responsive Design:** Enjoy a seamless experience on various devices, from desktops to mobile phones.
- **Error Handling:** Provides user-friendly messages for invalid city names or API issues.

## Technologies Used

-   **HTML5:** For structuring the web content.
-   **CSS3:** For styling and ensuring a responsive design.
-   **JavaScript (ES6+):** For all application logic, API calls, and DOM manipulation.
-   **[Visual Crossing Weather API](https://www.visualcrossing.com/weather-api):** Utilized for fetching real-time weather data.
-   **Webpack (Optional, if used for bundling):** For bundling JavaScript modules and assets.

## How to Use

1.  **Enter a City:** Type the name of a city into the search bar.
2.  **Get Weather:** Press Enter or click the search button to fetch the weather data.
3.  **Toggle Temperature:** Click the temperature unit to switch between Celsius and Fahrenheit.

## Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Mridul-Dev123/WeatherApp.git](https://github.com/Mridul-Dev123/WeatherApp.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd WeatherApp
    ```
3.  **Install dependencies (if you used npm/webpack):**
    ```bash
    npm install
    ```
4.  **Obtain an API Key from Visual Crossing:**
    -   Go to [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api).
    -   Sign up for a free account and obtain your API key.
    -   **Important:** For this project, you might have exposed your API key directly in the client-side JavaScript. In a production environment, it's crucial to handle API keys securely (e.g., using environment variables and a backend server).

5.  **Configure Visual Crossing API Key:**
    -   Open your JavaScript file (e.g., `src/index.js` or `script.js`).
    -   Locate where the API key is used and replace the placeholder with your actual Visual Crossing API key. For example:
        ```javascript
        const API_KEY = 'YOUR_VISUAL_CROSSING_API_KEY_HERE';
        ```
6.  **Open in Browser:**
    -   Simply open the `index.html` file in your web browser.
    -   If you used Webpack, you might need to build the project first:
        ```bash
        npm run build
        ```
        Then, open the `dist/index.html` (or equivalent) file.

## Acknowledgements

-   This project was completed as part of [The Odin Project](https://www.theodinproject.com/).
-   Weather data provided by [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api).

## License

This project is open source and available under the [MIT License](LICENSE).
