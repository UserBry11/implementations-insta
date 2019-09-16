import { getImagesResponse, postImageResponse } from "../apiStubs";

export const getImages = (request, response) => {
    response.send(getImagesResponse);
};

export const postImage = (request, response) => {
    response.send(postImageResponse);
  };