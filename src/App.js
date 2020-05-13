import React from 'react';
import './index.css';
import Slider from './components/Slider/Slider';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

class App extends React.Component {
  state = {
    imageArray: [image1, image2, image3],
    actualImage: image3,
    index: 0,
    delay: 2000,
  }

  componentDidMount() {
    const { delay } = this.state;
    this.interval = setInterval(() => this.changeImage(), delay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeImage() {
    const { imageArray, index } = this.state;

    this.setState({ actualImage: imageArray[index] })

    index < imageArray.length - 1 ?
      (
        this.setState(prevState => ({
          index: prevState.index++,
        }))
      ) : (
        this.setState({ index: 0 })
      )
  }

  render() {
    const { actualImage } = this.state;

    return (
      <Slider image={actualImage} />
    )
  }
}

export default App;