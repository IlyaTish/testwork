/* Exports */

//= require ../blocks/common/script.js
//= require ../blocks/common/header/script.js



/* Execution of functions */

ready(() => {
  window.onresize = () => {
    headerTeleport()
  }
})
