import multer from "multer";
import { Image } from "../models";

const upload = multer({ storage: multer.memoryStorage() });

export const getImages = (request, response) => {
    console.log("getImages");
    Image.find().then(uris => {
        response.send( { imageURIs: uris, statusCode: 200 } );
    });
};

export const postImage = [
    upload.single("image"), 
    (request, response) => {
        console.log("postImage");
        console.log(request.file);
        Image.create(request.file.buffer).then(uri => {
            response.send( { imageURI: uri, statusCode: 200 });
        })
        // .catch(err => {
        //     response
        //         .status(400)
        //         .send( { message: "This is the error right here", statusCode: 400 });
        // });
    }
];  

