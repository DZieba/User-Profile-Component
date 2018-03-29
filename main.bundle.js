webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"../../../../../src/app/user/user.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_comments_service__ = __webpack_require__("../../../../../src/app/user/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_icon__ = __webpack_require__("../../../../angular-svg-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_data_storage_service__ = __webpack_require__("../../../../../src/app/user/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__categories_service__ = __webpack_require__("../../../../../src/app/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__article_article_preview_article_preview_component__ = __webpack_require__("../../../../../src/app/article/article-preview/article-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__article_article_meta_article_meta_component__ = __webpack_require__("../../../../../src/app/article/article-meta/article-meta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__article_article_whole_article_whole_component__ = __webpack_require__("../../../../../src/app/article/article-whole/article-whole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__article_service_service__ = __webpack_require__("../../../../../src/app/article-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__article_article_resolver_service__ = __webpack_require__("../../../../../src/app/article/article-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', loadChildren: './user/user.module#UserModule' },
    { path: 'user-profile/:id', loadChildren: './user/user.module#UserModule' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__auth_auth_component__["a" /* AuthComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__auth_auth_component__["a" /* AuthComponent */] },
    { path: 'article/:id', component: __WEBPACK_IMPORTED_MODULE_17__article_article_whole_article_whole_component__["a" /* ArticleWholeComponent */], resolve: { art: __WEBPACK_IMPORTED_MODULE_19__article_article_resolver_service__["a" /* ArticleResolverService */] } },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_15__article_article_preview_article_preview_component__["a" /* ArticlePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__article_article_meta_article_meta_component__["a" /* ArticleMetaComponent */],
            __WEBPACK_IMPORTED_MODULE_17__article_article_whole_article_whole_component__["a" /* ArticleWholeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_svg_icon__["a" /* AngularSvgIconModule */],
            [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__user_user_module__["UserModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__user_comments_service__["a" /* CommentsService */], __WEBPACK_IMPORTED_MODULE_9__user_data_storage_service__["a" /* DataStorageService */], __WEBPACK_IMPORTED_MODULE_14__categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_18__article_service_service__["a" /* ArticleServiceService */], __WEBPACK_IMPORTED_MODULE_19__article_article_resolver_service__["a" /* ArticleResolverService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleServiceService = (function () {
    function ArticleServiceService() {
        this.articles = [{ id: 0, title: "Comment title 1", autor: "Mike", content: "This is my comment", tagList: ['diet', 'suplements', 'hydration', 'sportswear', 'health', 'events'] },
            { id: 1, title: "Comment title 2", autor: "Dona", content: "And this is mine", tagList: ['diet', 'suplements', 'hydration', 'sportswear', 'health', 'events'] },
            { id: 2, title: "Comment title 3", autor: "Klaudia", content: "Hey, I also posted a comment", tagList: ['diet', 'suplements', 'hydration', 'sportswear', 'health', 'events'] },
        ];
    }
    ArticleServiceService.prototype.getArticles = function () {
        return this.articles;
    };
    ArticleServiceService.prototype.getArticle = function (nmb) {
        var article = this.articles.find(function (art) {
            return art.id === nmb;
        });
        return article;
    };
    return ArticleServiceService;
}());
ArticleServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ArticleServiceService);

//# sourceMappingURL=article-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/article/article-meta/article-meta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".autor_meta {\r\n \r\n  font-weight: bold;\r\n  font-size: 120%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article-meta/article-meta.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"autor_meta\">\r\n{{article.autor}}\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/article/article-meta/article-meta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleMetaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleMetaComponent = (function () {
    function ArticleMetaComponent() {
    }
    ArticleMetaComponent.prototype.ngOnInit = function () {
    };
    return ArticleMetaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ArticleMetaComponent.prototype, "article", void 0);
ArticleMetaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-meta',
        template: __webpack_require__("../../../../../src/app/article/article-meta/article-meta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article-meta/article-meta.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticleMetaComponent);

//# sourceMappingURL=article-meta.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article-preview/article-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article-preview{\r\n    width:90%;\r\n    margin:30px auto;\r\n    border-bottom: 1px solid rgb(128, 128, 128);\r\n}\r\n.tagList{\r\nlist-style: none;\r\n}\r\n.tagList>li{\r\n    display: inline-block;\r\n    padding:10px;\r\n    margin:5px;\r\n    background-color: #002C71;\r\n    border-radius: 20px;\r\n    color: #eeeeee;\r\n    font-size: 80%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article-preview/article-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\r\n<app-article-meta [article]=\"articleItem\"></app-article-meta>\r\n\r\n\r\n\r\n  <a [routerLink]=\"['/article/',articleItem.id]\" class=\"preview_link\">\r\n    <h1>{{articleItem.title}}</h1>\r\n    <h2>{{articleItem.content}}</h2>\r\n    <span>Read more....</span>\r\n<ul class=\"tagList\">\r\n  <li class=\"tagItem\" *ngFor=\"let tag of articleItem.tagList\">\r\n    {{tag}}\r\n  </li>\r\n</ul>\r\n\r\n  </a>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/article/article-preview/article-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlePreviewComponent = (function () {
    function ArticlePreviewComponent() {
    }
    ArticlePreviewComponent.prototype.ngOnInit = function () {
    };
    return ArticlePreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ArticlePreviewComponent.prototype, "articleItem", void 0);
ArticlePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-preview',
        template: __webpack_require__("../../../../../src/app/article/article-preview/article-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article-preview/article-preview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticlePreviewComponent);

//# sourceMappingURL=article-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service_service__ = __webpack_require__("../../../../../src/app/article-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleResolverService = (function () {
    function ArticleResolverService(artService) {
        this.artService = artService;
    }
    ArticleResolverService.prototype.resolve = function (route, state) {
        return this.artService.getArticle(+route.params['id']);
    };
    return ArticleResolverService;
}());
ArticleResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__article_service_service__["a" /* ArticleServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article_service_service__["a" /* ArticleServiceService */]) === "function" && _a || Object])
], ArticleResolverService);

var _a;
//# sourceMappingURL=article-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/article/article-whole/article-whole.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".backButton {\r\n\r\n    padding:15px;\r\n    background-color: #ff600f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article-whole/article-whole.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n{{article.content}}\r\n<button class=\"backButton\" (click)=\"goBack()\">Back to all comments</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/article/article-whole/article-whole.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleWholeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleWholeComponent = (function () {
    function ArticleWholeComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ArticleWholeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.article = data['art'];
        });
    };
    ArticleWholeComponent.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    return ArticleWholeComponent;
}());
ArticleWholeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-whole',
        template: __webpack_require__("../../../../../src/app/article/article-whole/article-whole.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article-whole/article-whole.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ArticleWholeComponent);

var _a, _b;
//# sourceMappingURL=article-whole.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n  height:700px;\r\n  background-color: #efefef;\r\n  padding:30px;\r\n}\r\n\r\nh1,\r\nh4{\r\n  text-align: center;\r\n  color: #ff600f;\r\n}\r\n\r\n\r\nh4>a{\r\n  text-decoration: none;\r\n  color: rgba(0, 0, 0, 0.61);\r\n}\r\n\r\nh4>a:hover{\r\n  color: rgba(0, 0, 0, 0.85);\r\n}\r\n\r\n.formBox{\r\n  padding:10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-direction:column;\r\n          flex-direction:column;\r\n  margin: 40px auto;\r\n  width:70%;\r\n\r\n}\r\ninput{\r\n  display: inline-block;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  margin:7px;\r\n  padding:10px;\r\n  width:95%;\r\n  border-radius:5px;\r\n}\r\n.btn-submit{\r\n  background-color: #FFA640;\r\n  display: block;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  padding: 13px;\r\n  border-radius: 100px;\r\n  outline: none;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1.2px;\r\n  color: #fff;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n<h1>{{title}}</h1>\r\n  <h4 *ngIf=\"title=='Sign in'\"><a routerLink=\"/register\"> Haven't got an account?</a></h4>\r\n  <h4 *ngIf=\"title=='Sign up'\"><a routerLink=\"/login\">Already have an account?</a></h4>\r\n\r\n  <form [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\">\r\n<div class=\"formBox\">\r\n  <input *ngIf=\"authType=='register'\" type=\"text\" placeholder=\"Username\" formControlName=\"username\">\r\n  <input type=\"email\" placeholder=\"email\" formControlName=\"email\">\r\n  <input type=\"password\" placeholder=\"password\" formControlName=\"password\">\r\n  <button class=\"btn-submit\" type=\"submit\">{{title}}</button>\r\n</div>\r\n  </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(route, usersService, fb) {
        this.route = route;
        this.usersService = usersService;
        this.fb = fb;
        this.title = '';
        this.authForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url
            .subscribe(function (data) {
            _this.authType = data[0].path;
            _this.title = _this.authType == 'login' ? 'Sign in' : 'Sign up';
            if (_this.authType == 'register') {
                _this.authForm.addControl('username', new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]());
            }
        });
    };
    AuthComponent.prototype.submitForm = function () {
        this.usersService.addUser('dominika');
        this.usersService.getUsers().subscribe(function (users) {
            console.log(users);
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], AuthComponent);

var _a, _b, _c;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesService = (function () {
    function CategoriesService() {
        this.categories = ['diet', 'suplements', 'hydration', 'energy boosts', 'sportswear', 'health', 'events', 'trainings', 'other'];
    }
    CategoriesService.prototype.getCategories = function () {
        return this.categories;
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CategoriesService);

//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.wrapper{\r\n  margin:0 auto;\r\n\r\n\r\n}\r\n.navbar{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  background-color: #002C71;\r\n  padding:15px 10px;\r\n  color: #eeeeee;\r\n}\r\n.navbar-brand {\r\ncursor: pointer;\r\n\r\n}\r\n\r\n.navbar-brand:hover{\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar-nav{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\r\n}\r\nul{\r\n  list-style: none;\r\n}\r\nul li a{\r\n  padding-left: 20px;\r\n  color: #eeeeee;\r\n}\r\nul li.active a{\r\n\r\n  color: #ff600f;\r\n}\r\n\r\n@media (max-width: 745px){\r\n.navbar{\r\n  padding-bottom:30px;\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n<nav class=\"navbar\">\r\n  <div class=\"navbar-brand\" (click)=\"redirectToMain()\"> Watch Me\r\n\r\n </div>\r\n  <ul class=\"navbar-nav\">\r\n    <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\r\n    <li routerLinkActive=\"active\"><a routerLink=\"/login\">Sign In</a></li>\r\n    <li routerLinkActive=\"active\"><a routerLink=\"/register\">Sign Up</a></li>\r\n  </ul>\r\n\r\n</nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.redirectToMain = function () {
        this.router.navigate(['user-profile/0']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n  border:1px solid black;\r\n\r\n}\r\n.profile-container{\r\n  height:auto;\r\n  background-image:linear-gradient(rgba(238, 238, 238, 0.31), rgba(255, 255, 255, 0.82)), url(" + __webpack_require__("../../../../../src/assets/man.jpg") + ");\r\n  background-size: cover;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n  padding:20px 0 10px;\r\n  color: #fff;\r\n  letter-spacing: 2px;\r\n  font-weight: bold;\r\n}\r\nh4{\r\n  text-align: center;\r\n  color:#fff;\r\n}\r\n\r\n.homeTitle{\r\n  text-align: center;\r\n  padding-top:5px;\r\n}\r\n\r\n.categories{\r\n\r\n  max-width:450px;\r\n  height:auto;\r\n  margin:10px auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -ms-flex-pack:distribute;\r\n      justify-content:space-around;\r\n}\r\nul{\r\n  list-style-type: none;\r\n}\r\n.categories>li{\r\n  font-size:14px;\r\n  margin:5px;\r\n  padding:7px;\r\n  background-color: rgba(0, 44, 113, 0.85);\r\n  border-radius:5px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.categories>li:hover{\r\n  background-color: rgba(0, 45, 113, 0.658);\r\n}\r\n\r\n.articles_list{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.articles_list li{\r\n  margin:5px 10px;\r\n  padding:10px;\r\n  cursor: pointer;\r\n}\r\nul>li>a:hover{\r\n  \r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"wrapper\">\r\n  <div class=\"heading\">\r\n    <h1>WatchMe</h1>\r\n    <h4>Your free app to see others<br>and share your thoughts about gym</h4></div>\r\n  <div class=\"profile-container\">\r\n<p class=\"homeTitle\">Popular categories</p>\r\n<ul class=\"categories\" >\r\n  <li *ngFor=\" let category of categories\" (click)=\"changeCat(category)\">{{category}}</li>\r\n</ul>\r\n<hr>\r\n    <nav class=\"articles_nav\">\r\n      <ul class=\"articles_list\">\r\n        <li><a>All articles</a></li>\r\n        <li><a>Your articles</a></li>\r\n        <li><a>{{currentTag}}</a></li>\r\n      </ul>\r\n    </nav>\r\n<app-article-preview *ngFor=\"let article of articles\" [articleItem]=\"article\r\n\"></app-article-preview>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_service__ = __webpack_require__("../../../../../src/app/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_service_service__ = __webpack_require__("../../../../../src/app/article-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(ctgService, artService) {
        this.ctgService = ctgService;
        this.artService = artService;
        this.categories = [];
        this.articles = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.articles = this.artService.getArticles();
        this.categories = this.ctgService.getCategories();
        console.log(this.categories);
    };
    HomeComponent.prototype.changeCat = function (cat) {
        this.currentTag = '#' + cat;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__article_service_service__["a" /* ArticleServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_service_service__["a" /* ArticleServiceService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(author, date, content, dateResult) {
        this.author = author;
        this.date = date;
        this.content = content;
        this.dateResult = dateResult;
    }
    return Comment;
}());

//# sourceMappingURL=comment.model.js.map

/***/ }),

/***/ "../../../../../src/app/user/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
        this.commentsNumberChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    CommentsService.prototype.getComments = function () {
        return this.http.get("./assets/comments.json")
            .map(function (response) { return response.json(); });
    };
    CommentsService.prototype.addComment = function (newComment, chosenArray) {
        chosenArray.push(newComment);
        this.commentsNumberChanged.next(1);
    };
    return CommentsService;
}());
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CommentsService);

var _a;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.comment-container{\r\n  padding:5px;\r\n  border-bottom:1px solid rgba(128, 128, 128, 0.18);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  line-height:24px;\r\n\r\n}\r\n\r\n\r\n.comment-container img {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 50%;\r\n}\r\n.col-1{\r\n  -webkit-box-flex:0;\r\n      -ms-flex-positive:0;\r\n          flex-grow:0;\r\n}\r\n.col-2{\r\n  -webkit-box-flex: 5;\r\n      -ms-flex-positive: 5;\r\n          flex-grow: 5;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-direction:column;\r\n          flex-direction:column;\r\n  height:auto;\r\n\r\n}\r\n.commentHeader{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  width:100%;\r\n  -webkit-box-flex:1;\r\n      -ms-flex-positive:1;\r\n          flex-grow:1;\r\n}\r\n.commentContent{\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n.who\r\n{\r\n  font-size: 14px;\r\n  color: #002C71 ;\r\n  margin-left:10px;\r\n  margin-top:10px;\r\n  cursor: pointer;\r\n\r\n}\r\n.who:hover{\r\n  font-weight:bold;\r\n}\r\n\r\n.commentAdder{\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  color:#8298B9;\r\n  margin:10px 0 5px 25px;\r\n}\r\ntextarea{\r\n  border:none;\r\n  width:90%;\r\n  margin:0 auto;\r\n}\r\ntextarea:focus{\r\n  border:none;\r\n  outline: none;\r\n}\r\n.addButton{\r\n  display: block;\r\n  width: 40%;\r\n  margin: 20px auto;\r\n  padding: 13px;\r\n  border-radius: 100px;\r\n  background-color: #FFA640;\r\n  outline: none;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  letter-spacing: 4.2px;\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div *ngFor=\"let comment of comments\">\r\n  <div class=\"comment-container #commentBox\">\r\n    <div class=\"col-1\"> <img [src]=\"comment.author.image\"></div>\r\n    <div class=\"col-2\">\r\n      <div class=\"commentHeader\"> <div class=\"who\" (click)=\"navigateToAuthor(comment.author.id)\">{{comment.author.name}}</div><div class=\"commentTime\"> {{  comment.dateResult }}</div></div>\r\n  <div class=\"commentContent\"> {{comment.content}}</div>\r\n  </div>\r\n  </div>\r\n<div class=\"addComment\">\r\n\r\n</div>\r\n</div>\r\n<textarea class=\"commentAdder\" [(ngModel)]=\"defaultComment\" (click)=\"clearDefault()\" (keydown)=\"onEnterPressed($event)\"></textarea>\r\n<button *ngIf=\"defaultComment != 'Add a comment'\"   class=\"addButton\" (click)=\"onAddComment(defaultComment)\">Add comment</button>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comments_service__ = __webpack_require__("../../../../../src/app/user/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_model__ = __webpack_require__("../../../../../src/app/user/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_model__ = __webpack_require__("../../../../../src/app/user/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentsComponent = (function () {
    function CommentsComponent(commentsService, userService, router, route) {
        this.commentsService = commentsService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.defaultComment = 'Add a comment';
    }
    ;
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentsService.getComments()
            .subscribe(function (comments) {
            _this.comments = comments;
            _this.comments.forEach(function (comment) {
                comment.dateResult = _this.calculateDateDiffrences(new Date(comment.date));
            });
            _this.comments.sort(function (a, b) {
                var key1 = new Date(a.date);
                var key2 = new Date(b.date);
                if (key1 < key2) {
                    return -1;
                }
                else if (key1 == key2) {
                    return 0;
                }
                else {
                    return 1;
                }
            });
        });
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.sampleUser = users[Math.floor(Math.random() * 8)];
        });
    };
    CommentsComponent.prototype.onAddComment = function () {
        var now = new Date();
        this.commentsService.addComment(new __WEBPACK_IMPORTED_MODULE_2__comment_model__["a" /* Comment */](this.sampleUser, now, this.defaultComment, this.calculateDateDiffrences(now)), this.comments);
        this.defaultComment = 'Add a comment';
    };
    CommentsComponent.prototype.onEnterPressed = function (event) {
        if (event.keyCode == 13) {
            this.onAddComment();
        }
    };
    CommentsComponent.prototype.clearDefault = function () {
        if (this.defaultComment == 'Add a comment') {
            this.defaultComment = '';
        }
    };
    CommentsComponent.prototype.calculateDateDiffrences = function (date) {
        var now = new Date();
        var timeDiff = Math.abs(now.getTime() - date.getTime());
        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        if (diffDays < 1) {
            diffDays = Math.floor(timeDiff / (1000 * 3600));
            if (diffDays < 1) {
                diffDays = Math.floor(timeDiff / (1000 * 60));
                return diffDays + ' m';
            }
            return diffDays + ' h';
        }
        else {
            return diffDays + ' d';
        }
    };
    CommentsComponent.prototype.navigateToAuthor = function (id) {
        this.router.navigate(['/user-profile/', id]);
    };
    return CommentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('commentedUser'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_model__["a" /* User */]) === "function" && _a || Object)
], CommentsComponent.prototype, "commentedUser", void 0);
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/user/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comments_service__["a" /* CommentsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], CommentsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/comments/date-difference.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateDifferencePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateDifferencePipe = (function () {
    function DateDifferencePipe() {
    }
    DateDifferencePipe.prototype.transform = function (value) {
        var date1 = new Date();
        var timeDiff = Math.abs(date1.getTime() - value.getTime());
        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        if (diffDays < 1) {
            diffDays = Math.floor(timeDiff / (1000 * 3600));
            if (diffDays < 1) {
                diffDays = Math.floor(timeDiff / (1000 * 60));
                return diffDays + ' m';
            }
            return diffDays + ' h';
        }
        else {
            return diffDays + ' d';
        }
    };
    return DateDifferencePipe;
}());
DateDifferencePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'dateDifference'
    })
], DateDifferencePipe);

//# sourceMappingURL=date-difference.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/user/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataStorageService = (function () {
    function DataStorageService(http) {
        this.http = http;
    }
    DataStorageService.prototype.getAll = function () {
        this.http.get("./assets/comments.json")
            .subscribe(function (response) {
            var commentsArray = response.json();
        });
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataStorageService);

var _a;
//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n\r\n\r\n\r\n.shareIcon{\r\n  position: relative;\r\n  float: right;\r\n  color:#FFA640;\r\n  font-size: 20px;\r\n  margin-top:2px;\r\n  margin-right: 5px;\r\n  cursor:pointer;\r\n\r\n}\r\n.shareIcon:hover{\r\n  color: #ff600f;\r\n}\r\n\r\n.heartIcon{\r\n  height:15px;\r\n  width: 15px;\r\n  margin-left:10px;\r\n  cursor: pointer;\r\n}\r\n.heartIcon:hover{\r\n  height:17px;\r\n  width: 17px;\r\n  margin-left:8px;\r\n}\r\n.profile_image {\r\n  height: 120px;\r\n  width: 120px;\r\n  border-radius: 50%;\r\n  display: block;\r\n  margin: -160px auto 0;\r\n\r\n}\r\n\r\n.profile-container {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n\r\n}\r\n\r\nh2,\r\nh3 {\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\nh2 {\r\n  color: #002C71;\r\n  margin-top: 40px;\r\n}\r\n\r\nh3 {\r\n  color: #8298B9;\r\n}\r\n\r\n.likeIcon {\r\n  margin-left:15px;\r\n  font-size:17px;\r\n  color: #808080;\r\n}\r\n.unlike{\r\n  font-size:12px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.profile-info {\r\n  background-color: #fff;\r\n  height: 250px;\r\n  margin-top: -40px;\r\n  padding: 5px;\r\n  border-radius: 7px;\r\n  box-shadow: 1px 1px 4px 1px rgba(128, 128, 128, 0.49);\r\n}\r\n\r\n.profile-info:nth-of-type(2) {\r\n  height: auto;\r\n\r\n  margin-top: 20px;\r\n  padding-top: 40px;\r\n  -webkit-animation:fadeIn 2s;\r\n          animation:fadeIn 2s;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n  from {opacity:0;}\r\n  to {opacity: 1;}\r\n}\r\n@keyframes fadeIn {\r\n  from {opacity:0;}\r\n  to {opacity: 1;}\r\n}\r\n.row {\r\n  margin-top: 40px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n.col {\r\n  border-right: 1px solid rgba(128, 128, 128, 0.27);\r\n  padding-right: 30px;\r\n}\r\n\r\n.col:last-of-type {\r\n  border: none;\r\n}\r\n\r\n.value {\r\n  color: #FFA640;\r\n  font-size: 24px;\r\n}\r\n.value:hover {\r\n  color: #ff8f2f;\r\n}\r\n.title {\r\n  color: #343E00;\r\n  font-size: 10px;\r\n}\r\n\r\n.btn-follow\r\n{\r\n    display: block;\r\n    width: 80%;\r\n    margin: 20px auto;\r\n    padding: 13px;\r\n    border-radius: 100px;\r\n    background-color: #FFA640;\r\n    outline: none;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    letter-spacing: 4.2px;\r\n    color: #fff;\r\n  cursor: pointer;\r\n  }\r\n.btn-follow:hover{\r\n\r\n  box-shadow: 1px 1px 3px 1px grey;\r\n}\r\n.comments-info {\r\n  font-size: 14px;\r\n  color: #FFA640;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.comments-info:hover{\r\n  color: #ff8f2f;\r\n}\r\n.modal{\r\n  display: none;\r\n  position: absolute;\r\n  top:0;\r\n  right:0;\r\n  bottom:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  background-color: rgba(255, 255, 255, 0.83);\r\n  z-index: 1000;\r\n  color: #000;\r\n}\r\n.modal-body{\r\n  background-color: transparent;\r\n  height:auto;\r\n  width:200px;\r\n  position: relative;\r\n  margin:10% auto;\r\n  padding:5px;\r\n  z-index: 1100;\r\n\r\n}\r\n#closeModalBtn{\r\n  float:right;\r\n  z-index: 1200;\r\n  display: block;\r\n  width: 25%;\r\n  margin: 80px 100px;\r\n  padding: 13px;\r\n  border-radius: 100px;\r\n  background-color: #FFA640;\r\n  outline: none;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1.2px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n\r\n  .profile-container{\r\n    margin-top: -120px;\r\n  }\r\n\r\n\r\n  .profile_image {\r\n    position: absolute;\r\n    height:100px;\r\n    width:100px;\r\n    margin-top: 30px;\r\n    margin-left: 6%;\r\n\r\n  }\r\n\r\n  .row {\r\n    margin-top: 40px;\r\n    display: block;\r\n    margin-left:15%;\r\n\r\n  }\r\n.col{\r\n  float:left;\r\n  margin-top:10px;\r\n  padding: 0 30px;\r\n}\r\n\r\n  .btn-follow {\r\n    display: inline-block;\r\n    width: 18%;\r\n    margin-top: 15px;\r\n\r\n  }\r\n  #closeModalBtn{\r\n\r\n\r\n    width: 12%;\r\n\r\n\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"heading\"></div>\r\n  <div class=\"profile-container\">\r\n\r\n    <img class=\"profile_image\" [src]=\"user.image\">\r\n    <div class=\"profile-info\">\r\n      <img class=\"shareIcon\" src=\"../../../assets/icons/share.svg\" (click)=\"shareWebsite()\">\r\n      <h2>{{user.name}}<img class=\"heartIcon\" src=\"../../../assets/heart.png\"\r\n                            [style.visibility]=\"isLiked? 'hidden':'visible'\" (click)=\"toggleLike()\"><span class=\"unlike\"\r\n                                                                                                          [style.visibility]=\"isLiked? 'visible':'hidden'\"\r\n                                                                                                          (click)=\"toggleLike()\">Don't like</span>\r\n      </h2>\r\n      <h3>{{user.city}}, {{user.country}}</h3>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"value\">{{user.likes}}</div>\r\n          <div class=\"title\">Likes</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"value\">{{user.following}}</div>\r\n          <div class=\"title\">Following</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"value\">{{user.followers}}</div>\r\n          <div class=\"title\">Followers</div>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn-follow\" type=\"button\" (click)=\"followUser(followState)\"> {{followState}}</button>\r\n    </div>\r\n    <div class=\"profile-info\">\r\n      <div class=\"comments-info\" (click)=\"ToggleComments()\">\r\n        <u> {{commentOption}} ({{user.comments}}) </u>\r\n\r\n      </div>\r\n      <app-comments *ngIf=\"commentsToDisplay\" [commentedUser]=\"user\"></app-comments>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal\" #myModal>\r\n    <button type=\"button\" class=\"btn btn-default\" id=\"closeModalBtn\" (click)=\"closeModal()\">Close</button>\r\n    <div class=\"modal-body\" [innerHtml]=\"htmlToAdd\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_service__ = __webpack_require__("../../../../../src/app/user/comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = (function () {
    function UserProfileComponent(userService, router, route, commentsService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.commentsService = commentsService;
        this.users = [];
        this.htmlToAdd = '';
        this.isLiked = false;
        this.commentOption = 'hide comments';
        this.commentsToDisplay = true;
        this.followState = 'follow';
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params
            .subscribe(function (params) {
            _this.currentId = params['id'];
            console.log(_this.currentId);
            _this.user = _this.users[_this.currentId];
        });
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.user = _this.users[_this.currentId];
        });
        this.sub1 = this.commentsService.commentsNumberChanged
            .subscribe(function (number) {
            _this.user.comments += number;
        });
    };
    UserProfileComponent.prototype.toggleLike = function () {
        if (!this.isLiked) {
            this.user.likes++;
        }
        else {
            this.user.likes--;
        }
        this.isLiked = !this.isLiked;
    };
    UserProfileComponent.prototype.shareWebsite = function () {
        this.currentRoute = this.router.url;
        this.el.nativeElement.style.display = 'block';
        this.htmlToAdd = '<h4>Current website url is:<br><br> ' + window.location.origin + this.currentRoute + '</h4>';
    };
    UserProfileComponent.prototype.followUser = function (state) {
        if (state == 'follow') {
            this.user.followers++;
            this.followState = 'unfollow';
        }
        else {
            this.user.followers--;
            this.followState = 'follow';
        }
    };
    UserProfileComponent.prototype.closeModal = function () {
        this.el.nativeElement.style.display = 'none';
    };
    UserProfileComponent.prototype.ToggleComments = function () {
        if (this.commentsToDisplay) {
            this.commentOption = 'show comments';
        }
        else {
            this.commentOption = 'hide comments';
        }
        this.commentsToDisplay = !this.commentsToDisplay;
    };
    return UserProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], UserProfileComponent.prototype, "el", void 0);
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__comments_service__["a" /* CommentsService */]) === "function" && _e || Object])
], UserProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments_component__ = __webpack_require__("../../../../../src/app/user/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_date_difference_pipe__ = __webpack_require__("../../../../../src/app/user/comments/date-difference.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserRoutes = [
    { path: '', redirectTo: 'user-profile/0', pathMatch: 'full' },
    { path: 'user-profile/:id', component: __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__["a" /* UserProfileComponent */] }
];
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_5__comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__comments_date_difference_pipe__["a" /* DateDifferencePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(UserRoutes)
        ],
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get("./assets/users.json")
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.addUser = function (user) {
        this.http.put("./assets/users.json", user);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/man.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "man.ee74f548eb288c6f2669.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map