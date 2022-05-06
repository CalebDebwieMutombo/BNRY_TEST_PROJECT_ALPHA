# Hi Tashreek Jackson @ BNRY

This project was created as my second attempt to an internship at BNRY


## How to install this Project
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```
# if you are using visual studio code don't forget to insall live Sass Compiler


### Introduction
The instuctions written here, are used to Boostrap this project with UI, Look and feel.

### Bootstrap Components Cannot Be Included with React
Becuase Bootstrap relies on Jquery to run particular user inferfaces.

However there are a nimber of libraries that allow us to use Bootstrap with React
Here I will focus on the implementation of React and Boostrap

### How to Setup Bootstrap Stylesheet and intergare it to React


First download and install react by opening the comandline or powereshell terminal 

Then type the following one by one 

create-react-app my-bootstrap-react-app
cd my-bootstrap-react-app
npm start

Your directory should look like this...

├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
└── yarn.lock



Now download the latest Bootstrap libeiry from there official site. 

Check to insure you have the compiled and minimized version of JS and CSS files.

Then make a ness CSS folder in the public folder, copy bootstrap.min.css file there, and then add the required code in public/index.html to link it.

You could also just use a CDN to fetch the minimized CSS

as follows...
<!--  <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> -->

### Use Regular Bootstrap Classes With React
After  the Bootstrap style sheet has been add to React app. We can use JSX code

### UseThird-party Libraries for React and Bootstrap
 The reactstrap implementation has components for forms, buttons, tables, layout grids, and navigation. It is an alternative for developing apps with React and Bootstrap together. 

 React-bootstrap-table available on GitHub that deliver extensive utilities to develop some cool UI for apps using React.

 ### Set Up a Reactstrap Library
 Install the react libraries by using the code below

 <!-- npm install --save reactstrap@next -->

 Now, the relevant components from the module can be imported as below:

 <!-- import { Container, Row, Col} from 'reactstrap'; -->

 At this stage, the library will not work as expected since it does not include Bootstrap CSS. So, add it manually as shown below:

 <!-- npm install --save bootstrap -->

 Now import Bootstrap CSS in our src/index.js file:

 <!-- import 'bootstrap/dist/css/bootstrap.css'; -->

### Understanding Bootstrap Grid
 import the Container, Row and Col components in order to use the grid.

 ### Using Bootstrap Components With React
Reactstrap Navbars can be used for navigation bars and provide responsiveness.

Organize the navigation links more efficiently, a Navbar consists of subcomponents like Nav, NavItem, NavbarBrand, etc .

Create a responsive by adding a <NavbarToggler> inside our <Navbar> component and then wrapping <NavItems> into a <Collapse> component. 

### Use the Modal Window
Use the reactstrap Modal component  for generating a Bootstrap modal with a header, body, and footer.

The Model header can be used with  some props and callbacks to have the window interactive and also to have it closable.

### Forms
A reactstrap form can be inline or horizontal. The input element is rendered by an Input component.

### ListGroup
To style and control the list Items use Reactstraps ListGroup. 
Wrape the ListGroupItems in a ListGroup
Use the OnClick callback to make it interactive