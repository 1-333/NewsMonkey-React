import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  apikey = process.env.REACT_APP_API_KEY_NEWSMONKEY
  
  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route strict exact path='/' element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route strict exact path='/General' element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={this.pageSize} country='in' category="General"/>}/>
          <Route strict exact path='/Business' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Business" pageSize={this.pageSize} country='in' category="Business"/>}/>
          <Route strict exact path='/Entertainment' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Entertainment" pageSize={this.pageSize} country='in' category="Entertainment"/>}/>
          <Route strict exact path='/Health' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Health" pageSize={this.pageSize} country='in' category="Health"/>}/>
          <Route strict exact path='/Science' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Science" pageSize={this.pageSize} country='in' category="Science"/>}/>
          <Route strict exact path='/Sports' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Sports" pageSize={this.pageSize} country='in' category="Sports"/>}/>
          <Route strict exact path='/Technology' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Technology" pageSize={this.pageSize} country='in' category="Technology"/>}/>
        
        </Routes>
      </div>
    )
  }
}
