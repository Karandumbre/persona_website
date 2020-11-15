import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      personaData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./persona.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ personaData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.personaData.main} />
        <About data={this.state.personaData.main} />
        <Resume data={this.state.personaData.resume} />
        <Footer data={this.state.personaData.main} />
      </div>
    );
  }
}

export default App;
