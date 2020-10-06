// Create directory called fs-try

// - Using fs module:
// - create a directory called content using fs method and it should log 'content folder created'
// - create a file using fs method called randomText.txt that lives outside the content directory
// - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
// - Now create a separate setTimeout function that after 7 seconds deletes the content directory
console.clear();
const fs = require('fs');

fs.mkdir('new-directory', (err)=>{
    if (err) throw err;
    console.log('folder created');
})

// creating new file inside the newly created folder and inserting texts inside the file
fs.writeFile('./randomText.txt','file inside a directory',(err)=>{ 
    if(err) return console.log(err)
    console.log('first file created ');
})

let readme = fs.readFileSync('./randomText.txt', 'utf-8')//will finish this code before moving to next step


//creating a file and inserting text form old file
fs.writeFile('verbage.txt', readme ,(err)=>{
    if(err) return console.log(err)

     console.log('verbage.txt created')
})

setTimeout(()=>{
    fs.rmdir('./new-directory',(err)=>{
        if(err) return console.log(err)

        console.log('folder deleted')
    })

}, 7000)