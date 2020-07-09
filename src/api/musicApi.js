import axios from 'axios'

export const musicApi = {
    getTracks: async () => {
        try {
            let response = await axios.get(`/music`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: 'crashed', resultCode: 1 }
        }
    }
}