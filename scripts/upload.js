const fileUpload = require('express-fileupload');
const path = require("path");
let upload = {};

var des=path.join(process.cwd(),"slot","default")
upload.uploadimg = (file,id,name,upname) =>{
  
  var dir=path.join("slot",id)
  if (!file || Object.keys(file).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  else{
    console.log("name of file")
  if(upname)
  {
    console.log(upname)
    upname.mv(path.join(dir,'img',name), function(err){
    if(err)
    {
      console.log(err)
      return false
    }
    else{
          console.log(path.join(dir,'img',name))
          console.log("file uploaded")
        }
      })
    }
    else
    {
      console.log("no file sent")
    }
  }
  
}
  
module.exports = upload;
