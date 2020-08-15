const Deal = require("../models/Deal")

module.exports = {
    async index(req, res) {
        const deals = await Deal.find({})

        return res.json(deals)
    }
}