import { AppState } from '../AppState'
import { api } from './AxiosService'

class JobsService {
  async getAllJobs() {
    const res = await api.get('jobs')
    AppState.jobs = res.data
}
}

export const jobsService = new JobsService()
