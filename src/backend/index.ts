import "dotenv/config"; 
import { startSequelize  } from './models';
import app from './app';

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    try {
        await startSequelize();
       
    } catch (error) {
        console.error(error);
        process.abort();
    }
})