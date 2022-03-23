const fs = require('fs')
const fileUpload = require('express-fileupload');
const fse = require('fs-extra')
const path = require("path");
const upload = require("./upload");
let sender = {};
sender.createdir = (id) =>{
  console.log("Creating directory")
  dir=path.join(process.cwd(),"slot",id)
  console.log("ID:"+id)
  console.log(dir)
  fs.mkdir(dir,{recursive:true}, (error) => {
      if(error){
          console.error('This error occured'+error)
      }
      else 
      {
          console.log('The directory for ID: '+id)
      }
  })  
};
sender.createFile = (req,id) => {
    obj=req.body
    let filer = req.files
    dir=path.join(process.cwd(),"slot",id)
    des=path.join(process.cwd(),"slot","default")
    fs.copyFile( path.join(des,"style.css"), path.join(dir,"style.css") , (err) =>{
        if(err)
        {
            console.log(err)
        }
    })
    fs.copyFile( path.join(des,"index.html"), path.join(dir,"index.html") , (err) =>{
        if(err)
        {
            console.log(err)
        }
    })
    fs.copyFile( path.join(des,"script.js"), path.join(dir,"script.js") , (err) =>{
        if(err)
        {
            console.log(err)
        }
    })
    fs.copyFile( path.join(des,"index.html"), path.join(dir,"index.ejs") , (err) =>{
        if(err)
        {
            console.log(err)
        }
    })
    fse.copy(path.join(des,"img"), path.join(dir,"img"),{ overwrite: false, errorOnExist: false }, function (err) {
        if (err) return console.error(err)
        console.log('success! copied images over!')
        
      for(var achimg=1;achimg<=obj.countach;achimg++)
      {
        upload.uploadimg(filer,id,achimg+".jpg",filer["achieve"+achimg+"img"])
      }
      
      });

    
    // fse.copy(des, path.join(dir,id), function (err) {
    //     if (err) return console.error(err)
    //     console.log('success! copied folder')
    // });
}

module.exports = sender;

/* 
    */