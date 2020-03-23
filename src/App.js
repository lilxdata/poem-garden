import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import kim from './kim.jpg';
import dominique from './dominique.jpg';
import unrest from './unrest.png';
import garden3 from './garden3.jpg';
import garden4 from './garden4.jpg';
import garden5 from './garden5.jpg';

class RandomizePoems extends Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  displayImage(poem_img) {
    return (<img src={poem_img} className="poem_img" />);
  }
  render() {
    var poem_imgs = [kim, dominique, unrest]
    return this.displayImage(this.randomize(poem_imgs));
  }
}

class HaveAPoem extends Component {
  render() {
   return <div> <h1 className="haveAPoem">❁❀ pick a poem from my garden ❀❁ </h1> </div>
  }
}

class Garden extends Component {
  render() {
    return <div className="garden">
     <Link to="/kim"> <img src={garden4} /> </Link>
     <Link to="/dominique"><img src={garden3} /> </Link>
     <Link to="/tracy"><img src={garden5} /> </Link>
    </div>
  }
}
function Index() {
  return <div className="home"><HaveAPoem />  <Garden />  </div>;
}

{/* <Link to="/poem"> <h1 className="random"> random poem </h1> </Link> */}

function Poem() {
  var poem_imgs;
  return <div> <RandomizePoems poem_imgs={poem_imgs} /> </div>
}

function Kim() {
  return <img src={kim} />
}

function Dominique() {
  return <img src={dominique} />
}

function Tracy() {
  return <img src={unrest} />
}


function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/poem" component={Poem} />
        <Route path="/kim" component={Kim} />
        <Route path="/dominique" component={Dominique} />
        <Route path="/tracy" component={Tracy} />
      </div>
    </Router>
  );
}


export default AppRouter;
