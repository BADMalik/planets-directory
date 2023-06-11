import {parse} from 'csv-parse'
import { createReadStream } from 'fs'


let results = []

createReadStream('kepler_data.csv').pipe(parse({
    comment:"#",
    columns:true
}))
.on('data', (data)=> {
    return results.push(data)
})
.on('end', ()=> {
    console.log(results)
})
.on('error', (err)=> {
    console.log(err)
})