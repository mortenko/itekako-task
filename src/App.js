import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import ListView from "components/ListView";
import GridView from "components/GridView";
import Header from "components/Header";
import GoogleMap from "components/GoogleMap";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route exact path="/listView" component={ListView} />
        <Route path="/gridView" component={GridView} />
        <Route path="/map" component={GoogleMap} />
      </Fragment>
    );
  }
}

export default App;
