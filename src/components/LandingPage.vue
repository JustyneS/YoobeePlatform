<template>
    <div class="landing-page">
      <h1>Welcome to Yoobee Online Learning Platform</h1>
      <p>Start your learning journey today!</p>

      <img src="../images/learningImage.jpg" alt="Header Image" />

    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  }
  </script>
  
  <style scoped>
  img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 50%;
  height: 20%;
  object-fit: cover;
  align-items: center;
  border-radius: 20px;
}

h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
}

p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-align: center;
}
  </style>
  