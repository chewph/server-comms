"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var hero_data_1 = require("./hero-data");
var default_request_options_service_1 = require("./default-request-options.service");
var app_component_1 = require("./app.component");
var hero_list_component_1 = require("./toh/hero-list.component");
var hero_list_component_promise_1 = require("./toh/hero-list.component.promise");
var wiki_component_1 = require("./wiki/wiki.component");
var wiki_smart_component_1 = require("./wiki/wiki-smart.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(hero_data_1.HeroData)
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_list_component_1.HeroListComponent,
            hero_list_component_promise_1.HeroListPromiseComponent,
            wiki_component_1.WikiComponent,
            wiki_smart_component_1.WikiSmartComponent
        ],
        providers: [default_request_options_service_1.requestOptionsProvider],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map