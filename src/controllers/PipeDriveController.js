const { getDealsWithStatusWon } = require("../services/pipedrive")
const { createOrder } = require("../services/bling")

module.exports = {
    async index(req, res) {
        try {  
            const wonDeals = await getDealsWithStatusWon()

            if (!wonDeals) return res.status(404).json({
                message: "No deals with status won yet!"
            })

            const createOrderPromises = wonDeals.map(deal => {
                return createOrder(deal)
            })
    
            await Promise.all(createOrderPromises)

            return res.json(wonDeals)
    
          } catch(err) {
              console.error(err)
              return res.status(500).json({
                  message: "An error ocurred! Please try again later.",
                  err
              })
          }
    }

}