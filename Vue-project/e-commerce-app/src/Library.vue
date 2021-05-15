<template>
  <div id="bodyDiv">
    <Header/>
    <div id="libraryDiv">
      <h1 id="productsHeading">PRODUCTS</h1>
          <b-card
        v-for="product in products.products" :key="product.id"
        v-bind:title="product.title"
        :img-alt="product.title" 
        :img-src="product.image.src"
        :id="product.id"
        :height="product.height"
        img-top
        tag="article"
        style="width: 300px; height: 450px; object-fit: contain; cursor: pointer"
        class="mb-2"
        :visually-hidden="product.price"
        v-on:click='onProductClick(product.id)'
        :sub-title="'$' + product.variants[0].price"
      />
        
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from "./Header"
import Footer from "./Footer"
import axios from "axios"
export default {
  name: 'Library',
  components: {
    Header,
    Footer,
  },
  mounted(){
    axios.get("http://localhost:8080/admin/api/2021-04/products.json", {headers: {"X-Shopify-Access-Token":"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", "Access-Control-Allow-Origin": "*"}}).then (
     response => {
        console.log(response.data.products)
       console.log(response.data)
       this.products = response.data
     }
    )
  },
  data: function(){
    return{
      products:[

      ]
    }
  },
  methods:{
   onProductClick: function(id){
    
     window.location.href = "http://localhost:8080/pdp?id=" + id;
   }
  }
  
}
</script>

<style>
.mb-2{
  margin: 2%;
  display: inline-flex;
}
.mb-2 img{
  height: 300px;
  object-fit: cover;
}
.card-body, .card-body p{
  text-align: center;
  width: 100% !important;
  color: rgb(92, 92, 92);
}
.btn-primary{
  width: 70%;
}
#productsHeading{
  color:rgb(151, 151, 151);
  padding: 2%;
}
#libraryDiv{
  margin-bottom: 5%;
}
#productsHeading{
  color: rgb(109, 109, 109);
  font-family: "Lora";
  letter-spacing: 2px;

}
</style>
