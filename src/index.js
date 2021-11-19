import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var h1e = document.createElement("h1");
h1e.textContent = "Hello there!";
h1e.classList.add("header");
document.getElementById("root").appendChild(h1e);

ReactDOM.render(
    <div>
        <MyNavbar />
        <MainContent />
    </div>, 
    document.getElementById("root")