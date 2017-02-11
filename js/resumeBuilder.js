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
	"employer" : "IBM",
	"title" : "Software Engineer",
	"dates": "October 2006 - May 2014",
	"location" : "Folsom",
	"description" : "Software Development work across multiple products and teams"
}

var education = {
	"school" : "UC Davis",
	"degree" : "Bachelor of Science",
	"dates" : "2002-2006",
	"location" : "Davis, CA",
	"major" : "Computer Science"
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

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer)
var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedDescription = HTMLworkDescription.replace("%data%", work.description);

var formattedSchool = HTMLschoolName.replace("%data%", education["school"]);
var formattedDegree = HTMLschoolDegree.replace("%data%", education["degree"]);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education["dates"]);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education["location"]);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education["major"]);

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
