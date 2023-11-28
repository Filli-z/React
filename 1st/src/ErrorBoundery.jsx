import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("errorBoundaty component cought an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing
          <Link to="/">Click here ti go back to home.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
