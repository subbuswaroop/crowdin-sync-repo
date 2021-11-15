var fs = require("fs");
const shell = require('shelljs');
var AdmZip = require("adm-zip");

let folderNamesList = new Set();
shell.exec('rm -r tmp');
fs.readFile("/Users/smuthusubramanian/Downloads/fd_helpkit_ember_trans.zip", function(err, data) {
    if (err) throw err;
    var zipFile = new AdmZip(data);
    var zipEntries = zipFile.getEntries();

    // // Get list of all filenames
    // zipEntries.forEach(function (entry, indx) {
    //     let foldername = entry.entryName.split("/")[0];
    //     // let filename = entry.entryName.split("/")[1];
    //     if(ignorableFiles.includes(foldername)) return;
    //     folderNamesList.add(foldername);

    //     // Creating a tmp folder and adding all the files for each language
    //     zipFile.extractEntryTo(entry.entryName, `./tmp/${foldername}`, false, true);
    // });
    zipFile.extractAllTo('./tmp');

    // console.log(folderNamesList);

    // folderNamesList.forEach(foldername=> {
    shell.exec(`node js/merge_i18n.js`);
    // })

    // Remove tmp folder
    // shell.exec('rm -r tmp');
});
