const Deal = require("../models/Deal")

module.exports = {
    async index(req, res) {
        const deals = await Deal.find({})

        if (!deals) return res.status(404).json({
            message: "No deals with status won on database colletions yet!"
        })

        return res.json(deals)
    }
}