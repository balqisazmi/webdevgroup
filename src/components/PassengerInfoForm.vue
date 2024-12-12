<template>
    <form class="pure-form">
      <label for="passenger-name">Name:</label>
      <input type="text" id="passenger-name" placeholder="Enter your name">
      
      <label for="service-rating">Service Rating:</label>
      <input type="range" id="service-rating" min="1" max="5" step="1">
      
      <button class="pure-button" type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: "PassengerInfoForm",
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  input[type="text"],
  input[type="range"] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  
  input[type="text"] {
    font-size: 1rem;
  }
  
  input[type="range"] {
    width: 100%;
  }
  
  button.pure-button {
    background-color: #0073e6;
    color: white;
    padding: 12px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  button.pure-button:hover {
    background-color: #005bb5;
  }
  </style>
  
<!--<template>
    <form class="pure-form">
      <label for="passenger-name">Name:</label>
      <input type="text" id="passenger-name" placeholder="Enter your name">
      
      <label for="service-rating">Service Rating:</label>
      <input type="range" id="service-rating" min="1" max="5" step="1">
      
      <button class="pure-button" type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: "PassengerInfoForm",
  };
  </script>
  
  <style scoped>
  /* Passenger Info Form Styles */
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  input[type="text"],
  input[type="range"] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  
  input[type="text"] {
    font-size: 1rem;
  }
  
  input[type="range"] {
    width: 100%;
  }
  
  button.pure-button {
    background-color: #0073e6;
    color: white;
    padding: 12px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  button.pure-button:hover {
    background-color: #005bb5;
  }
  </style>
  -->