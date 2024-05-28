import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact strict path="/" element={<News key="General" pageSize={8} country="in" category="General"/>}/>
          <Route exact strict path="/Business" element={<News key="Business" pageSize={8} country="in" category="Business"/>}/>
          <Route exact strict path="/Entertainment" element={<News key="Entertainment" pageSize={8} country="in" category="Entertainment"/>}/>
          <Route exact strict path="/Health" element={<News key="Health" pageSize={8} country="in" category="Health"/>}/>
          <Route exact strict path="/Sports" element={<News key="Sports" pageSize={8} country="in" category="Sports"/>}/>
          <Route exact strict path="/Science" element={<News key="Science" pageSize={8} country="in" category="Science"/>}/>
          <Route exact strict path="/Technology" element={<News key="Technology" pageSize={8} country="in" category="Technology"/>}/>
        </Routes>  
      </div>
    )
  }
}
