<template>
  <div class="home-container">
    <header>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our website.</p>
    </header>
    <section class="intro">
      <h2>About Us</h2>
      <p>
        We provide great services for your needs. Explore the site to learn more about our products and services.
      </p>
    </section>
    <section class="features">
      <h2>Our Features</h2>
      <ul>
        <li>Feature 1: Fast and reliable service</li>
        <li>Feature 2: Great customer support</li>
        <li>Feature 3: User-friendly interface</li>
      </ul>
    </section>
    <footer>
      <p>&copy; 2024 Our Company</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-container {
  padding: 20px;
}

header {
  background-color: #0073e6;
  color: white;
  text-align: center;
  padding: 40px;
}

h1 {
  font-size: 2.5rem;
}

.intro {
  background-color: #f9f9f9;
  padding: 20px;
  margin-top: 20px;
}

.features {
  margin-top: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

footer {
  background-color: #0073e6;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}
</style>
