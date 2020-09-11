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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section class=\"header-section\">\n    <mat-toolbar color=\"primary\">\n      <span>Movie Nominations</span>\n    </mat-toolbar>\n  </section>\n\n  <section class=\"notification-section\">\n    <notification></notification>\n  </section>\n\n  <section [@fadeInOnEnter] class=\"main-section\">\n    <result-panel\n      [movies]=\"movies$ | async\"\n      [total]=\"numOfResults$ | async\"\n      [page]=\"page$ | async\"\n      [nominatedMovies]=\"nominatedMovies$ | async\"\n      [searchTerm]=\"searchTerm$ | async\"\n      [searchError]=\"searchError$ | async\"\n      (enterSearch)=\"handleEnterSearch($event)\"\n      (clearSearch)=\"handlecClearSearch()\"\n      (nominateMovie)=\"handleNominateMovie($event)\"\n      (changePage)=\"handleChangePage($event)\"\n    ></result-panel>\n\n    <nomination-panel\n      [nominatedMovies]=\"nominatedMovies$ | async\"\n      (removeNominatedMovie)=\"handleRemoveNominatedMovie($event)\"\n    >\n    </nomination-panel>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/nomination-panel/nomination-panel.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/nomination-panel/nomination-panel.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-container mat-elevation-z8\">\n  <section>\n    <article>\n      <h3>My Nominations</h3>\n      <button\n        (click)=\"handleShareClick()\"\n        class=\"small\"\n        mat-raised-button\n        #tooltip=\"matTooltip\"\n        matTooltip=\"Copy URL to save the nominations\"\n        matTooltipPosition=\"left\"\n        matTooltipHideDelay=\"300\"\n        aria-label=\"Copy URL to save the nominations\"\n        color=\"primary\"\n      >\n        Save Nominations\n      </button>\n    </article>\n  </section>\n\n  <section>\n    <mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\n      <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of columns\">\n        <mat-header-cell *matHeaderCellDef>\n          {{ getColumnDisplayName(column) }}\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let movie\" [ngSwitch]=\"column\">\n          <ng-container *ngSwitchCase=\"'Poster'\">\n            <img\n              *ngIf=\"isMoviePosterValid(movie)\"\n              [src]=\"movie.Poster\"\n              loading=\"lazy\"\n              alt=\"\"\n            />\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'Nomination'\">\n            <button\n              (click)=\"handleRemoveClick(movie)\"\n              class=\"small\"\n              mat-raised-button\n              color=\"basic\"\n            >\n              Remove\n            </button>\n          </ng-container>\n\n          <ng-container *ngSwitchDefault>\n            {{ movie[column] }}\n          </ng-container>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"columns\"></mat-header-row>\n      <mat-row\n        [@fadeInOnEnter]\n        *matRowDef=\"let movie; columns: columns\"\n      ></mat-row>\n    </mat-table>\n  </section>\n\n  <section>\n    <article>\n      <mat-progress-bar\n        mode=\"determinate\"\n        [value]=\"progressBarValue\"\n      ></mat-progress-bar>\n    </article>\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/result-panel/result-panel.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/result-panel/result-panel.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-container mat-elevation-z8\">\n  <section>\n    <article>\n      <mat-form-field>\n        <mat-label>Search Movies</mat-label>\n        <input [(ngModel)]=\"searchTerm\" matInput type=\"text\" #searchInput />\n        <button\n          (click)=\"handleClearSearch()\"\n          mat-button\n          matSuffix\n          mat-icon-button\n          matTooltip=\"Clear\"\n          matTooltipPosition=\"below\"\n          matTooltipHideDelay=\"100\"\n          aria-label=\"Clear\"\n        >\n          <mat-icon>close</mat-icon>\n        </button>\n\n        <mat-hint align=\"start\">\n          <strong>{{ searchError }}</strong>\n        </mat-hint>\n      </mat-form-field>\n    </article>\n  </section>\n\n  <section>\n    <mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\n      <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of columns\">\n        <mat-header-cell *matHeaderCellDef>\n          {{ getColumnDisplayName(column) }}\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let movie\" [ngSwitch]=\"column\">\n          <ng-container *ngSwitchCase=\"'Poster'\">\n            <img\n              *ngIf=\"isMoviePosterValid(movie)\"\n              loading=\"lazy\"\n              alt=\"\"\n              [src]=\"movie.Poster\"\n            />\n          </ng-container>\n\n          <ng-container *ngSwitchCase=\"'Nomination'\">\n            <button\n              (click)=\"handleNominationClick(movie)\"\n              [disabled]=\"!canNominate(movie)\"\n              class=\"small\"\n              mat-raised-button\n              color=\"basic\"\n            >\n              Nominate\n            </button>\n          </ng-container>\n\n          <ng-container *ngSwitchDefault>\n            {{ movie[column] }}\n          </ng-container>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"columns\"></mat-header-row>\n      <mat-row\n        [@fadeInOnEnter]\n        *matRowDef=\"let movie; columns: columns\"\n      ></mat-row>\n    </mat-table>\n  </section>\n\n  <section>\n    <mat-paginator\n      [pageIndex]=\"paginatorIndex\"\n      [pageSize]=\"10\"\n      [length]=\"total\"\n      (page)=\"handlePaginatorChange($event)\"\n      showFirstLastButtons\n    ></mat-paginator>\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main [ngClass]=\"mainClass\">\n  <div class=\"table-container mat-elevation-z8\">\n    <section>\n      <article>\n        <span [innerHTML]=\"notification && notification.message\"></span>\n      </article>\n\n      <article>\n        <button (click)=\"handleOkClick()\" mat-button color=\"primary\">Ok</button>\n      </article>\n    </section>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");




const routes = [
    {
        path: "**",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  height: 100vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LW1vdmllLWRhc2hib2FyZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _components_dashboard_result_panel_result_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/result-panel/result-panel.component */ "./src/app/components/dashboard/result-panel/result-panel.component.ts");
/* harmony import */ var _components_dashboard_nomination_panel_nomination_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/nomination-panel/nomination-panel.component */ "./src/app/components/dashboard/nomination-panel/nomination-panel.component.ts");
/* harmony import */ var _services_omdb_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/omdb.service */ "./src/app/services/omdb.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _state_app_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./state/app.reducer */ "./src/app/state/app.reducer.ts");
/* harmony import */ var _state_app_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state/app.effects */ "./src/app/state/app.effects.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _components_dashboard_result_panel_result_panel_component__WEBPACK_IMPORTED_MODULE_11__["ResultPanelComponent"],
            _components_dashboard_nomination_panel_nomination_panel_component__WEBPACK_IMPORTED_MODULE_12__["NominationPanelComponent"],
            _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"],
        ],
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot({ app: _state_app_reducer__WEBPACK_IMPORTED_MODULE_16__["appReducer"] }, { metaReducers: [_state_app_reducer__WEBPACK_IMPORTED_MODULE_16__["localStorageSyncReducer"]] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([_state_app_effects__WEBPACK_IMPORTED_MODULE_17__["AppEffects"]]),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _components_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [_services_omdb_service__WEBPACK_IMPORTED_MODULE_13__["OmdbService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_18__["NotificationService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nmain .header-section mat-toolbar {\n  padding: 0 50px 0 50px;\n}\nmain .notification-section {\n  width: 100%;\n}\nmain .notification-section > notification {\n  margin: 0 30px 0 30px;\n}\nmain .main-section {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 0;\n  margin: 0 30px 0 30px;\n  padding: 20px 0 20px 0;\n}\nmain .main-section > result-panel,\nmain .main-section nomination-panel {\n  margin: 10px 0 10px 0;\n  min-width: 475px;\n  width: 100%;\n}\n@media only screen and (min-width: 1024px) {\n  main .main-section {\n    display: flex;\n    height: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  main .main-section > result-panel,\nmain .main-section nomination-panel {\n    height: 100%;\n    margin: 0;\n    width: 48%;\n  }\n}\n@media only screen and (max-width: 640px) {\n  main .header-section mat-toolbar {\n    padding: 0 20px 0 20px;\n  }\n  main .notification-section > notification {\n    margin: 0;\n  }\n  main .main-section {\n    margin: 0;\n    padding: 10px 0 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LW1vdmllLWRhc2hib2FyZC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUk7RUFDRSxzQkFBQTtBQ0FOO0FESUU7RUFDRSxXQUFBO0FDRko7QURJSTtFQUNFLHFCQUFBO0FDRk47QURNRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0pKO0FETUk7O0VBRUUscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNKTjtBRFFFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7RUNOSjtFRFFJOztJQUVFLFlBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ05OO0FBQ0Y7QURVRTtFQUVJO0lBQ0Usc0JBQUE7RUNUTjtFRGNJO0lBQ0UsU0FBQTtFQ1pOO0VEZUU7SUFDRSxTQUFBO0lBQ0EsbUJBQUE7RUNiSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcblxuICAuaGVhZGVyLXNlY3Rpb24ge1xuICAgIG1hdC10b29sYmFyIHtcbiAgICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XG4gICAgfVxuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgID4gbm90aWZpY2F0aW9uIHtcbiAgICAgIG1hcmdpbjogMCAzMHB4IDAgMzBweDtcbiAgICB9XG4gIH1cblxuICAubWFpbi1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwIDMwcHggMCAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG5cbiAgICA+IHJlc3VsdC1wYW5lbCxcbiAgICBub21pbmF0aW9uLXBhbmVsIHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgIG1pbi13aWR0aDogNDc1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgID4gcmVzdWx0LXBhbmVsLFxuICAgICAgbm9taW5hdGlvbi1wYW5lbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAuaGVhZGVyLXNlY3Rpb24ge1xuICAgICAgbWF0LXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tc2VjdGlvbiB7XG4gICAgICA+IG5vdGlmaWNhdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1haW4tc2VjdGlvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICAgIH1cbiAgfVxufVxuIiwibWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbm1haW4gLmhlYWRlci1zZWN0aW9uIG1hdC10b29sYmFyIHtcbiAgcGFkZGluZzogMCA1MHB4IDAgNTBweDtcbn1cbm1haW4gLm5vdGlmaWNhdGlvbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIC5ub3RpZmljYXRpb24tc2VjdGlvbiA+IG5vdGlmaWNhdGlvbiB7XG4gIG1hcmdpbjogMCAzMHB4IDAgMzBweDtcbn1cbm1haW4gLm1haW4tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAwIDMwcHggMCAzMHB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xufVxubWFpbiAubWFpbi1zZWN0aW9uID4gcmVzdWx0LXBhbmVsLFxubWFpbiAubWFpbi1zZWN0aW9uIG5vbWluYXRpb24tcGFuZWwge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gIG1pbi13aWR0aDogNDc1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgbWFpbiAubWFpbi1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBtYWluIC5tYWluLXNlY3Rpb24gPiByZXN1bHQtcGFuZWwsXG5tYWluIC5tYWluLXNlY3Rpb24gbm9taW5hdGlvbi1wYW5lbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogNDglO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIG1haW4gLmhlYWRlci1zZWN0aW9uIG1hdC10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICB9XG4gIG1haW4gLm5vdGlmaWNhdGlvbi1zZWN0aW9uID4gbm90aWZpY2F0aW9uIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgbWFpbiAubWFpbi1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_app_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/app.selector */ "./src/app/state/app.selector.ts");
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/state/app.actions */ "./src/app/state/app.actions.ts");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm2015/angular-animations.js");







let DashboardComponent = class DashboardComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        this.initNominations();
        this.movies$ = this.store.select((state) => Object(_state_app_selector__WEBPACK_IMPORTED_MODULE_4__["selectMovies"])(state));
        this.numOfResults$ = this.store.select((state) => Object(_state_app_selector__WEBPACK_IMPORTED_MODULE_4__["selectNumOfResults"])(state));
        this.page$ = this.store.select((state) => Object(_state_app_selector__WEBPACK_IMPORTED_MODULE_4__["selectPage"])(state));
        this.nominatedMovies$ = this.store.select((state) => Object(_state_app_selector__WEBPACK_IMPORTED_MODULE_4__["selectNominatedMovies"])(state));
        this.searchTerm$ = this.store.select((state) => Object(_state_app_selector__WEBPACK_IMPORTED_MODULE_4__["selectSearchTerm"])(state));
        this.searchError$ = this.store.select((state) => Object(_state_app_selector__WEBPACK_IMPORTED_MODULE_4__["selectSearchError"])(state));
    }
    initNominations() {
        if (this.route.snapshot.queryParams &&
            this.route.snapshot.queryParams.nominations) {
            const movieIds = this.route.snapshot.queryParams.nominations.split(",");
            this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["populateNominations"]({ movieIds }));
        }
    }
    handleEnterSearch(searchTerm) {
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["searchForMovies"]({ searchValue: searchTerm }));
    }
    handlecClearSearch() {
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["clearSearch"]());
    }
    handleChangePage(page) {
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["goToPage"]({ page: page + 1 }));
    }
    handleNominateMovie(movie) {
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["selectMovie"]({ movie }));
    }
    handleRemoveNominatedMovie(movieId) {
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_5__["unselectMovie"]({ movieId }));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_6__["fadeInOnEnterAnimation"])()],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/dashboard/nomination-panel/nomination-panel.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/nomination-panel/nomination-panel.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  background: #fff;\n  height: 100%;\n  max-height: 685px;\n}\ndiv > section:first-child {\n  height: 75px;\n}\ndiv > section:first-child > article {\n  align-items: center;\n  display: flex;\n  line-height: 75px;\n  justify-content: space-between;\n  padding: 0 20px 0 20px;\n}\ndiv > section:nth-child(2) {\n  height: calc(100% - 135px);\n  overflow-y: auto;\n}\ndiv > section:nth-child(2) mat-table .mat-header-row > .mat-column-title {\n  flex-grow: 2.5;\n  margin-right: 10px;\n}\ndiv > section:nth-child(2) mat-table mat-row > .mat-column-title {\n  flex-grow: 2.5;\n  margin-right: 10px;\n}\ndiv > section:nth-child(2) mat-table img {\n  height: 40px;\n  max-width: 60px;\n}\ndiv > section:nth-child(2) mat-table button {\n  width: 100px;\n}\ndiv > section:last-child {\n  height: 60px;\n}\ndiv > section:last-child > article {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  padding: 0 20px 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LW1vdmllLWRhc2hib2FyZC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL25vbWluYXRpb24tcGFuZWwvbm9taW5hdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbm9taW5hdGlvbi1wYW5lbC9ub21pbmF0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FERU07RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNBUjtBRElJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQ0ZOO0FES1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNIVjtBRE1RO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDSlY7QURPUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDTFY7QURRUTtFQUNFLFlBQUE7QUNOVjtBRFdJO0VBQ0UsWUFBQTtBQ1ROO0FEV007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbm9taW5hdGlvbi1wYW5lbC9ub21pbmF0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA2ODVweDtcblxuICA+IHNlY3Rpb24ge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgaGVpZ2h0OiA3NXB4O1xuXG4gICAgICA+IGFydGljbGUge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBsaW5lLWhlaWdodDogNzVweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTM1cHgpO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgLm1hdC1oZWFkZXItcm93ID4gLm1hdC1jb2x1bW4tdGl0bGUge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMi41O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3cgPiAubWF0LWNvbHVtbi10aXRsZSB7XG4gICAgICAgICAgZmxleC1ncm93OiAyLjU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgICA+IGFydGljbGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA2ODVweDtcbn1cbmRpdiA+IHNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICBoZWlnaHQ6IDc1cHg7XG59XG5kaXYgPiBzZWN0aW9uOmZpcnN0LWNoaWxkID4gYXJ0aWNsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG59XG5kaXYgPiBzZWN0aW9uOm50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTM1cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuZGl2ID4gc2VjdGlvbjpudGgtY2hpbGQoMikgbWF0LXRhYmxlIC5tYXQtaGVhZGVyLXJvdyA+IC5tYXQtY29sdW1uLXRpdGxlIHtcbiAgZmxleC1ncm93OiAyLjU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmRpdiA+IHNlY3Rpb246bnRoLWNoaWxkKDIpIG1hdC10YWJsZSBtYXQtcm93ID4gLm1hdC1jb2x1bW4tdGl0bGUge1xuICBmbGV4LWdyb3c6IDIuNTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuZGl2ID4gc2VjdGlvbjpudGgtY2hpbGQoMikgbWF0LXRhYmxlIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiA2MHB4O1xufVxuZGl2ID4gc2VjdGlvbjpudGgtY2hpbGQoMikgbWF0LXRhYmxlIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbmRpdiA+IHNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIGhlaWdodDogNjBweDtcbn1cbmRpdiA+IHNlY3Rpb246bGFzdC1jaGlsZCA+IGFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/nomination-panel/nomination-panel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/nomination-panel/nomination-panel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NominationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NominationPanelComponent", function() { return NominationPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _helpers_clipboard_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/clipboard.helper */ "./src/app/components/helpers/clipboard.helper.ts");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm2015/angular-animations.js");





let NominationPanelComponent = class NominationPanelComponent {
    constructor() {
        this.removeNominatedMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columns = ["Poster", "Title", "Year", "Nomination"];
    }
    ngOnChanges() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([...this.nominatedMovies]);
    }
    handleRemoveClick(movie) {
        this.removeNominatedMovie.emit(movie.imdbID);
    }
    get progressBarValue() {
        return (this.nominatedMovies.length / 5) * 100;
    }
    handleShareClick() {
        _helpers_clipboard_helper__WEBPACK_IMPORTED_MODULE_3__["ClipboardHelper"].copyToClipboard(window.location.toString());
    }
    isMoviePosterValid(movie) {
        return movie.Poster && movie.Poster !== "N/A";
    }
    getColumnDisplayName(column) {
        return column === "Nomination" ? "" : column;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], NominationPanelComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NominationPanelComponent.prototype, "nominatedMovies", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NominationPanelComponent.prototype, "removeNominatedMovie", void 0);
NominationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "nomination-panel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nomination-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/nomination-panel/nomination-panel.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInOnEnterAnimation"])()],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nomination-panel.component.scss */ "./src/app/components/dashboard/nomination-panel/nomination-panel.component.scss")).default]
    })
], NominationPanelComponent);



/***/ }),

/***/ "./src/app/components/dashboard/result-panel/result-panel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/result-panel/result-panel.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  background: #fff;\n  height: 685px;\n}\ndiv > section:first-child {\n  height: 75px;\n}\ndiv > section:first-child > article {\n  padding: 0 20px 0 20px;\n}\ndiv > section:first-child > article > mat-form-field {\n  margin-top: 7.5px;\n  width: 100%;\n}\ndiv > section:nth-child(2) {\n  height: calc(100% - 135px);\n  overflow-y: auto;\n}\ndiv > section:nth-child(2) mat-table {\n  height: 100%;\n}\ndiv > section:nth-child(2) mat-table mat-header-row > .mat-column-title {\n  flex-grow: 2.5;\n  margin-right: 10px;\n}\ndiv > section:nth-child(2) mat-table mat-row > .mat-column-title {\n  flex-grow: 2.5;\n  margin-right: 10px;\n}\ndiv > section:nth-child(2) mat-table img {\n  height: 40px;\n  max-width: 60px;\n}\ndiv > section:nth-child(2) mat-table button {\n  width: 100px;\n}\ndiv > section:nth-child(3) mat-paginator {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LW1vdmllLWRhc2hib2FyZC9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Jlc3VsdC1wYW5lbC9yZXN1bHQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Jlc3VsdC1wYW5lbC9yZXN1bHQtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNDRjtBREdJO0VBQ0UsWUFBQTtBQ0ROO0FER007RUFDRSxzQkFBQTtBQ0RSO0FER1E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNEVjtBRE1JO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQ0pOO0FETU07RUFDRSxZQUFBO0FDSlI7QURNUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0pWO0FET1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRFFRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOVjtBRFNRO0VBQ0UsWUFBQTtBQ1BWO0FEYU07RUFDRSxZQUFBO0FDWFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9yZXN1bHQtcGFuZWwvcmVzdWx0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA2ODVweDtcbiAgLy8gbWF4LWhlaWdodDogNjg1cHg7XG5cbiAgPiBzZWN0aW9uIHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGhlaWdodDogNzVweDtcblxuICAgICAgPiBhcnRpY2xlIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcblxuICAgICAgICA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3LjVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTM1cHgpO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIG1hdC1oZWFkZXItcm93ID4gLm1hdC1jb2x1bW4tdGl0bGUge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMi41O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3cgPiAubWF0LWNvbHVtbi10aXRsZSB7XG4gICAgICAgICAgZmxleC1ncm93OiAyLjU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICBtYXQtcGFnaW5hdG9yIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA2ODVweDtcbn1cbmRpdiA+IHNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICBoZWlnaHQ6IDc1cHg7XG59XG5kaXYgPiBzZWN0aW9uOmZpcnN0LWNoaWxkID4gYXJ0aWNsZSB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG59XG5kaXYgPiBzZWN0aW9uOmZpcnN0LWNoaWxkID4gYXJ0aWNsZSA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogNy41cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuZGl2ID4gc2VjdGlvbjpudGgtY2hpbGQoMikge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEzNXB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbmRpdiA+IHNlY3Rpb246bnRoLWNoaWxkKDIpIG1hdC10YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmRpdiA+IHNlY3Rpb246bnRoLWNoaWxkKDIpIG1hdC10YWJsZSBtYXQtaGVhZGVyLXJvdyA+IC5tYXQtY29sdW1uLXRpdGxlIHtcbiAgZmxleC1ncm93OiAyLjU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmRpdiA+IHNlY3Rpb246bnRoLWNoaWxkKDIpIG1hdC10YWJsZSBtYXQtcm93ID4gLm1hdC1jb2x1bW4tdGl0bGUge1xuICBmbGV4LWdyb3c6IDIuNTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuZGl2ID4gc2VjdGlvbjpudGgtY2hpbGQoMikgbWF0LXRhYmxlIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiA2MHB4O1xufVxuZGl2ID4gc2VjdGlvbjpudGgtY2hpbGQoMikgbWF0LXRhYmxlIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbmRpdiA+IHNlY3Rpb246bnRoLWNoaWxkKDMpIG1hdC1wYWdpbmF0b3Ige1xuICBoZWlnaHQ6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/dashboard/result-panel/result-panel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/result-panel/result-panel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ResultPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPanelComponent", function() { return ResultPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm2015/angular-animations.js");






let ResultPanelComponent = class ResultPanelComponent {
    constructor() {
        this.enterSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clearSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nominateMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columns = ["Poster", "Title", "Year", "Nomination"];
        this.isTableLoading = false;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty("movies")) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.movies);
            this.isTableLoading = false;
        }
    }
    ngAfterViewInit() {
        this.searchDebounceSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.input.nativeElement, "keyup")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.search(this.searchTerm);
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this.searchDebounceSubscription.unsubscribe();
    }
    handleKeydown(event) {
        if (event.key == "Enter") {
            this.search(this.searchTerm);
        }
    }
    search(searchTerm) {
        if (searchTerm.length === 0 || !searchTerm.trim()) {
            this.searchError = "";
            return;
        }
        this.isTableLoading = true;
        this.enterSearch.emit(searchTerm);
    }
    handleClearSearch() {
        this.clearSearch.emit();
    }
    handlePaginatorChange(event) {
        if (this.searchTerm.length === 0 || !this.searchTerm.trim()) {
            return;
        }
        this.changePage.emit(event.pageIndex);
    }
    handleNominationClick(movie) {
        this.nominateMovie.emit(movie);
    }
    canNominate(movie) {
        return this.nominatedMovies.length < 5 && !this.isMovieNominated(movie);
    }
    isMovieNominated(movie) {
        return (this.nominatedMovies &&
            this.nominatedMovies.some((nominatedMovie) => nominatedMovie.imdbID === movie.imdbID));
    }
    isMoviePosterValid(movie) {
        return movie.Poster && movie.Poster !== "N/A";
    }
    getColumnDisplayName(column) {
        return column === "Nomination" ? "" : column;
    }
    get paginatorIndex() {
        return this.page - 1;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], ResultPanelComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("searchInput", { static: true })
], ResultPanelComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultPanelComponent.prototype, "movies", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultPanelComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultPanelComponent.prototype, "page", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultPanelComponent.prototype, "nominatedMovies", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultPanelComponent.prototype, "searchTerm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultPanelComponent.prototype, "searchError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResultPanelComponent.prototype, "enterSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResultPanelComponent.prototype, "clearSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResultPanelComponent.prototype, "nominateMovie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResultPanelComponent.prototype, "changePage", void 0);
ResultPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "result-panel",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/result-panel/result-panel.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_5__["fadeInOnEnterAnimation"])(), Object(angular_animations__WEBPACK_IMPORTED_MODULE_5__["fadeOutOnLeaveAnimation"])()],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result-panel.component.scss */ "./src/app/components/dashboard/result-panel/result-panel.component.scss")).default]
    })
], ResultPanelComponent);



/***/ }),

/***/ "./src/app/components/helpers/clipboard.helper.ts":
/*!********************************************************!*\
  !*** ./src/app/components/helpers/clipboard.helper.ts ***!
  \********************************************************/
/*! exports provided: ClipboardHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardHelper", function() { return ClipboardHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ClipboardHelper {
    static copyToClipboard(text) {
        const listener = (e) => {
            e.clipboardData.setData("text/plain", text);
            e.preventDefault();
        };
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);
    }
}


/***/ }),

/***/ "./src/app/components/helpers/uri.helper.ts":
/*!**************************************************!*\
  !*** ./src/app/components/helpers/uri.helper.ts ***!
  \**************************************************/
/*! exports provided: UriHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UriHelper", function() { return UriHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UriHelper {
    static generateParamsFromIds(ids) {
        return `${ids.join(",")}`;
    }
}


/***/ }),

/***/ "./src/app/components/material/material.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/material/material.module.ts ***!
  \********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
        ],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n:host main.hidden {\n  visibility: hidden;\n}\n:host main > div {\n  background: #fff;\n  height: 50px;\n}\n:host main > div > section {\n  display: flex;\n  justify-content: space-between;\n  line-height: 50px;\n  padding: 0 20px 0 20px;\n}\n:host main > div > section > article button {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mbngvR2l0UmVwb3MvZm54LW1vdmllLWRhc2hib2FyZC9zcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FERUk7RUFDRSxrQkFBQTtBQ0FOO0FER0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0RSO0FESVU7RUFDRSxnQkFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBtYWluIHtcbiAgICAmLmhpZGRlbiB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgPiBkaXYge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGhlaWdodDogNTBweDtcblxuICAgICAgPiBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcblxuICAgICAgICA+IGFydGljbGUge1xuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IG1haW4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuOmhvc3QgbWFpbiA+IGRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogNTBweDtcbn1cbjpob3N0IG1haW4gPiBkaXYgPiBzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcbn1cbjpob3N0IG1haW4gPiBkaXYgPiBzZWN0aW9uID4gYXJ0aWNsZSBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state/app.actions */ "./src/app/state/app.actions.ts");





let NotificationComponent = class NotificationComponent {
    constructor(store, notificationService) {
        this.store = store;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.notificationSubscription = this.notificationService
            .onNotify()
            .subscribe((notification) => {
            if (!notification || !notification.message) {
                this.notification = null;
            }
            this.notification = notification;
        });
        this.store.dispatch(src_app_state_app_actions__WEBPACK_IMPORTED_MODULE_4__["checkNominationStatus"]());
    }
    ngOnDestroy() {
        this.notificationSubscription.unsubscribe();
    }
    handleOkClick() {
        this.notification = null;
    }
    get mainClass() {
        return this.notification ? "" : "hidden";
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }
];
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "notification",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")).default]
    })
], NotificationComponent);



/***/ }),

/***/ "./src/app/models/notification.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/notification.model.ts ***!
  \**********************************************/
/*! exports provided: Notification, NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Notification {
    constructor(init) {
        Object.assign(this, init);
    }
}
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Success"] = 0] = "Success";
    NotificationType[NotificationType["Info"] = 1] = "Info";
    NotificationType[NotificationType["Warning"] = 2] = "Warning";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ "./src/app/models/omdb.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/omdb.model.ts ***!
  \**************************************/
/*! exports provided: SearchType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return SearchType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SearchType;
(function (SearchType) {
    SearchType["movie"] = "movie";
    SearchType["series"] = "series";
    SearchType["episode"] = "episode";
})(SearchType || (SearchType = {}));


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/notification.model */ "./src/app/models/notification.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let NotificationService = class NotificationService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    onNotify() {
        return this.subject.asObservable();
    }
    notify(notification) {
        this.subject.next(notification);
    }
    success(message) {
        this.notify(new _models_notification_model__WEBPACK_IMPORTED_MODULE_2__["Notification"]({ type: _models_notification_model__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Success, message }));
    }
    info(message) {
        this.notify(new _models_notification_model__WEBPACK_IMPORTED_MODULE_2__["Notification"]({ type: _models_notification_model__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Info, message }));
    }
    warning(message) {
        this.notify(new _models_notification_model__WEBPACK_IMPORTED_MODULE_2__["Notification"]({ type: _models_notification_model__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Warning, message }));
    }
    clear() {
        this.subject.next();
    }
};
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NotificationService);



/***/ }),

/***/ "./src/app/services/omdb.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/omdb.service.ts ***!
  \******************************************/
/*! exports provided: OmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbService", function() { return OmdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_omdb_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/omdb.model */ "./src/app/models/omdb.model.ts");






let OmdbService = class OmdbService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUri = "https://www.omdbapi.com/";
    }
    searchForTitle(searchTerm, page = 1) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("apikey", _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].omdbApiKey);
        params = params.append("type", _models_omdb_model__WEBPACK_IMPORTED_MODULE_5__["SearchType"].movie);
        params = params.append("s", searchTerm);
        params = params.append("page", `${page}`);
        return this.httpClient.get(this.apiUri, { params });
    }
    searchById(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("apikey", _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].omdbApiKey);
        params = params.append("i", id);
        return this.httpClient.get(this.apiUri, { params });
    }
    searchByIds(ids) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(ids.map((id) => this.searchById(id)));
    }
};
OmdbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OmdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OmdbService);



/***/ }),

/***/ "./src/app/state/app.actions.ts":
/*!**************************************!*\
  !*** ./src/app/state/app.actions.ts ***!
  \**************************************/
/*! exports provided: searchForMovies, fetchMoviesSuccess, populateNominations, populateNominationsSuccess, selectMovie, unselectMovie, enterSearchTerm, clearSearch, goToPage, checkNominationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchForMovies", function() { return searchForMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMoviesSuccess", function() { return fetchMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateNominations", function() { return populateNominations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateNominationsSuccess", function() { return populateNominationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovie", function() { return selectMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unselectMovie", function() { return unselectMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterSearchTerm", function() { return enterSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSearch", function() { return clearSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToPage", function() { return goToPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNominationStatus", function() { return checkNominationStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const searchForMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Search for Movies", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const fetchMoviesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Fetch Movies Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const populateNominations = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Populate Nominations", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const populateNominationsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Populate Nominations Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const selectMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Select Movie", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const unselectMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Unselect Movie", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const enterSearchTerm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Enter Search Term", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const clearSearch = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Clear Search");
const goToPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Go to Page", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const checkNominationStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[App] Check Nomination Status");


/***/ }),

/***/ "./src/app/state/app.effects.ts":
/*!**************************************!*\
  !*** ./src/app/state/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.actions */ "./src/app/state/app.actions.ts");
/* harmony import */ var _services_omdb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/omdb.service */ "./src/app/services/omdb.service.ts");
/* harmony import */ var _app_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.selector */ "./src/app/state/app.selector.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _components_helpers_uri_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/helpers/uri.helper */ "./src/app/components/helpers/uri.helper.ts");













let AppEffects = class AppEffects {
    constructor(store, router, activatedRoute, actions$, omdbService, notificationService, location) {
        this.store = store;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.actions$ = actions$;
        this.omdbService = omdbService;
        this.notificationService = notificationService;
        this.location = location;
        this.enterSearchTerm$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_7__["searchForMovies"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => {
            return [_app_actions__WEBPACK_IMPORTED_MODULE_7__["enterSearchTerm"]({ searchTerm: action.searchValue })];
        }));
        this.fetchMovies$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_7__["searchForMovies"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => {
            return this.omdbService
                .searchForTitle(action.searchValue)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((searchResponse) => _app_actions__WEBPACK_IMPORTED_MODULE_7__["fetchMoviesSuccess"]({ searchResponse, resetPage: true })));
        }));
        this.fetchMoviesOnPageChange$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_7__["goToPage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.select((state) => Object(_app_selector__WEBPACK_IMPORTED_MODULE_9__["selectSearchTerm"])(state)), this.store.select((state) => Object(_app_selector__WEBPACK_IMPORTED_MODULE_9__["selectPage"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([_, searchTerm, page]) => {
            return this.omdbService
                .searchForTitle(searchTerm, page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((searchResponse) => _app_actions__WEBPACK_IMPORTED_MODULE_7__["fetchMoviesSuccess"]({ searchResponse })));
        }));
        this.fetchMoviesByIds$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_7__["populateNominations"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => {
            return this.omdbService
                .searchByIds(action.movieIds)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((movies) => _app_actions__WEBPACK_IMPORTED_MODULE_7__["populateNominationsSuccess"]({ movies })));
        }));
        this.checkNominationStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_7__["selectMovie"], _app_actions__WEBPACK_IMPORTED_MODULE_7__["unselectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.select((state) => Object(_app_selector__WEBPACK_IMPORTED_MODULE_9__["selectNominatedMovies"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return [_app_actions__WEBPACK_IMPORTED_MODULE_7__["checkNominationStatus"]()];
        }));
        this.sendNotification$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_7__["checkNominationStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.select((state) => Object(_app_selector__WEBPACK_IMPORTED_MODULE_9__["selectNominatedMovies"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([_, nominatedMovies]) => {
            if (nominatedMovies.length === 5) {
                this.notificationService.success("You have nominated five movies!");
            }
            else {
                this.notificationService.clear();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"];
        }));
        this.changeUriParams$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_app_actions__WEBPACK_IMPORTED_MODULE_7__["selectMovie"], _app_actions__WEBPACK_IMPORTED_MODULE_7__["unselectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.select((state) => Object(_app_selector__WEBPACK_IMPORTED_MODULE_9__["selectNominatedMovies"])(state))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([_, nominatedMovies]) => {
            if (nominatedMovies.length === 0) {
                this.location.go("");
            }
            else {
                const nominations = _components_helpers_uri_helper__WEBPACK_IMPORTED_MODULE_12__["UriHelper"].generateParamsFromIds(nominatedMovies.map((movie) => movie.imdbID));
                const uri = this.router
                    .createUrlTree([], {
                    relativeTo: this.activatedRoute,
                    queryParams: { nominations },
                })
                    .toString();
                this.location.go(uri);
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"];
        }));
    }
};
AppEffects.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _services_omdb_service__WEBPACK_IMPORTED_MODULE_8__["OmdbService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])()
], AppEffects.prototype, "enterSearchTerm$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])()
], AppEffects.prototype, "fetchMovies$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])()
], AppEffects.prototype, "fetchMoviesOnPageChange$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])()
], AppEffects.prototype, "fetchMoviesByIds$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])()
], AppEffects.prototype, "checkNominationStatus$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])()
], AppEffects.prototype, "sendNotification$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Effect"])()
], AppEffects.prototype, "changeUriParams$", void 0);
AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppEffects);



/***/ }),

/***/ "./src/app/state/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/state/app.reducer.ts ***!
  \**************************************/
/*! exports provided: adapter, appReducer, localStorageSyncReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/fesm2015/ngrx-store-localstorage.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.actions */ "./src/app/state/app.actions.ts");





const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: (movie) => movie.imdbID,
    sortComparer: false,
});
const initialState = adapter.getInitialState({
    searchTerm: null,
    numOfResults: 0,
    searchError: "",
    page: 1,
    nominatedMovies: [],
});
function appReducer(state, action) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["fetchMoviesSuccess"], (state, { searchResponse, resetPage }) => {
        const page = resetPage ? 1 : state.page;
        if (!searchResponse.Error) {
            return Object.assign({}, state, { movies: searchResponse.Search, numOfResults: +searchResponse.totalResults, searchError: "", page });
        }
        return Object.assign({}, state, { movies: [], numOfResults: 0, searchError: searchResponse.Error, page });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["populateNominationsSuccess"], (state, { movies }) => {
        if (movies) {
            return Object.assign({}, state, { nominatedMovies: movies });
        }
        return state;
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["selectMovie"], (state, { movie }) => (Object.assign({}, state, { nominatedMovies: [...state.nominatedMovies, movie] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["unselectMovie"], (state, { movieId }) => (Object.assign({}, state, { nominatedMovies: state.nominatedMovies.filter((movie) => movie.imdbID !== movieId) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["enterSearchTerm"], (state, { searchTerm }) => (Object.assign({}, state, { searchTerm }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["clearSearch"], (state) => (Object.assign({}, state, { searchTerm: null, searchError: "", page: 1, movies: [] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_app_actions__WEBPACK_IMPORTED_MODULE_4__["goToPage"], (state, { page }) => (Object.assign({}, state, { page }))))(state, action);
}
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__["localStorageSync"])({
        keys: [
            {
                app: ["searchTerm", "movies", "page", "numOfResults"],
            },
        ],
        rehydrate: true,
    })(reducer);
}


/***/ }),

/***/ "./src/app/state/app.selector.ts":
/*!***************************************!*\
  !*** ./src/app/state/app.selector.ts ***!
  \***************************************/
/*! exports provided: selectAppState, selectMovies, selectNominatedMovies, selectNumOfResults, selectPage, selectSearchTerm, selectSearchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAppState", function() { return selectAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovies", function() { return selectMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNominatedMovies", function() { return selectNominatedMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNumOfResults", function() { return selectNumOfResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPage", function() { return selectPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchTerm", function() { return selectSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchError", function() { return selectSearchError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("app");
const selectMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.movies);
const selectNominatedMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.nominatedMovies);
const selectNumOfResults = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.numOfResults);
const selectPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.page);
const selectSearchTerm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.searchTerm);
const selectSearchError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAppState, (state) => state.searchError);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    omdbApiKey: "ad526d24",
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fnx/GitRepos/fnx-movie-dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.d330520c49bb73b0a7a2.js.map