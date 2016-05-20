import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import 'zone';
import { contains, filter} from 'lodash'


class Project {
  name: string;
  link: string;
  technologies: Array<string>;
  votes: number;

  constructor(title: string, link: string, technologies: Array<string> , votes?: number) {
    this.name = name;
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
	technologyList: Array<any> = [
		{
			name:"Javascript",
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
	projects: Project[];
	constructor(){
		this.updateSelectedList();
		this.projects = [
			new Project('My Freelance website','www.renniewebcreations.com', ['PHP', 'Wordpress','Bootstrap','HTML5', 'CSS3']),
			new Project('Vocab Trainer Application','http://renniesb.github.io/vocab_list/index.html#/', ['Angularjs','Javascript','Bootstrap','HTML5', 'CSS3'])

		];
	}

	/*projects that match the selected tech*/
	matchedProjects: Array<any> = []

	selectedTechnology: Array<string> = [];

	onInteractionEvent(event: Event) {
    var item = this.technologyList.find(
      (val) => val.name === event.target.value
    );

    item.checked = !item.checked;
    this.updateSelectedList();
  }

  updateSelectedList() {
    let checkedNames =
        this.technologyList.filter( (val) => val.checked === true)
                  .map(n => n.name);
    bin.log("filered results: " + checkedNames);

    this.matchedProjects = this.projects.filter(project => {
        return this.containsAny(project.technologies, checkedNames)
    });

    bin.log("matched projects: " + this.matchedProjects.map(proj => proj.name));

  }


  containsAny(arr1, arr2) {
    for(var i in arr1) {
        if(arr2.indexOf( arr1[i] ) > -1){
            return true;
        }
    }
    return false;
};


}

bootstrap(ProjectApp);