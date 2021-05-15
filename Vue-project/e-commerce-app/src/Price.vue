<template>
  <div id="priceDiv">
    <p class="regularPrice" v-if="originalPrice == effectivePrice" style="font-weight: 700">$ {{originalPrice}}</p>
    <p class="originalPrice" v-if="originalPrice != effectivePrice"><span id="beforeDiscount">${{originalPrice}}</span> </p>
    <p class="discountedPrice" v-if="originalPrice != effectivePrice"><span id="afterDiscount"> ${{effectivePrice}}</span></p>
  </div>
</template>

<script>


export default {
  name: 'Price',
  components: {
    
  },
  data: function(){
    return{
      products:[

      ]
    }
  },
  props:{
    originalPrice: Number,
    discountedPrice: Number,
  },

  computed: {
    effectivePrice: function(option){
      if(option.discountedPrice){
        return option.discountedPrice;
      }else{
        return option.originalPrice;
      }
    }
  }
}
</script>

<style>
#priceDiv{
  background-color: white;
  font-size: 25px;
  
}
#afterDiscount{
  color: red;
  font-weight: 700;
}
#beforeDiscount{
  text-decoration: line-through;
}
</style>
