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
                        new Project('Project 1', 'www.renniewebcreations.com'),
                        new Project('Project 2', 'www.google.com')
                    ];
                }
                ProjectApp = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        host: { class: 'row' },
                        template: "\n\n\t<div *ngFor=\"let project of projects\" class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-5 col-sm-offset-1 card\">\n\t\t\t  <img src=\"http://placehold.it/350x150\" class=\"card-img-top img-fluid img-rounded center-block\" data-src=\"...\" alt=\"Card image cap\">\n\t\t\t\t  <div class=\"card-block  text-xs-center\">\n\t\t\t\t\t<h4 class=\"card-title\">Project Name: {{project.title}} </h4>\n\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content. This is alot of text. It adds length to the paragraph. It adds bulk. I had to do it. It was very necessary for this example</p>\n\t\t\t\t\t<a href=\"{{project.link}}\" class=\"btn btn-primary\">See live site</a>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"
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