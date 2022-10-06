import { Request, Response } from "express";
import { createReadStream } from "fs";


export const FetchFromFile = async(req :Request , res:Response)=>{
    let dir = process.cwd() 
    let info = [];
    let {keyword} = req.params

    try {
        let readStream = createReadStream(`${dir}/app/asset/docx.csv`, {encoding:"utf8"});
        readStream.on('data', (chunk:string) => {
            let line = chunk.split(/\r\n/);
            let breakdown = line.map(l=>{
                let result = l.split(",");
                return result[1];
            })
            info = [...breakdown];
        });
    
        readStream.on('error', (err) => {
            console.log(err);
            console.log('error found');
        });
    
        readStream.on('end', () => {
            console.log('Finished reading');
            let result = info.filter(i=> i.includes(keyword));
            res.status(200).json({status:200, result});
        });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

export const FetchViaPost = async(req :Request , res:Response)=>{
    let dir = process.cwd() 
    let info = [];
    let {keyword} = req.body

    try {
        let readStream = createReadStream(`${dir}/app/asset/docx.csv`, {encoding:"utf8"});
        readStream.on('data', (chunk:string) => {
            let line = chunk.split(/\r\n/);
            let breakdown = line.map(l=>{
                let result = l.split(",");
                return result[1];
            })
            info = [...breakdown];
        });
    
        readStream.on('error', (err) => {
            console.log(err);
            console.log('error found');
        });
    
        readStream.on('end', () => {
            console.log('Finished reading');
            let result = info.filter(i=> i.includes(keyword));
            res.status(200).json({status:200, result});
        });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}