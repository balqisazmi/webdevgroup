<template>
    <div>
      <!-- Tab Navigation -->
      <div class="tabs">
        <button
          :class="['pure-btn', currentTab === 'Railway' ? 'active' : '']"
          @click="currentTab = 'Railway'"
        >
          Railway
        </button>
        <button
          :class="['pure-btn', currentTab === 'Station' ? 'active' : '']"
          @click="currentTab = 'Station'"
        >
          Station
        </button>
      </div>
  
      <!-- Tab Content -->
      <div class="tab-content">
        <RailwayPassengerInfo v-if="currentTab === 'Railway'" />
        <StationPassengerInfo v-if="currentTab === 'Station'" />
        <RailwayFeedback
        v-if="currentTab === 'Railway'"
        title="Railway Service Feedback"
      />
      <StationFeedback
        v-if="currentTab === 'Station'"
        title="Station Facilities Feedback"
      />
      </div>
    </div>
  </template>
  
  <script>
  import RailwayPassengerInfo from "@/components/RailwayPassengerInfo.vue";
  import StationPassengerInfo from "@/components/StationPassengerInfo.vue";
  import RailwayFeedback from "@/views/RailwayFeedback.vue";
  import StationFeedback from "@/views/StationFeedback.vue";
 
  
  export default {
    name: "FeedbackTabs",
    components: {
      RailwayPassengerInfo,
      StationPassengerInfo,
      RailwayFeedback,
      StationFeedback,
    },
    data() {
      return {
        currentTab: "Railway", // Default tab
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tabs Container */
  .tabs {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    gap: 10px;
  }
  
  /* Pure.css Button Customization for Tabs */
  .pure-btn {
    padding: 2% 20%; /* Adjust padding to fit the browser width */
    font-size: 1rem;
    background-color: #f2f2f2;
    color: #333;
    border-radius: 5px;
    border: 1px solid #ddd;
    transition: background-color 0.3s, color 0.3s;
  }

  /* Adjust button sizes for smaller or larger screens */
    @media (max-width: 768px) {
  .pure-btn {
    padding: 5% 20%; /* Add more padding on smaller screens */
  }
  .pure-btn:hover {
    background-color: #0073e6;
    color: #fff;
  }
}

  /* Active Tab Style */
  .pure-btn.active {
    background-color: #0073e6;
    color: white;
    border: 1px solid #005bb5;
  }
  
  /* Tab Content Styling */
  .tab-content {
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>