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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);

var formattedSchool = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].majors[0]);

/* Header information */
$("#header").prepend(formattedWelcome);
$("#header").prepend(HTMLskillsStart);
// Note: The line added the ul with the "skills" id referenced here
$("#skills").append(getFormattedSkills());
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

/* Contact information */
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);

/* Employment history */
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer + formattedTitle);
$(".work-entry").append(formattedDates);
$(".work-entry").append(formattedWorkLocation);
$(".work-entry").append(formattedDescription);

/* Education */
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchool + formattedDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);

// Online Courses
$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title)
	                 + HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school));
$("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates));
$("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[0].url));

$("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[1].title)
	                 + HTMLonlineSchool.replace("%data%", education.onlineCourses[1].school));
$("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[1].dates));
$("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[1].url));
