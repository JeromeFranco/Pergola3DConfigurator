import React, { Component } from 'react';
import Configurator from '../pergolaConfigurator';
import './Viewer.css';

class Viewer extends Component {
  async componentDidMount() {
    this.configurator = new Configurator();
    window.configurator = this.configurator;
    const loaded = await this.configurator.init(this.iframe);
    if (loaded) {
      this.props.onLoaded(loaded);
    }
  }

  componentWillReceiveProps({ selectedHeight, selectedColor }) {
      if(selectedHeight !== this.props.selectedHeight) {
          this.configurator.selectLegHeight(selectedHeight);
      }

      if(selectedColor !== this.props.selectedColor) {
        this.configurator.selectColor(selectedColor);
    }
  }

  render() {
    return (
      <iframe
        src='https://sketchfab.com/models/d3a126ad01154658ba2744439642ee4f'
        className="Viewer"
        id="api-frame"
        title="api-frame"
        ref={(iframe) => {this.iframe = iframe }}
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true">
      </iframe>
    );
  }
}

export default Viewer;