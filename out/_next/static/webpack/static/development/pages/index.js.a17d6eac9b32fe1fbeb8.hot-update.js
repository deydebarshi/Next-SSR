webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./shared/services/services.js":
/*!*************************************!*\
  !*** ./shared/services/services.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var GetSearchItem = function GetSearchItem(search_param) {
  var Items, ListData;
  return _regeneratorRuntime.async(function GetSearchItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regeneratorRuntime.awrap(fetch('https://pixabay.com/api/?key=14610280-533c0da32f4e2adb7af2d74b8&q=' + search_param + '&image_type=photo:4000/photos', {
            method: "GET"
          }));

        case 2:
          Items = _context.sent;
          _context.next = 5;
          return _regeneratorRuntime.awrap(Items.json());

        case 5:
          ListData = _context.sent;
          return _context.abrupt("return", ListData);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.GetSearchItem = GetSearchItem;

var GetSingleItem = function GetSingleItem(id) {
  var Items, ListData;
  return _regeneratorRuntime.async(function GetSingleItem$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _regeneratorRuntime.awrap(fetch('https://pixabay.com/api/?key=14610280-533c0da32f4e2adb7af2d74b8&id=' + id + '&image_type=photo:4000/photos', {
            method: "GET"
          }));

        case 2:
          Items = _context2.sent;
          _context2.next = 5;
          return _regeneratorRuntime.awrap(Items.json());

        case 5:
          ListData = _context2.sent;
          return _context2.abrupt("return", ListData);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.GetSingleItem = GetSingleItem;

/***/ })

})
//# sourceMappingURL=index.js.a17d6eac9b32fe1fbeb8.hot-update.js.map