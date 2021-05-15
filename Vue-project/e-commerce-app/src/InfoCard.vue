<template>

<div>

  <div class="mt-4">
    <b-card img-src="https://images.unsplash.com/photo-1610999223228-fefac326a692?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvb2tzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <h3>Book shopper offers </h3>
        <p id="infoP">
Book shopper is a large organization, which provides the best services to our clients all over the Europe. We have up to 200 shops all over the Europe and 35,000 people working with our product. Books shopper offers: books, audio books, up to 10,000 free books, used and new books. We offer free e-books for all our subscribers. </p>     </b-card-text>
    </b-card>

 
  </div>
</div>

</template>

<script>


export default {
  name: 'InfoCard',
  components: {
    
    
  }
}
</script>

<style>

.mt-4{
  width: 78%;
  margin: auto;
}
.mt-4 img{
  width: 30%;
  margin-right: 5%;
}
.card-text{
  width: 80%;
  font-size: 25px;
  color: #808080;
  text-align: left;
} 
.card-text h3{
  font-size: 30px;
  color: #808080;
  margin: 5% 0;
  text-align: left;
  
} 
#infoP{
  text-align: left;
  line-height: 40px;
}


</style>
