<template>

<div>
 <b-card-group deck>

     <b-card title="CHILDREN'S BOOKS" img-src="https://images.unsplash.com/photo-1615959502645-70413bb96970?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNoaWxkcmVuJTIwYm9va3xlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" img-alt="Image" img-top>
      <b-card-text>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </b-card-text>
      <template #footer>
        <small class="text-muted">VIEW ALL</small>
      </template>
    </b-card>

    <b-card title="HISTORICAL BOOKS" img-src="https://images.unsplash.com/photo-1576616519587-986b14a1388a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhpc3RyaWNhbCUyMGJvb2t8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" img-alt="Image" img-top>
      <b-card-text>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </b-card-text>
      <template #footer>
        <small class="text-muted">VIEW ALL</small>
      </template>
    </b-card>

    <b-card title="BESTSELLERS" img-src="https://images.unsplash.com/photo-1572447087213-3acd345dc219?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGhpc3RyaWNhbCUyMGJvb2t8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" img-alt="Image" img-top>
      <b-card-text>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </b-card-text>
      <template #footer>
        <small class="text-muted">VIEW ALL</small>
      </template>
    </b-card>
  </b-card-group>
</div>

</template>

<script>

export default {
  name: 'ProductCategories',
  components: { 
  }
}
</script>

<style>
.card-deck{
  width: 80%;
  margin: auto  !important;
}
.card-img, .card-img-top{
  height: 600px;
  object-fit: cover;
}


</style>
