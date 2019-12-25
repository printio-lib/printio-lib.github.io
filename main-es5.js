(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-success\">\n  <div class=\"container\">\n    <div class=\"d-flex flex-row align-items-center\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0);\">\n        Printio\n      </a>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/code-snippet/code-snippet.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/code-snippet/code-snippet.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"snippet\">\n  <ngx-prism [language]=\"snippet.language\" [code]=\"snippet.code\"></ngx-prism>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/result-screenshot/result-screenshot.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/result-screenshot/result-screenshot.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"in-root\">\n  <img class=\"in-screenshot-img\" [src]=\"src\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/home-container/home-container.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/home-container/home-container.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"in-heading in-section\">\n  <div class=\"container\">\n    <h1 class=\"in-primary-headline\">Printio</h1>\n    <h4 class=\"in-secondary-headline\">\n      JS library for super precise exporting of HTML element to image/canvas/printer.\n    </h4>\n  </div>\n</div>\n\n<div class=\"container in-section\">\n  <h2>Install</h2>\n  <app-code-snippet [snippet]=\"miscSnippets.installViaNpm\"></app-code-snippet>\n</div>\n\n<div class=\"container in-section\">\n  <h2>Why is this {{ printioName }} needed?</h2>\n\n  <p>\n    Browsers do not support exporting of HTML element to image/canvas/printer (browsers only support exporting a whole HTML page).\n  </p>\n\n  <p>\n    Popular libraries already exist for exporting of HTML element to image/canvas/printer using their own algorithms for rendering of HTML to image.\n\n    But these libraries work with errors for complex HTML/CSS because these libraries cannot reproduce the complex browser behavior for rendering complex HTML/CSS (see screenshots of artifacts of these libraries below on this page).\n  </p>\n\n  <p>\n    <b>\n      {{ printioName }} exports the HTML element to image/canvas/printer using browser engine and therefore the {{ printioName }} has no artifacts for complex HTML/CSS.\n    </b>\n  </p>\n</div>\n\n<div class=\"container in-section in-artifacts\">\n  <h4 class=\"in-artifacts-title\">\n    Examples of problems of existing libraries for exporting of HTML element to image:\n  </h4>\n\n  <div class=\"in-result-screenshot-root\">\n    <div>\n      <span class=\"in-result-screenshot-lib\">\"html2canvas\" library (19.2k stars on GitHub)</span> - Artifacts of the HTML element screenshot:\n    </div>\n    <div>\n      <b>1)</b> Top Y-axis label clipped by parent DIV element.\n    </div>\n    <div>\n      <b>2)</b> X-axis labels displaced because the \"html2canvas\" does not correctly handle complex CSS-transformations + CSS-margins.\n    </div>\n    <div class=\"in-result-screenshot\">\n      <app-result-screenshot src=\"/assets/images/result-screenshots/screenshot-with-highlights-html-2-canvas.png\"></app-result-screenshot>\n    </div>\n  </div>\n\n  <div class=\"in-result-screenshot-root\">\n    <div>\n      <span class=\"in-result-screenshot-lib\">\"DOM to Image\" library (5.6k stars on GitHub)</span> - Artifacts of the HTML element screenshot:\n    </div>\n    <div>\n      <b>1)</b> Horizontal scrollbar overlapped by X-axis labels DIV.\n    </div>\n    <div>\n      <b>2)</b> X-axis labels displaced because the \"DOM to Image\" does not correctly draw the X-axis labels DIV (this DIV turned out to be out of sync with the chart area due to scrolling).\n    </div>\n    <div class=\"in-result-screenshot\">\n      <app-result-screenshot src=\"/assets/images/result-screenshots/screenshot-with-highlights-dom-to-image.png\"></app-result-screenshot>\n    </div>\n  </div>\n\n  <div class=\"in-result-screenshot-root\">\n    <div>\n      <span class=\"in-result-screenshot-lib\">{{ printioName }}</span> - <span class=\"in-no-artifacts\">No artifacts</span>\n    </div>\n    <div class=\"in-result-screenshot\">\n      <app-result-screenshot src=\"/assets/images/result-screenshots/screenshot-with-highlights-printio.png\"></app-result-screenshot>\n    </div>\n  </div>\n</div>\n\n<div class=\"container in-section\">\n  <h2>How {{ printioName }} works?</h2>\n\n  <div *ngIf=\"false\">\n    <!-- 1 -->\n    <p>\n      Browsers do not support exporting of HTML element to image/canvas/printer (browsers only support exporting a whole HTML page).\n    </p>\n    <p class=\"in-note\">\n      If you cut the HTML element from the HTML page, and then take the HTML-code of this element and draw this HTML-code, then the resulting image in most cases will not look like the HTML element when it was on the HTML page, because what the HTML element will look like depends on the code of the whole HTML page.\n    </p>\n\n    <!-- 2 -->\n    <p>\n      Popular libraries already exist for exporting of HTML element to image/canvas/printer using their own algorithms for rendering of HTML to image.\n\n      But these libraries work with errors for complex HTML/CSS because these libraries cannot reproduce the complex browser behavior for rendering complex HTML/CSS (see screenshots of artifacts of these libraries below on this page).\n    </p>\n    <!--\n    <p>\n      Popular libraries already exist for exporting of HTML element to image/canvas/printer, but these libraries work with errors for complex HTML/CSS.\n\n      Because these libraries render the HTML element in canvas independently from the browser engine using their own algorithms for rendering of HTML.\n\n      And therefore these libraries cannot repeat the complex rendering logic of the browser (see screenshots of artifacts of these libraries below on this page).\n    </p>\n    -->\n\n    <!-- 3 -->\n    <p>\n      There are libraries that render HTML to image using <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject\" target=\"_blank\">&lt;foreignObject&gt;</a> (for example <a href=\"https://www.npmjs.com/package/rasterizehtml\" target=\"_blank\">rasterizehtml</a>).\n\n      But these libraries can not export to image the HTML element cutted from HTML page because through &lt;foreignObject&gt; you can export to image only separate HTML code.\n    </p>\n    <!--\n    <p>\n      But it is possible to render HTML to canvas using <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject\" target=\"_blank\">&lt;foreignObject&gt;</a>.\n\n      Libraries already exist for exporting of HTML to canvas through &lt;foreignObject&gt;. For example <a href=\"https://www.npmjs.com/package/rasterizehtml\" target=\"_blank\">rasterizehtml</a>.\n\n      But these libraries can not export to canvas the HTML element cutted from HTML page because through &lt;foreignObject&gt; you can export to canvas only either an entire HTML page, or a separate piece of HTML which is not part of the HTML page.\n\n      Because if you cut the HTML element from the HTML page, and then take the HTML-code of this element and draw this HTML-code, then the resulting image in most cases will not look like the HTML element when it was on the HTML page. Because what the HTML element will look like depends on the code of the whole HTML page: If we cut the HTML element from the HTML page, then page CSS styles will not apply to cutted HTML element.\n    </p>\n    -->\n  </div>\n\n  <div>\n    <p>\n      {{ printioName }} exports the HTML element to image/canvas/printer using browser engine and therefore the {{ printioName }} has no artifacts for complex HTML/CSS.\n\n      {{ printioName }} works as follows:\n    </p>\n    <ol>\n      <li>\n        Takes the HTML-code of the whole HTML page and makes conversions over it:\n        <ul>\n          <li>\n            Those HTML elements that do not need to be exported to the image become invisible while remaining on the HTML page.\n          </li>\n          <li>\n            Small conversions are made over the HTML element that you want to export to the image so that it looks the same as on the original HTML page, taking into account the fact that other HTML elements have become invisible.\n          </li>\n        </ul>\n      </li>\n      <li>\n        Transformed HTML-code of HTML page opened in a new popup window and rendered into the image using the browser engine (through the &lt;foreignObject&gt;).\n      </li>\n    </ol>\n    <p>\n      <b>\n        The result is the image of the HTML element rendered by the browser engine and therefore the resulting image has no artifacts.\n      </b>\n    </p>\n  </div>\n</div>\n\n<div class=\"container in-section\">\n  <h2>How to use</h2>\n\n  <p>\n    <b>Install {{ printioName }}:</b>\n    <app-code-snippet [snippet]=\"miscSnippets.installViaNpm\"></app-code-snippet>\n  </p>\n\n  <p>\n    <b>Apply {{ printioName }} in your code:</b>\n    <app-code-snippet [snippet]=\"miscSnippets.howToUse\"></app-code-snippet>\n  </p>\n</div>\n\n<div class=\"container in-section\">\n  <h2>Table of ExportMode values and results</h2>\n\n  <table border=\"1\" cellpadding=\"5\" cellspacing=\"0\" class=\"in-export-mode-table\">\n    <tr>\n      <th>ExportMode value</th>\n      <th>ExportMode result</th>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'print'</td>\n      <td class=\"in-export-mode-result-cell\">null</td>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'canvas'</td>\n      <td class=\"in-export-mode-result-cell\">Canvas HTML element</td>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'png-image'</td>\n      <td class=\"in-export-mode-result-cell\">PNG image HTML element</td>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'png-data-url'</td>\n      <td class=\"in-export-mode-result-cell\">PNG image data url</td>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'download-png-image'</td>\n      <td class=\"in-export-mode-result-cell\">null</td>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'jpg-image'</td>\n      <td class=\"in-export-mode-result-cell\">JPG image HTML element</td>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'jpg-data-url'</td>\n      <td class=\"in-export-mode-result-cell\">JPG image data url</td>\n    </tr>\n    <tr>\n      <td class=\"in-export-mode-value-cell\">'download-jpg-image'</td>\n      <td class=\"in-export-mode-result-cell\">null</td>\n    </tr>\n  </table>\n</div>\n\n<div class=\"in-foot-spacing\"></div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/home-container/home-container.component */ "./src/app/containers/home-container/home-container.component.ts");




var routes = [
    {
        path: '',
        component: _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_3__["HomeContainerComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvcHJpbnRpby1zaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gVGhpcmQgcGFydHlcbi8vXG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiLm5hdmJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-prism/core */ "./node_modules/@ngx-prism/core/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/home-container/home-container.component */ "./src/app/containers/home-container/home-container.component.ts");
/* harmony import */ var _components_code_snippet_code_snippet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/code-snippet/code-snippet.component */ "./src/app/components/code-snippet/code-snippet.component.ts");
/* harmony import */ var _components_result_screenshot_result_screenshot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/result-screenshot/result-screenshot.component */ "./src/app/components/result-screenshot/result-screenshot.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_6__["HomeContainerComponent"],
                _components_code_snippet_code_snippet_component__WEBPACK_IMPORTED_MODULE_7__["CodeSnippetComponent"],
                _components_result_screenshot_result_screenshot_component__WEBPACK_IMPORTED_MODULE_8__["ResultScreenshotComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__["PrismModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-snippets/misc.ts":
/*!***************************************!*\
  !*** ./src/app/code-snippets/misc.ts ***!
  \***************************************/
/*! exports provided: miscSnippets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miscSnippets", function() { return miscSnippets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_components_code_snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/components/code-snippet */ "./src/app/models/components/code-snippet.ts");


var miscSnippets = {
    installViaNpm: new _models_components_code_snippet__WEBPACK_IMPORTED_MODULE_1__["CodeSnippet"](_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_1__["CodeLanguage"].bash, 'npm install --save printio'),
    howToUse: new _models_components_code_snippet__WEBPACK_IMPORTED_MODULE_1__["CodeSnippet"](_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_1__["CodeLanguage"].js, String.raw(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["import printio from 'printio';\n\nvar elementForExport = document.getElementById('my-element-id');\nvar exportMode = 'png-image'; // See ExportMode values table below\n/*\n  ExportMode values:\n    'print',                Result: null\n    'canvas',               Result: Canvas HTML element\n    'png-image',            Result: PNG image HTML element\n    'png-data-url',         Result: PNG image data url\n    'download-png-image',   Result: null\n    'jpg-image',            Result: JPG image HTML element\n    'jpg-data-url',         Result: JPG image data url\n    'download-jpg-image',   Result: null\n*/\n\nprintio.exportElement(elementForExport, exportMode).then(\n  function (exportResult) {\n\n    /*\n      - If exportMode equals to \"print\"\n        then result will be \"null\"\n\n      - If exportMode equals to \"canvas\"\n        then result will be \"Canvas HTML element\"\n\n      - If exportMode equals to \"png-image\"\n        then result will be \"PNG image HTML element\"\n\n      - If exportMode equals to \"png-data-url\"\n        then result will be \"PNG image data url\"\n\n      - If exportMode equals to \"download-png-image\"\n        then result will be \"null\"\n\n      - If exportMode equals to \"jpg-image\"\n        then result will be \"JPG image HTML element\"\n\n      - If exportMode equals to \"jpg-data-url\"\n        then result will be \"JPG image data url\"\n\n      - If exportMode equals to \"download-jpg-image\"\n        then result will be \"null\"\n    */\n\n  },\n);\n"], ["import printio from 'printio';\n\nvar elementForExport = document.getElementById('my-element-id');\nvar exportMode = 'png-image'; // See ExportMode values table below\n/*\n  ExportMode values:\n    'print',                Result: null\n    'canvas',               Result: Canvas HTML element\n    'png-image',            Result: PNG image HTML element\n    'png-data-url',         Result: PNG image data url\n    'download-png-image',   Result: null\n    'jpg-image',            Result: JPG image HTML element\n    'jpg-data-url',         Result: JPG image data url\n    'download-jpg-image',   Result: null\n*/\n\nprintio.exportElement(elementForExport, exportMode).then(\n  function (exportResult) {\n\n    /*\n      - If exportMode equals to \"print\"\n        then result will be \"null\"\n\n      - If exportMode equals to \"canvas\"\n        then result will be \"Canvas HTML element\"\n\n      - If exportMode equals to \"png-image\"\n        then result will be \"PNG image HTML element\"\n\n      - If exportMode equals to \"png-data-url\"\n        then result will be \"PNG image data url\"\n\n      - If exportMode equals to \"download-png-image\"\n        then result will be \"null\"\n\n      - If exportMode equals to \"jpg-image\"\n        then result will be \"JPG image HTML element\"\n\n      - If exportMode equals to \"jpg-data-url\"\n        then result will be \"JPG image data url\"\n\n      - If exportMode equals to \"download-jpg-image\"\n        then result will be \"null\"\n    */\n\n  },\n);\n"])))),
};
var templateObject_1;


/***/ }),

/***/ "./src/app/components/code-snippet/code-snippet.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/code-snippet/code-snippet.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS1zbmlwcGV0L2NvZGUtc25pcHBldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/code-snippet/code-snippet.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/code-snippet/code-snippet.component.ts ***!
  \*******************************************************************/
/*! exports provided: CodeSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetComponent", function() { return CodeSnippetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CodeSnippetComponent = /** @class */ (function () {
    function CodeSnippetComponent() {
    }
    CodeSnippetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CodeSnippetComponent.prototype, "snippet", void 0);
    CodeSnippetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-snippet',
            template: __webpack_require__(/*! raw-loader!./code-snippet.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/code-snippet/code-snippet.component.html"),
            styles: [__webpack_require__(/*! ./code-snippet.component.scss */ "./src/app/components/code-snippet/code-snippet.component.scss")]
        })
    ], CodeSnippetComponent);
    return CodeSnippetComponent;
}());



/***/ }),

/***/ "./src/app/components/result-screenshot/result-screenshot.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/result-screenshot/result-screenshot.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".in-root .in-screenshot-img {\n  width: 100%;\n  max-width: 820px;\n  max-height: 370px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvcHJpbnRpby1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtc2NyZWVuc2hvdC9yZXN1bHQtc2NyZWVuc2hvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtc2NyZWVuc2hvdC9yZXN1bHQtc2NyZWVuc2hvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC1zY3JlZW5zaG90L3Jlc3VsdC1zY3JlZW5zaG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluLXJvb3Qge1xuXG4gIC5pbi1zY3JlZW5zaG90LWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA4MjBweDtcbiAgICBtYXgtaGVpZ2h0OiAzNzBweDtcbiAgfVxuXG59XG4iLCIuaW4tcm9vdCAuaW4tc2NyZWVuc2hvdC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MjBweDtcbiAgbWF4LWhlaWdodDogMzcwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/result-screenshot/result-screenshot.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/result-screenshot/result-screenshot.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ResultScreenshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultScreenshotComponent", function() { return ResultScreenshotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultScreenshotComponent = /** @class */ (function () {
    function ResultScreenshotComponent() {
    }
    ResultScreenshotComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ResultScreenshotComponent.prototype, "src", void 0);
    ResultScreenshotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-screenshot',
            template: __webpack_require__(/*! raw-loader!./result-screenshot.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/result-screenshot/result-screenshot.component.html"),
            styles: [__webpack_require__(/*! ./result-screenshot.component.scss */ "./src/app/components/result-screenshot/result-screenshot.component.scss")]
        })
    ], ResultScreenshotComponent);
    return ResultScreenshotComponent;
}());



/***/ }),

/***/ "./src/app/containers/home-container/home-container.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/containers/home-container/home-container.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".in-foot-spacing {\n  height: 150px;\n  background-color: transparent;\n}\n\n.in-heading {\n  padding: 20px 0;\n  background-color: darkorchid;\n}\n\n.in-heading .in-primary-headline,\n.in-heading .in-secondary-headline {\n  color: #fff;\n}\n\n.in-section {\n  margin-bottom: 40px;\n}\n\n.in-result-screenshot-root {\n  margin-bottom: 30px;\n}\n\n.in-note {\n  padding: 10px;\n  border: 1px solid #000;\n  font-style: italic;\n}\n\n.in-artifacts .in-artifacts-title {\n  margin-bottom: 15px;\n}\n\n.in-artifacts .in-result-screenshot-lib {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.in-artifacts .in-result-screenshot {\n  margin-top: 10px;\n  border: 1px solid #000;\n}\n\n.in-artifacts .in-no-artifacts {\n  font-weight: bold;\n  color: green;\n}\n\n.in-export-mode-table .in-export-mode-value-cell {\n  color: green;\n}\n\n.in-export-mode-table .in-export-mode-result-cell {\n  color: blueviolet;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvcHJpbnRpby1zaXRlL3NyYy9hcHAvY29udGFpbmVycy9ob21lLWNvbnRhaW5lci9ob21lLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9ob21lLWNvbnRhaW5lci9ob21lLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0U7O0VBRUUsV0FBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRElFO0VBQ0UsbUJBQUE7QUNESjs7QURJRTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURVRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ1JKOztBRGFFO0VBQ0UsWUFBQTtBQ1ZKOztBRGFFO0VBQ0UsaUJBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvaG9tZS1jb250YWluZXIvaG9tZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW4tZm9vdC1zcGFjaW5nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JjaGlkO1xuXG4gIC5pbi1wcmltYXJ5LWhlYWRsaW5lLFxuICAuaW4tc2Vjb25kYXJ5LWhlYWRsaW5lIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uaW4tc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5pbi1yZXN1bHQtc2NyZWVuc2hvdC1yb290IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmluLW5vdGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5pbi1hcnRpZmFjdHMge1xuICAuaW4tYXJ0aWZhY3RzLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmluLXJlc3VsdC1zY3JlZW5zaG90LWxpYiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAuaW4tcmVzdWx0LXNjcmVlbnNob3Qge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgfVxuXG4gIC8vXG4gIC8vIEN1c3RvbVxuICAvL1xuXG4gIC5pbi1uby1hcnRpZmFjdHMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxufVxuXG4uaW4tZXhwb3J0LW1vZGUtdGFibGUge1xuICAuaW4tZXhwb3J0LW1vZGUtdmFsdWUtY2VsbCB7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG5cbiAgLmluLWV4cG9ydC1tb2RlLXJlc3VsdC1jZWxsIHtcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcbiAgfVxufVxuIiwiLmluLWZvb3Qtc3BhY2luZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW4taGVhZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZDtcbn1cbi5pbi1oZWFkaW5nIC5pbi1wcmltYXJ5LWhlYWRsaW5lLFxuLmluLWhlYWRpbmcgLmluLXNlY29uZGFyeS1oZWFkbGluZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW4tc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5pbi1yZXN1bHQtc2NyZWVuc2hvdC1yb290IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmluLW5vdGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5pbi1hcnRpZmFjdHMgLmluLWFydGlmYWN0cy10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaW4tYXJ0aWZhY3RzIC5pbi1yZXN1bHQtc2NyZWVuc2hvdC1saWIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uaW4tYXJ0aWZhY3RzIC5pbi1yZXN1bHQtc2NyZWVuc2hvdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG4uaW4tYXJ0aWZhY3RzIC5pbi1uby1hcnRpZmFjdHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW4tZXhwb3J0LW1vZGUtdGFibGUgLmluLWV4cG9ydC1tb2RlLXZhbHVlLWNlbGwge1xuICBjb2xvcjogZ3JlZW47XG59XG4uaW4tZXhwb3J0LW1vZGUtdGFibGUgLmluLWV4cG9ydC1tb2RlLXJlc3VsdC1jZWxsIHtcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/containers/home-container/home-container.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/home-container/home-container.component.ts ***!
  \***********************************************************************/
/*! exports provided: HomeContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainerComponent", function() { return HomeContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _code_snippets_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../code-snippets/misc */ "./src/app/code-snippets/misc.ts");



var HomeContainerComponent = /** @class */ (function () {
    function HomeContainerComponent() {
        this.miscSnippets = _code_snippets_misc__WEBPACK_IMPORTED_MODULE_2__["miscSnippets"];
        this.printioName = '{printio}';
    }
    HomeContainerComponent.prototype.ngOnInit = function () {
    };
    HomeContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-container',
            template: __webpack_require__(/*! raw-loader!./home-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/home-container/home-container.component.html"),
            styles: [__webpack_require__(/*! ./home-container.component.scss */ "./src/app/containers/home-container/home-container.component.scss")]
        })
    ], HomeContainerComponent);
    return HomeContainerComponent;
}());



/***/ }),

/***/ "./src/app/models/components/code-snippet.ts":
/*!***************************************************!*\
  !*** ./src/app/models/components/code-snippet.ts ***!
  \***************************************************/
/*! exports provided: CodeLanguage, CodeSnippet, CodeSnippetOnScss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLanguage", function() { return CodeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return CodeSnippet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetOnScss", function() { return CodeSnippetOnScss; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CodeLanguage;
(function (CodeLanguage) {
    CodeLanguage["bash"] = "bash";
    CodeLanguage["js"] = "js";
    CodeLanguage["scss"] = "scss";
})(CodeLanguage || (CodeLanguage = {}));
var CodeSnippet = /** @class */ (function () {
    function CodeSnippet(language, code) {
        this.language = language;
        this.code = code;
    }
    CodeSnippet.ctorParameters = function () { return [
        { type: undefined },
        { type: String }
    ]; };
    return CodeSnippet;
}());

var CodeSnippetOnScss = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CodeSnippetOnScss, _super);
    function CodeSnippetOnScss(code) {
        return _super.call(this, CodeLanguage.scss, code) || this;
    }
    CodeSnippetOnScss.ctorParameters = function () { return [
        { type: String }
    ]; };
    return CodeSnippetOnScss;
}(CodeSnippet));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/Projects/printio-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map