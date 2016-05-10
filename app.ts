import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

class Project {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

}

@Component({
	selector: 'projects',
	host: {class: 'row'},
	template: `

	<div class="col-sm-12" *ngFor="let project of projects" >
		<h2>Name: {{project.title}} </h2>
		<h2>Link: {{project.link}}</h2>
		<h2>Description:</h2>
	</div>

	`
})

class ProjectApp {
	projects: Project[];
	constructor(){
		this.projects = [
			new Project('My Website','www.renniewebcreations.com')
		];
	}
}

bootstrap(ProjectApp);