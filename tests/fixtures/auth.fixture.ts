import { test as base } from '@playwright/test';
import { AuthHelper, STORAGE_STATE_PATH } from '../helpers/auth.helper';
import { ENV } from '../config/env';
import fs from 'fs'; 


export const test = base.extend({
    storageState: async ({}, use) => {
        let needLogin = true;


        if(fs.existsSync(STORAGE_STATE_PATH)) {
            const expired = await AuthHelper.isSessionExpired(STORAGE_STATE_PATH);
            if (!expired) {
                console.log('Storage State Valid, use the Session');
                needLogin = false; 
            } else {
                console.log('Cookie Expired, relogin...'); 
            }
        } else {
            console.log('No Storage State, need to login...');
        }

        if (needLogin) {
            await AuthHelper.loginAndSave(ENV.adminEmail, ENV.adminPassword);
        }
            
            await use(STORAGE_STATE_PATH);
        },
});