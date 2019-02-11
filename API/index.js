const express=require('express')
const app = express();

app.get ('/',(req,res)=>{
	res.statusCode=200
	res.send('Hello Munny')
});
app.listen(3000, () =>{
	console.log('Example app listening on port 8000!')
});