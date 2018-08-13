var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("app/app.component", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent, Allumettes;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Jeux des allumettes';
                    this.token = [];
                    this.statusGame = 'unstarted';
                    this.statusPlayer = 'computer';
                    this.init();
                }
                AppComponent.prototype.init = function () {
                    this.token = [];
                    this.nbToken = Math.round(Math.random() * 10) + 12;
                    for (var i = 0; i < this.nbToken; i++) {
                        this.token.push(new Allumettes());
                    }
                };
                AppComponent.prototype.start = function () {
                    this.statusGame = 'started';
                    if (this.statusPlayer === 'computer') {
                        this.play();
                    }
                };
                AppComponent.prototype.play = function () {
                    switch (this.nbToken) {
                        case 0:
                            break;
                        case 1:
                        case 4:
                        case 5:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            this.take(1, 'computer');
                            break;
                        case 2:
                        case 6:
                            this.take(2, 'computer');
                            break;
                        default:
                            this.take(3, 'computer');
                            break;
                    }
                };
                AppComponent.prototype.userChoose = function (nbToken) {
                    var _this = this;
                    this.take(nbToken, 'user');
                    setTimeout(function () { _this.play(); }, 1500);
                };
                AppComponent.prototype.take = function (nbToken, statusPlayer) {
                    var _this = this;
                    (this.statusPlayer === 'computer') ? setTimeout(function () { _this.statusPlayer = 'user'; }, 1500) : this.statusPlayer = 'computer';
                    this.nbToken -= nbToken;
                    if (this.nbToken <= 0) {
                        alert(statusPlayer + ' win !');
                        setTimeout(function () { _this.init(); }, 500);
                    }
                    for (var i = 0; i < nbToken; i++) {
                        var len = this.nbToken - 1 + nbToken;
                        this.token[len - i].hide();
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.css']
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Allumettes = /** @class */ (function () {
                function Allumettes() {
                    this.status = 'visible';
                    this.cssClass = 'allumette fixed';
                }
                Allumettes.prototype.hide = function () {
                    var _this = this;
                    this.cssClass = 'allumette animated slideOutDown';
                    setTimeout(function () { _this.status = 'hidden'; }, 1200);
                };
                return Allumettes;
            }());
        }
    };
});
System.register("app/app.module", ["@angular/platform-browser", "@angular/core", "app/app.component"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var platform_browser_1, core_2, app_component_1, AppModule;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_2.NgModule({
                        declarations: [
                            app_component_1.AppComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule
                        ],
                        providers: [],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_2("AppModule", AppModule);
        }
    };
});
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
System.register("environments/environment", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var environment;
    return {
        setters: [],
        execute: function () {// This file can be replaced during build by using the `fileReplacements` array.
            // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            exports_3("environment", environment = {
                production: false
            });
            /*
             * In development mode, for easier debugging, you can ignore zone related error
             * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
             * below file. Don't forget to comment it out in production mode
             * because it will have a performance impact when errors are thrown
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
        }
    };
});
System.register("main", ["@angular/core", "@angular/platform-browser-dynamic", "app/app.module", "environments/environment"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, platform_browser_dynamic_1, app_module_1, environment_1;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }
        ],
        execute: function () {
            if (environment_1.environment.production) {
                core_3.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.log(err); });
        }
    };
});
