<template>
  <div id="module-one" :class="{ 'shift-content': $store.state.isOpen }">
    <img src="../images/studyImage.jpg" alt="Header Image" />
    <div>
      <div class="topic1-1">

        <h1 id="introduction">Module One - Introduction</h1>

        <p>Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nibh mauris cursus mattis molestie. Vitae purus faucibus ornare suspendisse. Quis lectus nulla at volutpat diam ut. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Viverra orci sagittis eu volutpat odio. Consectetur a erat nam at lectus urna duis convallis. Amet dictum sit amet justo donec. Interdum varius sit amet mattis vulputate enim nulla aliquet. Sit amet massa vitae tortor condimentum. Lacus vel facilisis volutpat est velit egestas dui id. Enim tortor at auctor urna nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Duis at consectetur lorem donec massa sapien faucibus. Elit eget gravida cum sociis natoque penatibus et magnis dis. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Enim ut sem viverra aliquet eget sit. </p>

        <hr class="separator"/> 

        <!--Each topic has been given an ID for the router links on SideNav-->
        <!--Each paragraph also has an ID for identifying the correct bookmarking point-->
        <h1 id="topic-1-1">Topic One</h1>
        <p id="p1-1-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus vitae congue. 
          Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Volutpat diam ut venenatis tellus in metus vulputate eu. Massa tincidunt dui ut ornare. Proin nibh nisl condimentum id venenatis a. 
          Volutpat est velit egestas dui id ornare arcu. Adipiscing at in tellus integer feugiat scelerisque varius. Convallis a cras semper auctor neque vitae tempus quam pellentesque. 
          Viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum odio eu feugiat pretium nibh. Libero justo laoreet sit amet.
         Consequat nisl vel pretium lectus quam id leo. Pellentesque elit ullamcorper dignissim cras tincidunt. Amet aliquam id diam maecenas ultricies. 
         Ut diam quam nulla porttitor massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dui accumsan sit amet nulla. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Fringilla urna porttitor rhoncus dolor purus non enim. Gravida rutrum quisque non tellus orci ac auctor. </p>
          <i class="fas fa-bookmark" v-if="bookmarks.includes('p1-1-1')"></i> 

        <p id="p2-1-1">Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nibh mauris cursus mattis molestie. Vitae purus faucibus ornare suspendisse. Quis lectus nulla at volutpat diam ut. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Viverra orci sagittis eu volutpat odio. Consectetur a erat nam at lectus urna duis convallis. Amet dictum sit amet justo donec. Interdum varius sit amet mattis vulputate enim nulla aliquet. Sit amet massa vitae tortor condimentum. Lacus vel facilisis volutpat est velit egestas dui id. Enim tortor at auctor urna nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Duis at consectetur lorem donec massa sapien faucibus. Elit eget gravida cum sociis natoque penatibus et magnis dis.
           Adipiscing tristique risus nec feugiat in fermentum posuere urna. Enim ut sem viverra aliquet eget sit. </p>
          <i class="fas fa-bookmark" v-if="bookmarks.includes('p2-1-1')"></i>

        <p id="p3-1-1">Consectetur adipiscing elit duis tristique sollicitudin nibh. Orci phasellus egestas tellus rutrum. Elementum sagittis vitae et leo. Risus nec feugiat in fermentum posuere. Mauris in aliquam sem fringilla ut morbi. Egestas sed tempus urna et pharetra pharetra massa. Scelerisque felis imperdiet proin fermentum leo vel orci. In hendrerit gravida rutrum quisque. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Vulputate ut pharetra sit amet aliquam. Feugiat scelerisque varius morbi enim nunc. In hac habitasse platea dictumst quisque sagittis purus sit amet. Blandit volutpat maecenas volutpat blandit aliquam. Felis bibendum ut tristique et egestas quis ipsum. Et egestas quis ipsum suspendisse ultrices. Id faucibus nisl tincidunt eget nullam non nisi. Quis lectus nulla at volutpat diam ut venenatis tellus in. Nulla facilisi etiam dignissim diam quis enim. Sed libero enim sed faucibus turpis in eu. Tempor id eu nisl nunc mi ipsum. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Urna molestie at elementum eu. Arcu non sodales neque sodales ut etiam. Vitae turpis massa sed elementum tempus egestas sed sed risus. Quam id leo in vitae. Convallis a cras semper auctor. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Ultrices dui sapien eget mi proin. Cum sociis natoque penatibus et. Semper risus in hendrerit gravida rutrum quisque non tellus orci.</p>
          <i class="fas fa-bookmark" v-if="bookmarks.includes('p3-1-1')"></i>

        <hr class="separator"/> 

        <h1 id="topic-1-2">Topic Two</h1>
        <p id="p1-2-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus vitae congue. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Volutpat diam ut venenatis tellus in metus vulputate eu. Massa tincidunt dui ut ornare. Proin nibh nisl condimentum id venenatis a. Volutpat est velit egestas dui id ornare arcu. Adipiscing at in tellus integer feugiat scelerisque varius. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum odio eu feugiat pretium nibh. Libero justo laoreet sit amet. Consequat nisl vel pretium lectus quam id leo. Pellentesque elit ullamcorper dignissim cras tincidunt. Amet aliquam id diam maecenas ultricies. Ut diam quam nulla porttitor massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dui accumsan sit amet nulla. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Fringilla urna porttitor rhoncus dolor purus non enim. Gravida rutrum quisque non tellus orci ac auctor. </p>
        <i class="fas fa-bookmark" v-if="bookmarks.includes('p1-2-1')"></i>

        <p id="p2-2-1">Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nibh mauris cursus mattis molestie. Vitae purus faucibus ornare suspendisse. Quis lectus nulla at volutpat diam ut. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Viverra orci sagittis eu volutpat odio. Consectetur a erat nam at lectus urna duis convallis. Amet dictum sit amet justo donec. Interdum varius sit amet mattis vulputate enim nulla aliquet. Sit amet massa vitae tortor condimentum. Lacus vel facilisis volutpat est velit egestas dui id. Enim tortor at auctor urna nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Duis at consectetur lorem donec massa sapien faucibus. Elit eget gravida cum sociis natoque penatibus et magnis dis.
         Adipiscing tristique risus nec feugiat in fermentum posuere urna. Enim ut sem viverra aliquet eget sit. </p>
         <i class="fas fa-bookmark" v-if="bookmarks.includes('p2-2-1')"></i>

        <p id="p3-2-1">Consectetur adipiscing elit duis tristique sollicitudin nibh. Orci phasellus egestas tellus rutrum. Elementum sagittis vitae et leo. Risus nec feugiat in fermentum posuere. Mauris in aliquam sem fringilla ut morbi. Egestas sed tempus urna et pharetra pharetra massa. Scelerisque felis imperdiet proin fermentum leo vel orci. In hendrerit gravida rutrum quisque. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Vulputate ut pharetra sit amet aliquam. Feugiat scelerisque varius morbi enim nunc. In hac habitasse platea dictumst quisque sagittis purus sit amet. Blandit volutpat maecenas volutpat blandit aliquam. Felis bibendum ut tristique et egestas quis ipsum. Et egestas quis ipsum suspendisse ultrices.
         Id faucibus nisl tincidunt eget nullam non nisi. Quis lectus nulla at volutpat diam ut venenatis tellus in. Nulla facilisi etiam dignissim diam quis enim. Sed libero enim sed faucibus turpis in eu. Tempor id eu nisl nunc mi ipsum. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Urna molestie at elementum eu. Arcu non sodales neque sodales ut etiam. Vitae turpis massa sed elementum tempus egestas sed sed risus. Quam id leo in vitae. Convallis a cras semper auctor. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Ultrices dui sapien eget mi proin. Cum sociis natoque penatibus et. Semper risus in hendrerit gravida rutrum quisque non tellus orci.</p>
         <i class="fas fa-bookmark" v-if="bookmarks.includes('p3-2-1')"></i>

        <hr class="separator"/> 

        <h1 id="topic-1-3">Topic Three</h1>
        <p id="p1-3-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus vitae congue. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Volutpat diam ut venenatis tellus in metus vulputate eu. Massa tincidunt dui ut ornare. Proin nibh nisl condimentum id venenatis a. Volutpat est velit egestas dui id ornare arcu. Adipiscing at in tellus integer feugiat scelerisque varius. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Fermentum odio eu feugiat pretium nibh. Libero justo laoreet sit amet.
         Consequat nisl vel pretium lectus quam id leo. Pellentesque elit ullamcorper dignissim cras tincidunt. Amet aliquam id diam maecenas ultricies. Ut diam quam nulla porttitor massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dui accumsan sit amet nulla. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Fringilla urna porttitor rhoncus dolor purus non enim. Gravida rutrum quisque non tellus orci ac auctor. </p>
         <i class="fas fa-bookmark" v-if="bookmarks.includes('p1-3-1')"></i>

        <p id="p2-3-1">Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nibh mauris cursus mattis molestie. Vitae purus faucibus ornare suspendisse. Quis lectus nulla at volutpat diam ut. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Viverra orci sagittis eu volutpat odio. Consectetur a erat nam at lectus urna duis convallis. Amet dictum sit amet justo donec. Interdum varius sit amet mattis vulputate enim nulla aliquet. Sit amet massa vitae tortor condimentum. Lacus vel facilisis volutpat est velit egestas dui id. Enim tortor at auctor urna nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Duis at consectetur lorem donec massa sapien faucibus. Elit eget gravida cum sociis natoque penatibus et magnis dis.
         Adipiscing tristique risus nec feugiat in fermentum posuere urna. Enim ut sem viverra aliquet eget sit. </p>
         <i class="fas fa-bookmark" v-if="bookmarks.includes('p2-3-1')"></i>
         
        <p id="p3-3-1">Consectetur adipiscing elit duis tristique sollicitudin nibh. Orci phasellus egestas tellus rutrum. Elementum sagittis vitae et leo. Risus nec feugiat in fermentum posuere. Mauris in aliquam sem fringilla ut morbi. Egestas sed tempus urna et pharetra pharetra massa. Scelerisque felis imperdiet proin fermentum leo vel orci. In hendrerit gravida rutrum quisque. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Vulputate ut pharetra sit amet aliquam. Feugiat scelerisque varius morbi enim nunc. In hac habitasse platea dictumst quisque sagittis purus sit amet. Blandit volutpat maecenas volutpat blandit aliquam. Felis bibendum ut tristique et egestas quis ipsum. Et egestas quis ipsum suspendisse ultrices.
         Id faucibus nisl tincidunt eget nullam non nisi. Quis lectus nulla at volutpat diam ut venenatis tellus in. Nulla facilisi etiam dignissim diam quis enim. Sed libero enim sed faucibus turpis in eu. Tempor id eu nisl nunc mi ipsum. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Urna molestie at elementum eu. Arcu non sodales neque sodales ut etiam. Vitae turpis massa sed elementum tempus egestas sed sed risus. Quam id leo in vitae. Convallis a cras semper auctor. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Ultrices dui sapien eget mi proin. Cum sociis natoque penatibus et. Semper risus in hendrerit gravida rutrum quisque non tellus orci.</p>
         <i class="fas fa-bookmark" v-if="bookmarks.includes('p3-3-1')"></i> 
      </div>
      <toolBox @addBookmark="addBookmark"/>

    </div>
  </div>
</template>

<script>
// Importing the toolBox component and Firebase
import toolBox from './ToolBox.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default {
  name: 'ModuleOne',
  components: {
    toolBox, // The components used in this component
  },
  data() {
    return {
      bookmarks: [], // The data property for storing bookmarks
    };
  },
  methods: {
    // The method for adding a bookmark
    addBookmark(id) {
      // If the bookmark is not already in the array, add it
      if (!this.bookmarks.includes(id)) {
        this.bookmarks.push(id);
        // Also add the bookmark to Firebase
        firebase.database().ref('bookmarks').push(id);
      }
    },
  },
  // When the component is mounted, get the bookmarks from Firebase
  mounted() {
    firebase.database().ref('bookmarks').on('value', snapshot => {
      const data = snapshot.val();
      // If there are any bookmarks, add them to the bookmarks array
      if (data) {
        this.bookmarks = Object.values(data);
      }
    });
  },
};
</script>

<style scoped>

.shift-content {
margin-left: 250px; 
}
#module-one {
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:80%;
  height: 400px;
  object-fit: cover;
  align-items: center;
}

h1 {
  text-align: center;
}

.topic1-1 {
font-size: 17px;
font-family: Arial, Helvetica, sans-serif;
padding-left: 100px;
padding-right: 100px;
}
.paragraph {
margin-bottom: 50px; 
}
.separator {
border: 0;
border-top: 1px solid #ccc; 
margin: 50px 0; 
}
.fas.fa-bookmark {
  color: rgb(189,137,255); 
  font-size: 15px;
}
</style>

