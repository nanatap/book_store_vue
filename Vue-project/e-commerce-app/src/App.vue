<template>
<div id="bodyDiv">
    
        <Header/>
   
      <Carousel/>
     
      <ProductCategories/>
    
      <InfoCard/>
      <Footer/>
     
</div>
</template>

<script>
import Carousel from './Carousel.vue'
import Header from "./Header"
import ProductCategories from "./ProductCatgories"
import InfoCard from "./InfoCard"
import Footer from './Footer'

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    ProductCategories,
    InfoCard,
    Footer,
    
  }
}
</script>

<style>
#bodyDiv{
  background-color: #2B2F3F;
}


</style>
