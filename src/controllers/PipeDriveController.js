const { getDealsWithStatusWon } = require("../services/pipedrive")
const { createOrder } = require("../services/bling")

const Deal = require("../models/Deal")

module.exports = {
    async index(req, res) {
        try {  
            const wonDeals = await getDealsWithStatusWon()

            if (!wonDeals) return res.status(404).json({
                message: "No deals with status won yet!"
            })

            const createOrderPromises = wonDeals.map(deal => {
                const id = deal.id
                const personName = deal.person_id === null ? "Any Name" : deal.person_id.name
                const orgName = deal.org_id === null ? "Any Organization" : deal.org_id.name
                const dealTitle = deal.title === null ? "Any Title" : deal.title
                const dealValue = deal.value === null ? "Any Value" : deal.value
                const createdAt = deal.add_time
                const updatedAt = deal.update_time

                Deal.findOne({"id": id}, "id", async (err, deal) => {
                    if (err) return res.status(500).json({
                        message: "An internal error occurred! Please try again later."
                    })

                    if (deal === null) {
                        const newDeal = new Deal({
                            id,
                            person_name: personName,
                            org_name: orgName,
                            deal_title: dealTitle,
                            deal_value: dealValue,
                            created_at: createdAt,
                            updated_at: updatedAt
                        })
                
                        await newDeal.save()
                    }
                })
                
                return createOrder(deal)
            })
    
            await Promise.all(createOrderPromises)

            return res.json(wonDeals)
    
          } catch(err) {
              console.error(err)
              return res.status(500).json({
                  message: "An error occurred! Please try again later.",
                  err
              })
          }
    }

}