const axios = require('axios')

const baseUrl = process.env.PIPEDRIVE_BASE_URL
const key = process.env.PIPEDRIVE_KEY

module.exports = {
    async getDealsWithStatusWon() {
        try {
            const { data } = await axios.get(`${baseUrl}/deals?limit=500&api_token=${key}`)
        
            const dealsWithStatusWon = data.data.filter(data => data.status === "won")
    
            return dealsWithStatusWon
        } catch(err) {
            console.error(err)
            return
        }
    }
}