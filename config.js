const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V246jOBD9F78mvYFwj9TSArmSOySB9GofDDbgcI1NSMio/31Fp1vT2p2Z7ZWWJ8s2p05VnTr+BvKCMDzHDRh8AyUlNaxwu6yaEoMBMC5hiCnoAgQrCAZAtK6uaWayEhe9lXtYOEgPyTXzTvtZTou9yEVeeCwTwcnFZ/DaBeXFT0nwC0DVPpz3Qyej0ryDpv3Mt5yhzw7RxB+fMnPl8b0ZZcRAAbd/Bq8tIiSU5NGojHGGKUznuNlAQr9G/2yhYkHt/o6/uH3pRVt7nXliNKpEr83WXMZc3Mvup3lRTZKv0TeJ1Tsp66Ie8yt7Ktf6YmyOrknZoz15DoXNabZfzcLLVkmSB31GohyjGcJ5Rarmy3XPFop653ZFEK4tZSUdXm45Km5x3mGC6OTZGjXcxq8D/qV//Rrxa01Mcg1vONM6ZSDcR8gRmZ6PbqJXLEgiRUfTEbzdrWmiz8Q39EMryX+p+8RaTdKRFO5nuBzCcLVyXhQxwiJKUC5kbFNM9MnsULlJEn2NfiXp+ObqzOvh8XYsh/R8M3k6XBkjJc72G7telCNN95q5/Yk+rC70l0XW1crQE4MGKOlNLU9ZmUKvEbh1r1jtEORR6quLO9Tr4VyDE2sVDh3XQpxnWVNL3tf7lb+v7U5vMzNDl/Z7vMwMRKLnt4wS3MwQGPCvXUBxRFhFYUWKvN1ThS6AqHZwQHH1Vl1guSbn0qLR69D2Np6UBlLt98dhfEcHaGyCSbR2w7Bnx5H6DLqgpEWAGcNoSlhV0GaJGYMRZmDwx1uj2pwpzooKWwSBAdBEhedkUeY45Xf22zWGFYNl+VuOK9AFIS2yJQaDil5wF7zdN/v80OQ1RRPlvjTiVZ7TOKMvjQ1TH+qiLLYJZo+YO5JhVsGsBANeEQRJ1WSFf+3+LzSEkWgaKmcKKserwzGnSYbOSX1JHsqGKincv9L4swtyfKseIm5LL/BdEBLKqn1+KdMCog+FfxzCICgueeU0eWC2C0zB4NM2riqSR6xN7JJDGsSkxmabBxiEMGX4tQsQrkmAWzywWDyVyehluk2eLDeC53s9mTO97V9c5I8rSJV9iQ+5J19BwZMoYPEJKlB+UgWuLwcaH/gaBm05Hv7R/vNTOcdBVl9oYJ/SrB/UkiavayQQn80d9ibJhw4xxeijyj4Mkku5KxKc/wL3GGenBbnOFRbwy9teW67D9Lhz69rdfsJ96BsMvn33bLNALd7WHSkbg9+BtlttnL+LYcDL/9RDDtvLICdXmCcQkZTFMO/LbcD3brRQCFeQpKzVrFUL5T7Zpj3PvkTHo0l0fa7r7bh8dO/DEh4zt2gKbkNl/4ZTcokL5eROjSVmSjrbS1ffh7bkybdLRt3D9kcgYADG98i/prYuUPpy0RPilNqRn8Ckv/XcM7nejbs+TTubG15M7Mk8ZoWcUnXeCarFOdJSInm98XZje/Y94wlTxkK6M0em/txGe6joc7Ac183LihfEtcNbWmfY8cr1ebSYadvxZmkJ6iL1y+rUYfUUBUdvOJ6P15sX77A8zHbKLrXD5mraTJ4Kdxud9HEsie5BjbYPs3ozy/T9kSLvPvLQXEjwm+e/t+PfuvZd/dxr9xPE+yPyE4UZjnpeDeVOpnrlkRZwLfLxdTela8kZr4NJv5/gQ4f55ZlP9+C1HesyhVVY0AwMAMwRLQgCXZBCVunfB/gHniArXZA1elk6Faw+5h7o7Tffb8DrXwUQjjAfCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Nivanka Dilshan",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

