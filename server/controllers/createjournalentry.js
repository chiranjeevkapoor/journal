const prisma = require('../db/connection')


const createjournalentry = async (req,res) => {
    const {postcontent,createdBy} = req.body;
    await prisma.Journalentries.create({
        data:{
            postcontent:postcontent,
            createdBy:createdBy
        }
    })
    
    res.status(200).send(postcontent,createdBy)
}

module.exports = createjournalentry;