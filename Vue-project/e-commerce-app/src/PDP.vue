<template>
  <div id="bodyDiv">
    <Header />
    <div>
      <div id="firstWidget">
        <div id="productImg">
          <img :src="product.image.src" />
        </div>
        <div id="descritionDiv">
          <h1>{{ product.title }}</h1>
          <Price
            :originalPrice="cart * product.variants[0].price"
            :discountedPrice="cart * product.variants[0].compare_at_price"
          />
          <p v-if="product.variants[0].inventory_quantity > 10">In Stock</p>
          <p
            v-else-if="
              product.variants[0].inventory_quantity > 1 &&
                product.variants[0].inventory_quantity < 10
            "
          >
            Almost sold out! {{ product.variants[0].inventory_quantity }} left
          </p>
          <p v-else>Out of Stock</p>
          <hr />
          <h3 id="quantity">QUANTITY</h3>
          <div id="cart">
            <p>Cart({{ cart }})</p>
          </div>
          <b-button
            v-b-modal.modal-1
            id="addtocartButton"
            :disabled="product.variants[0].inventory_quantity <= 0"
            v-on:click="addToCart"
            >ADD TO CART</b-button
          >
          <b-button
            v-b-modal.modal-1
            id="byNowButton"
            v-on:click="buyNow(product.id, cart)"
            >BUY NOW</b-button
          >

          <hr />

          <p id="booksIntro">{{ product.body_html }}</p>
          <hr />
        </div>
      </div>
      <div id="productRecommendation">
        <h2 id="recommendedHeader">YOU MAY ALSO LIKE</h2>
        <div><br /><br /></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-cookies@1.7.4/vue-cookies.js"></script>
<script>
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Price from "./Price";

export default {
  name: "PDP",
  components: {
    Header,
    Footer,
    Price,
  },
  mounted() {
    axios
      .get(
        `http://localhost:8080/admin/api/2021-04/products/${this.fetchId()}.json`,
        {
          headers: {
            "X-Shopify-Access-Token": "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",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        this.product = response.data.product;
        console.log(this.product);
      });
  },

  data: function() {
    return {
      product: {
        inStock: true,
      },
      cart: 1,
    };
  },

  methods: {
    fetchId: function() {
      let currentWindow = new URLSearchParams(window.location.search);
      return currentWindow.get("id");
    },
    addToCart: function() {
      const shoppingCartCookie = this.$cookies.get("shopping-cart");
      let shoppingCart = {};
      if (shoppingCartCookie) {
        console.log(shoppingCartCookie);
        shoppingCart = shoppingCartCookie;
      }
      if (shoppingCart.hasOwnProperty(this.product.id)) {
        shoppingCart[this.product.id] += 1;
        this.cart += 1;
      } else {
        shoppingCart[this.product.id] = 1;
      }
      console.log(shoppingCart);
      this.$cookies.set("shopping-cart", JSON.stringify(shoppingCart));
    },
    buyNow: function(id, cart) {
      window.location.href =
        "http://localhost:8080/cart?id=" + id + "&amount=" + cart;
      console.log($cookies.set("product", this.product).id);
    },
  },
};
</script>
<style>
#firstWidget {
  background-color: white;
  width: 100%;
  padding: 2%;
  display: inline-flex;
}
#productImg {
  width: 30%;
}
#productImg img {
  width: 80%;
}
#productRecommendation {
  margin-bottom: 3%;
}
#cart {
  width: 120px;
  display: inline-flex;
  margin-right: 2%;
}
#addtocartButton,
#byNowButton {
  width: 300px;
  background-color: #007bff;
  border: 1px solid #007bff;
  margin-left: 2%;
}

#descritionDiv {
  width: 50%;
  margin-top: 3%;
  color: rgb(128, 128, 128);
}
#booksIntro {
  font-size: 19px;
}
#price {
  font-size: 25px;
  font-weight: 600;
}
h1 {
  font-weight: 400;
}
#quantity {
  margin: 3% 0;
}
#recommendedHeader {
  text-align: center;
  color: rgb(128, 128, 128);
  margin: 3% 0;
  font-family: "lora";
}
#recommendationBooks {
  margin: auto;
  width: 80%;
}
.disabledButton {
  background-color: grey;
}
</style>
