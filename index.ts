const parse = require('csv-parse')
const fs = require('fs')



const results : any = []

fs.createReadStream('kepler_data.csv').pip(parse({
    comments:"#",
    columns:true
}))
.on('data', (data : any)=> {
    results.push(data)
})
.on('end', ()=> {
    console.log(results)
})
.on('error', (err : Error)=> {
    console.log(err)
})