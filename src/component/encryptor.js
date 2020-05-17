import CryptoJS  from "crypto-js";
import {cryptoSecret} from '.'

export const encrypt = ({body}) => {
    return new Promise(resolve=>{
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(body), cryptoSecret);
        resolve(encrypted.toString());
    })
}
export const decrypt = ({body})=>{
    return new Promise(resolve=>{ 
        const bytes  = CryptoJS.AES.decrypt(body.toString(), cryptoSecret);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8)?JSON.parse(bytes.toString(CryptoJS.enc.Utf8)):'';
        resolve(decryptedData);
    })
}