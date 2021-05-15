<template>
  <div id="myProfileBody">
    <Header />
    <h1 id="myProfileHeading">MY PROFILE</h1>
    <div id="myProfileBigDiv">
      <div id="orderHistory">
        <b-card
          bg-variant="light"
          header="Order History"
          class="text-left"
          id="OrderHistoryCardHeading"
        >
          <b-card-text id="OrderHistoryInnerText"
            >You haven't placed any orders yet.</b-card-text
          >
        </b-card>
      </div>
      <div id="accountDetailsDiv">
        <b-card
          bg-variant="light"
          header="Account Details"
          class="text-left"
          id="accountDetails"
        >
          <b-card-text id="accountDetailsText">View addresses (1)</b-card-text>
        </b-card>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "myProfile",
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
#myProfileBody {
  background-color: #2b2f3f;
  color: rgb(151, 151, 151);
  font-family: "Lora";
}

#myProfileBigDiv {
  display: flex;
  margin-bottom: 800px;
}
#myProfileHeading {
  padding: 2%;
  letter-spacing: 2px;
  font-weight: 300;
}
#orderHistory {
  width: 50%;
  margin: 2%;
}
#OrderHistoryInnerText {
  text-align: left;
  font-weight: 200;
  padding-top: 2%;
}
#OrderHistoryCardHeading {
  font-size: 30px;
  font-weight: 500;
  min-height: 200px;
}
#accountDetailsDiv {
  width: 35%;
  margin: 2%;
}
#accountDetails {
  min-height: 150px;
  font-weight: 500;
  font-size: 25px;
}
#accountDetailsText {
  text-align: left;
  color: #4587e1;
  font-weight: 200;
}
</style>
