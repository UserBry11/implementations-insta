import React from "react";
//import { getImagesResponse, postImageResponse } from "../apiStubs";
import { getImages, postImage } from "../clientApi";

class Home extends React.Component {
  state = { 
    getImages: { imageURIs: [], statusCode: 0 },
    postImage: { imageURI: "", statusCode: 0 },
    postImageError: "",
    postImageLoading: false
  };

  componentDidMount(){
    getImages().then(result => {
      this.setState( {...this.state, getImages: result });
    })
  }

  handleUploadImage = event => {
    event.preventDefault();
    const formData = new FormData(event.target)
    this.setState({
      ...this.state, 
      postImageError: "",
      postImageLoading: true 
    })
    postImage(formData).then(result => {
      this.setState({ 
        ...this.state, 
        postImage: result,
        postImageLoading: false
      });
    }).catch(err => {
      this.setState({ 
        ...this.state, 
        postImageError: err.message,
        postImageLoading: false
      });
    })
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleUploadImage}>
          <input type="file" />
          <button type="submit">Upload Image, Please</button>
        </form>
        {this.state.postImageLoading && "Uploading image..."}
        {this.state.postImage.statusCode === 200 && "Upload was succesful"}
        {this.state.postImageError && <p style={ {color: "red"} }>{this.state.postImageError}</p>}
        <h1>Kenziegram</h1>;
        {this.state.getImages.imageURIs.map(uri => (
          <img key={uri} src={uri} />
        ))}
      </React.Fragment>
    )
  }
}

export default Home;
