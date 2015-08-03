(function () {
    'use strict';

    /*
        Create a new angular app for the resume app.
    */
    angular.module('resumeBuilderApp', []).
        controller('ResumeBuilderController', ['$http', resumeBuilderController]);

    function resumeBuilderController($http) {
        // store a reference to the controller view model
        var controller = this;

        // Define bio object
        controller.bio = {
            'name': 'Mark Thompson',
            'role': 'Front End Engineer',
            'welcomeMessage': 'Build. Create. Inspire.',
            'aboutMe': 'Professional Software Engineer with a passion for web technologies. I enjoy making those around me better. I look to find solutions that are best for the team and organization. I\'m most interested in learning fron those around me as well as teaching to share what I\'ve learned.',
            'biopic': 'images/headshot.jpg',
            'location': 'Chicagoland Area',
            'contacts': {
                'email': 'mark.thompson19 at google mail',
                'github': 'http://github.com/markitomagic',
                'linkedin': 'https://www.linkedin.com/in/markallenthompson'
            },
            'skills': {
                'languages' : [
                    {
                        'name': 'JavaScript',
                        'level': 8
                    },
                    {
                        'name': 'AngularJS',
                        'level': 8
                    },
                    {
                        'name': 'Software Development',
                        'level': 9
                    },
                    {
                        'name': 'CSS',
                        'level': 7
                    },
                    {
                        'name': 'HTML',
                        'level': 7
                    },
                    {
                        'name': 'Java',
                        'level': 7
                    },
                    {
                        'name': 'Spring',
                        'level': 6
                    },
                    {
                        'name': 'Ruby',
                        'level': 2
                    },
                    {
                        'name': 'C/C++',
                        'level': 3
                    },
                    {
                        'name': 'SQL',
                        'level': 7
                    }
                ],
                'tools': [
                    {
                        'name': 'Git',
                        'level': 5
                    },
                    {
                        'name': 'Mercurial',
                        'level': 6
                    },
                    {
                        'name': 'Grunt',
                        'level': 8
                    },
                    {
                        'name': 'Bower',
                        'level': 7
                    },
                    {
                        'name': 'Jasmine',
                        'level': 8
                    },
                    {
                        'name': 'Atom Text Editor',
                        'level': 5
                    },
                    {
                        'name': 'MYSQL',
                        'level': 5
                    },
                    {
                        'name': 'Oracle DB Server',
                        'level': 3
                    }
                ]
            }
        };

        // Define the work history object
        controller.work = {
            'jobs': [
                {
                    'title': 'Lead Developer',
                    'employer': 'Accertify',
                    'description': 'Developer of AngularJS and JavaScript applications.',
                    'location': 'Chicago, IL',
                    'dates': {
                        'start': 'Jan 2015',
                        'end': 'Present'
                    }
                },
                {
                    'title': 'Senior Software Engineer I',
                    'employer': 'GoHealth',
                    'description': 'Promoted to Sr. Software Engineer and Team Lead. Mentored and promoted growth in Jr developers. Software development using Java, JavaScript, Spring, JMS and Apache Camel.',
                    'location': 'Chicago, IL',
                    'dates': {
                        'start': 'April 2013',
                        'end': 'Dec 2014'
                    }
                },
                {
                    'title': 'Consultant :: Software Engineer',
                    'employer': 'nVisia',
                    'description': 'Promoted to Software Engineer. Worked as a consultant for large organizations to help migrate old systems to newer technologies.',
                    'location': 'Chicago, IL',
                    'dates': {
                        'start': 'April 2013',
                        'end': 'Dec 2014'
                    }
                }
            ]
        };

        // Define the education object
        controller.education = {
            'schools': [
                {
                    'name': 'UIC',
                    'location': 'Chicago, IL',
                    'dates': {
                        'start': 'Sept 2003',
                        'end': 'July 2006'
                    },
                    'majors': [
                        'Computer Science',
                        'Learning Technologies'
                    ],
                    'minors': [],
                    'url': 'https://www.uic.edu/'
                },
                {
                    'name': 'Lake Forest College',
                    'location': 'Lake Forest, IL',
                    'dates': {
                        'start': 'Sept 1999',
                        'end': 'July 2003'
                    },
                    'majors': [
                        'Computer Science'
                    ],
                    'minors': [
                        'Mathematics'
                    ],
                    'url': 'https://www.lakeforest.edu'
                }
            ],
            'onlineCourses': [
                {
                    'title': 'Front End Developer Nanodegree',
                    'school': 'Udacity',
                    'dates': {
                        'start': 'June 2015',
                        'end': 'Present'
                    },
                    'url': 'http://www.udacity.com'
                }
            ]
        };

        // Define the projects object
        controller.projects = {
            'projects': [
                {
                    'title': 'Online Resume',
                    'description': 'Udactiy Nanodegree resume project hosted on GitHub.',
                    'dates': {
                        'start': 'August 2015',
                        'end': 'August 2015'
                    },
                    'url': 'https://github.com/MarkitoMagic/frontend-nanodegree-resume',
                    'images': [
                        'images/resume-project.png',
                    ]
                }
            ]
        };
    }
})();
