import { getImagesResponse, postImageResponse } from "../apiStubs";

export const getImages = () => {
    return new Promise( (resolve, reject) => {
        resolve(getImagesResponse)
    })
};

export const postImage = formData => {
    return new Promise( (resolve, reject) => {
        resolve(postImageResponse);
    })
}