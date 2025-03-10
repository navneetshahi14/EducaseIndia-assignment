const db = require('../db/db')

const AddSchool = async(req,res) =>{
    try{
        const {name,address,longitude,latitude } = req.body

        if(!name || !address || !longitude || !latitude)return res.json({error:"All fields are required"})


        const sql = "INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)"
        await db.execute(sql,[name,address,latitude,longitude])

        res.status(200).json({msg:"Successfully added school"})

    }catch(err){
        console.log(err.message)
        res.status(500).json({error:"Internal server error"})
    }
}

const ListSchools = async(req,res)=>{
    try{

        const {latitude,longitude} = req.query;
        
        if(!latitude|| !longitude) return res.status(300).json({error:"Your latitude and longitude required"})

        const sql = `SELECT id, name, address, latitude, longitude,
            (6371 * ACOS(
                COS(RADIANS(?)) * COS(RADIANS(latitude)) *
                COS(RADIANS(longitude) - RADIANS(?)) +
                SIN(RADIANS(?)) * SIN(RADIANS(latitude))
            )) AS distance
            FROM schools
            ORDER BY distance ASC;
        `

        const [schools] = await db.query("SELECT id, name, address, latitude, longitude FROM schools");

        const sortedSchools = schools.map(school => {
            const distance = Math.sqrt(
                Math.pow(school.latitude - latitude, 2) + Math.pow(school.longitude - longitude, 2)
            );
            return { ...school, distance };
        }).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools)

    }catch(err){
        console.log(err.message)
        res.status(500).json({error:"Internal server error"})
    }
}



module.exports = {
    AddSchool,
    ListSchools
}