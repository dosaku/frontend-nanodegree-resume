var bio = {
	"name" : "Ryan Minniear",
	"role" : "Software Engineer",
	"contact" : {
		"mobile" : "916-239-8602",
		"email" : "rjminniear@gmail.com",
		"twitter" : "",
		"github" : "https://github.com/dosaku",
		"blog" : "",
		"location" : "890 Bullion Ln, Folsom CA 95630"
	},
	"picture_URL" : "images/ryan.jpg",
	"welcome_message" : "Welcome!",
	"skills": ["Java", "Python", "C", "Git/GitHub"]
};

/* Return list of HTML-formatted skills */
function getFormattedSkills() {
	return bio.skills.map(function(skill) {
		return HTMLskills.replace("%data%", skill)
	}).join("");
};

formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedPic = HTMLbioPic.replace("%data%", bio.picture_URL);
formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);


/* Header information */
$("#header").prepend(formattedWelcome);
// Note: HTMLskillsStart contains the "skills" id referenced in the line below
$("#header").prepend(HTMLskillsStart);
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
