import admin from "firebase-admin";
import serviceAccount from "./firebaseAdminServiceAccount.json";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "kenziegram-dc42e.appspot.com"
});
const bucket = admin.storage().bucket();

// () -> Promise<Array<URI: String>>
export const find = () => {
    return bucket.getFiles().then( data => {
        const files = data[0];
        const fileURLs = files.map( file => {
            return file.getSignedUrl({
                action: "read",
                expires: Date.now() + 1000 * 60 * 60
            });
        });
        return Promise.all(fileURLs);
    }).then(fileURLs => {
        return fileURLs.map(fileURL => fileURL[0])
    })
};

//(Buffer) => Promise<URI: String>
export const create = buffer => {
    const timestamp = Date.now();
    const file = bucket.file(String(timestamp));
    return file
        .save(buffer)
        .then(() => {
        return file.getSignedUrl({
            action: "read",
            expires: Date.now() + 1000 * 60 * 60
        });
    }).then(fileURL => fileURL[0]);
};

export default {
    find,
    create
}