import fs from "fs";


fs.promises.mkdir(process.env.RAZZLE_PUBLIC_DIR + "/images")
    .catch(err => {
        if(err.code === "exists"){
            throw err;
        }
    })

// () -> Promise<Array<URI: String>>
// fs.promises.readdir
const find = () => {
    return fs.promises.readdir(process.env.RAZZLE_PUBLIC_DIR + "/images")
    .then(imageNames => {
        console.log(imageNames);
        return imageNames.map(filename => "/images/" + filename);
    });
};

//(Buffer) => Promise<URI: String>
// fs.promises.readdir(path[, options])
const create = buffer => {
    const timestamp = Date.now();
    return fs.promises.writeFile(process.env.RAZZLE_PUBLIC_DIR + "/images/" + timestamp, buffer)
    .then(() => {
            return "/images/" + timestamp;
        })
};

export default {
    find,
    create
}