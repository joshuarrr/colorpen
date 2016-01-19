import React from 'react'
import ImageLoader from 'react-imageloader';

const connection = navigator.connection
const slow = connection && /(^([23]g?)$)/.test(connection.type)
const devicePixelRatio = (!slow && window.devicePixelRatio) || 1


export default class ResponsiveImage extends React.Component {
  getSizeInterval(size) {
    return Math.ceil(size / this.props.sizeInterval) * this.props.sizeInterval
  }

  render() {
  var cl = this.props.class;
    const baseURL = 'http://res.cloudinary.com/joshuar/image/upload'
    const container = this.props.container
    const width = Math.round(this.getSizeInterval(container.width) * devicePixelRatio)
    const height = Math.round(this.getSizeInterval(container.height) * devicePixelRatio)

    const src = `${baseURL}/w_${width}/${this.props.src}`


    function preloader() {
      return (
        <p>loading</p>
      );
    }

    return (
      // <img src={src} className={this.props.class} />

      // render with ImageLoader instead
      <ImageLoader
        src={src}
        className={this.props.class}
        preloader={preloader}
      >
        Image load failed!
      </ImageLoader>
    );
  }
}

ResponsiveImage.defaultProps = {
  sizeInterval: 50,
}