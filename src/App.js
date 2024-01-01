// Import the React library, which is required for creating React components
import React from 'react';

// Import the Axios library, which is used for making HTTP requests
import axios from 'axios';

// Import the CSS file for styling the component
import './App.css';

// Define a class-based React component named App
class App extends React.Component {
  // Define the initial state of the component with an empty advice string
  state = { advice: '' };

  // Lifecycle method: componentDidMount is called after the component is rendered to the DOM
  componentDidMount() {
    // Call the fetchAdvice method when the component is mounted
    this.fetchAdvice();
  }

  // Class method: fetchAdvice is responsible for making an API request to get advice
  fetchAdvice = () => {
    // Make a GET request to the advice API using Axios
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        // Extract the advice from the response and update the component's state
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        // Log any errors that occur during the API request
        console.log(error);
      });
  }

  // Render method: Defines the structure of the component that will be displayed
  render() {
    // Destructure the advice from the component's state
    const { advice } = this.state;

    // Return JSX representing the component structure
    return (
      <div className='app'>
        <div className='card'>
          {/* Display the advice in an h1 element */}
          <h1 className='heading'>{advice}</h1>

          {/* Button that triggers the fetchAdvice method when clicked */}
          <button className='button' onClick={this.fetchAdvice}>
            <span>Give me new advice!</span>
          </button>
        </div>
      </div>
    );
  }
}

// Export the App component as the default export for this file
export default App;
