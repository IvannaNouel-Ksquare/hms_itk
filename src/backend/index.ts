import "dotenv/config"; 
import * as admin from 'firebase-admin';
import { startSequelize  } from './models';
admin.initializeApp();

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