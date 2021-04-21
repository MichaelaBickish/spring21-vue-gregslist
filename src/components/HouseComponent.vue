<template>
  <div class="house col-md-4 mb-3">
    <div class="card shadow">
      <img class="card-img-top" :src="house.imgUrl" alt="">
      <div class="card-body">
        <h3 class="card-title">
          ${{ house.price }}
        </h3>
        <p>{{ house.bedrooms }} beds | {{ house.bathrooms }} baths</p>
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
