(this["webpackJsonpmrtoi"] = this["webpackJsonpmrtoi"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _screens_BluetoothController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/BluetoothController */ "./src/screens/BluetoothController.js");
/* harmony import */ var _screens_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/Blog */ "./src/screens/Blog.js");
/* harmony import */ var _screens_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/Contact */ "./src/screens/Contact.js");
/* harmony import */ var _screens_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/Home */ "./src/screens/Home.js");
/* harmony import */ var _screens_IotHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/IotHome */ "./src/screens/IotHome.js");
/* harmony import */ var _screens_LineFollower__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/LineFollower */ "./src/screens/LineFollower.js");
/* harmony import */ var _screens_ObstacleAvoid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/ObstacleAvoid */ "./src/screens/ObstacleAvoid.js");
/* harmony import */ var _screens_BottomFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/BottomFooter */ "./src/screens/BottomFooter.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/App.js";











class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/",
      exact: true,
      component: _screens_Home__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/Blog",
      exact: true,
      component: _screens_Blog__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/Contact",
      exact: true,
      component: _screens_Contact__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/Home/BluetoothController",
      exact: true,
      component: _screens_BluetoothController__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/Home/LineFollower",
      exact: true,
      component: _screens_LineFollower__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/Home/ObstacleAvoid",
      exact: true,
      component: _screens_ObstacleAvoid__WEBPACK_IMPORTED_MODULE_9__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/Home/IotHome",
      exact: true,
      component: _screens_IotHome__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_BottomFooter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/AppHead.js":
/*!***********************************!*\
  !*** ./src/components/AppHead.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_akdcpa_Documents_React_TOI_mrtoi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/fb_icon.png */ "./src/imgs/fb_icon.png");
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/icon.png */ "./src/imgs/icon.png");
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_imgs_icon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/twitter_icon.png */ "./src/imgs/twitter_icon.png");
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imgs/linkedin_icon.png */ "./src/imgs/linkedin_icon.png");
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "./node_modules/@material-ui/icons/MailOutline.js");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MoreOutlined */ "./node_modules/@material-ui/icons/MoreOutlined.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_23__);

var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/AppHead.js";
























const useStyles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  // sectionDesktop: {
  //   display: 'none',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'flex',
  //   },
  // },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mediaHide: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  drawerMediaHide: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  textStyle: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 500,
    paddingRight: 30,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    cursor: 'pointer'
  },
  appBar: {
    backgroundColor: 'black'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  paper: {
    background: "rgba(0,0,0,0.6)"
  },
  divSytle: {
    backgroundColor: 'white',
    dispaly: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  }
});

class AppHead extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.mailColorEvent = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          mailColor: '#FA770A'
        });
      } else {
        this.setState({
          mailColor: 'white'
        });
      }
    };

    this.fbSize = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          fb_size: 50
        });
      } else {
        this.setState({
          fb_size: 35
        });
      }
    };

    this.instaSize = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          insta_size: 38
        });
      } else {
        this.setState({
          insta_size: 28
        });
      }
    };

    this.inSize = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          in_size: 50
        });
      } else {
        this.setState({
          in_size: 35
        });
      }
    };

    this.twitterSize = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          twitter_size: 50
        });
      } else {
        this.setState({
          twitter_size: 35
        });
      }
    };

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      fb_size: 35,
      insta_size: 28,
      twitter_size: 35,
      in_size: 35,
      mailColor: 'white',
      top: false,
      left: false,
      bottom: false,
      right: false,
      drawerStatus: false
    };
  }

  render() {
    const classes = this.props.classes;
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      this.setState(Object(_home_akdcpa_Documents_React_TOI_mrtoi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [side]: open
      }));
    };

    const sideList = side => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.list,
      role: "presentation",
      onClick: toggleDrawer(side, false),
      onKeyDown: toggleDrawer(side, false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, ['Home', 'Blog', 'Location'].map((text, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, index === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_21___default.a, {
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }) : index === 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_23___default.a, {
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default.a, {
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
      primary: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, text),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__["default"], {
      variant: "middle",
      className: classes.divSytle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: classes.drawerMediaHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.fb_size,
        weight: this.state.fb_size
      },
      src: _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.insta_size,
        weight: this.state.insta_size
      },
      src: _imgs_icon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.in_size,
        weight: this.state.in_size
      },
      src: _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.twitter_size,
        weight: this.state.twitter_size
      },
      src: _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }))))));

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.grow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      position: "static",
      className: classes.appBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        marginRight: 18
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "+918248314696"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onMouseEnter: this.mailColorEvent,
      onMouseLeave: this.mailColorEvent,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_13___default.a, {
      style: {
        color: this.state.mailColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onMouseEnter: this.mailColorEvent,
      onMouseLeave: this.mailColorEvent,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        color: this.state.mailColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, "ak@gmail.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.grow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.sectionDesktop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.mediaHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onMouseEnter: this.fbSize,
      onMouseLeave: this.fbSize,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.fb_size,
        weight: this.state.fb_size
      },
      src: _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onMouseEnter: this.instaSize,
      onMouseLeave: this.instaSize,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.insta_size,
        weight: this.state.insta_size
      },
      src: _imgs_icon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onMouseEnter: this.inSize,
      onMouseLeave: this.inSize,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.in_size,
        weight: this.state.in_size
      },
      src: _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onMouseEnter: this.twitterSize,
      onMouseLeave: this.twitterSize,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.twitter_size,
        weight: this.state.twitter_size
      },
      src: _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      width: 100,
      classes: {
        paper: classes.paper
      },
      anchor: "right",
      open: this.state.right,
      onClose: toggleDrawer('right', false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, sideList('right')));
  }

}

AppHead.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(useStyles)(AppHead));

/***/ }),

/***/ "./src/components/Application.js":
/*!***************************************!*\
  !*** ./src/components/Application.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_Learning_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/Learning.png */ "./src/imgs/Learning.png");
/* harmony import */ var _imgs_Learning_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_Learning_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imgs_dashboard_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/dashboard.png */ "./src/imgs/dashboard.png");
/* harmony import */ var _imgs_dashboard_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_dashboard_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _imgs_iot_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/iot.png */ "./src/imgs/iot.png");
/* harmony import */ var _imgs_iot_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_iot_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ApplicationCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationCard */ "./src/components/ApplicationCard.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/Application.js";








class Application extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.blackDiv,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      className: classes.headLine,
      variant: "h4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Howdy, Mr.toi, we have brought together the best quality offers, projects for you!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      alignItems: "center",
      justify: "center",
      className: classes.rootGrid,
      align: true,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApplicationCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Learnig Systems",
      description: "IoT devices give students and they give teachers the ability  to measure student learning progress in real-time  training are included to Mr.toi",
      image: _imgs_Learning_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApplicationCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Iot software requirements and uses",
      description: "The Arduino Integrated Development Environment is a cross-platform application that is written in functions from C and C++.  It is used to write and upload programs to Arduino compatible boards,  but also, with the help of 3rd party cores, other vendor development boards",
      image: _imgs_iot_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApplicationCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "User Dashboard",
      description: "With the help of IoT Dashboards, users and operators can (remotely) monitor and control an environment from anywhere  in the world.",
      image: _imgs_dashboard_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1 // display:'flex',

  },
  blackDiv: {
    height: 250,
    width: "100%",
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center'
  },
  headLine: {
    color: 'white',
    maxWidth: 1000,
    minWidth: 100,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  text: {
    fontWeight: 'bold',
    fontFamily: ''
  },
  rootGrid: {
    marginTop: -60,
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      // marginLeft:10,
      // display:'fle'
      flexDirection: 'column'
    }
  }
});

Application.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Application));

/***/ }),

/***/ "./src/components/ApplicationCard.js":
/*!*******************************************!*\
  !*** ./src/components/ApplicationCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_Learning_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/Learning.png */ "./src/imgs/Learning.png");
/* harmony import */ var _imgs_Learning_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_Learning_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imgs_dashboard_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/dashboard.png */ "./src/imgs/dashboard.png");
/* harmony import */ var _imgs_dashboard_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_dashboard_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _imgs_iot_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/iot.png */ "./src/imgs/iot.png");
/* harmony import */ var _imgs_iot_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_iot_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/ApplicationCard.js";







class ApplicationCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      elevation: 8,
      className: classes.sideCard,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        width: '96px',
        height: '96px',
        marginTop: 50
      },
      src: this.props.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      className: classes.text,
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        textAlign: 'justify'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.description))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1 // display:'flex',

  },
  text: {
    fontWeight: 'bold',
    fontFamily: ''
  },
  sideCard: {
    minWidth: 200,
    maxWidth: 380,
    borderRadius: 0,
    minHeight: 400,
    maxHeight: 400,
    marginRight: 30,
    [theme.breakpoints.down("xs")]: {
      marginRight: 0
    }
  },
  rootGrid: {
    marginTop: -60
  }
});

ApplicationCard.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(ApplicationCard));

/***/ }),

/***/ "./src/components/Background_Page.js":
/*!*******************************************!*\
  !*** ./src/components/Background_Page.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/back.jpg */ "./src/imgs/back.jpg");
/* harmony import */ var _imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/fb_icon.png */ "./src/imgs/fb_icon.png");
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imgs/icon.png */ "./src/imgs/icon.png");
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_imgs_icon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imgs/twitter_icon.png */ "./src/imgs/twitter_icon.png");
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../imgs/linkedin_icon.png */ "./src/imgs/linkedin_icon.png");
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "./node_modules/@material-ui/icons/MailOutline.js");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoreOutlined */ "./node_modules/@material-ui/icons/MoreOutlined.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "./node_modules/@material-ui/icons/ListAlt.js");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _imgs_more_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../imgs/more.png */ "./src/imgs/more.png");
/* harmony import */ var _imgs_more_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_imgs_more_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _HomeNav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./HomeNav */ "./src/components/HomeNav.js");
/* harmony import */ var _SpanIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SpanIcon */ "./src/components/SpanIcon.js");
/* harmony import */ var _DisplayDrawer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./DisplayDrawer */ "./src/components/DisplayDrawer.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/Background_Page.js";
































class Background_Page extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleButtonColor = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          buttonColor: 'white'
        });
      } else {
        this.setState({
          buttonColor: '#01bacf'
        });
      }
    };

    this.handleExplore = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          exploreColor: '#6BA6FC'
        });
      } else {
        this.setState({
          exploreColor: 'white'
        });
      }
    };

    this.state = {
      buttonColor: '#01bacf',
      exploreColor: 'white',
      scrollEvent: false,
      textHide: true,
      top: false,
      left: false,
      bottom: false,
      right: false,
      drawerStatus: false
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY;

      if (isTop > 30) {
        this.setState({
          scrollEvent: true
        });
        this.setState({
          textHide: false
        });
      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY;

      if (isTop < 30) {
        this.setState({
          scrollEvent: false
        });
        this.setState({
          textHide: true
        });
      }
    });
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DisplayDrawer__WEBPACK_IMPORTED_MODULE_30__["default"], {
      extColor: "white",
      iconcolor: "white",
      backColor: "black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.headerContent,
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        fontSize: '50px',
        color: 'white',
        fontWeight: 700
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Mr.Toi"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      className: classes.textContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "IoT is the best opportunity for career oriented creators as they can learn,develop, build and understand system along with their own ideas and techniques")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.readbuttonBreak,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "large",
      onMouseEnter: this.handleButtonColor,
      onMouseLeave: this.handleButtonColor,
      style: {
        backgroundColor: this.state.buttonColor,
        boxShadow: '#00a8bd',
        width: 140,
        height: 60,
        borderRadius: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Read More")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onMouseEnter: this.handleExplore,
      onMouseLeave: this.handleExplore,
      style: {
        cursor: 'pointer',
        color: this.state.exploreColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        fontSize: 18
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Explore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: this.state.exploreColor,
        fontSize: 30
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    })))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)) , url(${_imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3___default.a})`,
    height: window.innerHeight,
    backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  headerContent: {
    marginTop: 60
  },
  textStyle: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 500,
    paddingRight: 30,
    cursor: 'pointer'
  },
  content: {
    display: 'flex',
    justifyContent: "center",
    margin: 40
  },
  homeDisplay: {
    dispaly: 'flex',
    textAlign: 'right',
    // marginTop:20,
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    }
  },
  textContent: {
    color: '#D4EAF9',
    fontSize: '16px',
    fontFamily: 'Droid Serif',
    fontStyle: 'italic',
    display: 'flex',
    justifyContent: "center",
    minWidth: 90,
    maxWidth: 900
  },
  readbuttonBreak: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: -50,
    [theme.breakpoints.down('md')]: {
      paddingTop: 10
    }
  },
  exploreBreak: {
    // display:'flex' , 
    // justifyContent:'center',
    // padding:'50px'
    // position:'absolute',
    // bottom:20,
    // [theme.breakpoints.down('xs')]:{
    //   bottom:-10,
    // },
    flex: 1,
    justifyContent: 'flex-end'
  },
  spanDisplay: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: 25
    }
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'black',
    height: 80 // [theme.breakpoints.down('xs')]:{
    //   height:70,
    // },

  },
  divSytle: {
    backgroundColor: 'white',
    dispaly: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  drawerMediaHide: {
    display: 'none' // [theme.breakpoints.down('xs')]: {
    //   display: 'block',
    // },

  },
  paper: {
    background: "rgba(0,0,0,0.6)",
    divSytle: {
      backgroundColor: 'white',
      dispaly: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'flex'
      }
    },
    homeHide: {
      textAlign: 'right',
      display: 'block'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  sectionIcon: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  headAlign: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  rootGrid: {
    display: 'block',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'flex-end'
  }
});

Background_Page.propsTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
}; // export default App

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Background_Page));
{
  /* { this.state.scrollEvent ? ((window.innerHeight<600 && window.innerWidth<600) ?
          <AppBar position="sticky" className={classes.appBar}  >
          <Toolbar>
          <div className={classes.grow}/>
          <div style={{display:'flex' , justifyContent:'flex-end' , paddingRight:15}} >
            <IconButton
               className={classes.sectionIcon}
               aria-label="show more"
               aria-controls={mobileMenuId}
               aria-haspopup="true"
               onClick={toggleDrawer('right',true)}
               color="inherit" >
               <ListAltIcon />
             </IconButton>
             </div> 
          </Toolbar>
        </AppBar>: <AppBar position="sticky" className={classes.appBar}  >
                  <Toolbar>
                  <div className={classes.grow}/>
                    <text className={classes.textStyle} >Home</text>  
                    <text className={classes.textStyle} >Blog</text>  
                    <text className={classes.textStyle} >Contact</text>  
                  </Toolbar>
                </AppBar> ) : null
        } */
}
{
  /* <div className={classes.headAlign} >
  
   </div> 
  <div className={classes.contentBreak}>
   <text className={classes.textContent} >
     IoT is the best opportunity for career oriented creators as they 
     can learn,develop, build and understand system along with their own ideas and techniques
     </text>
  </div>
  <div className={classes.readbuttonBreak} >
   <Button size='large' onMouseEnter={this.handleButtonColor} 
     onMouseLeave={this.handleButtonColor}
     style={{backgroundColor:this.state.buttonColor ,
     boxShadow:'#00a8bd',width:140 ,height:60 ,borderRadius:0}} >Read More</Button>
  </div>
  </div>
  <div style={{position:'absolute',bottom:20,right:0,left:0}} >
  <div className="align-bottom" >
   <a onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore} 
   style={{cursor:'pointer',color:this.state.exploreColor}}>
   <text style={{fontSize:18}} >Explore</text>
   <br></br>
   <ExpandMoreIcon style={{color:this.state.exploreColor,fontSize:30}} ></ExpandMoreIcon></a>
  </div>
           <Drawer width={100} classes={{paper:classes.paper}} anchor="right" open={this.state.right} onClose={toggleDrawer('right', false)}>
  {sideList('right')}
  </Drawer>
  </div> */
}

/***/ }),

/***/ "./src/components/BlogHead.js":
/*!************************************!*\
  !*** ./src/components/BlogHead.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/BlogHead.js";






class BlogHead extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundColor: 'black',
        width: "100%",
        height: 200,
        paddingTop: 60
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h4",
      style: {
        color: 'white',
        padding: 25
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Blog & News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Mr.Toi --> Blog"))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  rootToolbar: theme.mixins.toolbar,
  appBar: {
    backgroundColor: 'white',
    height: 150,
    [theme.breakpoints.down('xs')]: {
      height: 140
    } // justifyContent:'center',
    // alignItems:'center'

  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  textStyle: {
    color: 'Black',
    fontSize: '20px',
    fontWeight: 500,
    paddingRight: 30,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    cursor: 'pointer'
  }
});

BlogHead.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(BlogHead)); // <div className={classes.rootToolbar} >
//   <div className={classes.root}>
// {/* <AppBar position="static" className={classes.appBar}  >
//   <Toolbar style={{justifyContent:'center'}} >
//     <div>
//       <Grid>
//         <Typography variant='h4' style={{color:'black',padding:25}}>Blog & News</Typography>
//         <Typography style={{color:'black'}} >Mr.Toi --> Blog</Typography>
//       </Grid>
//     </div>
//   </Toolbar>
// </AppBar> */}

/***/ }),

/***/ "./src/components/BlogList.js":
/*!************************************!*\
  !*** ./src/components/BlogList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _imgs_keerthi_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/keerthi.jpg */ "./src/imgs/keerthi.jpg");
/* harmony import */ var _imgs_keerthi_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_imgs_keerthi_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _imgs_muthu_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/muthu.jpg */ "./src/imgs/muthu.jpg");
/* harmony import */ var _imgs_muthu_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_imgs_muthu_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _imgs_abiraman_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/abiraman.jpg */ "./src/imgs/abiraman.jpg");
/* harmony import */ var _imgs_abiraman_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_imgs_abiraman_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _imgs_aravind_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/aravind.jpg */ "./src/imgs/aravind.jpg");
/* harmony import */ var _imgs_aravind_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_imgs_aravind_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/BlogList.js";
















const gridSize = "column";

class BlogList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      personData: [{
        img: _imgs_keerthi_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        name: "M.KEERTHIVASAN",
        job: "FOUNDER ,CEO"
      }, {
        img: _imgs_muthu_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        name: "MUTHUKUMAR",
        job: "MENTOR"
      }, {
        img: _imgs_abiraman_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        name: "K.ABIRAMAN",
        job: "CHIEF TECHNICAL OFFICER"
      }, {
        img: _imgs_aravind_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        name: "ARAVIND",
        job: "DIRECTING MANAGER"
      }],
      gridAlign: window.innerWidth <= 600 || window.innerHeight <= 600 ? 'column' : 'row'
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 6,
      className: classes.rootPaper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingTop: 100
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, this.state.personData.map((data, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingBottom: 30
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 6,
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.rootGrid,
      container: true,
      wrap: "wrap-reverse",
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'left',
        marginLeft: 40
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classes.imageStyle,
      src: data.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6",
      className: classes.nameContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.jobContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, data.job), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.mediaContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_11___default.a, {
      style: {
        cursor: 'pointer',
        paddingRight: 15,
        color: '#3b5998'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_12___default.a, {
      style: {
        cursor: 'pointer',
        paddingRight: 15,
        color: '#e4405f'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_13___default.a, {
      style: {
        cursor: 'pointer',
        paddingRight: 15,
        color: '#00acee'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_14___default.a, {
      style: {
        cursor: 'pointer',
        paddingRight: 15,
        color: '#0e76a8'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })))))))))));
  }

}

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    paddingBottom: 50
  },
  paper: {
    maxWidth: 900,
    height: 200,
    [theme.breakpoints.down('md')]: {
      height: 370
    },
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(3),
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 40,
    [theme.breakpoints.down('xs')]: {
      gridSize: 'row'
    },
    borderRadius: 0,
    paddingBottom: 20
  },
  rootGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    } // width:1200

  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 200
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2
  },
  nameContent: {
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center' // maxWidth:60

    },
    paddingTop: 30,
    marginRight: 20,
    fontFamily: 'Droid Serif ',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  jobContent: {
    textAlign: 'left',
    marginRight: 30,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontFamily: 'Droid Serif ',
      fontStyle: 'italic'
    },
    mediaAlign: {
      // display:'none',
      textAlign: 'left'
    },
    paddingTop: 30,
    fontWeight: 5
  },
  mediaContent: {
    textAlign: 'left',
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  appBar: {
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  card: {
    maxWidth: 900,
    alignContent: 'center',
    justifyContent: 'center'
  },
  rootPaper: {
    width: '85%',
    backgroundColor: 'white',
    marginTop: '-60px',
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    },
    borderRadius: 0
  }
});

BlogList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(useStyles)(BlogList));

/***/ }),

/***/ "./src/components/Contact_Page.js":
/*!****************************************!*\
  !*** ./src/components/Contact_Page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_letter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/letter.svg */ "./src/imgs/letter.svg");
/* harmony import */ var _imgs_letter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_letter_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/Contact_Page.js";





class Contact_Page extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h3",
      className: classes.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Have Some Questions?  "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      justify: "space-evenly",
      className: classes.rootGrid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.alignLetter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classes.letterStyle,
      src: _imgs_letter_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      elevation: 3,
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      className: classes.secondGrid,
      justify: "space-between",
      item: true,
      direction: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.textField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["OutlinedInput"], {
      className: classes.fieldWidth,
      style: {
        borderRadius: 35,
        notchedOutline: 30
      },
      placeholder: "Firstname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.textField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["OutlinedInput"], {
      className: classes.fieldWidth,
      style: {
        borderRadius: 35
      },
      placeholder: "Lastname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.textField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["OutlinedInput"], {
      className: classes.fieldWidth,
      style: {
        borderRadius: 35
      },
      placeholder: "Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.textField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["OutlinedInput"], {
      className: classes.fieldWidth,
      multiline: true,
      style: {
        borderRadius: 20,
        height: 100
      },
      placeholder: "Your Question...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.textField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: classes.fieldWidth,
      style: {
        borderRadius: 35,
        height: 50,
        background: 'rgba(0, 0, 0, 0) -webkit-linear-gradient(left, rgb(148, 115, 221) 0%, rgb(26, 201, 228) 100%) repeat scroll 0% 0%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Send Message"))))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  rootGrid: {
    flexGrow: 1,
    padding: theme.spacing(0, 3),
    marginTop: 20,
    marginBottom: 90
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'Droid Serif',
    fontSize: 40
  },
  letterStyle: {
    width: 340,
    height: 340,
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 300
    }
  },
  alignLetter: {
    marginTop: 40,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10
    }
  },
  textField: {
    marginBottom: 10 // width:,

  },
  secondGrid: {
    display: 'flex',
    justifyContent: "center",
    margin: 40,
    [theme.breakpoints.down("xs")]: {
      margin: 30
    }
  },
  paper: {
    backgroundColor: "rgba(0,0,0,0.06)",
    borderRadius: 20
  },
  fieldWidth: {
    width: 350,
    [theme.breakpoints.down("xs")]: {
      width: 300
    }
  }
});

Contact_Page.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Contact_Page));

/***/ }),

/***/ "./src/components/CourseCard.js":
/*!**************************************!*\
  !*** ./src/components/CourseCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogList */ "./src/components/BlogList.js");
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppHead */ "./src/components/AppHead.js");
/* harmony import */ var particles_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! particles-bg */ "./node_modules/particles-bg/dist/index.es.js");
/* harmony import */ var _components_BlogHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogHead */ "./src/components/BlogHead.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_HomeNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeNav */ "./src/components/HomeNav.js");
/* harmony import */ var _components_Contact_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact_Page */ "./src/components/Contact_Page.js");
/* harmony import */ var _MediaPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MediaPage */ "./src/components/MediaPage.js");
/* harmony import */ var _video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../video/learning_preview.mp4 */ "./src/video/learning_preview.mp4");
/* harmony import */ var _video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/DoneOutline */ "./node_modules/@material-ui/icons/DoneOutline.js");
/* harmony import */ var _material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imgs/BluetoothControlledRobot.jpg */ "./src/imgs/BluetoothControlledRobot.jpg");
/* harmony import */ var _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../imgs/LineFollower.jpg */ "./src/imgs/LineFollower.jpg");
/* harmony import */ var _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../imgs/ObstacleAvoidingRobot.jpg */ "./src/imgs/ObstacleAvoidingRobot.jpg");
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../imgs/Home-Automation-using-Local-Host.jpg */ "./src/imgs/Home-Automation-using-Local-Host.jpg");
/* harmony import */ var _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/CourseCard.js";


















class CourseCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleEvent = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          overlay: 'flex'
        });
      } else {
        this.setState({
          overlay: 'none'
        });
      }
    };

    this.state = {
      overlay: "none"
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingTop: 40
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardMedia"], {
      onMouseEnter: this.handleEvent,
      onMouseLeave: this.handleEvent,
      style: {
        backgroundImage: `url(${this.props.image})`,
        height: '30vh',
        width: '40vh',
        borderRadius: 0,
        cursor: 'pointer',
        backgroundPosition: 'center',
        display: 'flex',
        backgroundSize: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: this.state.overlay,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '30vh',
        width: '40vh',
        alignItems: 'center',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16___default.a, {
      style: {
        color: 'white',
        width: 40,
        height: 40
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      gutterBottom: true,
      variant: "body1",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {},
      variant: "body2",
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, this.props.description)))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: '45vh',
    marginRight: 20
  }
});

CourseCard.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(CourseCard));

/***/ }),

/***/ "./src/components/CourseDetails.js":
/*!*****************************************!*\
  !*** ./src/components/CourseDetails.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/CourseDetails.js";




class CourseDetails extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.childDiv,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      className: classes.rootGrid,
      alignItems: "center",
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      justify: "center",
      alignItems: "center",
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.descStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h4",
      className: classes.titleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, this.props.headLine), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'justify',
        margin: 30
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        color: 'white',
        lineHeight: 1.6
      },
      variant: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.props.description), " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      justify: "center",
      alignItems: "flex-end",
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classes.imgStyle,
      src: this.props.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center' // alignItems:'flex-start',

  },
  childDiv: {
    // height:"100%",
    width: "95%",
    marginTop: 15,
    backgroundColor: '#333'
  },
  rootGrid: {
    flexDirection: 'row',
    // width:1300,
    marginBottom: 50,
    marginTop: 50,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginBottom: 0,
      marginTop: 0,
      margin: 0,
      padding: 0
    } // [theme.breakpoints.down('md')]:{
    //     margin:0
    // },

  },
  imgStyle: {
    minWidth: 50,
    minHeight: 50,
    maxHeight: 500,
    maxWidth: 500,
    // margin:30,
    [theme.breakpoints.down('sm')]: {
      minWidth: 200,
      maxWidth: 300,
      marginTop: 30
    }
  },
  desGrid: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    height: '100%'
  },
  imgGrid: {
    backgroundColor: 'rgba(0,0,0,19)'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  titleStyle: {
    fontWeight: 'bold',
    color: 'white'
  },
  descStyle: {
    // minWidth:60,
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center',
    maxWidth: 500,
    textAlign: "center"
  }
});

CourseDetails.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(CourseDetails));

/***/ }),

/***/ "./src/components/Courses/List.js":
/*!****************************************!*\
  !*** ./src/components/Courses/List.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextStyle */ "./src/components/Courses/TextStyle.js");
/* harmony import */ var _CourseDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CourseDetails */ "./src/components/CourseDetails.js");
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imgs/ObstacleAvoidingRobot.jpg */ "./src/imgs/ObstacleAvoidingRobot.jpg");
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/Courses/List.js";







class List extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, this.props.items.map((value, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginLeft: 40,
        clear: 'left',
        float: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, value))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

List.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(List));

/***/ }),

/***/ "./src/components/Courses/TextStyle.js":
/*!*********************************************!*\
  !*** ./src/components/Courses/TextStyle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/Courses/TextStyle.js";




class TextStyle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'justify',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        fontFamily: '',
        fontWeight: 'bold',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        fontFamily: 'Droid Serif',
        textAlign: 'justify',
        marginLeft: 30,
        fontWeight: 'lighter',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, this.props.description));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    margin: 40,
    marginLeft: 60,
    [theme.breakpoints.down('sm')]: {
      margin: 10
    }
  },
  bottomGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  description: {
    fontFamily: 'Droid Serif',
    clear: 'left',
    textAlign: 'justify',
    fontWeight: 'lighter',
    clear: 'left',
    float: 'left',
    marginTop: 10 // [theme.breakpoints.down('xs')]:{
    //   textAlign:'center',
    //   float:'left'
    //   }

  }
});

TextStyle.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(TextStyle));

/***/ }),

/***/ "./src/components/DisplayDrawer.js":
/*!*****************************************!*\
  !*** ./src/components/DisplayDrawer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_akdcpa_Documents_React_TOI_mrtoi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _imgs_back_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/back.jpg */ "./src/imgs/back.jpg");
/* harmony import */ var _imgs_back_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_back_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imgs/fb_icon.png */ "./src/imgs/fb_icon.png");
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imgs/icon.png */ "./src/imgs/icon.png");
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_imgs_icon_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../imgs/twitter_icon.png */ "./src/imgs/twitter_icon.png");
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../imgs/linkedin_icon.png */ "./src/imgs/linkedin_icon.png");
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "./node_modules/@material-ui/icons/MailOutline.js");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/MoreOutlined */ "./node_modules/@material-ui/icons/MoreOutlined.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "./node_modules/@material-ui/icons/ListAlt.js");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _imgs_more_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../imgs/more.png */ "./src/imgs/more.png");
/* harmony import */ var _imgs_more_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_imgs_more_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _HomeNav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./HomeNav */ "./src/components/HomeNav.js");
/* harmony import */ var _SpanIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SpanIcon */ "./src/components/SpanIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/DisplayDrawer.js";
































class DisplayDrawer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: '#01bacf',
      exploreColor: 'white',
      scrollEvent: false,
      textHide: true,
      top: false,
      left: false,
      bottom: false,
      right: false,
      drawerStatus: false,
      fb_size: 35,
      insta_size: 28,
      twitter_size: 35,
      in_size: 35
    };
  }

  render() {
    const classes = this.props.classes;
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      this.setState(Object(_home_akdcpa_Documents_React_TOI_mrtoi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [side]: open
      }));
    };

    const fullList = side => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.fullList,
      role: "presentation",
      onClick: toggleDrawer(side, false),
      onKeyDown: toggleDrawer(side, false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, ['Home', 'Blog', 'Location'].map((text, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, index === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24___default.a, {
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }) : index === 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_26___default.a, {
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_25___default.a, {
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_23__["default"], {
      primary: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, text),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__["default"], {
      className: classes.drawerMediaHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.fb_size,
        weight: this.state.fb_size
      },
      src: _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.insta_size,
        weight: this.state.insta_size
      },
      src: _imgs_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.in_size,
        weight: this.state.in_size
      },
      src: _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_14___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      style: {
        height: this.state.twitter_size,
        weight: this.state.twitter_size
      },
      src: _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))))));

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.grow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.homeDisplay,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
      style: {
        color: this.props.textColor
      },
      className: classes.textStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_31__["Redirect"], {
        to: "/Blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "  ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
      style: {
        color: this.props.textColor
      },
      className: classes.textStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Blog"), "  "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
      style: {
        color: this.props.textColor
      },
      className: classes.textStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Contact")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.spanDisplay,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classes.sectionIcon,
      "aria-label": "show more",
      "aria-controls": mobileMenuId,
      "aria-haspopup": "true",
      onClick: toggleDrawer('top', true),
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SpanIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
      color: this.props.iconcolor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_17__["default"], {
      classes: {
        paper: classes.paperColor
      },
      anchor: "top",
      open: this.state.top,
      onClose: toggleDrawer('top', false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, fullList('top')));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)) , url(${_imgs_back_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
    height: window.innerHeight,
    backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  headerContent: {
    marginTop: 60
  },
  textStyle: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 500,
    paddingRight: 30,
    cursor: 'pointer'
  },
  content: {
    display: 'flex',
    justifyContent: "center",
    margin: 40
  },
  homeDisplay: {
    dispaly: 'flex',
    textAlign: 'right',
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    }
  },
  textContent: {
    color: '#D4EAF9',
    fontSize: '16px',
    fontFamily: 'Droid Serif',
    fontStyle: 'italic',
    display: 'flex',
    justifyContent: "center",
    minWidth: 90,
    maxWidth: 900
  },
  readbuttonBreak: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: -50,
    [theme.breakpoints.down('md')]: {
      paddingTop: 10
    }
  },
  exploreBreak: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  spanDisplay: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: 25
    }
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'black',
    height: 80 // [theme.breakpoints.down('xs')]:{
    //   height:70,
    // },

  },
  divSytle: {
    backgroundColor: 'white',
    dispaly: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  drawerMediaHide: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  paperColor: {
    background: "rgba(0,0,0,0.6)"
  },
  divSytle: {
    backgroundColor: 'white',
    dispaly: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  homeHide: {
    textAlign: 'right',
    display: 'block'
  },
  sectionIcon: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  headAlign: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  rootGrid: {
    display: 'block',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'flex-end'
  }
});

DisplayDrawer.propsTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
}; // export default App

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(DisplayDrawer));

/***/ }),

/***/ "./src/components/HomeCourse.js":
/*!**************************************!*\
  !*** ./src/components/HomeCourse.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogList */ "./src/components/BlogList.js");
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppHead */ "./src/components/AppHead.js");
/* harmony import */ var particles_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! particles-bg */ "./node_modules/particles-bg/dist/index.es.js");
/* harmony import */ var _components_BlogHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogHead */ "./src/components/BlogHead.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_HomeNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeNav */ "./src/components/HomeNav.js");
/* harmony import */ var _components_Contact_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact_Page */ "./src/components/Contact_Page.js");
/* harmony import */ var _MediaPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MediaPage */ "./src/components/MediaPage.js");
/* harmony import */ var _video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../video/learning_preview.mp4 */ "./src/video/learning_preview.mp4");
/* harmony import */ var _video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/DoneOutline */ "./node_modules/@material-ui/icons/DoneOutline.js");
/* harmony import */ var _material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imgs/BluetoothControlledRobot.jpg */ "./src/imgs/BluetoothControlledRobot.jpg");
/* harmony import */ var _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../imgs/LineFollower.jpg */ "./src/imgs/LineFollower.jpg");
/* harmony import */ var _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../imgs/ObstacleAvoidingRobot.jpg */ "./src/imgs/ObstacleAvoidingRobot.jpg");
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../imgs/Home-Automation-using-Local-Host.jpg */ "./src/imgs/Home-Automation-using-Local-Host.jpg");
/* harmony import */ var _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _CourseCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CourseCard */ "./src/components/CourseCard.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/HomeCourse.js";



















class HomeCourse extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleBlue = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          blue_show: 'flex'
        });
      } else {
        this.setState({
          blue_show: 'none'
        });
      }
    };

    this.handleObs = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          obs_show: 'flex'
        });
      } else {
        this.setState({
          obs_show: 'none'
        });
      }
    };

    this.handleAuto = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          auto_show: 'flex'
        });
      } else {
        this.setState({
          auto_show: 'none'
        });
      }
    };

    this.handleLine = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          line_show: 'flex'
        });
      } else {
        this.setState({
          line_show: 'none'
        });
      }
    };

    this.handleButtonColor = event => {
      if (event.type === 'mouseenter') {
        this.setState({
          buttonColor: 'white'
        });
      } else {
        this.setState({
          buttonColor: "#01bacf"
        });
      }
    };

    this.state = {
      blue_show: 'none',
      obs_show: 'none',
      auto_show: 'none',
      line_show: 'none',
      buttonColor: '#01bacf'
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "h4",
      style: {
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Recent Courses"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      gutterBottom: true,
      style: {
        minWidth: 150,
        maxWidth: 900,
        fontFamily: 'Droid Serif',
        fontStyle: 'italic',
        fontWeight: 10,
        color: '#a2a2a2'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "IoT allows us to use affordable wireless technology and transmit the data into the cloud at a component level. It also provides a place to save data as well as management and security.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      alignContent: "center",
      justify: "center",
      direction: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Blutooth Car",
      image: _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      description: "Control car moves by bluetooth",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "IOT Home",
      image: _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
      description: "Automate your home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Line Follower Robot",
      image: _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
      description: "Line Follower Using Aurduino",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Obstacle Avoiding vehicle",
      image: _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      description: "Aurduino and ultrasonic sensor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      size: "large",
      onMouseEnter: this.handleButtonColor,
      onMouseLeave: this.handleButtonColor,
      style: {
        backgroundColor: this.state.buttonColor,
        boxShadow: '#00a8bd',
        width: 200,
        height: 60,
        borderRadius: 0,
        marginTop: 30
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "View All Courses"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '20vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: '45vh'
  }
});

HomeCourse.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(HomeCourse));

/***/ }),

/***/ "./src/components/HomeNav.js":
/*!***********************************!*\
  !*** ./src/components/HomeNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _SpanIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpanIcon */ "./src/components/SpanIcon.js");
/* harmony import */ var _DisplayDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DisplayDrawer */ "./src/components/DisplayDrawer.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/HomeNav.js";









class HomeNav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
      drawerStatus: false
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
      position: "sticky",
      style: {
        backgroundColor: this.props.backColor
      },
      className: classes.appBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DisplayDrawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      iconcolor: this.props.iconcolor,
      textColor: this.props.textColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    // backgroundColor:,
    height: 100,
    [theme.breakpoints.down('xs')]: {
      height: 70
    }
  },
  display: {
    display: 'flex',
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    }
  },
  displayDrawer: {
    display: 'none',
    [theme.breakpoints.down("xs")]: {
      display: 'flex'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  textStyle: {
    // color:'white',
    fontSize: '20px',
    fontWeight: 500,
    paddingRight: 30,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  divSytle: {
    backgroundColor: 'white',
    dispaly: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  },
  drawerMediaHide: {
    display: 'none' // [theme.breakpoints.down('xs')]: {
    //   display: 'block',
    // },

  }
});

HomeNav.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(HomeNav));

/***/ }),

/***/ "./src/components/HomeNext.js":
/*!************************************!*\
  !*** ./src/components/HomeNext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogList */ "./src/components/BlogList.js");
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppHead */ "./src/components/AppHead.js");
/* harmony import */ var particles_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! particles-bg */ "./node_modules/particles-bg/dist/index.es.js");
/* harmony import */ var _components_BlogHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogHead */ "./src/components/BlogHead.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_HomeNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeNav */ "./src/components/HomeNav.js");
/* harmony import */ var _components_Contact_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact_Page */ "./src/components/Contact_Page.js");
/* harmony import */ var _MediaPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MediaPage */ "./src/components/MediaPage.js");
/* harmony import */ var _video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../video/learning_preview.mp4 */ "./src/video/learning_preview.mp4");
/* harmony import */ var _video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/DoneOutline */ "./node_modules/@material-ui/icons/DoneOutline.js");
/* harmony import */ var _material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/HomeNext.js";











 // import {Player} from 'video-react'

class HomeNext extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      iotproject: ["Bluetooth Robot", "Line Follower", "Obstacle Avoiding Robot", "Home Automation", "Industry Automation", "Temperature logging", "LiquidLevel Monitor", "Smart Dustbin", "Car Parking System", " Biometric Lock"]
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '20vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      align: "center",
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
      className: classes.videoSize,
      src: _video_learning_preview_mp4__WEBPACK_IMPORTED_MODULE_10___default.a,
      autoPlay: true,
      muted: true,
      loop: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      align: "center",
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 29,
        textAlign: 'left',
        fontWeight: 'bolder',
        marginLeft: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "We are a passionate learning "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 29,
        textAlign: 'justify',
        marginLeft: 15,
        fontWeight: 'bolder'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "system from chennai. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      className: classes.list,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      justify: "center",
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, this.state.iotproject.slice(0, 5).map((data, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginLeft: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        float: 'left',
        clear: 'left',
        marginBottom: 10,
        listStyle: "none"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11___default.a, {
      style: {
        color: 'blue'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), data)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      justify: "center",
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.state.iotproject.slice(5, 10).map((data, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.listAlign,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        float: 'left',
        marginBottom: 10,
        listStyle: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DoneOutline__WEBPACK_IMPORTED_MODULE_11___default.a, {
      style: {
        clear: 'left',
        color: 'blue'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), data)))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '20vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  list: {
    flexDirection: 'row' // [theme.breakpoints.down('xs')]:{
    //   flexDirection: 'column',
    // }

  },
  videoSize: {
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    }
  },
  listAlign: {
    marginLeft: 80,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 20
    }
  }
});

HomeNext.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(HomeNext));

/***/ }),

/***/ "./src/components/MediaPage.js":
/*!*************************************!*\
  !*** ./src/components/MediaPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_letter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/letter.svg */ "./src/imgs/letter.svg");
/* harmony import */ var _imgs_letter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_letter_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imgs_email_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/email.png */ "./src/imgs/email.png");
/* harmony import */ var _imgs_email_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_email_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _imgs_location_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/location.png */ "./src/imgs/location.png");
/* harmony import */ var _imgs_location_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_location_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _imgs_share_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/share.png */ "./src/imgs/share.png");
/* harmony import */ var _imgs_share_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imgs_share_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/MediaPage.js";












class MediaPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      className: classes.root,
      direction: "row",
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      direction: "column",
      item: true,
      md: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.alignLetter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        width: 95,
        height: 95
      },
      className: classes.letterStyle,
      src: _imgs_email_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        fontSize: 27,
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Contact us Today")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        fontSize: 19,
        fontWeight: 'lighter'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Phone:+91 8248314696")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        cursor: 'pointer',
        fontSize: 19,
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "mrtoi2020@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      md: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.alignLetter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        width: 95,
        height: 95
      },
      className: classes.letterStyle,
      src: _imgs_location_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        fontSize: 27,
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Visit Our Office")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        fontSize: 19,
        fontWeight: 'lighter'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "chruch christ,kundrathur . chennai-600069")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        cursor: 'pointer',
        fontSize: 19,
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "mrtoi2020@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      md: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.alignLetter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        width: 95,
        height: 95
      },
      className: classes.letterStyle,
      src: _imgs_share_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      style: {
        fontSize: 27,
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Be Social")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingTop: 35
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_7___default.a, {
      style: {
        cursor: 'pointer',
        width: 40,
        height: 40,
        paddingRight: 15,
        color: '#3b5998'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        cursor: 'pointer',
        width: 40,
        height: 40,
        paddingRight: 15,
        color: '#e4405f'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        cursor: 'pointer',
        width: 40,
        height: 40,
        paddingRight: 15,
        color: '#00acee'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10___default.a, {
      style: {
        cursor: 'pointer',
        width: 40,
        height: 40,
        paddingRight: 15,
        color: '#0e76a8'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 3)
  },
  text: {
    fontWeight: '160px'
  },
  // letterStyle:{
  //     width:340,
  //     height:340
  // },
  alignLetter: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20
  },
  textField: {
    padding: 10 // width:,

  },
  secondGrid: {
    display: 'flex',
    justifyContent: "center"
  }
});

MediaPage.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(MediaPage));

/***/ }),

/***/ "./src/components/SpanIcon.js":
/*!************************************!*\
  !*** ./src/components/SpanIcon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/components/SpanIcon.js";





class SpanIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return (// <div style={{display:'flex', justifyContent:'flex-end'}} >
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: 23,
          height: 20,
          backgroundColor: this.props.backColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: this.props.color
        },
        className: classes.hr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: this.props.color
        },
        className: classes.hr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundColor: this.props.color
        },
        className: classes.hr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))
    );
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  spanStyle: {
    width: '22px',
    height: '2px',
    borderRadius: '2px',
    backgroundColor: "#888",
    display: 'block'
  },
  hr: {
    height: '3px',
    border: 0,
    boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)',
    width: '22px',
    marginBottom: 4,
    borderRadius: '2px',
    backgroundColor: "#888",
    display: 'block'
  },
  borderBox: {}
});

SpanIcon.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(SpanIcon));

/***/ }),

/***/ "./src/imgs/BluetoothControlledRobot.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/BluetoothControlledRobot.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/BluetoothControlledRobot.fb786d22.jpg";

/***/ }),

/***/ "./src/imgs/Home-Automation-using-Local-Host.jpg":
/*!*******************************************************!*\
  !*** ./src/imgs/Home-Automation-using-Local-Host.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Home-Automation-using-Local-Host.eb310a4b.jpg";

/***/ }),

/***/ "./src/imgs/Learning.png":
/*!*******************************!*\
  !*** ./src/imgs/Learning.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/imgs/LineFollower.jpg":
/*!***********************************!*\
  !*** ./src/imgs/LineFollower.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/LineFollower.222005e2.jpg";

/***/ }),

/***/ "./src/imgs/ObstacleAvoidingRobot.jpg":
/*!********************************************!*\
  !*** ./src/imgs/ObstacleAvoidingRobot.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ObstacleAvoidingRobot.5e860969.jpg";

/***/ }),

/***/ "./src/imgs/abiraman.jpg":
/*!*******************************!*\
  !*** ./src/imgs/abiraman.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/abiraman.682b2517.jpg";

/***/ }),

/***/ "./src/imgs/aravind.jpg":
/*!******************************!*\
  !*** ./src/imgs/aravind.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/aravind.7f0d19a8.jpg";

/***/ }),

/***/ "./src/imgs/back.jpg":
/*!***************************!*\
  !*** ./src/imgs/back.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/back.fbab589f.jpg";

/***/ }),

/***/ "./src/imgs/dashboard.png":
/*!********************************!*\
  !*** ./src/imgs/dashboard.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/imgs/email.png":
/*!****************************!*\
  !*** ./src/imgs/email.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/imgs/fb_icon.png":
/*!******************************!*\
  !*** ./src/imgs/fb_icon.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/imgs/icon.png":
/*!***************************!*\
  !*** ./src/imgs/icon.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon.37e83fa5.png";

/***/ }),

/***/ "./src/imgs/iot.png":
/*!**************************!*\
  !*** ./src/imgs/iot.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAGlUlEQVR4nO2cXWwUVRTHf3dm02KjCTzwVULSWkjx4wUkUgRJDPhgDDEB2yAfEgPh0fCAtPpQthgSQzD6gC9iIqZQY1dUQiCKENsHPmIxPhGMgoBJm/BhwJBQKN05Pmx3u2132529d2a6y/0lk5Ape86Z+c+5c+aemQsWi8VisVgsFovFYgkVpWugeptUuRW0KGE9UAO42lFNzD0FZ4Dd1z9T50LwFxhaAlRvk6qKGKeBBkPx+EJgEId11/erI1H4N4Gj8+PKGC0ONDhDhsLeXIi5HgdqtstUneOIkpjOj93UsJPmg8rbfHwxoQY0Y5qQedukDpcfgXnANOcBrwOHg/YbBFoZ4Ag1joAjENbJB7j8ubriQCLtWylqw/AbBLoZkLnhhnXy08SEAZHUv5XmcUSJVuCOmAqjCN8epN2rCOPQJRABdpyRuI7dvHh07XtZdUFq7MxkgHYxHR2BCFD3gF06diegC2wGAOMKEAjZ7rIzANi1cIuYFj0J3AQuAB2/z6WTuPIM+whMgDYdu/nwvNTVDyMzICBcYDawGlj9wj+8526VN3/9Ql016US3CspJ3VoV17FbCA4ErsAoFpHk/ItbpcGkCCVdBWXRdv6gWdEbG8XtraJGYIMoWoAngBnqEZ3EZYmp4SgQAbYHVQU5dH26dLgKGr4Lm3eVSKgkcAXYvfQdOaU8TpESYfGyv2k8A9+Y8BOIAPMeBlMFDd10u2BUBgSciee+VGeXvy17IXVcCtYzmQV4pl/HaoG+IfvE71qxyWAVpOgD2v/tpzX9hB/zOOSpoQtLsdiUq0AEWHA/mCrIYWQVFBhCNdA8vRKAFoDpD7l6qzLz95mmXOlVQXn2z2kMvgqKEUoRtJkhARIJlVy5MePRWNOpdKsgRkxFtJ08ZE70VzdkHvFmjfAZwPEGIsDOgKogL3suKMCpiHzHVTICzB4IYS6I4CbjSl6AZ+/rWC3Qt82AcQUIpAoiuwrCZkDegOaGUAXZDCD/ZFwYBDkVke+4svevaZReJbQ7itaERjtWtymfTDfGGxulQseWb98eFWnfjsegUdsyvOXb7wjVCppF2K3lSzPQa5k3E4QdYYmwdq3Md4SmtG8XjM7RFyhAaoNNOr70hiCPw6JoBUDYA+xZtyaEcSnbheLOlEGOmzTv6x6QmrYoGi0BBmN8VJFklQgv6djR4JGCLQd/UHdNGg3zJqw1BCUSqn/AZZUjxB3hcvY9IeDtniOcQFh++Dv1vamTkcbXEKQpivYLTYmE6gfahrZx2fzGcBv9q6PD1Xu+/VFRSBVkilDfKAsztXUomecAv+Qb77TGwQAIM06bATnwGWevji8rQA78xKmgXceXFSAHBcbZB7TfrtKbeg9VgDCrCx0KiXP/CTXHhC+bATko3yrICjAGK0AOrAARYwWImLIVoJyqoPdXSa+C9opptMY1OmI2A3JQYJzVQPPgHWDo7bmifBX7w6KcFTDNOxnwMx2tPDbr+LIZkAOfcc7KubdA7GxoDuxsaMSUbRVkBRiLLUNzYFuSEVMyb0X4djZJy9DR3zP4fCtCqyP22AvwYbfEn0qObKr4FMB2xIrlk18kjje2o+WnI3b3vxLqiE0mAQ78LHGVzH3yConz3XMl2BGbLFXQ1z9JXOW48tPYKihAjh+XOHmu/DRl+xwQtQDdx8a/8tNYAQLgt6PjnvyHhcRjBSiSv46MO+wMCOwrJB4rQJHMTy0gFS/0/5etAPkWWAhjtW8/hBnnY5EBfinbDBjnwPpI9VjpWCjRyzEcwYh5nrIVwIV2EZrDjKUgRs3zlK0AaoBWJwaS+uRT66tDQ/QpaJfBsZN0ppkUAjRdVAOkXu0o+vWOMCh5ASZb58svZTsXVCqUfAYEcQDHnpu4alp90cynr6XfkmT4Q+5OxMhzTZ4ulfEuWyfiZmymFvY2QrgCeNxMH8STz1NjxGZIAkx9hqczNj1umLEa/hB0gdRq5MggG0BvqReA1y6F9GW9sDFztSp6TJkNNQNcjw5XUtVETGg5vUCiWuTDFyfrZZkj7EzH7nh0mLId6roMccRZUU8PwqKhXf0Ce50kh25d4WoTytjYqksn4k6vo1ZcNgE7gSkACnq6/6QhjpnV00NfGKO7XmpFOA/MCNu3AW4kXZasvKSumzIYycok3fVSS5JOZXAR7BDoSbo0vfKHumbSaGRLwwjinK2jSRRvAYuBmUyu1kASuAH0AB3LLvOtMjTsWCwWi8VisVgsFoslQv4HI8biAJyGvOAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/imgs/keerthi.jpg":
/*!******************************!*\
  !*** ./src/imgs/keerthi.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/keerthi.53443a37.jpg";

/***/ }),

/***/ "./src/imgs/letter.svg":
/*!*****************************!*\
  !*** ./src/imgs/letter.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/letter.dc5c469d.svg";

/***/ }),

/***/ "./src/imgs/linkedin_icon.png":
/*!************************************!*\
  !*** ./src/imgs/linkedin_icon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFE0lEQVR4nO3d3U8cVRgG8OfM7LLLR4Fd6CKR0A+NEBAWLaSJH4lGo9xYIK1e1IQaLfbWaC2N8YIbU4H+AaLWpBo0QaK0tuXCC+9MTFrThWyrSWkbJBopXRrA7tLdmeOFYDRQmDM7Z2c58/4u2XnPnJxn58zOBzMAIYQQQgghhBBCCPEK5kgrffECPZDu4hrrAMfjAGoAFDvSdv74C8AMGH5mnI8ZKf8Y+hrvZdto1gHoJ2L7OcMAgN3ZtrXFTDHGjxm9Ld9k04j9AEZGdO1GXT843smmAwo4aaaae9HHTDvFmt210uD/66gWjJ2wW2xrC1iZdkbtrlRFjLEuo7d5TLhOeE198QItmLkC4CHhWrXdMFO+etEds/AUpAfSXaDBX88uPWB0iBYJB8AZ6xSt8QoOU34AAPbYqPEGxlpFS+wEUG2jxiseFC2wE0CJjRqvEB4b28cBxBm+XKyEATjUFEJPSwWatgfBAMTnUvgklsBnsQR4LjqRp6QHwAB8/lItDjaU/+/vbdVFaKsuwjO1Jej+btqzIUifgg41hdYM/n8dbCjHq40h2d3IW9IDeLOlYtNlDreEZXcjb0kPoGl7cNNlWiKFsruRt6QH4NW53SrpAUzMpiwsk5TdjbwlPYBPY7c3XWbockJ2N/KW9ABOT87jqyt3Nvz8y/i87G7kLenHARxA97lp/DC9hJ5oGI2VQZgciM0m8fHlBIbj857eT+TkSNjkwKlYAqdi3p1q7ofOBbmMAnAZBeAy6fsAo7fZ0nJ6/4Sj9aUBHa/Ul+G5HSWIVhUiUuRDWUDHXDKDubsZXL29jO9vLmJ8ahEzi2lL65AhJzvhXNIZw1ttlXj/iQhKA/qazyNFPkSKfGioDGJ/XRnSJsfpyXl88OOfmF7IfRBKTUHFfg3nXt6JgWer1x389fg1hsPRMGKvP4L23dsk93AtZQLQGPB15w68sMveIJYGdJw9sBPdj+b21LgyARzbG8GLWX6DdcbwUXsNHqvK3dlZZQLoe7rKkXYCOsPwvlr4NWfu3N+MMgE4OWB14QAO1Jc51t5GlAnAae/ujeRkPcr9DAWA2GwK49cX8MdSBqGgjtYHCvH8zm0I+qxvJdFIEHXhAH5NLEvsqWIBLBscPeMzGF7n9HZtqR9D7TVCv5KerCmWHoAyUxAH8Nr539YdfACYXkhj3+hNXJhasNzmUzXy/81NmQBGf7mDkav3v/ADAGmT440LM1hYNiy1WV8RcKJrG1ImgMGfbllabvZuBl/ENw5qVSho7Wg6G8oEMHlr84v/q85bnIbChRSAJRzAPcP6hc1JC3dqAEC5xfNJ2VAiAFFzyYyl5fQcHA0rEYDoMIlsLbIpEcBWRgG4jAJwGQXgMgrAZRSAyygAl1EALqMAXEYBuIwCcBkF4DIKwGUUgMsoAJdRAC6jADaQi7tDhdehfRjLn8tJecg8HhUaU9oCXGYngCXHe6EMZv22uxV2AvjdRo1HcOGxEQ+A4ZJwjWewi6IVwgEwzoUfUO0VjPEzojXCARihzLcAvyZa5wHXjaTvrGiR+BR0pDXNGHqF6xTHwN6280oTWz9DV17bcdJOrZIY7zeONwtPP0AWxwFmqrkXDIN269XBB8xk9D271dm/xKd/opNzcxBgD2fb1tbCrzFoR+1+81c5c7pj6KJfTxR0cpgdYGwP/nmNlWoP+V4CMAPOLzGNjRnl6TM40ureUz4IIYQQQgghhBBCyJbzN7XAPEaMlVbGAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/imgs/location.png":
/*!*******************************!*\
  !*** ./src/imgs/location.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/imgs/more.png":
/*!***************************!*\
  !*** ./src/imgs/more.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFoklEQVR4nO2dX2gcVRSHv2zaRtA2alJNUmmTKlKsVmtEalGqCI1SYhG1FCp9KBQt+lCl4oOoBfXFBxEtKlijiFXRF0UraHxo8L+iRrFFi4VoalpjjVIFrcaOD78dOp3sJtnNvTM32/PBMjAz9865+9t777kzZ86CYRiGYRiGYRiGYRiGYRiGYRiGYWRIXcbXOw04B2gBzgQKGV9/svwNDAEHgO+A0XzNccspwGagDzUsmmafX4HngZWuv5hS+Owh9cAtwH2oN4B+eV8DB4Fh4KjH60+Fk4BWYAFwbmL/LmAL8HkONk2JRmAnx35lfcANqLdMN84G7kY/oAg4AmzM1aIKaQZ2I+MPAt35muOMOcAjqFdHwEM+LuJ6yJoJ9AIr0NDUDfxY5tw5wPlogm92bEc1HAVeAQ5PcN464BmgAdgAPOvSiBkuK0O/mhXAINCFekia64BNwGXAHuTJHHJsRzVE6Mc0kSA70Pf2HPAU8BnwjVfLqqQdTdqjQGeJ4wuB94B+YA1wcmaW+eEJJOKbeRtSjh5kYE+JY1cgv/52wl17VEoT8Btq8/KcbRnDLOB3NA53pI6dh4auq7M2KgMeRII8nrchabqQYWn/vAGtdNdlblE2XIza/QOOHCRXw8clxW1vav9taOLe4eg6ofElckjmA2e4qNCVl9Va3A4m9tUDd1GbQ1VMhNz6ZqAN+HmqFbrqIS3FbdLNXY4m8j2OrhEqcZtbxz1rkrgSJO5pybuiVwFvO6o/ZP4tbme6qMynCzoPGPBYf03iU5C5wC8e669JfApSINzb68FSK6vmmsEEqZyl6E61F0yQyrkfuNJX5SZIdXh79G2CVM5L6BGCF0yQytmLbrt7wQSpHJtDAsTmkBMF10EOU+FU4PLi9nvgUya30s+6nFdC6CEF4F5gH3qg1YWiOXYz/rPqrMvFePWyXPEaelizOrVvdenTj+Mx4EMUlZKkG0ULXhpIuXKUanvuVCtIJ4rLKhcotwH4IoBySdK3TpwKkveQtRbYRvlAuR70CsOinMslqWm3dwFaaI3HtygIL89yaWrW7T3ExM+i2xj7oCvrcpmRtyA7gfXj2NGJIgTTXk3W5TIjb0HeQveFnkQvySRpRy7mFuC/nMtlRt4Lwwi4CQXSfQW8iIaLJegFn63AywGUy4y8BQHFBK9CrzGsBBaj8NOLgJ8CKpcJIQgS01f8hF7OK3nPIUYKEyQwTJDAMEECwwQJDBMkMEyQwDBBAsMECQwTJDBMkMqpQzcpveBTkBHgdI/150UTSmrmBZ+CHEDvGdYa81DbvOBKkDjALFnfJ3gMBsiJDvRgayCxL26zkyA7V4LEURzJ8JpelOHBSYaDQLgReIPjv/y4fcMuLuBKkKHiti2x7y+UU+oeR9fIm9nAHSiMKEnc5iECYg3yPN5N7W9G6SYqjQYMkW2MzR7Xgdo9glKJBEMjSg75Dwo0S7IK5UCZn7VRDrkVxf6mX/bcjAR5IXOLJkGchXRriWObgP0ord90ooByYu1D2UmTzCruj4DrM7ZrUixDk90flA5GuxYlankaRRCGTAHZ2w+8Q+lY4DuRGP04XD64Dol8FXkiH6C0TEdSxxtRDtyNyHV8Hw1nfzq2oxrqUMLnhcA1qEc/ALxe4txlKKlyQ/FcZ0l2XAsyF7340o7EWY8SY6apR3kYlwJnEUaC5Qg5IIPIORkoc94SJEAL8CjyvILmAhT7FAEfE/7wVAlr0ZAcoSjIoDyr8ViMXhOL0HrkYdQTpiMFFFS3i2Op07ejSd05PpPxN6HU3DejRsVJMj9Ci6gRj9eeKjPQfNKBohvjPxMYRgvd7TnZ5YQLURDzYfL/64lqP3vRvzzMdvzdjCHLP3RpQF1/EXKLQ741P4om+P1oHqz1vJGGYRiGYRiGYRiGYRiGYRiGYRjGicr/rNWb6IVgxd8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/imgs/muthu.jpg":
/*!****************************!*\
  !*** ./src/imgs/muthu.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/muthu.769ac3de.jpg";

/***/ }),

/***/ "./src/imgs/share.png":
/*!****************************!*\
  !*** ./src/imgs/share.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/share.d44e55de.png";

/***/ }),

/***/ "./src/imgs/twitter_icon.png":
/*!***********************************!*\
  !*** ./src/imgs/twitter_icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAIB0lEQVR4nO3cf4wcZR3H8fd3ZvdKb/ZarFKLaClIVAiEElJIi6AFwo/SVsPB3pUQCIjWAqaJGiAqphoImGAqNZa0MZAqeLdLqpHAtSnBAoEoSoo0hJYq2PDLekBtb3e2P3af+frHNdJee+3dPM/sXpvn9cf9Mdn5fL83z87OzLMzC57neZ7neZ7neZ7neZ7neZ7neZ53LJNWN5C5Ph0XDtQuRpKvQXAmmpyIyIkM/u//RXhDlL+Crm1sKjzHEkma2d6xOwCP7fhELpe7S2ER0DHCtbai/NRsjlaNeCDKA18MNLw26YruSdNmkGalAxvQNh79aIJ1jkNBubIozOXeVLiDkW98gGkIDwdnxC/nSgMXHO6F+d54Rliq/jbU4DVRtqXt1XoPCHrjhSJaNB3RHObIHts8K306LqzEy4GbHaQ1FP1e0tWx7P9LyrumBmo6BbqB8/Ytfd9IdBpF2ZWmiN0AqEpYjt8CpoGsNtLeRVGMVWZaZW0LiftQLnGaq/IQkoggFymcztBtpjLPdEdPpo3P2fSWe7xygRJM29dJZ6jVXxnVRYioTW4aYRIvRxxvfADRRSAM8w89YrPxwfYYoMHcAxfIwrAcP8IKzVvljlJYjr+F8I1m1gT6jETfPmBJiv/bagAUZhxi8Y3h8fETlPsLNtkjVt4+EdV7m1LrY0+ZWtRJUfYC5Hvic3Kl6gPB8fHtow2y+ggCThtm+RUh7evN6ng+ndG/LWscVk7b7lT4VJY19lNX4cdJYFaH4+NOSpUvg1yRoNNAXkwmt391tIFWB+GwVB3g8Kd5/SA3ma6oz6bOsNZrLuyPtwGfzCT/YBUgDxw3ZPlWk5NZad5sttcBR1p/MuiTud7qL+jTcZa1DpLrr15I8zY+DL7Zhm787UZ1Tto93XYAdozgNaLC4qAS/y1XrnzFst7Q6Plu80btgyCRS+nu2JQ2wHYA/jnSFwqcpSrPhqVqidW7TrasC4AK013kpPS2CZOL6guiV2xCrAZAYEOK1Yphw2zKlar30xN/xqY+Kp+zWj+99SavM7hmwmbbINs9IO3BdbzCnWGg/wpL1VX53urZ6WI0Slnfxp/M5Ogyru7odxFmNQCNydGzwPsWEW3ADYnw97BcfT7orXyHcu2kUay/26J2Wv3MloarMLs9YLY0FJY66US5UESWhZq8HZYrLwal6vdzPQOzKOv4w6z1gZPao2M/g7wf2wsxkvZoeViLbwVOcdAPQIDKLIFZGgSEGtcpVTeCvKSiWwR9T4y+3wjz76JmC4e+Gs9S7DLMegCYJzUpVxeqshbH74598sC5oOcOTvEJGgihtmbSFaTqMs3JBmsUC0+r8EMXWWOdkFRc5qUfgEc/mhCW4/moCkBSLNwvcJ+zzsaoxOLbr0NJ/xFUn7SXfPzHXDneQqnSI0m4pi7jlwRU3xGVpYDzqYexQAhGfPE5sjwLYam6E9j/++C9qL6LSAdwglVnY5QJzRe4ZuI/XOXZHQOELUOWtCFyKsfoxgfqfDRhq8tAu6kI1XWuGjkqCBtYKHWXkZZ7gK5x1MdRQRJedJ1pNxVRnPACwsuumhnrNAhecJ3p4DpAf2afcVQwBjP2BsBcW1gNPOWgl7HuOYodzuee7PcAETXCLbRmYqxpFP19Frlu5m6KhW1BIpcD253kjT1JkgR/yCLY2eRZfUH0SpAEc4APXWWOIWtZENl87zEsp7OX9QXtLxnDmQjH1OmpwLIjvyod99PH1xX+Y16P5qJcL/C68/wmE2VzoxhldsGZxfw9LJHEdBcea2yKzhLhSpDlwDuZ1MpYIvJgljcb238hM0TYG/8S9ASBbUot1IRJGujpokxxXSt78mYi7Q9nWcH5ACBsBFYOvmUG/zb/ZnVHNPkRXYM34GbF+UeQ2dP+O+A917nNprDBdBVKWddxfwy4QWLQ7zrPba4kkGRxMx40yeQgbLo6ykBPFtnNILC0UZzgfN7nULI5CwJMLboZ9M9Z5WdFYEtDorubVS+zAeAm2W2kfiXCM5nVcG+PJMENaZ94TCO7AQAoTtppiOaI8iDQ1CfQU1G5vb6g/aVmlmzak/L5ntr5SaA/Bz3sA9Ato/KQ6Y5ubXbZpv9UQb5cOy9RcwvIpbi7ndHW02ZHdJXr73tHorW/FbG69tlco3GyIne08GmX9aY9mss8qbWieLbHgCORxi6VcHELN/7zZk80r1UbH1q1ByzRIPhS7Zsiei/NfcjuY8IaQ61IcbLTm21H30YzLdEgPL12lYr+RJRzmlp7f6orzacLt7l80CKt5gxAuTolUG4S1Vv23TnXKntRuc10R79uYQ8HyGYAVmg+P7E23YjOFmQe6EwgzKTWCCm8Gio31rsLr7ayj6FGPQC5nuolSSDnI8mAJMFuAgJFJwYJkxROQTgVOIuDH2hulbqo3tfYWbinFaeZR5JqDwhL8deBB0A/77gft4Q1YYO79l5X2NjqVoaT/iNohebDifECRO4GHe5HO1pE/yLwg0ZXx/pWd3Ik9seAwYEoInobyEwHPaW1F+QJEV3ZKBaebmEfo+L0IJwvV6ercr3CtcBUl9nDUXgNWJXk9TeuHp5upmzOglQl//iuGUb1MkEvBmbi7qD8IcoziKwzOVlHZ/u7jnJboknXAdqWJz4jUc4WOFNhKshJwBTQSQzeHNAx+AioVkSpqjAAbAd9S1U2B/B6Ix++wdXHvd2K36TzPM/zPM/zPM/zPM/zPM/zPM/zPM/zvNH6H/aDn6CDopMQAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/screens/Blog.js":
/*!*****************************!*\
  !*** ./src/screens/Blog.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogList */ "./src/components/BlogList.js");
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppHead */ "./src/components/AppHead.js");
/* harmony import */ var particles_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! particles-bg */ "./node_modules/particles-bg/dist/index.es.js");
/* harmony import */ var _components_BlogHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogHead */ "./src/components/BlogHead.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_HomeNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeNav */ "./src/components/HomeNav.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/Blog.js";









class Blog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      backColor: "white",
      textColor: "black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1 // display:'flex',

  }
});

Blog.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Blog));

/***/ }),

/***/ "./src/screens/BluetoothController.js":
/*!********************************************!*\
  !*** ./src/screens/BluetoothController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CourseDetails */ "./src/components/CourseDetails.js");
/* harmony import */ var _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/BluetoothControlledRobot.jpg */ "./src/imgs/BluetoothControlledRobot.jpg");
/* harmony import */ var _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Courses/TextStyle */ "./src/components/Courses/TextStyle.js");
/* harmony import */ var _components_Courses_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Courses/List */ "./src/components/Courses/List.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/BluetoothController.js";








class BluetoothController extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [" Arduino UNO [Buy Here]", "L298N Motor Driver Module [Buy Here]", "HC-05 Bluetooth Module", "Robot Chassis", "4 x 5V Geared Motors", "Connecting Wires", "Battery Holder", "Power Supply", "Android Phone", "Bluetooth Controller App"],
      code: ["#include<SoftwareSerial.h>", "   ", "#define IN1 12", "#define IN2 11", "#define IN3 10", "#define IN4 9", "//#define EN1 6", "//#define EN2 5", " ", "SoftwareSerial mySerial(2, 3);", "// RX, TX", "String data;", "int btVal;", " ", "void setup() ", " {  ", "//Serial.begin(115200);", "pinMode(IN1, OUTPUT);", "pinMode(IN2, OUTPUT);", "pinMode(IN3, OUTPUT);", "pinMode(IN4, OUTPUT);", "//pinMode(EN1, OUTPUT);", "//pinMode(EN2, OUTPUT);", "digitalWrite(IN1, LOW);", "digitalWrite(IN2, LOW);", "digitalWrite(IN3, LOW);", "digitalWrite(IN4, LOW);", "//analogWrite(EN1,63);", "//analogWrite(EN2,63);", "mySerial.begin(9600);", "  }", " ", "void loop()", "{", "while, (mySerial.available())", "{  ", "  {  ", "data = mySerial.readStringUntil('\n');", "//Serial.print(str);             ", "}", " ", "btVal = (data.toInt());", "//Serial.print('BlueTooth Value');", "//Serial.println(btVal);", " ", " ", " ", "switch (btVal) ", "{", "case 1:", "//Serial.println('Forward');", "forward();", "break;", "case 2:        ", "//Serial.println('Reverse');", "reverse();", "break;", "case 3:", "//Serial.println('Left');", "left();", "break;", "case 4:", "//Serial.println('Right);", "right();", "break;", "case 5:", "//Serial.println('Stop');", "stoprobot();", "break;      ", " ", "}", " ", "} ", " ", " ", "if (mySerial.available() < 0)", "{", "//Serial.println('No Bluetooth Data');", "}", " ", "}", " ", "void forward()", "{", "digitalWrite(IN1, HIGH);", "digitalWrite(IN2, LOW);", "digitalWrite(IN3, HIGH);", "digitalWrite(IN4, LOW);", "}", "void reverse()", "{", "digitalWrite(IN1, LOW);", "digitalWrite(IN2, HIGH);", "digitalWrite(IN3, LOW);", "digitalWrite(IN4, HIGH);", "}", "void left()", "{", "digitalWrite(IN1, LOW);", "digitalWrite(IN2, LOW);", "digitalWrite(IN3, HIGH);", "digitalWrite(IN4, LOW);", "}", "void right()", "{", "digitalWrite(IN1, HIGH);", "digitalWrite(IN2, LOW);", "digitalWrite(IN3, LOW);", "digitalWrite(IN4, LOW);", "}", "void stoprobot()", "{", "digitalWrite(IN1, LOW);", "digitalWrite(IN2, LOW);", "digitalWrite(IN3, LOW);", "digitalWrite(IN4, LOW);", "}"]
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      headLine: "Bluetooth Controlled Robot",
      description: "Robots are always a fancy topic for students, hobbyists and DIYers.  If you are beginner, then building a robot (like a car or an arm) is probably one of the important projects to do after learning about the basics. If you remember the earlier tutorial, I have discussed about HC-05 Bluetooth Module and how to  interface one with Arduino. Also, I have provided a simple Bluetooth Controller App, which can be installed on your Android Phone and start transmitting the data. As a continuation to that project, I will be implementing Bluetooth Controlled Robot  using Arduino and a few other components and build a simple robotic car that can be controlled using an Android Phone  (through an App) over Bluetooth Communication..\u2026.. ",
      image: _imgs_BluetoothControlledRobot_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      style: {
        fontFamily: "Open Sans Condensed",
        float: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "DESCRIPTION"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      direction: "column",
      spacing: 3,
      justifyContent: "flex-start",
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "CIRCUIT DESIGN",
      description: " I wouldn\u2019t go into the details of the construction of the robot as your robot chassis might be different from mine and you can easily figure it out  how to build the robot from the available parts and possible cable management for making the robot more appealing. Coming to the design of the circuit,  first is the HC-05 Bluetooth Module. The +5V and GND pins of the Bluetooth Module are connected to +5V and GND of Arduino. Since I will be only transmitting data related to the Robot\u2019s movement from Android Phone to Bluetooth Module and do not intend to receive any data from Arduino, I will connect only the TX pin of the Bluetooth Module to RX Pin of Arduino.  This RX pin of Arduino is based on SoftwareSerial library (Pin 2 and Pin 3 are configured as RX and TX on Arduino). The RX pin of the Bluetooth is left open. Now, the L298N Motor Driver Module. Digital I/O Pins 9 through 12 of Arduino are configured as Input pins of the Motor Driver and are connected to IN1 through IN4 of the L298N Motor Driver Module. Both the Enable Pins are connected  to 5V through provided jumper. The robot chassis which I am using in this Bluetooth Controlled Robot Car project is supplied with 4 geared motors. Since L298N has slots for only two motors,  I have joined the left side motors as one set and the right side motors as other set and connected both these sets to the output of L298N Module.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "CODE",
      description: "The Arduino code for Bluetooth Controlled Robot project is given below.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "https://gist.github.com/elktros/85acce5c098c4bd579727b57e21610d3.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      spacing: 5,
      className: classes.bottomGrid,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "AIM",
      description: "  In this project, I will show you how to design and develop a  Bluetooth Controlled Robot using Arduino, HC-05 Bluetooth Module and L298N Motor Driver Module.  On the other end of the Bluetooth Communication, I will be using a Smart Phone and a simple Android App to control the Robotic Car. ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        clear: 'left',
        textAlign: 'justify',
        float: 'left',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        clear: 'left',
        float: 'left',
        fontWeight: 'bolder',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "YOU WILL LEARN ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: this.state.items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }))))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    margin: 40,
    marginLeft: 50,
    [theme.breakpoints.down('sm')]: {
      margin: 10
    }
  },
  bottomGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  description: {
    fontFamily: 'Droid Serif',
    clear: 'left',
    textAlign: 'justify',
    fontWeight: 'lighter',
    clear: 'left',
    float: 'left',
    marginTop: 10
  }
});

BluetoothController.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(BluetoothController));

/***/ }),

/***/ "./src/screens/BottomFooter.js":
/*!*************************************!*\
  !*** ./src/screens/BottomFooter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/BottomFooter.js";






class BottomFooter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundColor: 'black',
        width: "100%",
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        color: 'white',
        marginRight: 30
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Mr.Toi")));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 10
  },
  grow: {
    flexGrow: 1
  },
  rootToolbar: theme.mixins.toolbar,
  appBar: {
    backgroundColor: 'white',
    height: 150,
    [theme.breakpoints.down('xs')]: {
      height: 140
    } // justifyContent:'center',
    // alignItems:'center'

  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  textStyle: {
    color: 'Black',
    fontSize: '20px',
    fontWeight: 500,
    paddingRight: 30,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    cursor: 'pointer'
  }
});

BottomFooter.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(BottomFooter));

/***/ }),

/***/ "./src/screens/Contact.js":
/*!********************************!*\
  !*** ./src/screens/Contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogList */ "./src/components/BlogList.js");
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppHead */ "./src/components/AppHead.js");
/* harmony import */ var particles_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! particles-bg */ "./node_modules/particles-bg/dist/index.es.js");
/* harmony import */ var _components_BlogHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogHead */ "./src/components/BlogHead.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_HomeNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeNav */ "./src/components/HomeNav.js");
/* harmony import */ var _components_Contact_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact_Page */ "./src/components/Contact_Page.js");
/* harmony import */ var _components_MediaPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MediaPage */ "./src/components/MediaPage.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/Contact.js";











class Contact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      backColor: "white",
      textColor: "black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact_Page__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MediaPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1 // display:'flex',

  }
});

Contact.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Contact));

/***/ }),

/***/ "./src/screens/Home.js":
/*!*****************************!*\
  !*** ./src/screens/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppHead */ "./src/components/AppHead.js");
/* harmony import */ var _imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/back.jpg */ "./src/imgs/back.jpg");
/* harmony import */ var _imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HomeNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeNav */ "./src/components/HomeNav.js");
/* harmony import */ var _components_Background_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Background_Page */ "./src/components/Background_Page.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/fb_icon.png */ "./src/imgs/fb_icon.png");
/* harmony import */ var _imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_imgs_fb_icon_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/icon.png */ "./src/imgs/icon.png");
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_imgs_icon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/twitter_icon.png */ "./src/imgs/twitter_icon.png");
/* harmony import */ var _imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_imgs_twitter_icon_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imgs/linkedin_icon.png */ "./src/imgs/linkedin_icon.png");
/* harmony import */ var _imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_imgs_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MoreOutlined */ "./node_modules/@material-ui/icons/MoreOutlined.js");
/* harmony import */ var _material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "./node_modules/@material-ui/icons/ListAlt.js");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _imgs_more_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../imgs/more.png */ "./src/imgs/more.png");
/* harmony import */ var _imgs_more_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_imgs_more_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_HomeNext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/HomeNext */ "./src/components/HomeNext.js");
/* harmony import */ var _components_HomeCourse__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/HomeCourse */ "./src/components/HomeCourse.js");
/* harmony import */ var _components_SpanIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/SpanIcon */ "./src/components/SpanIcon.js");
/* harmony import */ var _components_Application__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/Application */ "./src/components/Application.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/Home.js";





























class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEvent: false,
      textHide: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY;

      if (isTop > 30) {
        this.state.scrollEvent = true;
        this.setState({
          scrollEvent: true
        }); // this.setState({textHide:false })
      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY;

      if (isTop < 30) {
        this.state.scrollEvent = false;
        this.setState({
          scrollEvent: false
        }); // this.setState({textHide:true })
      }
    });
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), this.state.scrollEvent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
      textColor: "white",
      iconcolor: "white",
      backColor: "black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Background_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeNext__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeCourse__WEBPACK_IMPORTED_MODULE_25__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Application__WEBPACK_IMPORTED_MODULE_27__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1 // display:'flex',

  },
  header: {
    backgroundImage: `url(${_imgs_back_jpg__WEBPACK_IMPORTED_MODULE_3___default.a})`,
    height: window.innerHeight,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // alignItems: 'flex-end',
    textAlign: 'right',
    justifyContent: 'space-between'
  },
  textStyle: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 500,
    paddingRight: 30
  },
  appBar: {
    backgroundColor: 'black',
    height: 80
  },
  sectionIcon: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  }
});

Home.propsTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Home));

/***/ }),

/***/ "./src/screens/IotHome.js":
/*!********************************!*\
  !*** ./src/screens/IotHome.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CourseDetails */ "./src/components/CourseDetails.js");
/* harmony import */ var _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/Home-Automation-using-Local-Host.jpg */ "./src/imgs/Home-Automation-using-Local-Host.jpg");
/* harmony import */ var _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Courses/TextStyle */ "./src/components/Courses/TextStyle.js");
/* harmony import */ var _components_Courses_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Courses/List */ "./src/components/Courses/List.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/IotHome.js";








class IotHome extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Nodemcu and its pin description and GPIOs", "Setting up Arduino IDE for Nodemcu", "Programming Nodemcu with Arduino IDE", "To create a webserver on Nodemcu", "To transfer data and to get response on from a webserver", "Working of Relay Module", "Interfacing Relay Modules", "16×2 LCD screen and interfacing I2C module with Nodemcu"]
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      headLine: "Home Automation",
      description: "What if I told you that you can program the lightening (dimming, flickering)  at the touch of your smartphone? If you are a TV series binge-watcher  or movie enthusiast, you understand the lighting issue\u2026..",
      image: _imgs_Home_Automation_using_Local_Host_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "DESCRIPTION",
      description: " What if I told you that you can program the lightening (dimming, flickering) at the touch of your smartphone? If you are a TV series binge-watcher or movie enthusiast, you understand the lighting issue, it should be not too bright nor too dim, and there is a perfect balance between the two. All you need is a Wi-Fi connection, all the switchboards in your house are connected to the Wi-Fi hotspot, all you need to do connect to them and program them in accordance to your need and mood. With home automation, you can do this. We present before you the Home Automation system that is controlled by any smart device using an IP design and developed by Mr.toi.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      spacing: 5,
      className: classes.bottomGrid,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "AIM",
      description: "  The aim of the project is to create a Home Automation system using a Wifi module with in-built  micro-controller and creating a web server on it and operate the devices using any smartphone or laptop. We will be using a wifi module with a built-in micro-controller unit as the basic microprocessor for this project.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        clear: 'left',
        textAlign: 'justify',
        float: 'left',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        clear: 'left',
        float: 'left',
        fontWeight: 'bolder',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "YOU WILL LEARN ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: this.state.items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    margin: 40,
    marginLeft: 50,
    [theme.breakpoints.down('sm')]: {
      margin: 10
    }
  },
  bottomGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  description: {
    fontFamily: 'Droid Serif',
    clear: 'left',
    textAlign: 'justify',
    fontWeight: 'lighter',
    clear: 'left',
    float: 'left',
    marginTop: 10 // [theme.breakpoints.down('xs')]:{
    //   textAlign:'center',
    //   float:'left'
    //   }

  }
});

IotHome.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(IotHome));

/***/ }),

/***/ "./src/screens/LineFollower.js":
/*!*************************************!*\
  !*** ./src/screens/LineFollower.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CourseDetails */ "./src/components/CourseDetails.js");
/* harmony import */ var _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/LineFollower.jpg */ "./src/imgs/LineFollower.jpg");
/* harmony import */ var _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Courses/TextStyle */ "./src/components/Courses/TextStyle.js");
/* harmony import */ var _components_Courses_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Courses/List */ "./src/components/Courses/List.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/LineFollower.js";








class LineFollower extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      learn: ["Line Sensor", "Arduino", "Motor driver", "Chassis", "Cables", "Breadboard", "Battery"],
      parts: ["Chassis (including motors and wheels )", " Arduino Uno r3", " L293D Motor Shield", " IR Proximity Sensors (pair)", " Jumper Wires", " Switch", " 4AA Battery Holder"],
      tools: ["Soldering Iron", "Hot Glue Gun pog", "Screw Driver"]
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      headLine: "Line Follower",
      description: "In this instructable, I will teach you how to make a line follower robot using Arduino, which is a very common microcontroller board. The robot will use two infrared  proximity sensors to detect the line and on the basis of input received from the sensors,  the Arduino will direct the motors to move with the help of a motor shield.\u2026.",
      image: _imgs_LineFollower_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      direction: "column",
      spacing: 3,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'left'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      style: {
        fontFamily: "Open Sans Condensed"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "DESCRIPTION")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "STEP 1: THE WORKING",
      description: "So there will be infrared proximity sensors placed on either side at the front of the robot. There are four possible sensor outcomes:-",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "CASE 1:-",
      description: "In this case, both the sensors don't detect the line. Both the motors  rotate forward. As a result, the car moves forward.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "CASE 2:-",
      description: "In this case, only the left sensor detects the line which means that the car requires to turn in the left direction. The left motor rotates backward and the right motor rotates forward. As a result, the car turns left.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "CASE 3:-",
      description: "In this case, only the right sensor detects the line which means that the car requires to turn in the right direction.  The left motor rotates forward and the right motor rotates backward. As a result, the car turns right.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "CASE 4:-",
      description: "In this case, both the sensors detect the line. This means that the end has come. Both the motors stop rotating. As a result, the car stops. is the working structure of our robot...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'justify',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "STEP 2: PARTS REQUIRED",
      description: "THE PARTS REQUIRED TO BUILD THE ROBOT ARE AS FOLLOWS :-",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: this.state.parts,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        fontFamily: '',
        textAlign: 'justify',
        fontWeight: 'bold',
        clear: 'left',
        float: 'left',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "TOOLS REQUIRED :-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: this.state.tools,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        fontFamily: '',
        textAlign: 'justify',
        fontWeight: 'bolder',
        clear: 'left',
        float: 'left',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Gather these parts and be ready for the next step ..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "STEP 3: ASSEMBLE THE CHASSIS",
      description: " Most of the chassis come with an instruction manual and even mine came with it so have a look at it and build your chassis accordingly. Then, attach the components to the chassis. Arduino, with the motor shield attached to it and also the battery holder must be fixed on the chassis. Also,  attach the proximity sensors at the front on either side, facing down. Make sure that they are attached at the corners... Attach the switch too... Solder wires to the motors and also switch and keep ready...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      spacing: 5,
      className: classes.bottomGrid,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "AIM",
      description: " The purpose of the line follower robot is to follow a line.  The robot will only follow a line that is black against a white background or  a white line against a black background. This is so that the sensors can distinguish a clear difference in light and so the robot can trace and follow the line.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        clear: 'left',
        textAlign: 'justify',
        float: 'left',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        clear: 'left',
        float: 'left',
        fontWeight: 'bolder',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "YOU WILL LEARN ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: this.state.learn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }))))));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    margin: 40,
    // marginLeft:50,
    [theme.breakpoints.down('sm')]: {
      margin: 10
    }
  },
  bottomGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  description: {
    fontFamily: 'Droid Serif',
    clear: 'left',
    textAlign: 'justify',
    fontWeight: 'lighter',
    clear: 'left',
    float: 'left',
    marginTop: 10 // [theme.breakpoints.down('xs')]:{
    //   textAlign:'center',
    //   float:'left'
    //   }

  }
});

LineFollower.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(LineFollower));

/***/ }),

/***/ "./src/screens/ObstacleAvoid.js":
/*!**************************************!*\
  !*** ./src/screens/ObstacleAvoid.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CourseDetails */ "./src/components/CourseDetails.js");
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/ObstacleAvoidingRobot.jpg */ "./src/imgs/ObstacleAvoidingRobot.jpg");
/* harmony import */ var _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Courses/TextStyle */ "./src/components/Courses/TextStyle.js");
/* harmony import */ var _components_Courses_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Courses/List */ "./src/components/Courses/List.js");
var _jsxFileName = "/home/akdcpa/Documents/React/TOI/mrtoi/src/screens/ObstacleAvoid.js";








class ObstacleAvoid extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["You’ll learn about.", "Arduino NANO or Uno (any version)", "HC-SR04 Ultrasonic Sensor", "LM298N Motor Driver Module", "5V DC Motors", "Battery", "Wheels", "Chassis", "Jumper Wires"]
    };
  }

  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'justify',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      headLine: "Line Follower",
      description: "In this instructable, I will teach you how to make a line follower robot using Arduino, which is a very common microcontroller board. The robot will use two infrared  proximity sensors to detect the line and on the basis of input received from the sensors,  the Arduino will direct the motors to move with the help of a motor shield.\u2026.",
      image: _imgs_ObstacleAvoidingRobot_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      spacing: 5,
      className: classes.bottomGrid,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "AIM",
      description: "The objective of having obstacle avoiding robot is to enable autonomous  functioning without human supervision. ... IR sensors are widely used for measuring distances,  so they can be used in robotics for obstacles avoidance.  IR sensors are also faster in response time than ultrasonic sensors [17]. ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        clear: 'left',
        textAlign: 'justify',
        float: 'left',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        clear: 'left',
        float: 'left',
        fontWeight: 'bolder',
        marginTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "YOU WILL LEARN ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Courses_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: this.state.items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })))), "  "));
  }

}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    margin: 40,
    marginLeft: 60,
    [theme.breakpoints.down('sm')]: {
      margin: 10
    }
  },
  bottomGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  description: {
    fontFamily: 'Droid Serif',
    clear: 'left',
    textAlign: 'justify',
    fontWeight: 'lighter',
    clear: 'left',
    float: 'left',
    marginTop: 10 // [theme.breakpoints.down('xs')]:{
    //   textAlign:'center',
    //   float:'left'
    //   }

  }
});

ObstacleAvoid.propTypes = {
  classe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(ObstacleAvoid));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/video/learning_preview.mp4":
/*!****************************************!*\
  !*** ./src/video/learning_preview.mp4 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/learning_preview.c7b716fb.mp4";

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/akdcpa/Documents/React/TOI/mrtoi/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/akdcpa/Documents/React/TOI/mrtoi/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/akdcpa/Documents/React/TOI/mrtoi/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map