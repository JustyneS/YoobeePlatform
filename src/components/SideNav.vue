<template>
    <div id="sidenav" :class="{ open: isOpen }">
        <ul>
        <li>
          <a class="module" @click="isOpen1 = !isOpen1">MODULE 1</a>
          <ul v-show="isOpen1">
            <li><a class="topic" href="#topic-1-1">Topic 1</a></li>
            <li><a class="topic" href="#topic-1-2">Topic 2</a></li>
            <li><a class="topic" href="#topic-1-3">Topic 3</a></li>
          </ul>
        </li>
        <li>
          <a class="module" @click="isOpen2 = !isOpen2">MODULE 2</a>
          <ul v-show="isOpen2">
            <li><a class="topic"  href="#topic-2-1">Topic 1</a></li>
            <li><a class="topic" href="#topic-2-2">Topic 2</a></li>
            <li><a class="topic" href="#topic-2-3">Topic 3</a></li>
          </ul>
        </li>
        <li>
          <a class="module" @click="isOpen3 = !isOpen3">MODULE 3</a>
          <ul v-show="isOpen3">
            <li><a class="topic" href="#topic-3-1">Topic 1</a></li>
            <li><a class="topic" href="#topic-3-2">Topic 2</a></li>
            <li><a class="topic" href="#topic-3-3">Topic 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
    };
  },
  props: ['isOpen']
};
</script>

  
  <style scoped>
  #sidenav {
    width: 0;
    position: fixed;
    z-index: 1;
    top: 115;
    left: 10;
    background-color: rgb(242 242 242);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    border-width: 15px;
  }

  #sidenav ul{
    list-style-type: none;
    margin-bottom: 15px;
  }
  
  #sidenav.open {
    width: 250px;
    height: 600px;
  }

  .module {
    font-size: 20px;
    color: rgb(189,137,255);
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer; 
  }

  .topic {
    font-size: 20px;
    color: rgb(56 56 56);
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

</style>
