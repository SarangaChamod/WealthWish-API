import express from 'express';
import routes from './routes/cashTransaction/index';


const port = 3000;
const app = express();


app.use('/',routes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
}) 



