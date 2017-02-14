//var awesomethoughts = "I am Soumya and I am awesome";
//var funthoughts = awesomethoughts.replace("awesome","fun");
// var name = "Soumya Bhuyan";
// var role = "Newbie Developer";
// var formattedrole = HTMLheaderRole.replace("%data%",role);
// $("#header").prepend(formattedrole);
// $("#header").prepend(formattedname);
//var skills=["great","cute","sexy"];
//$("#header").append(skills.length);

//var sampleArray = [0,0,7];

//var incrementLastArrayElement = function(_array) {
  //  var newarray = [];
    //newarray = _array.slice(0);
    //var lastnumber = newarray.pop();
    //newarray.push(lastnumber+1);
    //return newarray;
//};

// Did your code work? The line below will tell you!
//console.log(incrementLastArrayElement(sampleArray));

// var bio = {
//   "name" : "Soumya Bhuyan",
//   "role" : "Developer",
//   "contact_info" : "Address - 2590 Hunt Rd, Cincinnati, Ph - 5139036690"
// };
// $("#header").prepend(bio.contact_info);
// $("#header").prepend(bio.role);
// $("#header").prepend(bio.name);
// var work = {};
// work.position="Developer";
// work.employer="luxottica";
//
// var education = {};
// education["school"]="APS";
//
// $("#main").append(work.position);
// $("#main").append(education.school);

var role = HTMLheaderRole.replace("%data%","Front-End Developer");
$("#header").prepend(role);

var name = HTMLheaderName.replace("%data%","Soumya Bhuyan");
$("#header").prepend(name);

var contacts = {
  "mobile" : "(513)903-6690",
  "email" : "soumya.bhuyan86@gmail.com",
  "github" : "bhuyansa",
  "location" : "Cincinnati, Ohio"
}

var amobile = HTMLmobile.replace("%data%", contacts.mobile);
$("#topContacts").append(amobile);

var aemail = HTMLemail.replace("%data%", contacts.email);
$("#topContacts").append(aemail);

var agithub = HTMLgithub.replace("%data%", contacts.github);
$("#topContacts").append(agithub);

var aloc = HTMLlocation.replace("%data%", contacts.location);
$("#topContacts").append(aloc);

var spic = HTMLbioPic.replace("%data%", "images/SB.jpg");
$("#header").append(spic);

var desc = HTMLwelcomeMsg.replace("%data%", "Aspiring front-end developer with focus on Angular Js, HTML and CSS");
$("#header").append(desc);

var skillset = ["Angular JS","JavaScript","Git","HTML","CSS"];

$("#header").append(HTMLskillsStart);

for (skill in skillset)
{
  var skil = HTMLskills.replace("%data%", skillset[skill]);
  $("#skills").append(skil);
};

var work = {
  "jobs" : [
    {
      "employer":"Luxottica Group",
      "title":"Sr Auditor, IT Internal Audit",
      "date": "April, 2015 –present",
      "location": "Cincinnati, OH, USA",
      "description": "Led North America IT SOX and IT Internal Audit."
    },
    {
      "employer":"PwC",
      "title":"Experienced Associate, IT Advisory",
      "date": "August, 2012 – April, 2015",
      "location": "Cincinnati, OH, USA",
      "description": "Performed SAP Security design and redesign projects for multiple fortune-500 clients. Performed GRC upgrade and ruleset implementations"
    },
    {
      "employer":"SAP Americas",
      "title":"Business Applications Analyst, SAP IT",
      "date": "June, 2011 – June, 2012",
      "location": "Newtown Square, PA, USA",
      "description": "Performed project planning, data mapping, and system configuration for SAP/Sybase HR-IT integration. Performed monthly project tracking and forecasting for four HR-IT projects."
    },
    {
      "employer":"Infosys Technologies Ltd",
      "title":"Software Test Engineer, Quality Assurance",
      "date": "June 2008 – June 2010",
      "location": "Pune, India",
      "description": "Lead for management of global project team of five people for regression testing of an application stack containing eight applications. Provided upstream reporting to senior management on team status and performed test management using QC."
    }
  ],
    displaywork : function()
    {
      for (job in work.jobs)
      {
        $("#workExperience").append(HTMLworkStart);
        var newjob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var newtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var jobtitle = newjob + newtitle;
        $(".work-entry:last").append(jobtitle);
        var newdate = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(newdate);
        var newlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(newlocation);
        var newdesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(newdesc);
      }
    }
};

var cert = {
  "certification" : [
    {
      "Title":"SAP Certified Business Associate (TERP - 10)",
      "date": "May, 2011 – Present"
    },
    {
      "Title":"Salesforce.com Certified Force.com Developer (SU12)",
      "date": "October, 2012 – Present"
    },
    {
      "Title":"Certified Information Systems Auditor (CISA)",
      "date": "October, 2016 - Present"
    }
  ],
    displaycert : function()
    {
      for (cer in cert.certification)
      {
        $("#certifications").append(HTMLcertificationStart);
        var certTitle = HTMLcertificationTitle.replace("%data%", cert.certification[cer].Title);
        $(".certification-entry:last").append(certTitle);
        var certdate = HTMLcertificationDates.replace("%data%", cert.certification[cer].date);
        $(".certification-entry:last").append(certdate);
      }
    }
};

var edu = {
  "education" : [
    {
      "sname":"University of Cincinnati",
      "degree":"Masters",
      "date": "September, 2010 - June, 2012",
      "location": "Cincinnati, OH, USA",
      "major": "Management Information Systems"
    },
    {
      "sname":"Army Institute of Technology",
      "degree":"Bachelor of Enginnering",
      "date": "August, 2003 - June, 2007",
      "location": "Pune, India",
      "major": "Information Technology"
    }
  ],
    displayedu : function()
    {
      for (ed in edu.education)
      {$("#education").append(HTMLschoolStart);
        var schoolname = HTMLschoolName.replace("%data%", edu.education[ed].sname);
        var degree = HTMLschoolDegree.replace("%data%", edu.education[ed].degree);
        var namedegree = schoolname + degree;
        $(".education-entry:last").append(namedegree);
        var dates = HTMLschoolDates.replace("%data%", edu.education[ed].date);
        $(".education-entry:last").append(dates);
        var loc = HTMLschoolLocation.replace("%data%", edu.education[ed].location);
        $(".education-entry:last").append(loc);
        var maj = HTMLschoolMajor.replace("%data%", edu.education[ed].major);
        $(".education-entry:last").append(maj);
      }
    }
};



work.displaywork();
cert.displaycert();
edu.displayedu();

//$("#mapDiv").append(internationalizeButton);
$("#mapDiv").append(googleMap);


var amobile = HTMLmobile.replace("%data%", contacts.mobile);
$("#footerContacts").append(amobile);

var aemail = HTMLemail.replace("%data%", contacts.email);
$("#footerContacts").append(aemail);

var agithub = HTMLgithub.replace("%data%", contacts.github);
$("#footerContacts").append(agithub);

var aloc = HTMLlocation.replace("%data%", contacts.location);
$("#footerContacts").append(aloc);
