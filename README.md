

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/MikeMaynard14/termoneexample)
![GitHub watchers](https://img.shields.io/github/watchers/MikeMaynard14/termoneexample)
![GitHub language count](https://img.shields.io/github/languages/count/MikeMaynard14/termoneexample)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MikeMaynard14/termoneexample)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Justin Koster</h5>
<h5 align="center" style="padding:0;margin:0;">200100</h5>
<h6 align="center">DV200 - Term 1 | 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/MikeMaynard14/termoneexample">
    <img src="https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/LOGO.gif" alt="Logo" width="140" height="140">
  </a>
  
  <h3 align="center">PokeDexler</h3>

  <p align="center">
    A react project using the Poke Api to demonstrate data visualization using charts js  <br>
   
    
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/MikeMaynard14/termoneexample/issues">Report Bug</a>
    ·
    <a href="https://github.com/MikeMaynard14/termoneexample/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/custom%20UI.png)

### Project Description

This project of mine is made using react js aswella s implementation of charts js, i made use of the PokeAPI to do some data visualization of pokemon data by means of creating a pokedex and comparing two pokemon with their data displayed in different charts.

### Built With

* [React](https://reactjs.org/)
* [react charts 2](https://react-chartjs-2.js.org/)


<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/Justin-OwiStudent/pokedexler` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/Justin-OwiStudent/pokedexler
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

4. An API key is not required


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/custom%20UI.png)

### All the Pokemon Data you need !
here we have our own PokeDex, where you are able to scroll and see all the stats of your chosen pokemon.


![image3](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/Feature2.jpg)
### Feature 2

here we are able to compare two different pokemon and see those stats compared within different kinds of charts.

![image4](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/line.png)
### Feature 3

lastly we have a line chart here where we are able to see the different growthrates pokemon have, we are bel to see slow,medium,fas, slow then fast and also fast then slow, each one has a different rate at which they grow and agin experience.




<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

at first i needed to find an API of my choosing to base my application off of, i chose the PokeAPI and from that i decided to make my own pokedex and a compare page where i would be able to compare the stats from two pokemon against each other to see which is stronger, i was also tasked to make a timeline page and after looking at my data i was able to get the growthrates and show on a timeline chart the different speed pokemon grow and gain experience.


### Wireframes

![image7](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/Wireframes.png)

### Custom UI

![image8](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/custom%20UI.png)

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

i made use of css and html to structure my pokedex and then using react.js to get my data from the API and get that displayed and called within my pokedex, i then made the compare page and made use of locastorage to call the data from one component and then use that data to display within the charts to compare the two Pokemon.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized React `Charts.JS` dependency for Data visualization
* Implemented Routing with `React-Router v6`.
* API End Point: `https://pokeapi.co/` 
* i had a difficult time getting the data to work from my API, at first the endpoint i had only gave me name of said pokemon and also a url, that url containing allt he further information of the pokemon.
* getting my pokemon data to carry through to a different component was a challenge i faced 
* i had to get the data to carry though from the further axios request after the first one to get the individual data fron the pokemon

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* i learnt how to use and mipulate react.js which was challenging but very fun.
* i learnt how to use charts.js and use my data to work with charts.
* i learnt how to use data from my API and further decode it for my project.
* i enjoyed using react.js as it was a different way of coding i experienced.
* i enjoyed going more indepth with my API using useEffects and all react has to offer.
* What aspects did you enjoy.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* i had a huge problem with my API as i had to re request to get the actual data i needed to implement it into my app.
* i struggled getting the hang of useEffects and getting them to work porperly.
* i struggled understanding how components fuction together and how you can call a componant within an componant.
* i struggled getting the data to work within and across my components.


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Name of Skill Explored.
* Explain your understanding and execution of above skill.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* some functionality imrovements i can make in the future is to change the styling of the pokedex to have a bit more animationin, maybe add a rotating image where the pokemon sprite is displayed.
* another feature i can add in the future is to make that the two pokemon actually fight and there is a declared winner, as now they are only being compared.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/mockup-1.jpg)
<br>
![image10](https://github.com/Justin-OwiStudent/pokedexler/blob/main/src/components/Header/Main/img/mockup-2.jpg)

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://www.youtube.com/watch?v=ZFGl2BVmUms)


See the [open issues](https://github.com/Justin-OwiStudent/pokedexler/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Justin Koster** - [Justin-Owistudent](https://github.com/Justin-OwiStudent/pokedexler)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Justin Koster** - [200100@virtualwindow.co.za](200100@virtualwindow.co.za)  
* **Project Link** - https://github.com/Justin-OwiStudent/pokedexler

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [pngegg](https://www.pngegg.com/)


