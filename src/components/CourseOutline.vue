<template>
    <div class="content-container">
        <h1>Course Outline 2024</h1>
            
        <p class="content">Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nibh mauris cursus mattis molestie. Vitae purus faucibus ornare suspendisse. Quis lectus nulla at volutpat diam ut. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Viverra orci sagittis eu volutpat odio. Consectetur a erat nam at lectus urna duis convallis. Amet dictum sit amet justo donec. Interdum varius sit amet mattis vulputate enim nulla aliquet. Sit amet massa vitae tortor condimentum. Lacus vel facilisis volutpat est velit egestas dui id. Enim tortor at auctor urna nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Duis at consectetur lorem donec massa sapien faucibus. Elit eget gravida cum sociis natoque penatibus et magnis dis.
        Adipiscing tristique risus nec feugiat in fermentum posuere urna. Enim ut sem viverra aliquet eget sit. </p>

        

        <p class="content">Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nibh mauris cursus mattis molestie. Vitae purus faucibus ornare suspendisse. Quis lectus nulla at volutpat diam ut. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Viverra orci sagittis eu volutpat odio. Consectetur a erat nam at lectus urna duis convallis. Amet dictum sit amet justo donec. Interdum varius sit amet mattis vulputate enim nulla aliquet. Sit amet massa vitae tortor condimentum. Lacus vel facilisis volutpat est velit egestas dui id. Enim tortor at auctor urna nunc. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Duis at consectetur lorem donec massa sapien faucibus. Elit eget gravida cum sociis natoque penatibus et magnis dis.
        Adipiscing tristique risus nec feugiat in fermentum posuere urna. Enim ut sem viverra aliquet eget sit. </p>

        <hr class="separator"/> 

        <a class="download-link" href="src/downloads/CourseOutline.pdf" download="CourseOutline.pdf">Course Outline.pdf</a>


    </div>
</template>



<script>
export default {
  name: 'CourseOutlineComponent',
};
</script>



<style scoped>

  h1 {
    text-align: left;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 10vw;
    padding-right: auto;
  }

  .content-container {
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
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

.download-link {
    text-decoration: none;
    color: inherit;
    font-size: 20px;
    Padding-left: 100px;
}

.download-link:hover {
    color: rgb(61, 29, 175);
}
</style>