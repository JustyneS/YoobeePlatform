<template>

    <div class="content-container">
      <img src="@/images/contacts.jpg" alt="image" class="headerImage">
      <h1>Important Contacts:</h1>
              


      <p class="content">Online support: onlinesupport@up.education</p>
      <p class="content">Roohi Verma: roohi.verma@yoobeecolleges.com</p>
  
      <hr class="separator"/> 
    </div>
      
</template>
  
  
  
  <script>
  export default {
    name: 'ImportantContactComponent',
  }; 
  </script>
  
  
  
  <style scoped>
  
    .headerImage {
      display: inline-block;
      Padding-top: 20px;
      width: 70vw;
      height: 30vh
    }
  
    h1 {
      text-align: left;
      padding-top: 40px;
      padding-bottom: 20px;
      padding-left: 80px;
      padding-right: auto;
    }
  
    .content-container {
      max-width: 80vw;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  
    .content {
      font-size: 17px;
      font-family: Arial, Helvetica, sans-serif;
      padding-left: 100px;
      padding-right: 100px;
  }
  
  .separator {
      border-top: 1px solid #ccc; 
      margin: 50px 0; /* Adjust this value to create the desired space */
      max-width: 75vw;
      margin-left: auto;
      margin-right: auto;
  }
  
  </style>