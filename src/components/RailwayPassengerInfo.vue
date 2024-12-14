<template>
    <div class="feedback-container">
      <!-- Introduction Section -->
      <div class="intro">
        <h2>Welcome to Railway Service Feedback</h2>
        <p>
          Please provide your feedback on the railway services you have experienced. Your input helps us improve the quality and efficiency of the services we offer.
        </p>
      </div>

      <!-- Form Section -->
      <div class="form-section">
        <h1>Railway Service</h1>
        <form class="pure-form pure-form-stacked">
          <fieldset>
            <legend>Passenger Information</legend>
    
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" class="pure-input-1" />
    
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" class="pure-input-1" />
    
            <button type="submit" class="pure-btn button-primary">Sign In</button>
            <p>Not registered yet? <router-link to="/signup">Sign up here</router-link></p>
          </fieldset>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RailwayPassengerInfo",
  };
  </script>
  
  <style scoped>
  /* Container */
  .feedback-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Space between elements */
    justify-content: space-between;
  }
  
    /* Introduction Section with Background Image */
.intro {
position: relative;
  flex: 1;
  min-width: 300px;
  padding: 40px;
  background-image: url('/images/feedback1.jpg'); /* Add the image URL */
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 5px;
}
.intro::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Black with 40% opacity */
  z-index: 1; /* Make sure the overlay is on top of the image */
}
.intro h2, .intro p {
  position: relative;
  z-index: 2; /* Ensure text is above the overlay */
}
  
  /* Form Section */
  .form-section {
    flex: 2;
    min-width: 300px; /* Ensure it takes minimum 300px on small screens */
    padding: 20px;
  }
  
  .form-section h1 {
    text-align: center;
    color: #0073e6;
  }
  
  .pure-form-stacked fieldset {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background: #f9f9f9;
  }
  
  .pure-form-stacked input {
    margin-bottom: 10px;
  }
  
  .button-primary {
  width: 100%;
  padding: 10px;
  background-color: #0073e6;
  color: white;
  border: 1px solid #005bb5;
  border-radius: 5px;
  font-size: 1rem;
}

.button.button-primary {
  background-color: #005bb5;
}
</style>