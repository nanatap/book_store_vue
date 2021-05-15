<template>

<div>
 <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Boundless world of books" 
        text="Find and order your book from the library or read online"
        img-src="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJvb2tzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJvb2tzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
        <h1>READ WITH US</h1>
      </b-carousel-slide>

   
    </b-carousel>

 </div>
</div>

</template>

<script>

export default {
  name: 'Carousel',
  components: {
    
  }
}
</script>

<style>
.carousel{
margin-bottom: 5%;
}
.carousel-item{
   height: 800px;
   object-fit: cover;
}


</style>
