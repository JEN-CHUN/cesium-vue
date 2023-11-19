<script setup>
import { onMounted, ref } from 'vue'
import {
  Viewer,
  Cesium3DTileset,
  Ion,
  Cartesian3,
  HeadingPitchRange,
  Color,
  LabelStyle,
  NearFarScalar
} from 'cesium'
import 'cesium/Build/CesiumUnminified/Widgets/widgets.css'

// Create ref to refernce the HTML element
const viewerDivRef = ref()

// Set default token to Private Token
Ion.defaultAccessToken = import.meta.env.VITE_MAP_TOKEN

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
    navigationInstructionsInitiallyVisible: false
  })

  // Add Google 3D tileset
  viewer.scene.primitives.add(await Cesium3DTileset.fromIonAssetId(2275207))

  let target = Cartesian3.fromDegrees(121.564468, 25.033964, 350) //Taipei 101 Location
  let offset = new HeadingPitchRange(-82.7, 0, 1000)
  viewer.entities.add({
    position: Cartesian3.fromDegrees(121.564468, 25.033964, 600), // The location of the building
    label: {
      text: '台北101', // The Name of the location
      fillColor: Color.BLACK, // Font color 
      backgroundColor: Color.WHITE, // Background color
      showBackground: true, // Show Background Color
      style: LabelStyle.FILL, // Label Style
      outlineWidth: 2,
    }
  })

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
