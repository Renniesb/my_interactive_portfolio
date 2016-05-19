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
                function Project(title, link, technologies, votes) {
                    this.title = title;
                    this.link = link;
                    this.technologies = technologies;
                    this.votes = votes || 0;
                }
                return Project;
            }());
            ProjectApp = (function () {
                function ProjectApp() {
                    this.projects = [
                        new Project('My Freelance website', 'www.renniewebcreations.com', ['PHP', 'Wordpress', 'Bootstrap', 'HTML5', 'CSS3']),
                        new Project('Vocab Trainer Application', 'http://renniesb.github.io/vocab_list/index.html#/', ['Angularjs', 'Javascript', 'Bootstrap', 'HTML5', 'CSS3'])
                    ];
                }
                ProjectApp = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        host: { class: 'row' },
                        templateUrl: 'project.html'
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