<template>
<div id="bodyDiv">
    <Header/>
    <div id="bigDiv">
         <b-navbar toggleable="lg" type="dark" variant="dark" id="helpPageImg">
        <b-nav-form id="helpPageForm">
          <h1>FAQ</h1>
          <p>Could not find what you were looking for? More information here</p>
          <div id="searchDiv">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </div>
        </b-nav-form>
    
      </b-navbar>
    <h2 id="customerSupport">Customer support</h2>
      <b-card-group deck id="cardDeck">
      <b-card
        border-variant="primary"
        header="Sales and Support"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
      
        <b-card-text>For customer service queries please call 019 - 27 61 27, available 8am to 4pm Monday to Friday. Alternatively, you can fill in our enquiry form and we will get back to you as soon as possible</b-card-text>
       </b-card>
        <b-card
        border-variant="primary"
        header="Technical Support"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>For Tchnical support queries please call 019 - 27 61 27, available 8am to 4pm Monday to Friday. Alternatively, you can fill in our enquiry form and we will get back to you as soon as possible</b-card-text>
       </b-card>
        <b-card
        border-variant="Customer Service"
        header="Customer service"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>For general support and queries please call 019 - 27 61 27, available 8am to 4pm Monday to Friday. Alternatively, you can fill in our enquiry form and we will get back to you as soon as possible</b-card-text>
       </b-card>
    </b-card-group >

    <div id="jambotronCard">
  <b-jumbotron header="Purchase books online" lead="Register and start ordering online">
    <p id="purchaseOnlineText">To purchase books online, you must have an online account. For existing Book shopper account customers, you can register for the Bookshopper online shop. If you are a new customer you will need to set up an online account.
</p>
    <b-button variant="primary" href="#" id="moreInfoButton">More Info</b-button>
  </b-jumbotron>
</div>
  </div>
         <Footer/>

</div>
</template>

<script>

import Header from "./Header"
import Footer from "./Footer"
export default {
  name: 'Help',
  components: {
    Header,
    Footer,
  }
  
}
</script>

<style>
#helpPageImg{
  background-image: url("https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  width: 100%;
  height: 500px;
  background-blend-mode:overlay;
  align-content: center;

}
#helpPageForm h1, #helpPageForm p{
  text-align: center;
  color: white;
  font-family: "Lora";
}
#helpPageForm p{
  font-size: 22px;
}
#helpPageForm{
  display: block;
  width: 100%;
}
.form-inline{
  width: 100%
}
#searchDiv{
  width: 25%;
  margin: auto;

}
#searchDiv input{
  width: 80%;
  padding: 4%;
  border-radius: 10px;
}
#searchDiv button{
  width: 18%;
  padding: 2%;
  border-radius: 10px;
}
#customerSupport{
  color: white;
  font-family: "Lora";
  text-align: center;
  margin: 3% 0;
}
#cardDeck, #bigDiv{
  margin-bottom: 3%  !important;
  font-size: 20px;
}
#jambotronCard{
  width: 78%;
  margin: auto;
}
.card-text:last-child{
  font-size: 21px !important;
}
#purchaseOnlineText{
  width: 80%;
}
#moreInfoButton{
  width: 400px;
}
</style>
