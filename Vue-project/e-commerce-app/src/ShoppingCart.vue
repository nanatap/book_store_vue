<template>
  <div id="bodyCartDiv">
    <Header />
    <div id="cartBigDiv">
      <h1 id="cartHeading">SHOPPING CART</h1>
      <p id="whiteWidgetContent" v-if="products.length === 0">
        Your cart is empty
      </p>
      <div v-else>
        <div
          id="cartWhiteWidget"
          v-for="(product, index) in products"
          :key="product.id"
        >
          <div id="productsInCartDiv">
            <img id="productImageCart" :src="product.image.src" />
            <p id="prodTitle">
              {{ product.title }} <br />
              <span
                v-bind:id="index"
                v-on:click="deleteProductFromCart"
                style="cursor:pointer"
                >Remove</span
              >
            </p>
          </div>
          <div id="priceAndQuantityDiv">
            <div>
              <b-form-spinbutton
                id="sb-step"
                v-model="productAmounts[index]"
                min="0"
                max="10"
                step="1"
              ></b-form-spinbutton>
            </div>
            <p id="priceCart">
              $ {{ productAmounts[index] * product.variants[0].price }}
            </p>
          </div>
        </div>
        <div id="secondWidgetCart">
          <div id="messageDiv">
            <h5>SPECIAL INSTRUCTIONS FOR SELLER</h5>
            <textarea></textarea>
          </div>
          <div id="leftSideCart">
            Total: ${{ calcTotalPrice }}
            <br />
            Tax included and shipping calculated at checkout
          </div>
          <br />
          <a href="/profile" id="checkoutButtonA"
            ><button id="checkoutButton">
              Check out
            </button></a
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
<script>
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

export default {
  name: "ShoppingCart",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.fetchProductsFromCookie();

    this.fetchAmount();
  },
  data: function() {
    return {
      products: [],
      productAmounts: [],
      productInBasket: [],
      totalPrice: 1,
      amount: 0,
    };
  },
  methods: {
    fetchId: function() {
      let currentWindow = new URLSearchParams(window.location.search);
      return currentWindow.get("id");
    },
    fetchProductsFromCookie: async function() {
      let myProductCookies = this.$cookies.get("shopping-cart");
      let shoppingCart = {};
      if (myProductCookies) {
        shoppingCart = myProductCookies;
      }
      const keys = Object.keys(shoppingCart);
      for (const k of keys) {
        let info = await this.fetchProductInfo(k);
        this.products.push(info);
        this.productAmounts.push(shoppingCart[k]);
      }
    },
    fetchAmount: function() {
      let currentWindow = new URLSearchParams(window.location.search);
      this.amount = parseInt(currentWindow.get("amount"));
      return this.amount;
    },
    fetchProductInfo: async function(id) {
      const result = await axios.get(
        `http://localhost:8080/admin/api/2021-04/products/${id}.json`,
        {
          headers: {
            "X-Shopify-Access-Token": "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",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return result.data.product;
    },
    deleteProductFromCart: function(event) {
      const i = parseInt(event.target.id);
      const id = this.products[i].id;
      let myProductCookies = this.$cookies.get("shopping-cart");
      let shoppingCart = {};
      if (myProductCookies) {
        shoppingCart = myProductCookies;
      }
      // this.totalPrice = this.productAmounts[i];
      // console.log(this.totalPrice);
      delete shoppingCart[id];
      this.$cookies.set("shopping-cart", JSON.stringify(shoppingCart));
      delete this.products[i];
      delete this.productAmounts[i];
    },
  },
  computed: {
    calcTotalPrice: function() {
      let total = 0;
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        total += product.variants[0].price * this.productAmounts[i];
      }
      return total;
    },
  },
};
</script>

<style>
#bodyCartDiv {
  background-color: #2b2f3f;
  color: rgb(151, 151, 151);
  font-family: "Lora";
}
#cartBigDiv {
  width: 80%;
  margin: 0 auto;
  min-height: 1200px;
  height: 100%;
}
#cartHeading {
  color: rgb(151, 151, 151);
  padding: 2% 0;
  font-family: "Lora";
  letter-spacing: 3px;
  font-weight: 300;
}
#cartWhiteWidget {
  width: 100%;
  background-color: white;
  padding: 5%;
  margin: 0 auto;
  height: auto;
  margin-bottom: 3%;
  margin-top: 3%;
}
#whiteWidgetContent {
  font-size: 22px;
}
#secondWidgetCart {
  display: block;
  width: 100%;
  margin-bottom: 5%;
}
#messageDiv {
  width: 40%;
  color: rgb(151, 151, 151);
  margin-bottom: 3%;
  display: inline-block;
}
#messageDiv textarea {
  width: 100%;
  height: 120px;
}

#leftSideCart {
  float: right;
  width: 30%;
  font-size: 22px;
  text-align: right;
}
#checkoutButton {
  color: white;
  background-color: #3c75c2;
  padding: 1%;
  border: none;
  width: 180px;
  font-size: 18px;
  float: right;
}
#checkoutButtonA {
  color: white;
  background-color: #3c75c2;
  padding: 1%;
  border: none;
  font-size: 18px;
  float: right;
}
#productImageCart {
  width: 200px;
}
#productsInCartDiv {
  display: inline-flex;
  width: 50%;
}
#prodTitle {
  font-size: 25px;
  font-weight: 600;
  padding-left: 2%;
  vertical-align: middle;
}
#removeProduct {
  color: #3c75c2;
  font-weight: 400;
  cursor: pointer;
}
#priceAndQuantityDiv {
  display: inline-flex;
  float: right;
}
#priceCart {
  float: right;
  font-size: 25px;
  margin-left: 3px;
}
</style>
