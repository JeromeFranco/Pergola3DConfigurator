const URLID = '3696a34a8dc44cb2ab4c9f730e2cf101';
const COLOR_TEXTUREID = '54e1a23195a946d69bb522efc57e28c8';

export const legHeightOptions = [
  {
    value: 250,
    label: '250 cm',
    id: null,
    sidePanelId: null,
    selected: false, 
  },
  {
    value: 275,
    label: '275 cm',
    id: null,
    sidePanelId: null,
    selected: false, 
  },
  {
    value: 300,
    label: '300 cm',
    id: null,
    sidePanelId: null,
    selected: true, 
  },
];

export const colorOptions = [
  {
    value: 'color1',
    selected: true,
    className: 'color1', // this css class allows you to style option (e.g. set background image)
    textureUrl: 'https://image.ibb.co/hRndAJ/Pergola_Base_Black.png'
  },
  {
    value: 'color2',
    selected: false,
    className: 'color2',
    textureUrl: 'https://image.ibb.co/k38UHy/Pergola_Albedo_Color2.png'
  },
  {
    value: 'color3',
    selected: false,
    className: 'color2',
    textureUrl: 'https://image.ibb.co/iEMicy/Pergola_Albedo_Color3.png'
  }
];

export const sidePanelColorOptions = [
  {
    value: 'sidePanelColor1',
    selected: true,
    className: 'sidePanelColor1', // this css class allows you to style option (e.g. set background image)
    textureUrl: 'https://image.ibb.co/dHLC4d/Pergola_Base_Black_Sidepanels1.png'
  },
  {
    value: 'sidePanelColor2',
    selected: false,
    className: 'sidePanelColor2',
    textureUrl: 'https://image.ibb.co/i6Jq5J/Pergola_Base_Black_Side_Panels2.png'
  },
  {
    value: 'sidePanelColor3',
    selected: false,
    className: 'sidePanelColor3',
    textureUrl: 'https://image.ibb.co/iZ4V5J/Pergola_Base_Black_Side_Panels3.png'
  },
  {
    value: 'sidePanelColor4',
    selected: false,
    className: 'sidePanelColor4',
    textureUrl: 'https://image.ibb.co/iZ4V5J/Pergola_Base_Black_Side_Panels4.png'
  }
];

class Configurator {
  api = null;
  selectedBaseColorTexture = COLOR_TEXTUREID;
  selectedSidePanelColorTexture = COLOR_TEXTUREID;
  selectedLegHeight = null;
  showSidePanel = false;
  onLoaded;

  init(iframe) {
    const client = new window.Sketchfab(iframe);

    return new Promise((resolve, reject) => {
      client.init(URLID, {
          ui_infos: 0,
          ui_controls: 0,
          graph_optimizer: 0,
          success: function onSuccess(api) {
            api.start();
            api.addEventListener('viewerready', function () {
                this.api = api;
                this.initLegHeightOptions();
                // Promise.all([
                //   this.loadBaseTextures(),
                //   this.loadSidePanelTextures()
                // ]).then((params) => {
                  resolve(true);
                // });
            }.bind(this));
          }.bind(this),
          error: function onError() {
            reject(false);
          }
      });
    });
  }

  initLegHeightOptions() {
    this.api.getNodeMap((err, nodes) => {
      legHeightOptions.forEach((option) => {

        option.id = Object.values(nodes)
          .find(node => node.name && node.name.includes(`Legs${option.value}`) && node.type === 'Group')
          .instanceID;

        const sidePanelId = Object.values(nodes)
          .find(node => node.name && node.name.includes(`SidePanel_${option.value}`) && node.type === 'Group')
          .instanceID;

        option.sidePanelId = sidePanelId;

        if (!this.showSidePanel) {
          this.api.hide(sidePanelId);
        }
      });
      
      this.selectLegHeight(legHeightOptions.find(lg => lg.selected).value);
    });
  }

  selectLegHeight(value) {
    legHeightOptions.forEach((option) => {
      if (option.value === value) {
        this.api.show(option.id);
        if (this.showSidePanel) {
          this.api.show(option.sidePanelId);
        }
        this.selectedLegHeight = option;
      } else {
        this.api.hide(option.id);
        if (this.showSidePanel) {
          this.api.hide(option.sidePanelId);
        }
      }
    });
  }

  selectBaseColor(value) {
    this.api.updateTexture(
      value,
      this.selectedBaseColorTexture,
      function ( err, textureUid ) {
          console.log( 'replaced texture with uid: ' + textureUid );
      }
    );
  }
  
  selectSidePanelColor(value) {
    this.api.updateTexture(
      value,
      this.selectedBaseColorTexture,
      function ( err, textureUid ) {
          console.log( 'replaced texture with uid: ' + textureUid );
      }
    );
  }

  loadBaseTextures() {
    const textureIds = colorOptions.map((option) => {
      return new Promise((resolve,reject) => {
        this.api.addTexture(option.textureUrl, (err, textureUid) => {
            if(err !== null) reject(err);
            resolve(textureUid);
        });
      });
    });

    return Promise.all(textureIds);
  }

  loadSidePanelTextures() {
    const textureIds = sidePanelColorOptions.map((option) => {
      return new Promise((resolve,reject) => {
        this.api.addTexture(option.textureUrl, (err, textureUid) => {
            if (err !== null) reject(err);

            if (option.selected) this.selectedSidePanelColorTexture = textureUid
            resolve(textureUid);
        });
      });
    });

    return Promise.all(textureIds);
  }

  showHideSidePanel(show) {
    if (show) {
      this.api.show(this.selectedLegHeight.sidePanelId);
    } else {
      this.api.hide(this.selectedLegHeight.sidePanelId);
    }
    this.showSidePanel = show;
  }
}
 export default Configurator;