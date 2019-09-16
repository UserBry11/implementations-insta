import React from "react";
//import { getImagesResponse, postImageResponse } from "../apiStubs";
import { getImages, postImage } from "../clientApi";

class Home extends React.Component {
  state = { 
    getImages: { imageURIs: [], statusCode: 0 },
    postImage: { imageURI: "", statusCode: 0 }
  };

  componentDidMount(){
    getImages().then(result => {
      this.setState( {...this.state, getImages: result });
    })
  }

  handleUploadImage = event => {
    event.preventDefault();
    const formData = new FormData(event.target)
    postImage(formData).then(result => {
      this.setState({ ...this.state, postImage: result});
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleUploadImage}>
          <input type="file" />
          <button type="submit">Upload Image, Please</button>
        </form>
        {this.state.postImage.statusCode === 200 && "Upload was succesful"}
        <h1>Kenziegram</h1>;
        {this.state.getImages.imageURIs.map(uri => (
          <img key={uri} src={uri} />
        ))}
      </React.Fragment>
    )
  }
}

export default Home;
