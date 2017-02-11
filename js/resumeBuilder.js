/* bio, work, education, and project data */
var bio = {
	"name" : "Ryan Minniear",
	"role" : "Software Engineer",
	"welcomeMessage" : "Welcome!",
	"biopic" : "images/ryan.jpg",
	"contact" : {
		"mobile" : "916-239-8602",
		"email" : "rjminniear@gmail.com",
		"github" : "dosaku",
		"twitter" : "",
		"blog" : "",
		"location" : "890 Bullion Ln, Folsom CA 95630"
	},
	"skills": ["Java", "Python", "C", "Git/GitHub"]
}

var work = {
	"jobs" : [
		{
			"employer" : "IBM",
			"title" : "Software Engineer",
			"location" : "Folsom",
			"dates": "October 2006 - May 2014",
			"description" : "Software Development work across multiple products and teams"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "CIMS/TUAM",
			"dates" : "",
			"description" : "Usage and Accounting Manager",
			"images" : []
		},
		{
			"title" : "IA",
			"dates" : "",
			"description" : "Information Archive",
			"images" : []
		},
		{
			"title" : "TSM",
			"dates" : "",
			"description" : "TSM Server, Backup and Recovery",
			"images" : []
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "UC Davis",
			"location" : "Davis, CA",
			"degree" : "Bachelor of Science",
			"dates" : "2002-2006",
			"url": "https://www.ucdavis.edu/",
			"majors" : ["Computer Science"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "Feb 2017",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title" : "Git and GitHub",
			"school" : "Udacity",
			"dates" : "Feb 2017",
			"url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		}
	]
}

/* Return list of HTML-formatted skills */
function getFormattedSkills() {
	return bio.skills.map(function(skill) {
		return HTMLskills.replace("%data%", skill)
	}).join("");
}

/* Return list of HTML-formatted images (for projects) */
function getFormattedImages(array) {
	return array.map(function(image) {
		return HTMLprojectImage.replace("%data%", image)
	}).join("");
}

/* Bio */
var header = $("#header");
header.prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
header.prepend(HTMLskillsStart);
// Note: The line added the ul with the "skills" id referenced here
$("#skills").append(getFormattedSkills());
header.prepend(HTMLheaderRole.replace("%data%", bio.role));
header.prepend(HTMLheaderName.replace("%data%", bio.name));
header.prepend(HTMLbioPic.replace("%data%", bio.biopic));

/* Contact information */
var contact = $("#topContacts");
contact.append(HTMLmobile.replace("%data%", bio.contact.mobile));
contact.append(HTMLemail.replace("%data%", bio.contact.email));
contact.append(HTMLtwitter.replace("%data%", bio.contact.twitter));
contact.append(HTMLgithub.replace("%data%", bio.contact.github));
contact.append(HTMLblog.replace("%data%", bio.contact.blog));
contact.append(HTMLlocation.replace("%data%", bio.contact.location));

/* Employment history */
work.jobs.forEach(function(job) {
	$("#workExperience").append(HTMLworkStart);
	// Above line adds div with .work-entry
	var entry = $(".work-entry").last();
	entry.append(HTMLworkEmployer.replace("%data%", job.employer) 
		       + HTMLworkTitle.replace("%data%", job.title));
	entry.append(HTMLworkDates.replace("%data%", job.dates));
	entry.append(HTMLworkLocation.replace("%data%", job.location));
	entry.append(HTMLworkDescription.replace("%data%", job.description));
});

/* Projects */
projects.projects.forEach(function(project) {
	$("#projects").append(HTMLprojectStart);
	// Above line adds div with .project-entry
	var entry = $(".project-entry").last();
	entry.append(HTMLprojectTitle.replace("%data%", project.title));
	entry.append(HTMLprojectDates.replace("%data%", project.dates));
	entry.append(HTMLprojectDescription.replace("%data%", project.description));
	entry.append(getFormattedImages(project.images));
});

/* Education */
// Schools
education.schools.forEach(function(school) {
	$("#education").append(HTMLschoolStart);
	// Above line adds div with .education-entry
	var entry = $(".education-entry").last();
	entry.append(HTMLschoolName.replace("%data%", school.name)
		       + HTMLschoolDegree.replace("%data%", school.degree));
	entry.append(HTMLschoolDates.replace("%data%", school.dates));
	entry.append(HTMLschoolLocation.replace("%data%", school.location));
	entry.append(HTMLschoolMajor.replace("%data%", school.majors.join(", ")));
});

// Online Courses
$("#education").append(HTMLonlineClasses);
education.onlineCourses.forEach(function(course) {
	$("#education").append(HTMLschoolStart);
	// Above line adds div with .education-entry
	var entry = $(".education-entry").last();
	entry.append(HTMLonlineTitle.replace("%data%", course.title)
		       + HTMLonlineSchool.replace("%data%", course.school));
	entry.append(HTMLonlineDates.replace("%data%", course.dates));
	entry.append(HTMLonlineURL.replace("%data%", course.url));	
});
