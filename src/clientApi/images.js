
export const getImages = () => {
    return fetch("/api/images")
    .then(response => response.json())
};

export const postImage = formData => {
    return fetch("/api/images", {
        method: "POST",
        body: formData
    }).then(response => response.json());
};