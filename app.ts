import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

class Project {
  title: string;
  link: string;
  technologies: Array<string>;
  votes: number;

  constructor(title: string, link: string, technologies: Array<string> , votes?: number) {
    this.title = title;
    this.link = link;
    this.technologies = technologies;
    this.votes = votes || 0;
  }

}

@Component({
	selector: 'projects',
	host: {class: 'row'},
	templateUrl: 'project.html'
})

class ProjectApp {
	projects: Project[];
	constructor(){
		this.projects = [
			new Project('My Freelance website','www.renniewebcreations.com', ['PHP', 'Wordpress','Bootstrap','HTML5', 'CSS3']),
			new Project('Vocab Trainer Application','http://renniesb.github.io/vocab_list/index.html#/', ['Angularjs','Javascript','Bootstrap','HTML5', 'CSS3'])

		];
	}
}

bootstrap(ProjectApp);