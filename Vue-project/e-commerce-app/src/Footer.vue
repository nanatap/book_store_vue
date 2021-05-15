<template>

<div id="footerDiv">
   <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Contact us</b-nav-item>
        <b-nav-item href="#" >Privacy policy</b-nav-item>
        <b-nav-item href="#" >Terms and conditions</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>


export default {
  name: 'Footer',
  components: {
    
    
  }
}
</script>

<style>

#footerDiv{
  position: sticky;
}

</style>
