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

	<div class="row" *ngFor="let project of projects" >
			<div class="col-sm-9 col-sm-offset-1 card">
			  <img src="http://placehold.it/350x150" class="card-img-top pull-xs-left" data-src="..." alt="Card image cap">
				  <div class="card-block  text-xs-center">
					<h4 class="card-title">Project Name: {{project.title}} </h4>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. This is alot of text. It adds length to the paragraph. It adds bulk. I had to do it. It was very necessary for this example</p>
					<a href="{{project.link}}" class="btn btn-primary">See live site</a>
				  </div>
			</div>
		</div>
	`
})

class ProjectApp {
	projects: Project[];
	constructor(){
		this.projects = [
			new Project('Project 1','www.renniewebcreations.com')
		];
	}
}

bootstrap(ProjectApp);