import React, { Component } from 'react'
import VideoBackground from 'images/Stars.mp4';

export default class BackgroundVid extends Component {
    render() {
        return (
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={VideoBackground} type="video/mp4" />
              Your browser is not supported
            </video>
          </div> 
        )
      }
}
