import express from 'express';
const app = express();

app.listen(3000);
app.get('/', (req,res) => {
    res.sendFile('./home.html')
})

app.use((req,res)=>{
res.status(404).sendFile('./404.html')
})