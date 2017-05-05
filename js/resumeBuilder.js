/*bio*/
var bio = {
    "name": "Lidian Vilazio",
    "role": "Web Developer",
    "contacts": {
        "mobile": "516 754 1119",
        "email": "lidianvilazio@hotmail.com",
        "github": "@lidianvilazio",
        "location": "New York, USA"
    },
    "welcomeMessage": "Bem vindo ao meu site! Aqui você encontrará minhas informações!!!",
    "skills": [
        "Brazilian Portuguese Speaker", "English Speaker", "JavaScript", "HTML5", "CSS3", "Basic Programming Knowledge"
    ],
    "biopic": "images/eu-foto.jpg",
};
//bio.display();
//bio.skills.display();

/*Education*/

var education = {
    "schools": [{
        "name": "Universidade Estácio de Sá",
        "location": "Rio de janeiro",
        "degree": "BA",
        "majors": ["Sistemas de Informação"],
        "dates": "2012 - 2017",
        "url": "http://portal.estacio.br/"
    }, {
        "name": "Coming soon",
        "location": "Coming soon",
        "degree": "Coming soon",
        "majors": ["Coming soon"],
        "dates": "Coming soon",
        "url": "Coming soon"
    }],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "in progress",
        "url": "http: //www.udacity.com"
    }, {
        "title": "Intro to programming Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "http: //www.udacity.com"
    }]
};

//education.display();

/*Work*/

var work = {
    "jobs": [{
        "employer": "Banco Itaú SA",
        "title": "Intern",
        "location": "Rio de janeiro",
        "dates": "November 2006 - May 2015",
        "description": "Serviços bancários, venda de produtos e serviços bancários."
    }, {
        "employer": "coming soon",
        "title": "coming soon",
        "location": "coming soon",
        "dates": "coming soon",
        "description": "coming soon"
    }]
};
//work.display();

/*Projects*/

var projects = {
    "projects": [{
        "title": "My resume",
        "dates": "2017",
        "description": "Meu curriculo web!",
        "images": ["images/resume.png"]
    }]
};
//projects.display();

var data = '%data%';


/*bio*/
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace(data, bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var welcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#topContacts").append(welcomeMessage);

    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedPic);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};



/*Work*/
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedEmployerTittle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTittle);

        var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

/*Projects*/

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
    }

    for (var i = 0; i < projects.projects.length; i++) {
        var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images);
        $(".project-entry:last").append(formattedImage);
    }
};


/*Education*/
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("#", education.schools[i].url).replace(data, education.schools[i].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajors = HTMLschoolMajor.replace(data, education.schools[i].majors);
        $(".education-entry:last").append(formattedMajors);
    }

    $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {

        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url).replace(data, education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDates);
    }
};


// displaying...
bio.display();
education.display();
work.display();
projects.display();


$("#mapDiv").append(googleMap);
