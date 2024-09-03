# Charging-Stations
This is a web application that displays the location of vehicular charging stations in Skövde, Sweden

This app uses data provided by [DIGG - Myndigheten för Digital Förvaltning](https://www.dataportal.se/en) (The Agency for Digital Government).

## Technology Stack
This application is built using React + Vite, and it also uses Mapbox to render a map.

## Getting Started
### Prerequisites
Ensure you have Node.js installed.
Fork this repository and clone the repository to your local machine.
You also need to generate a Personal Access Token on MapBox. You can easily generate one by creating a free account on their website. 
After creating an access token, put it in a '.env'-file in the root of the repository, just like in the .env.example.

### Installation
Install the required dependencies:
```
npm install
```
### Running the Application
To start the development server, run the following command:
```
npm run dev
```
This will start the application, and you can view it in your web browser at http://localhost:3000 (or whichever port is specified in your configuration).

## License
This project is licensed under the MIT License.
