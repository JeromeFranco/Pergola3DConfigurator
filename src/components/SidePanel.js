import React, { Component } from 'react';
import Slider from 'rc-slider';
import { legHeightOptions, colorOptions, sidePanelColorOptions } from '../pergolaConfigurator';
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

  render() {
    return (
      <aside className="SidePanel">
        <div className="SidePanel-logo" />
        { 
          this.props.optionsLoaded ? 
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
                    colorOptions.map((option) =>
                      <label key={option.value} className="SidePanel-color-option">
                        <input type="radio" name="color" value={option.value} defaultChecked={option.selected}
                          onChange={() => this.props.onBaseColorChange(option.textureUrl)} />
                        <span className={option.value}>{option.value}</span>
                      </label>
                    )
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
                    onChange={this.handleShowSidePanelChange} />
                </div>
                <div className="SidePanel-color-options">
                  {
                    sidePanelColorOptions.map((option) =>
                      <label key={option.value} className="SidePanel-color-option">
                        <input type="radio" name="colorSidePanel" value={option.value}
                          onChange={() => this.props.onSidePanelColorChange(option.textureUrl)} />
                        <span className={option.value}>{option.value}</span>
                      </label>
                    )
                  }
                </div>
              </div>
            </li>
            <li className="SidePanel-menu-item">
              <div>
                <div className="SidePanel-menu-text">
                  ADD SHUTTER
                  <input
                    name="showSideShutter"
                    type="checkbox"
                    // onChange={this.handleShowSidePanelChange} 
                  />
                </div>
                <div className="SidePanel-color-options">
                  {
                    colorOptions.map((option) =>
                      <label key={option.value} className="SidePanel-color-option">
                        <input type="radio" name="colorShutter" value={option.value}
                          onChange={() => this.props.onColorChange(option.textureUrl)} />
                        <span className={option.value}>{option.value}</span>
                      </label>
                    )
                  }
                </div>
              </div>
            </li>
          </ul> :
          <div className='SidePanel-loading'>
            <LoadingIndicator />
            Loading options...
          </div>
        }
      </aside>
    );
  }
}

export default SidePanel;