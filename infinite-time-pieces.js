/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				var descriptor = binding === 0 ? { enumerable: true, value: definition[i++] } : { enumerable: true, get: binding };
/******/ 				if(!__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, descriptor);
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   preload: () => (/* binding */ preload)
/* harmony export */ });
// Magic Research 2, Steam edition. Requires game version >= 1.8.1.
// Install the built JS file in <Magic Research 2>/mods/.

const minGameVersion = "1.8.1";
const id = "infinite-time-pieces";
const name = "Infinite Time Pieces";
const version = "1.0.0";
const description =
  "Refills Time Pieces up to 100,000, leaving the normal speed and warp controls unchanged.";

function preload(_MR2) {}

function load(MR2) {
  const refillTarget = 100_000;
  MR2.registerTimeTickListener(
    "infinite-time-pieces-refill",
    (state) => {
      const current = Number(MR2.getResourceAmount(state, MR2.Resource.TimePiece)) || 0;
      if (current >= refillTarget) return state;

      // Use the game's normal resource update method to respect the cap.
      return MR2.grantResource(MR2.Resource.TimePiece, refillTarget - current)(state);
    },
    1000, // Run after ordinary game-time tick listeners.
  );
}

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "description", 0, /* binding */ description,
/* harmony export */   "id", 0, /* binding */ id,
/* harmony export */   "minGameVersion", 0, /* binding */ minGameVersion,
/* harmony export */   "name", 0, /* binding */ name,
/* harmony export */   "version", 0, /* binding */ version
/* harmony export */ ]);

const __webpack_export_target__ = this;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
