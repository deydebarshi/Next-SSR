webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Album; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/get */ "./node_modules/@babel/runtime-corejs2/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _shared_controllers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/controllers */ "./shared/controllers/index.js");












var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__["default"])(["\ntext-align:center;\nmargin:0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__["default"])(["\npadding: 1em !important;\nmargin-top: 1em !important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_11__["default"])(["\n  width:100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 //import CameraIcon from '@material-ui/icons/PhotoCamera';















var Img = styled_components__WEBPACK_IMPORTED_MODULE_27__["default"].img(_templateObject());
var SearchButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_27__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"])(_templateObject2());
var Loader = styled_components__WEBPACK_IMPORTED_MODULE_27__["default"].div(_templateObject3());

function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Your Website"), ' ', new Date().getFullYear(), '.');
}

var Album =
/*#__PURE__*/
function (_IndexController) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Album, _IndexController);

  function Album() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Album);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Album).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "get_search_param", function (search) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({
        search: search
      }, "search", search));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "fetchImages", function _callee() {
      var search_param, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loader: !_this.state.loader
              });

              search_param = encodeURIComponent(_this.state.search);
              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Album.prototype), "get_search_item", Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)).call(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), search_param));

            case 4:
              data = _context.sent;

              _this.setState({
                images: data[0].images,
                count: data[0].count
              });

              _this.setState({
                loader: !_this.state.loader
              });

              _this.setState({
                res: true
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    _this.state = {
      images: [],
      search: '',
      loader: false,
      count: 0,
      res: false
    };
    _this.get_search_param = _this.get_search_param.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.fetchImages = _this.fetchImages.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Album, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var ImageBlocks = function ImageBlocks() {
        if (_this2.state.loader) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(Loader, null, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__["default"], null), __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__["default"], {
            color: "secondary"
          })));
        } else {
          if (_this2.state.count == 0 && _this2.state.res) {
            return __jsx(Loader, null, __jsx("h2", null, "No Results Found..."));
          } else {
            return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(_this2.state.images).map(function (_ref) {
              var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
                item: true,
                key: key,
                xs: 12,
                sm: 6,
                md: 4
              }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16__["default"], null, __jsx(Img, {
                src: value['largeImageURL'],
                style: {
                  height: 250
                }
              }), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_17__["default"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
                href: {
                  pathname: '/photos',
                  query: {
                    id: value['id']
                  }
                },
                as: "/photos/".concat(value['id'])
              }, "View Details"))));
            });
          }
        }
      };

      return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_20__["default"], null), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        position: "relative"
      }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_22__["default"], null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
        variant: "h6",
        color: "inherit",
        noWrap: true
      }, "Image Searh"))), __jsx("main", null, __jsx("div", null, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_25__["default"], {
        maxWidth: "lg",
        style: {
          marginTop: 50
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
        component: "h1",
        variant: "h2",
        align: "center",
        color: "textPrimary",
        gutterBottom: true
      }, "Image Search"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
        variant: "h5",
        align: "center",
        color: "textSecondary",
        paragraph: true
      }, "Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."), __jsx("div", {
        style: {
          marginTop: 50
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        container: true,
        spacing: 10,
        justify: "center"
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        item: true,
        sm: 6,
        style: {
          padding: 10
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outlined",
        margin: "normal",
        required: true,
        fullWidth: true,
        id: "email",
        label: "Search Keyword",
        name: "email",
        autoComplete: "email",
        autoFocus: true,
        onChange: function onChange(e) {
          return _this2.get_search_param(e.target.value);
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        item: true,
        sm: 1,
        style: {
          padding: 10
        }
      }, __jsx(SearchButton, {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return _this2.fetchImages();
        }
      }, "Search")))))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_25__["default"], {
        maxWidth: "md",
        style: {
          marginTop: 20
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        container: true,
        spacing: 4
      }, __jsx(ImageBlocks, null))))));
    }
  }]);

  return Album;
}(_shared_controllers__WEBPACK_IMPORTED_MODULE_29__["default"]);



/***/ })

})
//# sourceMappingURL=index.js.f8be81c413fda3ab853a.hot-update.js.map