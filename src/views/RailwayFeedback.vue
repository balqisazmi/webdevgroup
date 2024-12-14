<template>
  <form class="railway feedback-form">
    <fieldset>
      <legend>{{ title }}</legend>

    <!-- Radio Buttons for Service Line -->
    <div>
    <fieldset>
      <label for="serviceLine">Service Line</label>
      <label>
        <input type="radio" name="serviceLine" value="Line 1" v-model="selectedServiceLine" />
        Line 1
      </label>
      <label>
        <input type="radio" name="serviceLine" value="Line 2" v-model="selectedServiceLine" />
        Line 2
      </label>
    </fieldset>

    <!-- Feedback Sliders -->
      <div class="form-group">
        <label for="rating">Service Rating 1</label>
        <input id="rating" type="range" min="1" max="5" value="3" class="input-1" />
        <span class="slider-labels">
          <span>1</span>
          <span>5</span>
        </span>
      
        <label for="rating">Service Rating 2</label>
        <input id="rating" type="range" min="1" max="5" value="3" class="input-1" />
        <span class="slider-labels">
          <span>1</span>
          <span>5</span>
        </span>
      </div>

      <!-- Feedback Text -->
      <div class="form-group">
        <label for="feedback">Your Feedback</label>
        <textarea
          id="feedback"
          placeholder="Write your feedback here..."
          class="input-1"
        ></textarea>
      </div>

    <button type="submit" class="pure-btn button-primary">Submit</button>
  </div>
</fieldset>
</form>
</template>

<script>
export default {
  name: "RailwayFeedback",
  props: {
    title: {
      type: String,
      default: "Railway Feedback",
    },
  }
};
</script>

<style scoped>
/* Form Container */
.feedback-form {
  margin: 20px auto;
  padding: 20px;
  max-width: 90%;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Custom styles */
.form-group {
  margin-bottom: 20px;
}

.input-1 {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

fieldset {
  border: none;
  margin-bottom: 25px;
}

legend {
  font-weight: bold;
  font-size: 1.2rem;
}

label {
  margin-right: 20px;
}

input[type="radio"] {
  margin-right: 5px;
}

/* Slider Labels */
.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #000000;
  margin-top: 3px;
}

/* Custom Button Style */
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