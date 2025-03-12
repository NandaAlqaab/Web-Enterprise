import {writeFile, readFile} from 'fs/promises';

async function extractFile(){
    try{
        const file = await readFile('data.txt', 'utf8');
        console.info(file);
    }catch(err){
        console.log('Error membaca file',err);
    }
}

async function writeToFile(){
    try{
        await writeFile('output.txt', 'Hello NodeJs FileSystem');
        console.info('Write File Berhasil');
    }catch{
        console.log('Error menulis file',err);
    }
}

extractFile();
writeToFile();