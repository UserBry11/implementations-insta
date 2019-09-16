import React from "react";
import { getImagesResponse, postImageResponse } from "../apiStubs";

class Home extends React.Component {
  state = { 
    getImages: { imageURIs: [], statusCode: 0 },
    postImage: { imageURI: "", statusCode: 0 }
  };

  componentDidMount(){
    this.setState( {...this.state, getImages: getImagesResponse });
  }

  handleUploadImage = event => {
    event.preventDefault();
    // const formData = new FormData(event.target)
    this.setState({ ...this.state, postImage: postImageResponse});
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleUploadImage}>
          <input type="file" />
          <button type="submit">Upload Image, Please</button>
        </form>

        <h1>Kenziegram</h1>;
        {this.state.getImages.imageURIs.map(uri => (
          <img key={uri} src={uri} />
        ))}
      </React.Fragment>
    )
  }
}

export default Home;
