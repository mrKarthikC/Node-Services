const fs = require('fs');

function allFileNames(folder) {
    fs.readdir(folder, (err, files) => {
        if(err){
            console.log(err);
        } else {
            for (let file of files) {
                console.log(file);
            }
        }
    })
}
console.log(allFileNames('.'));

function createFolder(folderName) {
    fs.mkdir(folderName, 0o777, (err)=> {
        if(err){
            console.log(err);
        }
        else console.log(folderName + ' created');
    })
}
console.log(createFolder('Nuova Cartella'));

function deleteFolder(folderName) {
    fs.rmdir(folderName, (err)=> {
        if(err){
            console.log(err);
        }
        else console.log(folderName + ' deleted');
    })
}
//console.log(deleteFolder('Cartella'));

function readTxt(file) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }
        else console.log(data);
    })
}
console.log(readTxt('Ayy.txt'));

function appendTxt(file, data) {
    fs.appendFile(file, data, 'utf-8', (err) => {
        if(err) {
            console.log(err);
        }
        else console.log('File : ' + file + ', has been updated.');
    })
}
console.log(appendTxt('Wolfgang.txt', 'Salieri absolutely despised him; it was out of jealousy.'));






