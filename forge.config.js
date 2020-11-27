module.exports = {
  packagerConfig: {
    icon: "publish/icon",
    dir: "source",
    ignore: [ "test", "tools" ]
  },
  makers: [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "netron"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [ "darwin" ]
    },
    {
      "name": "@electron-forge/maker-dmg",
      "platforms": [ "darwin" ],
      "config": {
        "background": "./publish/background.png"
      }
    },
    {
      "name": "@electron-forge/maker-snap",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    },
  ],
  publishers: [
    {
      "name": "@electron-forge/publisher-github",
      "config": {}
    },
    {
      "name": "@electron-forge/publisher-snapcraft",
      "config": {}
    }
  ]
}