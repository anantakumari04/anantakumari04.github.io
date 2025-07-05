import dotenv from 'dotenv'

dotenv.config() //config start and memory me aa jaega sara variable

//noe can acces vvar from .env file
const dbuser =encodeURIComponent( process.env.DBUSER) //eucomp isiliye taki jb deploy kre to wo hmare code ko ache se read kr ske

const dbpass = encodeURIComponent(process.env.DBPASS)
console.log(dbuser,dbpass)