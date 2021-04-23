<template>
  <div class="JobsPage">
    {{ state.jobs }}
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'
import JobComponent from ' ../components/JobComponent'

export default {
  name: 'Component',
  setup() {
    onMounted(() => jobsService.getAllJobs())
    const state = reactive({
      jobs: computed(() => AppState.jobs)
    })
    return { state }
  },
  components: {
    JobComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
