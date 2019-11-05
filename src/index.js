import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import HelloDanhProject from './HelloDanhProject'
import "semantic-ui-css/semantic.min.css"
import "./helloDanhProject.css"


ReactDOM.render(
    <Router>
        <HelloDanhProject />
    </Router>
    , document.getElementById('root'))

