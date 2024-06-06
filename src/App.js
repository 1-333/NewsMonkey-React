import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


class App extends Component {
  pageSize = 6;
  apikey = process.env.REACT_APP_API_KEY_NEWSMONKEY;

  state = {
    progress: 0,
    country: 'in',
  };

  setCountry = (country) => {
    this.setState({ country: country });
    console.log(country);
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Navbar setCountry={this.setCountry}/>
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            strict
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="General"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="General"
              />
            }
          />
          <Route
            strict
            exact
            path="/General"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="General"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="General"
              />
            }
          />
          <Route
            strict
            exact
            path="/Business"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="Business"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="Business"
              />
            }
          />
          <Route
            strict
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="Entertainment"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="Entertainment"
              />
            }
          />
          <Route
            strict
            exact
            path="/Health"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="Health"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="Health"
              />
            }
          />
          <Route
            strict
            exact
            path="/Science"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="Science"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="Science"
              />
            }
          />
          <Route
            strict
            exact
            path="/Sports"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="Sports"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="Sports"
              />
            }
          />
          <Route
            strict
            exact
            path="/Technology"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="Technology"
                pageSize={this.pageSize}
                country={this.state.country}
                setCountry={this.setCountry}
                category="Technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
export default App;
