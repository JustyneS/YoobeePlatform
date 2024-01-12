<template>
    <div class="noticeboard">
      <!-- Your content goes here -->
      <h1>Welcome to the Noticeboard!</h1>

      <div  class="noticeboardMenu">
        <ul>
            <li><p class="menuItems">Orientation<i class="fa-solid fa-circle-plus"></i></p></li>
            <li><p class="menuItems">Monday Posts<i class="fa-solid fa-circle-plus"></i></p></li>
            <li><p class="menuItems">Live Session Recordings<i class="fa-solid fa-circle-plus"></i></p></li>
            <li><p class="menuItems">News and Upcoming Events<i class="fa-solid fa-circle-plus"></i></p></li>
            <li><p class="menuItems">Important Contacts<i class="fa-solid fa-circle-plus"></i></p></li>
        </ul>
        </div>
    </div>
  </template>
  

  <script>
  export default {
    name: 'NoticeboardComponent',
  };
  </script>
  

  <style scoped>
  /* Your styling for the component goes here */
  .noticeboard {
    padding: 40px;
  }

  h1 {
    font-size: 40px;
    text-align: center;
  }

.noticeboardMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-width: 600px;
    padding-right: 20%;
    padding-left: 10%;
}

  .menuItems {
    font-size: 25px;
    padding:25px;   
    text-align: left;
  }

  .fa-solid fa-circle-plus {
    padding-left: 20px;
  }

  ul {
    list-style-type: none;
  }
  </style>