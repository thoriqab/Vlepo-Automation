import dotenv from 'dotenv';
import path from 'path';

dotenv.config(); 

export const ENV = {
    baseURL : process.env.BASE_URL || 'https://staging.vlepo.id',
    apiBaseURL : process.env.API_BASE_URL || 'https://staging.vlepo.id/api',
    defaultEmail : process.env.DEFAULT_EMAIL || '',
    defaultPassword : process.env.DEFAULT_PASSWORD || '',
    adminEmail : process.env.ADMIN_EMAIL || '',
    adminPassword : process.env.ADMIN_PASSWORD || '',
    storagePath : (role: 'default' | 'admin') => 
        path.resolve(__dirname,`../storage/${role}-storage.json`),
};