module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: connectToDatabase, storeMeetups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeMeetups\", function() { return storeMeetups; });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection({\n    host: '127.0.0.1',\n    port: 3306,\n    database: 'Next',\n    user: 'root',\n    password: ''\n  });\n  return connection;\n}\nasync function storeMeetups(req, res) {\n  console.log(req);\n\n  if (req.method === 'POST') {\n    try {\n      const connection = await connectToDatabase();\n      const data = req.body;\n      const {\n        title,\n        image,\n        address,\n        description\n      } = data; // Insert data into the meetups table\n\n      const [result] = await connection.execute('INSERT INTO meetups (title, image, address, description) VALUES (?, ?, ?, ?)', [title, image, address, description]); // Return the newly inserted meetup ID\n\n      res.status(201).json({\n        meetupId: result.insertId\n      });\n    } catch (error) {\n      console.error('Error storing meetup:', error);\n      res.status(500).json({\n        error: 'Internal Server Error'\n      });\n    }\n  } else {\n    res.status(405).json({\n      error: 'Method Not Allowed'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiY29ubmVjdGlvbiIsIm15c3FsIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJwb3J0IiwiZGF0YWJhc2UiLCJ1c2VyIiwicGFzc3dvcmQiLCJzdG9yZU1lZXR1cHMiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwicmVzdWx0IiwiZXhlY3V0ZSIsInN0YXR1cyIsImpzb24iLCJtZWV0dXBJZCIsImluc2VydElkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGlCQUFmLEdBQW1DO0FBQ3hDLFFBQU1DLFVBQVUsR0FBRyxNQUFNQyxxREFBSyxDQUFDQyxnQkFBTixDQUF1QjtBQUM5Q0MsUUFBSSxFQUFFLFdBRHdDO0FBRTlDQyxRQUFJLEVBQUUsSUFGd0M7QUFHOUNDLFlBQVEsRUFBRSxNQUhvQztBQUk5Q0MsUUFBSSxFQUFFLE1BSndDO0FBSzlDQyxZQUFRLEVBQUU7QUFMb0MsR0FBdkIsQ0FBekI7QUFRQSxTQUFPUCxVQUFQO0FBQ0Q7QUFFTSxlQUFlUSxZQUFmLENBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDM0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaOztBQUNBLE1BQUlBLEdBQUcsQ0FBQ0ksTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRixZQUFNYixVQUFVLEdBQUcsTUFBTUQsaUJBQWlCLEVBQTFDO0FBQ0EsWUFBTWUsSUFBSSxHQUFHTCxHQUFHLENBQUNNLElBQWpCO0FBQ0EsWUFBTTtBQUFFQyxhQUFGO0FBQVNDLGFBQVQ7QUFBZ0JDLGVBQWhCO0FBQXlCQztBQUF6QixVQUF5Q0wsSUFBL0MsQ0FIRSxDQUtGOztBQUNBLFlBQU0sQ0FBQ00sTUFBRCxJQUFXLE1BQU1wQixVQUFVLENBQUNxQixPQUFYLENBQ3JCLDhFQURxQixFQUVyQixDQUFDTCxLQUFELEVBQVFDLEtBQVIsRUFBZUMsT0FBZixFQUF3QkMsV0FBeEIsQ0FGcUIsQ0FBdkIsQ0FORSxDQVdGOztBQUNBVCxTQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxnQkFBUSxFQUFFSixNQUFNLENBQUNLO0FBQW5CLE9BQXJCO0FBQ0QsS0FiRCxDQWFFLE9BQU9DLEtBQVAsRUFBYztBQUNkZixhQUFPLENBQUNlLEtBQVIsQ0FBYyx1QkFBZCxFQUF1Q0EsS0FBdkM7QUFDQWhCLFNBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVHLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0Q7QUFDRixHQWxCRCxNQWtCTztBQUNMaEIsT0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICBwb3J0OiAzMzA2LFxuICAgIGRhdGFiYXNlOiAnTmV4dCcsXG4gICAgdXNlcjogJ3Jvb3QnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbm5lY3Rpb247XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9yZU1lZXR1cHMocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2cocmVxKTtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcblxuICAgICAgLy8gSW5zZXJ0IGRhdGEgaW50byB0aGUgbWVldHVwcyB0YWJsZVxuICAgICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXG4gICAgICAgICdJTlNFUlQgSU5UTyBtZWV0dXBzICh0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uKSBWQUxVRVMgKD8sID8sID8sID8pJyxcbiAgICAgICAgW3RpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb25dXG4gICAgICApO1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGluc2VydGVkIG1lZXR1cCBJRFxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZWV0dXBJZDogcmVzdWx0Lmluc2VydElkIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdG9yaW5nIG1lZXR1cDonLCBlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql2/promise\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJteXNxbDIvcHJvbWlzZVwiPzdlZmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibXlzcWwyL3Byb21pc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbDIvcHJvbWlzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mysql2/promise\n");

/***/ })

/******/ });