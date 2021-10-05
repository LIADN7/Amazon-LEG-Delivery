const {Storage} = require('@google-cloud/storage');
const express = require("express");

const app = new express();

let filename = 'qr1.png'
const storage = new Storage({
    keyFilename: "./FB-Key.json"
 });

let bucketName = 'gs://fir-8c1bf.appspot.com'

const downloadFile = async() => {
    let destFilename = './new.png';
    const options = {
      // The path to which the file should be downloaded, e.g. "./file.txt"
      destination: './down/new.png'
    };

    // Downloads the file
    await storage.bucket(bucketName).file(filename).download(options);

    console.log(
      `gs://${bucketName}/ downloaded to ${destFilename}.`
    );
    storage.bucket(bucketName).file(filename).delete();
}


downloadFile();


