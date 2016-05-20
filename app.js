System.register(['angular2/platform/browser', 'angular2/core', 'zone'], function(exports_1, context_1) {
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
            },
            function (_1) {}],
        execute: function() {
            Project = (function () {
                function Project(title, link, technologies, votes) {
                    this.name = name;
                    this.link = link;
                    this.technologies = technologies;
                    this.votes = votes || 0;
                }
                return Project;
            }());
            ProjectApp = (function () {
                function ProjectApp() {
                    this.technologyList = [
                        {
                            name: "Javascript",
                            checked: true
                        }, {
                            name: "PHP",
                            checked: true
                        },
                        {
                            name: "HTML5",
                            checked: true
                        },
                        {
                            name: "CSS3",
                            checked: true
                        },
                        {
                            name: "Bootstrap",
                            checked: true
                        },
                        {
                            name: "Wordpress",
                            checked: true
                        },
                        {
                            name: "AngularJS",
                            checked: true
                        },
                        {
                            name: "BackboneJS",
                            checked: true
                        },
                        {
                            name: "KnockoutJS",
                            checked: true
                        },
                        {
                            name: "Photoshop",
                            checked: true
                        }
                    ];
                    /*projects that match the selected tech*/
                    this.matchedProjects = [];
                    this.selectedTechnology = [];
                    this.updateSelectedList();
                    this.projects = [
                        new Project('My Freelance website', 'www.renniewebcreations.com', ['PHP', 'Wordpress', 'Bootstrap', 'HTML5', 'CSS3']),
                        new Project('Vocab Trainer Application', 'http://renniesb.github.io/vocab_list/index.html#/', ['Angularjs', 'Javascript', 'Bootstrap', 'HTML5', 'CSS3'])
                    ];
                }
                ProjectApp.prototype.onInteractionEvent = function (event) {
                    var item = this.technologyList.find(function (val) { return val.name === event.target.value; });
                    item.checked = !item.checked;
                    this.updateSelectedList();
                };
                ProjectApp.prototype.updateSelectedList = function () {
                    var _this = this;
                    var checkedNames = this.technologyList.filter(function (val) { return val.checked === true; })
                        .map(function (n) { return n.name; });
                    bin.log("filered results: " + checkedNames);
                    this.matchedProjects = this.projects.filter(function (project) {
                        return _this.containsAny(project.technologies, checkedNames);
                    });
                    bin.log("matched projects: " + this.matchedProjects.map(function (proj) { return proj.name; }));
                };
                ProjectApp.prototype.containsAny = function (arr1, arr2) {
                    for (var i in arr1) {
                        if (arr2.indexOf(arr1[i]) > -1) {
                            return true;
                        }
                    }
                    return false;
                };
                ;
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