// const URLID = 'd3a126ad01154658ba2744439642ee4f';
const URLID = 'e389ee77beb547fb8604b0f4688d9cdd';
const COLOR_TEXTUREID = '52b1995bb3924f199067045710d0df22';

export const legHeightOptions = [
  {
    value: 250,
    label: '250 cm',
    instanceIDs: [],
    selected: false, 
  },
  {
    value: 275,
    label: '275 cm',
    instanceIDs: [],
    selected: false, 
  },
  {
    value: 300,
    label: '300 cm',
    instanceIDs: [],
    selected: true, 
  },
];

export const colorOptions = [
  {
    value: 'color1',
    selected: true,
    className: 'color1', // this css class allows you to style option (e.g. set background image)
    textureUrl: 'https://image.ibb.co/f8OJAJ/Pergola_Albedo_Color1.png'
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
]

class Configurator {
  api = null;
  currentColorTexture = COLOR_TEXTUREID;
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
                this.initLegHeightInstanceIDs();
                this.loadTextures().then((params) => {
                  resolve(true);
                });
            }.bind(this));
          }.bind(this),
          error: function onError() {
            reject(false);
          }
      });
    });
  }

  initLegHeightInstanceIDs() {
    this.api.getNodeMap((err, nodes) => {
      legHeightOptions.forEach(({ value, instanceIDs }) => {
        instanceIDs.push(
          ...Object.values(nodes)
            .filter(node => node.name && node.name.includes(value) && node.type === 'Group')
            .map(({ instanceID }) => instanceID)
        );
      });
      this.selectLegHeight(legHeightOptions.find(lg => lg.selected).value);
    });
  }

  selectLegHeight(value) {
    legHeightOptions.forEach((option) => {
      if (option.value === value) {
        option.instanceIDs.forEach((instanceID) => {
          this.api.show(instanceID);
        });
      } else {
        option.instanceIDs.forEach((instanceID) => {
          this.api.hide(instanceID);
        });
      }
    });
  }

  selectColor(value) {
    this.api.updateTexture(
      value,
      this.currentColorTexture,
      function ( err, textureUid ) {
          console.log( 'replaced texture with uid: ' + textureUid );
      }
    );
  }

  loadTextures() {
    const textureIds = colorOptions.map((option) => {
      return new Promise((resolve,reject) => {
        this.api.addTexture(
          option.textureUrl,
          function ( err, textureUid ) {
            if(err !== null) return reject(err);
            resolve(textureUid);
        });
      });
    });

    return Promise.all(textureIds);
  }
}
 export default Configurator;