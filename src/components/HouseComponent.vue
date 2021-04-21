<template>
  <div class="house col-md-4 mb-3">
    <div class="card shadow">
      <img src="//placehold.it/100x100" alt="" class="card-img-top">
      <div class="card-body">
        <h3 class="card-title">
          {{ house.bedrooms }} beds
        </h3>
        <h4>{{ house.bathrooms }} baths</h4>
        <h5>${{ house.price }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'House',
    props: {
      house: {
        type: Object,
        required: true
      }
    },
    setup() {
      return {}
    },
    components: {

    }
  }

</script>

<style lang="scss" scoped>

</style>