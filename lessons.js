ReactDOM.render(<h1>Bum</h1>, document.getElementById('root'));

ReactDOM.render(
  <ul>
    <li>milk</li>
    <li>sugar</li>
    <li>honey</li>
  </ul>,
  document.querySelector("#root")
);




// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))


  function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"
function MainContent() {
  return (
  <h1>I'm Learning react!</h1>
  )
}
// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

ReactDOM.render(
  <div>
      <Navbar />
      <MainContent />
  </div>,
  document.getElementById("root")
)



/* 
Challenge: 

Create a navbar in JSX:
  - Use the semantic `nav` element as the parent wrapper
  - Have an h1 element with the brand name of your "website"
  - Insert an unordered list for the other nav elements
      - Inside the `ul`, have three `li`s for "Pricing",
      "About", and "Contact"
  - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navBar = (
<nav>
  <h1>Nick's Shoes</h1>
  <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
)


ReactDOM.render(navBar, document.getElementById("root"))

// react 17
// ReactDOM.render(navbar, document.getElementById("root"))

// react 18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)



const card = (
<div class="centered">
    <div class="card">
        <h1>Title of card</h1>
        <h2>Sub title</h2>
        <p>Lorem ipsum</p>
    </div>
</div>
)

document.getElementById("root").append(card)







import React from 'react';
import ReactDOM from 'react-dom';


const app = (
<div>
  <img src="./react-logo.png" width="40px"></img>
  <h1>Fun facts about React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100K stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
</div>
)

ReactDOM.render(app, document.getElementById("root")); 


import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return(
      <div>
          <ol>
              <li>enhance developer skills</li>
              <li>get better paid job</li>
              <li>create cooler things</li>
              <li>continue learning</li>
          </ol>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));





/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
include a `img` element with the image of the React logo inside
(src="./react-logo.png") and make sure to set the width to something
more manageable so it doesn't take up the whole screen

- Add an `h1` with some text describing the page. (E.g. "Reasons
I'm excited to learn React"). Place it above the ordered list.

- Add a `footer` after the list that says: 
  "© 20xx <last name here> development. All rights reserved."
*/

import React from "react"
import ReactDOM from "react-dom"
import { func } from 'prop-types'



function Header () {
return(
  <header>
  <nav>
   <img src="./react-logo.png" width="40px"/>
  </nav>
</header>
)
}

function Page(Header) {
  return (
    <div>
        <Header />
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>It's a popular library, so I'll be 
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
        </ol>
        <footer>
          <small>© 2023 Nicholas MacDonald development. All rights reserved.</small>
        </footer>
      </div>
  )
}

  
ReactDOM.render(<Page />, document.getElementById("root"))





/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
