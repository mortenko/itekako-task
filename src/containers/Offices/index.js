import React, { Component } from "react";

export default function withFetchOffices(WrappedComponent) {
  return class Office extends Component {
    state = {
      offices: [],
      fetchState: "pending"
    };

    async componentDidMount() {
      try {
        const response = await fetch(
          "https://itk-exam-api.herokuapp.com/api/offices"
        );
        const jsonResponse = await response.json();
        this.setState({
          offices: jsonResponse,
          fetchState: "done"
        });
      } catch (error) {
        this.setState({
          fetchState: "error"
        });
        throw new Error(error);
      }
    }

    render() {
      return <WrappedComponent state={this.state} {...this.props} />;
    }
  };
}
