System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var Project, ProjectApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Project = (function () {
                function Project(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                return Project;
            }());
            ProjectApp = (function () {
                function ProjectApp() {
                    this.projects = [
                        new Project('My Website', 'www.renniewebcreations.com')
                    ];
                }
                ProjectApp = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        host: { class: 'row' },
                        template: "\n\n\t<div class=\"col-sm-12\" *ngFor=\"let project of projects\" >\n\t\t<h2>Name: {{project.title}} </h2>\n\t\t<h2>Link: {{project.link}}</h2>\n\t\t<h2>Description:</h2>\n\t</div>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectApp);
                return ProjectApp;
            }());
            browser_1.bootstrap(ProjectApp);
        }
    }
});
//# sourceMappingURL=app.js.map