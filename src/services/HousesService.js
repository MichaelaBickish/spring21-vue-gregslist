import { AppState } from '../AppState'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    const res = await api.get('houses')
    AppState.houses = res.data
  }

  async createHouse(newHouse) {
    const res = await api.post('houses', newHouse)
    AppState.houses.push(res.data)
  }
}

export const housesService = new HousesService()
