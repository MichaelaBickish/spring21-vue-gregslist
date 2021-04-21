<template>
  <div class="cars container">
    <div class="row">
      <div class="col py-3">
        <h2>Houses</h2>
        <button class="btn btn-outline-success">
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="row">
      <House v-for="house in state.houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
  import { computed, onMounted, reactive } from 'vue'
  import House from '../components/HouseComponent'
  import { AppState } from '../AppState'
  import { housesService } from '../services/HousesService'

  export default {
    name: 'HousesPage',
    setup() {
      const state = reactive({
        houses: computed(() => AppState.houses)
      })

      onMounted(async () => {
        try {
          await housesService.getHouses()
        } catch (error) {
          console.error(error)
        }
      })
      return {
        state
      }
    },
    components: {
      House
    }
  }

</script>

<style lang="scss" scoped>

</style>