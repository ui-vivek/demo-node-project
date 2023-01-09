const exp=require('express')  // Exp is the name randum only 
const port=800;
const db = require('./mong');
const app=exp(); 

app.get('/',(req,res)=>{
    // console.log(req);
    res.send("<h1 style='color:red; background-color:yellow;text-align:center'>Hye. ! I am Express ;)</h1>")

})


app.listen(port,(err)=>{
    if(err){
        console.log("Error..!  :(",err);
    }

    console.log("Express : I am running at port number :", port )

})