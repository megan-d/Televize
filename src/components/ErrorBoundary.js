import React from 'react';
import Error from './views/Error';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

static getDerivedStateFromError(error) {
    // If error happens, update state so the next render will show the fallback UI (Error page)
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
      if(this.state.hasError) {
          //render fallback UI
        return <Error />
      }
      return this.props.children;
  }
}

export default ErrorBoundary;