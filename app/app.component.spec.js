var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("app.component", ["@angular/core"], function (exports_1, context_1) {
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
System.register("app.component.spec", ["@angular/core/testing", "app.component"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var testing_1, app_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            describe('AppComponent', function () {
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [
                            app_component_1.AppComponent
                        ]
                    }).compileComponents();
                }));
                it('should create the app', testing_1.async(function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    var app = fixture.debugElement.componentInstance;
                    expect(app).toBeTruthy();
                }));
                it("should have as title 'ametix'", testing_1.async(function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    var app = fixture.debugElement.componentInstance;
                    expect(app.title).toEqual('ametix');
                }));
                it('should render title in a h1 tag', testing_1.async(function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    fixture.detectChanges();
                    var compiled = fixture.debugElement.nativeElement;
                    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ametix!');
                }));
            });
        }
    };
});
