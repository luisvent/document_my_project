import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tech-picker',
  templateUrl: './tech-picker.component.html',
  styleUrls: ['./tech-picker.component.css']
})
export class TechPickerComponent implements OnInit{

  techForm: FormGroup = new FormGroup({});

  developmentTechnologies = [
    // Languages
    { name: 'JavaScript', type: 'javascript' },
    { name: 'Python', type: 'python' },
    { name: 'Java', type: 'java' },
    { name: 'Ruby', type: 'ruby' },
    { name: 'HTML', type: 'html' },
    { name: 'CSS', type: 'css' },
    { name: 'PHP', type: 'php' },
    { name: 'Swift', type: 'swift' },
    { name: 'Kotlin', type: 'kotlin' },
    { name: 'C#', type: 'csharp' },
    { name: 'TypeScript', type: 'typescript' },
    { name: 'Go', type: 'go' },
    { name: 'Rust', type: 'rust' },
    { name: 'Scala', type: 'scala' },
    { name: 'Perl', type: 'perl' },
    { name: 'SQL', type: 'sql' },
    { name: 'Objective-C', type: 'objectivec' },
    { name: 'C++', type: 'cpp' },
    { name: 'R', type: 'r' },
    { name: 'Shell', type: 'shell' },
    { name: 'Assembly', type: 'assembly' },
    { name: 'Dart', type: 'dart' },
    { name: 'Lua', type: 'lua' },
    { name: 'Haskell', type: 'haskell' },

    // Frontend Frameworks
    { name: 'React', type: 'react' },
    { name: 'Angular', type: 'angular' },
    { name: 'Vue.js', type: 'vue' },
    { name: 'Ember.js', type: 'ember' },
    { name: 'Svelte', type: 'svelte' },
    { name: 'Backbone.js', type: 'backbone' },
    { name: 'Meteor', type: 'meteor' },
    { name: 'Astro', type: 'astro' },
    { name: 'Next.js', type: 'nextjs' },

    // Backend Frameworks
    { name: 'Node.js', type: 'nodejs' },
    { name: 'Express.js', type: 'express' },
    { name: 'Django', type: 'django' },
    { name: 'Flask', type: 'flask' },
    { name: 'Spring Boot', type: 'spring' },
    { name: 'Ruby on Rails', type: 'rubyonrails' },
    { name: 'Laravel', type: 'laravel' },
    { name: 'ASP.NET', type: 'aspnet' },
    { name: 'NestJS', type: 'nestjs' },

    // Frontend Tools
    { name: 'Webpack', type: 'webpack' },
    { name: 'vite', type: 'vite' },
    { name: 'Babel', type: 'babel' },
    { name: 'Sass', type: 'sass' },
    { name: 'LESS', type: 'less' },
    { name: 'PostCSS', type: 'postcss' },
    { name: 'ESLint', type: 'eslint' },
    { name: 'Prettier', type: 'prettier' },
    { name: 'Jest', type: 'jest' },

    // Backend Tools
    { name: 'Docker', type: 'docker' },
    { name: 'Kubernetes', type: 'kubernetes' },
    { name: 'Nginx', type: 'nginx' },
    { name: 'Apache', type: 'apache' },
    { name: 'Postman', type: 'postman' },
    { name: 'Git', type: 'git' },
    { name: 'GitHub', type: 'github' },
    { name: 'GitLab', type: 'gitlab' },
  ];

  constructor() {
  }

  ngOnInit(): void {

    let controls: { [key: string]: FormControl } = {};
    this.developmentTechnologies.map(tech => {
      controls[tech.name] = new FormControl('');
    });

    this.techForm = new FormGroup(controls);

    }
}
