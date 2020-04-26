function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _feed_feed_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./feed/feed/feed.component */
    "./src/app/feed/feed/feed.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'casino-demo';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_feed_feed_feed_component__WEBPACK_IMPORTED_MODULE_1__["FeedComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _feed_feed_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feed/feed.module */
    "./src/app/feed/feed.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([]), // todo: Add devtools only for dev.
      _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument(), _feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([]), // todo: Add devtools only for dev.
          _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument(), _feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/feed.module.ts":
  /*!*************************************!*\
    !*** ./src/app/feed/feed.module.ts ***!
    \*************************************/

  /*! exports provided: FeedModule */

  /***/
  function srcAppFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedModule", function () {
      return FeedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store/reducer */
    "./src/app/feed/store/reducer.ts");
    /* harmony import */


    var _store_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/effect */
    "./src/app/feed/store/effect.ts");
    /* harmony import */


    var _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feed/feed.component */
    "./src/app/feed/feed/feed.component.ts");

    var FeedModule = function FeedModule() {
      _classCallCheck(this, FeedModule);
    };

    FeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeedModule
    });
    FeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeedModule_Factory(t) {
        return new (t || FeedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('feed', _store_reducer__WEBPACK_IMPORTED_MODULE_4__["feedReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature(_store_effect__WEBPACK_IMPORTED_MODULE_5__["feedEffects"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedModule, {
        declarations: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]],
        exports: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('feed', _store_reducer__WEBPACK_IMPORTED_MODULE_4__["feedReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature(_store_effect__WEBPACK_IMPORTED_MODULE_5__["feedEffects"])],
          exports: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/feed/feed.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/feed/feed/feed.component.ts ***!
    \*********************************************/

  /*! exports provided: FeedComponent */

  /***/
  function srcAppFeedFeedFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedComponent", function () {
      return FeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _games_services_games_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../games/services/games.facade */
    "./src/app/feed/games/services/games.facade.ts");
    /* harmony import */


    var _jackpots_services_jackpots_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../jackpots/services/jackpots.facade */
    "./src/app/feed/jackpots/services/jackpots.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FeedComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var game_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", game_r1 == null ? null : game_r1.name, " - ", (game_r1 == null ? null : game_r1.jackpotAmount) || 0, " ");
      }
    }

    var FeedComponent = /*#__PURE__*/function () {
      function FeedComponent(gamesFacade, jackpotsFacade) {
        _classCallCheck(this, FeedComponent);

        this.gamesFacade = gamesFacade;
        this.jackpotsFacade = jackpotsFacade;
        this.gamesWithJackpot$ = this.gamesFacade.gamesWithJackpot$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (games) {
          return !!games;
        }));
      }

      _createClass(FeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gamesFacade.fetchGames();
          this.jackpotsFacade.fetchJackpots();
        }
      }]);

      return FeedComponent;
    }();

    FeedComponent.ɵfac = function FeedComponent_Factory(t) {
      return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_services_games_facade__WEBPACK_IMPORTED_MODULE_2__["GamesFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jackpots_services_jackpots_facade__WEBPACK_IMPORTED_MODULE_3__["JackpotsFacade"]));
    };

    FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedComponent,
      selectors: [["app-feed"]],
      decls: 6,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function FeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games with Jackpots");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedComponent_li_4_Template, 2, 2, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.gamesWithJackpot$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feed',
          templateUrl: './feed.component.html',
          styleUrls: ['./feed.component.scss']
        }]
      }], function () {
        return [{
          type: _games_services_games_facade__WEBPACK_IMPORTED_MODULE_2__["GamesFacade"]
        }, {
          type: _jackpots_services_jackpots_facade__WEBPACK_IMPORTED_MODULE_3__["JackpotsFacade"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/games/services/games.backend.ts":
  /*!******************************************************!*\
    !*** ./src/app/feed/games/services/games.backend.ts ***!
    \******************************************************/

  /*! exports provided: GamesBackend */

  /***/
  function srcAppFeedGamesServicesGamesBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesBackend", function () {
      return GamesBackend;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var GamesBackend = function GamesBackend(http) {
      var _this = this;

      _classCallCheck(this, GamesBackend);

      this.http = http;
      this.gamesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/games.php';

      this.getGames = function () {
        return _this.http.get(_this.gamesUrl);
      };
    };

    GamesBackend.ɵfac = function GamesBackend_Factory(t) {
      return new (t || GamesBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GamesBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GamesBackend,
      factory: GamesBackend.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/games/services/games.facade.ts":
  /*!*****************************************************!*\
    !*** ./src/app/feed/games/services/games.facade.ts ***!
    \*****************************************************/

  /*! exports provided: GamesFacade */

  /***/
  function srcAppFeedGamesServicesGamesFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesFacade", function () {
      return GamesFacade;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/selector */
    "./src/app/feed/games/store/selector.ts");
    /* harmony import */


    var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/action */
    "./src/app/feed/games/store/action.ts");
    /* harmony import */


    var _store_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../store/selector */
    "./src/app/feed/store/selector.ts");

    var GamesFacade = /*#__PURE__*/function () {
      function GamesFacade(store) {
        _classCallCheck(this, GamesFacade);

        this.store = store;
        this.games$ = this.store.select(_store_selector__WEBPACK_IMPORTED_MODULE_2__["selectGames"]);
        this.gamesWithJackpot$ = this.store.select(_store_selector__WEBPACK_IMPORTED_MODULE_4__["gamesWithJackpot"]);
      }

      _createClass(GamesFacade, [{
        key: "fetchGames",
        value: function fetchGames() {
          this.store.dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["fetchGames"])());
          return this.games$;
        }
      }]);

      return GamesFacade;
    }();

    GamesFacade.ɵfac = function GamesFacade_Factory(t) {
      return new (t || GamesFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    GamesFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GamesFacade,
      factory: GamesFacade.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/games/store/action-type.ts":
  /*!*************************************************!*\
    !*** ./src/app/feed/games/store/action-type.ts ***!
    \*************************************************/

  /*! exports provided: FetchGames, FetchGamesSuccess, FetchGamesFail */

  /***/
  function srcAppFeedGamesStoreActionTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchGames", function () {
      return FetchGames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchGamesSuccess", function () {
      return FetchGamesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchGamesFail", function () {
      return FetchGamesFail;
    });

    var FetchGames = 'FETCH_GAMES';
    var FetchGamesSuccess = 'FETCH_GAMES_SUCCESS';
    var FetchGamesFail = 'FETCH_GAMES_FAIL';
    /***/
  },

  /***/
  "./src/app/feed/games/store/action.ts":
  /*!********************************************!*\
    !*** ./src/app/feed/games/store/action.ts ***!
    \********************************************/

  /*! exports provided: fetchGames, fetchGamesSuccess, fetchGamesFail */

  /***/
  function srcAppFeedGamesStoreActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchGames", function () {
      return fetchGames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchGamesSuccess", function () {
      return fetchGamesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchGamesFail", function () {
      return fetchGamesFail;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./action-type */
    "./src/app/feed/games/store/action-type.ts");

    var fetchGames = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action_type__WEBPACK_IMPORTED_MODULE_1__["FetchGames"]);
    var fetchGamesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action_type__WEBPACK_IMPORTED_MODULE_1__["FetchGamesSuccess"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchGamesFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action_type__WEBPACK_IMPORTED_MODULE_1__["FetchGamesFail"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/feed/games/store/effect.ts":
  /*!********************************************!*\
    !*** ./src/app/feed/games/store/effect.ts ***!
    \********************************************/

  /*! exports provided: GamesEffects */

  /***/
  function srcAppFeedGamesStoreEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesEffects", function () {
      return GamesEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _services_games_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/games.backend */
    "./src/app/feed/games/services/games.backend.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./action */
    "./src/app/feed/games/store/action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GamesEffects = function GamesEffects(actions$, gamesBackend) {
      var _this2 = this;

      _classCallCheck(this, GamesEffects);

      this.actions$ = actions$;
      this.gamesBackend = gamesBackend;
      this.fetchGames$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action__WEBPACK_IMPORTED_MODULE_4__["fetchGames"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return _this2.gamesBackend.getGames().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (games) {
            return Object(_action__WEBPACK_IMPORTED_MODULE_4__["fetchGamesSuccess"])({
              payload: games
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["fetchGamesFail"])(error));
          }));
        }));
      });
    };

    GamesEffects.ɵfac = function GamesEffects_Factory(t) {
      return new (t || GamesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_games_backend__WEBPACK_IMPORTED_MODULE_2__["GamesBackend"]));
    };

    GamesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GamesEffects,
      factory: GamesEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_games_backend__WEBPACK_IMPORTED_MODULE_2__["GamesBackend"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/games/store/reducer.ts":
  /*!*********************************************!*\
    !*** ./src/app/feed/games/store/reducer.ts ***!
    \*********************************************/

  /*! exports provided: reducer */

  /***/
  function srcAppFeedGamesStoreReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./action */
    "./src/app/feed/games/store/action.ts");

    var initialState = {
      data: [],
      loaded: false,
      loading: false,
      error: null
    };
    var gamesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["fetchGames"], function (state) {
      return Object.assign(Object.assign({}, initialState), {
        loading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["fetchGamesSuccess"], function (state, _ref) {
      var payload = _ref.payload;
      return Object.assign(Object.assign({}, state), {
        data: payload,
        loading: false,
        loaded: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["fetchGamesFail"], function (state, _ref2) {
      var payload = _ref2.payload;
      return Object.assign(Object.assign({}, state), {
        error: payload
      });
    }));

    var reducer = function reducer(state, action) {
      return gamesReducer(state, action);
    };
    /***/

  },

  /***/
  "./src/app/feed/games/store/selector.ts":
  /*!**********************************************!*\
    !*** ./src/app/feed/games/store/selector.ts ***!
    \**********************************************/

  /*! exports provided: selectGames, selectGamesLoading, selectGamesLoaded, selectGamesError */

  /***/
  function srcAppFeedGamesStoreSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGames", function () {
      return selectGames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGamesLoading", function () {
      return selectGamesLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGamesLoaded", function () {
      return selectGamesLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGamesError", function () {
      return selectGamesError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectGamesState = function selectGamesState(state) {
      return state.feed.games;
    };

    var selectGames = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGamesState, function (state) {
      return state.data;
    });
    var selectGamesLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGamesState, function (state) {
      return state.loading;
    });
    var selectGamesLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGamesState, function (state) {
      return state.loaded;
    });
    var selectGamesError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGamesState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/feed/jackpots/services/jackpots.backend.ts":
  /*!************************************************************!*\
    !*** ./src/app/feed/jackpots/services/jackpots.backend.ts ***!
    \************************************************************/

  /*! exports provided: JackpotsBackend */

  /***/
  function srcAppFeedJackpotsServicesJackpotsBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JackpotsBackend", function () {
      return JackpotsBackend;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var JackpotsBackend = function JackpotsBackend(http) {
      var _this3 = this;

      _classCallCheck(this, JackpotsBackend);

      this.http = http;
      this.jackpotsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/jackpots.php';

      this.getJackpots = function () {
        return _this3.http.get(_this3.jackpotsUrl);
      };
    };

    JackpotsBackend.ɵfac = function JackpotsBackend_Factory(t) {
      return new (t || JackpotsBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    JackpotsBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JackpotsBackend,
      factory: JackpotsBackend.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JackpotsBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/jackpots/services/jackpots.facade.ts":
  /*!***********************************************************!*\
    !*** ./src/app/feed/jackpots/services/jackpots.facade.ts ***!
    \***********************************************************/

  /*! exports provided: JackpotsFacade */

  /***/
  function srcAppFeedJackpotsServicesJackpotsFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JackpotsFacade", function () {
      return JackpotsFacade;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/selector */
    "./src/app/feed/jackpots/store/selector.ts");
    /* harmony import */


    var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/action */
    "./src/app/feed/jackpots/store/action.ts");

    var JackpotsFacade = /*#__PURE__*/function () {
      function JackpotsFacade(store) {
        _classCallCheck(this, JackpotsFacade);

        this.store = store;
        this.jackpots$ = this.store.select(_store_selector__WEBPACK_IMPORTED_MODULE_2__["selectJackpots"]);
      }

      _createClass(JackpotsFacade, [{
        key: "fetchJackpots",
        value: function fetchJackpots() {
          this.store.dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["fetchJackpots"])());
          return this.jackpots$;
        }
      }]);

      return JackpotsFacade;
    }();

    JackpotsFacade.ɵfac = function JackpotsFacade_Factory(t) {
      return new (t || JackpotsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    JackpotsFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JackpotsFacade,
      factory: JackpotsFacade.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JackpotsFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/jackpots/store/action-type.ts":
  /*!****************************************************!*\
    !*** ./src/app/feed/jackpots/store/action-type.ts ***!
    \****************************************************/

  /*! exports provided: FetchJackpots, FetchJackpotsSuccess, FetchJackpotsFail */

  /***/
  function srcAppFeedJackpotsStoreActionTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchJackpots", function () {
      return FetchJackpots;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchJackpotsSuccess", function () {
      return FetchJackpotsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchJackpotsFail", function () {
      return FetchJackpotsFail;
    });

    var FetchJackpots = 'FETCH_JACKPOTS';
    var FetchJackpotsSuccess = 'FETCH_JACKPOTS_SUCCESS';
    var FetchJackpotsFail = 'FETCH_JACKPOTS_FAIL';
    /***/
  },

  /***/
  "./src/app/feed/jackpots/store/action.ts":
  /*!***********************************************!*\
    !*** ./src/app/feed/jackpots/store/action.ts ***!
    \***********************************************/

  /*! exports provided: fetchJackpots, fetchJackpotsSuccess, fetchJackpotsFail */

  /***/
  function srcAppFeedJackpotsStoreActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchJackpots", function () {
      return fetchJackpots;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchJackpotsSuccess", function () {
      return fetchJackpotsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fetchJackpotsFail", function () {
      return fetchJackpotsFail;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./action-type */
    "./src/app/feed/jackpots/store/action-type.ts");

    var fetchJackpots = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action_type__WEBPACK_IMPORTED_MODULE_1__["FetchJackpots"]);
    var fetchJackpotsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action_type__WEBPACK_IMPORTED_MODULE_1__["FetchJackpotsSuccess"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var fetchJackpotsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action_type__WEBPACK_IMPORTED_MODULE_1__["FetchJackpotsFail"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/feed/jackpots/store/effect.ts":
  /*!***********************************************!*\
    !*** ./src/app/feed/jackpots/store/effect.ts ***!
    \***********************************************/

  /*! exports provided: JackpotsEffects */

  /***/
  function srcAppFeedJackpotsStoreEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JackpotsEffects", function () {
      return JackpotsEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _services_jackpots_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/jackpots.backend */
    "./src/app/feed/jackpots/services/jackpots.backend.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./action */
    "./src/app/feed/jackpots/store/action.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var JackpotsEffects = function JackpotsEffects(actions$, jackpotsBackend) {
      var _this4 = this;

      _classCallCheck(this, JackpotsEffects);

      this.actions$ = actions$;
      this.jackpotsBackend = jackpotsBackend;
      this.fetchJackpots$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action__WEBPACK_IMPORTED_MODULE_4__["fetchJackpots"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return _this4.jackpotsBackend.getJackpots().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (jackpots) {
            return Object(_action__WEBPACK_IMPORTED_MODULE_4__["fetchJackpotsSuccess"])({
              payload: jackpots
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object(_action__WEBPACK_IMPORTED_MODULE_4__["fetchJackpotsFail"])(error));
          }));
        }));
      });
    };

    JackpotsEffects.ɵfac = function JackpotsEffects_Factory(t) {
      return new (t || JackpotsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_jackpots_backend__WEBPACK_IMPORTED_MODULE_2__["JackpotsBackend"]));
    };

    JackpotsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JackpotsEffects,
      factory: JackpotsEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JackpotsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_jackpots_backend__WEBPACK_IMPORTED_MODULE_2__["JackpotsBackend"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/jackpots/store/reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/feed/jackpots/store/reducer.ts ***!
    \************************************************/

  /*! exports provided: reducer */

  /***/
  function srcAppFeedJackpotsStoreReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./action */
    "./src/app/feed/jackpots/store/action.ts");

    var initialState = {
      data: [],
      loaded: false,
      loading: false,
      error: null
    };
    var jackpotsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["fetchJackpots"], function () {
      return Object.assign(Object.assign({}, initialState), {
        loading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["fetchJackpotsSuccess"], function (state, _ref3) {
      var payload = _ref3.payload;
      return Object.assign(Object.assign({}, state), {
        data: payload,
        loading: false,
        loaded: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action__WEBPACK_IMPORTED_MODULE_1__["fetchJackpotsFail"], function (state, _ref4) {
      var payload = _ref4.payload;
      return Object.assign(Object.assign({}, state), {
        error: payload
      });
    }));

    var reducer = function reducer(state, action) {
      return jackpotsReducer(state, action);
    };
    /***/

  },

  /***/
  "./src/app/feed/jackpots/store/selector.ts":
  /*!*************************************************!*\
    !*** ./src/app/feed/jackpots/store/selector.ts ***!
    \*************************************************/

  /*! exports provided: selectJackpots, selectJackpotsLoading, selectJackpotsLoaded, selectJackpotsError */

  /***/
  function srcAppFeedJackpotsStoreSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectJackpots", function () {
      return selectJackpots;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectJackpotsLoading", function () {
      return selectJackpotsLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectJackpotsLoaded", function () {
      return selectJackpotsLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectJackpotsError", function () {
      return selectJackpotsError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectJackpotsState = function selectJackpotsState(state) {
      return state.feed.jackpots;
    };

    var selectJackpots = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectJackpotsState, function (state) {
      return state.data;
    });
    var selectJackpotsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectJackpotsState, function (state) {
      return state.loading;
    });
    var selectJackpotsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectJackpotsState, function (state) {
      return state.loaded;
    });
    var selectJackpotsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectJackpotsState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/feed/store/effect.ts":
  /*!**************************************!*\
    !*** ./src/app/feed/store/effect.ts ***!
    \**************************************/

  /*! exports provided: feedEffects */

  /***/
  function srcAppFeedStoreEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "feedEffects", function () {
      return feedEffects;
    });
    /* harmony import */


    var _games_store_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../games/store/effect */
    "./src/app/feed/games/store/effect.ts");
    /* harmony import */


    var _jackpots_store_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jackpots/store/effect */
    "./src/app/feed/jackpots/store/effect.ts");

    var feedEffects = [_games_store_effect__WEBPACK_IMPORTED_MODULE_0__["GamesEffects"], _jackpots_store_effect__WEBPACK_IMPORTED_MODULE_1__["JackpotsEffects"]];
    /***/
  },

  /***/
  "./src/app/feed/store/reducer.ts":
  /*!***************************************!*\
    !*** ./src/app/feed/store/reducer.ts ***!
    \***************************************/

  /*! exports provided: feedReducers */

  /***/
  function srcAppFeedStoreReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "feedReducers", function () {
      return feedReducers;
    });
    /* harmony import */


    var _games_store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../games/store/reducer */
    "./src/app/feed/games/store/reducer.ts");
    /* harmony import */


    var _jackpots_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jackpots/store/reducer */
    "./src/app/feed/jackpots/store/reducer.ts");

    function feedReducers() {
      return {
        games: _games_store_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
        jackpots: _jackpots_store_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
      };
    }
    /***/

  },

  /***/
  "./src/app/feed/store/selector.ts":
  /*!****************************************!*\
    !*** ./src/app/feed/store/selector.ts ***!
    \****************************************/

  /*! exports provided: gamesWithJackpot */

  /***/
  function srcAppFeedStoreSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gamesWithJackpot", function () {
      return gamesWithJackpot;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _games_store_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../games/store/selector */
    "./src/app/feed/games/store/selector.ts");
    /* harmony import */


    var _jackpots_store_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../jackpots/store/selector */
    "./src/app/feed/jackpots/store/selector.ts");

    var gamesWithJackpot = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_games_store_selector__WEBPACK_IMPORTED_MODULE_1__["selectGames"], _jackpots_store_selector__WEBPACK_IMPORTED_MODULE_2__["selectJackpots"], function (games, jackpots) {
      return games.map(function (game) {
        var gameWithJackpot = jackpots.find(function (jackpot) {
          return jackpot.game === game.id;
        });
        return Object.assign(Object.assign({}, game), {
          jackpotAmount: gameWithJackpot && gameWithJackpot.amount || null
        });
      });
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://stage.whgstage.com/front-end-test'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/ngrx-demo/ngrx-demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map