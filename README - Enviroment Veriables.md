###  What are enviroment veriables
An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.

When working with React, environment variables are variables that are available through a global process.env Object. That global Object is provided by your environment through NodeJs.

### Creating enviroment veriables

The whole idea here is to create a file (called just .env) filled with my own environment variables.

To prevent people from finding out my local database password is the same one I use for every single one of my accounts on the internet.

My front-end code will refer to the same environment variable (process.env.API_URL) on both environments (development/production), but because I defined different values in my .env files, the compiled values will be different.

I have put my .env in the root folder and I have added
<!-- API_URL=http://localhost:8000 --> veriable to in it.

### How I handled my .env file

I have used the popular dotenv package for this... the veriables from my .env file are going to be added to my process.env file

### Different environment variables for different environments
The whole idea is to create different .env files for different environments and let webpack pick the correct .env file based on the active environment. So, I created two files in the root of my project:
.env (contains all the environment variables for production)
.env.development (contains all the environment variables for development)

I am postfixing the .env filename with the name of the environment. It’s common practice to use the original .env file for production build, so I won’t be postfixing that one.

### Setting the active environment using NPM scripts
I used NPM scripts  to set the current environment in my package.json:

Because I defined my environment in my package.json, we now have it available in our webpack!

The next step is to go to our webpack configuration and let it use the .env file that belongs to our active environment. Just like before, I used the dotenv, but now, specifying a custom path in the parameters.

ALL EVIROMENT VERIALBE FILES CAN BE FOUND IN \BNRY_Test\BNRY_Test_Project

AND MY RESPONSIVE CODE IS FOUND IN BNRY_Test\BNRY_Test_Project\public