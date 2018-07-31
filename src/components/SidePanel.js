import React, { Component } from 'react';
import Slider from 'rc-slider';
import { legHeightOptions, colorOptions, sidePanelColorOptions, shutterPanelColorOptions } from '../pergolaConfigurator';
import LoadingIndicator from './LoadingIndicator';
import './SidePanel.css';

class SidePanel extends Component {
  getLegHeightSliderConfig() {
    const values = legHeightOptions.map(lg => lg.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const defaultValue = legHeightOptions.find(lg => lg.selected).value;
    
    return {
      marks: legHeightOptions.reduce((acc, curr) => {
        return { ...acc, [curr.value - min]: curr.label };
      }, {}),
      min: min - min,
      max: max - min,
      defaultValue,
    }
  }

  handleLegHeightSliderChange = (value) => {
    const min = Math.min(...legHeightOptions.map(lg => lg.value));
    const realValue = value + min;
    this.props.onHeightChange(realValue);
  }

  handleShowSidePanelChange = ({ target }) => {
    this.props.onShowHideSidePanel(target.checked);
  }

  handleShowShutterPanelChange = ({ target }) => {
    this.props.onShowHideShutterPanel(target.checked);
  }

  render() {
    return (
      <aside className="SidePanel">
        <div className="SidePanel-logo" />
          <ul className="SidePanel-menu">
            <li className="SidePanel-menu-item">
              <div>
                <div className="SidePanel-menu-text">LEG HEIGHT OPTIONS</div>
                <div className="SidePanel-height-options">
                  <Slider
                    {...this.getLegHeightSliderConfig()}
                    step={null}
                    onAfterChange={this.handleLegHeightSliderChange}
                  />
                </div>
              </div>
            </li>
            <li className="SidePanel-menu-item">
              <div>
                <div className="SidePanel-menu-text">BASE COLOR OPTIONS</div>
                <div className="SidePanel-color-options">
                  {
                    this.props.baseColorLoaded ? colorOptions.map((option) =>
                      <label key={option.value} className="SidePanel-color-option">
                        <input type="radio" name="color" value={option.value} defaultChecked={option.selected}
                          onChange={() => this.props.onBaseColorChange(option)} />
                        <span className={option.value} style={{ backgroundImage: `url(${option.textureUrl})`}}>{option.value}</span>
                      </label>
                    ) : <LoadingIndicator />
                  }
                </div>
              </div>
            </li>
            <li className="SidePanel-menu-item">
              <div>
                <div className="SidePanel-menu-text">
                  ADD SIDE PANEL
                  <input
                    name="showSidePanel"
                    type="checkbox"
                    disabled={!this.props.sidePanelColorLoaded}
                    onChange={this.handleShowSidePanelChange} />
                </div>
                <div className="SidePanel-color-options">
                  {
                    this.props.sidePanelColorLoaded ? sidePanelColorOptions.map((option) =>
                      <label key={option.value} className="SidePanel-color-option">
                        <input
                          type="radio"
                          name="colorSidePanel"
                          value={option.value}
                          defaultChecked={option.selected}
                          disabled={!this.props.showSidePanel}
                          onChange={() => this.props.onSidePanelColorChange(option)} />
                        <span className={option.value}>{option.value}</span>
                      </label>
                    ) : <LoadingIndicator />
                  }
                </div>
              </div>
            </li>
            <li className="SidePanel-menu-item">
              <div>
                <div className="SidePanel-menu-text">
                  ADD SHUTTER
                  <input
                    name="showShutterPanel"
                    type="checkbox"
                    disabled={!this.props.shutterPanelColorLoaded}
                    onChange={this.handleShowShutterPanelChange} 
                  />
                </div>
                <div className="SidePanel-color-options">
                {
                    this.props.shutterPanelColorLoaded ? shutterPanelColorOptions.map((option) =>
                      <label key={option.value} className="SidePanel-color-option">
                        <input
                          type="radio"
                          name="colorShutterPanel"
                          value={option.value}
                          defaultChecked={option.selected}
                          disabled={!this.props.showShutterPanel}
                          onChange={() => this.props.onShutterPanelColorChange(option)} />
                        <span className={option.value}>{option.value}</span>
                      </label>
                    ) : <LoadingIndicator />
                  }
                </div>
              </div>
            </li>
          </ul>
      </aside>
    );
  }
}

export default SidePanel;