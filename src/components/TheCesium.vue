<script setup>
import { onMounted, ref } from 'vue'
import {
  TileMapServiceImageryProvider,
  Viewer,
  Cesium3DTileset,
  Ion,
  Cartesian3,
  HeadingPitchRange,
} from 'cesium'
import 'cesium/Build/CesiumUnminified/Widgets/widgets.css'

// Create ref to refernce the HTML element
const viewerDivRef = ref()

// Set default token to Private Token
Ion.defaultAccessToken = import.meta.env.VITE_MAP_TOKEN

// Set building URL
window.CESIUM_BASE_URL = 'node_modules/cesium/Build/CesiumUnminified/'

//  Loaded Textures when Mounted
onMounted(async () => {
  //  Create a Viewer instance
  const viewer = new Viewer(viewerDivRef.value, {
    // Disable all the default icon and buttons
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    imageryProvider: new TileMapServiceImageryProvider({
      // Load the map image from this location
      url: 'node_modules/cesium/Build/CesiumUnminified/Assets/Textures/NaturalEarthII'
    })
  })

  // Add Google 3D tileset
  viewer.scene.primitives.add(await Cesium3DTileset.fromIonAssetId(2275207))

  let target = Cartesian3.fromDegrees(121.564468, 25.033964, 350) //Taipei 101 Location
  let offset = new HeadingPitchRange(-82.7, 0, 1000)

  viewer.camera.lookAt(target, offset)
})
</script>

<template>
  <div id="cesium-viewer" ref="viewerDivRef"></div>
</template>

<style scoped>
#cesium-viewer {
  width: 100%;
  height: 100%;
}
</style>
