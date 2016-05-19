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
	template: `

	<div *ngFor="let project of projects" class="container">
		<div class="row">
			<div class="col-sm-4 col-sm-offset-1 card">
			  <img src="http://placehold.it/350x150" class="card-img-top img-fluid img-rounded center-block" data-src="..." alt="Card image cap">
				  <div class="card-block  text-xs-center">
					<h4 class="card-title">Project Name: {{project.title}} </h4>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. This is alot of text. It adds length to the paragraph. It adds bulk. I had to do it. It was very necessary for this example</p>
					<a href="{{project.link}}" class="btn btn-primary">See live site</a>
				  </div>
			</div>
			<div class="col-sm-6 text-xs-center">
				<h2 >Technology used</h2>
				<p>{{project.technologies}}</p>
			</div>
		</div>
	</div>
	`
})

class ProjectApp {
	projects: Project[];
	constructor(){
		this.projects = [
			new Project('Project 1','www.renniewebcreations.com', ['angular', 'html', 'css']),
			new Project('Project 1','www.renniewebcreations.com', ['bootstrap', 'html', 'css']),
		];
	}
}

bootstrap(ProjectApp);