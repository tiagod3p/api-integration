const Deal = require("../models/Deal")

module.exports = {
    async index(req, res) {
        try {
            const deals = await Deal.find({}).sort({"created_at": 1}).sort({"deal_value": 1})

            if (!deals) return res.status(404).json({
                message: "No deals with status won on database colletions yet!"
            })
    
            return res.json(deals)
        } catch(err) {
            console.error(err)
            return res.status(500).json({
                message: "An error occurred! Please try again later.",
                err
            })
        }
    }
}