<template>
  <form class="pure-form pure-form-stacked feedback-form">
    <fieldset>
      <legend>{{ title }}</legend>

  <div>
    <!-- Radio Buttons for Service Type -->
    <fieldset>
      <label for="serviceStation">Service Station</label>
      <label>
        <input type="radio" name="serviceStation" value="Station 1" v-model="selectedServiceStation" />
        Station 1
      </label>
      <label>
        <input type="radio" name="serviceStation" value="Station 2" v-model="selectedServiceStation" />
        Station 2
      </label>
      <label>
        <input type="radio" name="serviceStation" value="Station 3" v-model="selectedServiceStation" />
        Station 3
      </label>
    </fieldset>

    <!-- Service Line Dropdown -->
    <div class="form-group">
      <label for="service-line">Service Line</label>
      <select id="service-line" class="pure-input-1" v-model="selectedServiceLine">
        <option value="">Select a service line</option>
        <option v-for="line in availableServiceLines" :key="line" :value="line">{{ line }}</option>
      </select>
    </div>

    <!-- Feedback Sliders -->
      <div class="form-group">
        <label for="rating">Service Rating</label>
        <input id="rating" type="range" min="1" max="5" value="3" class="pure-input-1" />
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
          class="pure-input-1"
        ></textarea>
      </div>

    <button type="submit" class="pure-button pure-button-primary">Submit</button>
  </div>
</fieldset>
</form>
</template>

<script>
export default {
  name: "FeedbackForm",
  props: {
    title: {
      type: String,
      default: "Feedback Form",
    },
  },
  data() {
    return {
      selectedServiceStation: "", // Stores the selected station
      selectedServiceLine: "", // Stores the selected service line
      serviceLines: {
        "Station 1": ["Line A", "Line B"],
        "Station 2": ["Line C", "Line D"],
        "Station 3": ["Line E", "Line F"]
      },
    };
  },
  computed: {
    // Compute the available service lines based on the selected service station
    availableServiceLines() {
      return this.selectedServiceStation ? this.serviceLines[this.selectedServiceStation] : [];
    }
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

.pure-input-1 {
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
.pure-button-primary {
  width: 100%;
  padding: 10px;
  background-color: #0073e6;
  border-radius: 5px;
  font-size: 1rem;
}

.pure-button-primary:hover {
  background-color: #005bb5;
}
</style>
