// console.log("JS connected!");

// const contactText = `Alex's Contact Information

// Phone Number: (916) 541-1880
// Email: alexhami916@gmail.com
// `;

// Fill-in content object
let fillIn = {
    aboutMe : {
        img : "./assets/images/about_closeup.jpg",
        p : "I was born and raised in Sacramento, California and ventured to Utah for a college education at BYU. I have a Bachelor's of Statistics and am currently studying Full-Stack Web Development at the University of Utah.",
        option1 : {
            title : "View Resume",
            href : "./assets/images/resume.pdf"
        }
    },
    projects : {
        img : "./assets/images/projects_personal.jpg",
        p : "My work and educational experience covers a wide variety projects, from web development, data science, and statistical analytics. I work with a focus to provide new insight to any given problem and produce easy-to-use results.",
        option1 : {
            title : "Learn More",
            href : "./assets/html/portfolio.html"
        }
    },
    contact : {
        img : "./assets/images/email.jpg",
        p : 'Wanna chat? Select "Send a Message" below to reach me via email. You can also call or text me at (916) 541-1880. I look forward to hearing from you!',
        option1 : {
            title : "Send a Message",
            href : "./assets/html/contact.html"
        }
    }
}

// Find a way to use media queries, would need to hide content
// boxes upon size switch and change event listener functionality


// Media Query Match Variable
//let mq = window.matchMedia("min-width: 550px");
// console.log("windowWidth = ", $(window).width());

// For whatever reason, the windowWidth variable reads 534 at 550px

// Media Query Change Event Listener
$(window).resize(function() {

    // console.log("actual = ", $(window).width());
    if($(window).width() <= 534){
        // console.log("Small Screen");
        clearContentLarge();
    }
    else {
        // console.log("Large Screen");
        clearContentSmall();
    }

});


var clearContentSmall = function() {
    // $("#about_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#projects_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#contact_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#about_content").css("display", "none");
    $("#projects_content").css("display", "none");
    $("#contact_content").css("display", "none");
};

var clearContentLarge = function() {
    // $("#about_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#projects_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#contact_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#content_lg").css("display", "none");
};

var displayAboutContent = function() {

    // $("#about_box").css("filter", "none");
    // $("#projects_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#contact_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    
    $("#about_box").removeClass("inactive");
    $("#about_box").addClass("active");
    $("#projects_box").removeClass("active");
    $("#projects_box").addClass("inactive");
    $("#contact_box").removeClass("active");
    $("#contact_box").addClass("inactive");

    if($(window).width() <= 534){
        $("#about_main").css("height", "40.0rem");
        $("#about_box").css("height", "50%");
        $("#about_content").css("display", "inline-block");
        $("#about_title").css("bottom", "35.7rem");
        $("#about_p").text(fillIn.aboutMe.p);
        $("#aboutOption1").text(fillIn.aboutMe.option1.title);
        $("#aboutOption1").attr("href", fillIn.aboutMe.option1.href);
    }
    else {
        $("#content_lg").css("display", "block");
        $("#content_img").attr("src", fillIn.aboutMe.img);
        $("#content_p").text(fillIn.aboutMe.p);
        $("#option1").text(fillIn.aboutMe.option1.title);
        $("#option1").attr("href", fillIn.aboutMe.option1.href);
    }
};

var displayProjectsContent = function() {

    // $("#projects_box").css("filter", "none");
    // $("#about_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#contact_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#about_box:hover").css("filter", "none");
    // $("#contact_box:hover").css("filter", "none");
    
    $("#projects_box").removeClass("inactive");
    $("#projects_box").addClass("active");
    $("#about_box").removeClass("active");
    $("#about_box").addClass("inactive");
    $("#contact_box").removeClass("active");
    $("#contact_box").addClass("inactive");

    if($(window).width() <= 534){
        $("#projects_main").css("height", "40.0rem");
        $("#projects_box").css("height", "50%");
        $("#projects_content").css("display", "inline-block");
        $("#projects_title").css("bottom", "35.7rem");
        $("#projects_p").text(fillIn.projects.p);
        $("#projectsOption1").text(fillIn.projects.option1.title);
        $("#projectsOption1").attr("href", fillIn.projects.option1.href);
    }
    else {
        $("#content_lg").css("display", "block");
        $("#content_img").attr("src", fillIn.projects.img);
        $("#content_p").text(fillIn.projects.p);
        $("#option1").text(fillIn.projects.option1.title);
        $("#option1").attr("href", fillIn.projects.option1.href);
    }
};

var displayContactContent = function() {

    // $("#contact_box").css("filter", "none");
    // $("#about_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    // $("#projects_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    
    $("#contact_box").removeClass("inactive");
    $("#contact_box").addClass("active");
    $("#projects_box").removeClass("active");
    $("#projects_box").addClass("inactive");
    $("#about_box").removeClass("active");
    $("#about_box").addClass("inactive");

    if($(window).width() <= 534){
        $("#contact_main").css("height", "40.0rem");
        $("#contact_box").css("height", "50%");
        $("#contact_content").css("display", "inline-block");
        $("#contact_title").css("bottom", "35.7rem");
        $("#contact_p").text(fillIn.contact.p);
        $("#contactOption1").text(fillIn.contact.option1.title);
        $("#contactOption1").attr("href", fillIn.contact.option1.href);
    }
    else {
        $("#content_lg").css("display", "block");
        $("#content_img").attr("src", fillIn.contact.img);
        $("#content_p").text(fillIn.contact.p);
        $("#option1").text(fillIn.contact.option1.title);
        $("#option1").attr("href", fillIn.contact.option1.href);
    }
};

$("#about_main").on("click", displayAboutContent);
$("#projects_main").on("click", displayProjectsContent);
$("#contact_main").on("click", displayContactContent);


$("#option2").on("click", function(){
    //clearContentLarge();
    location.reload();
});


$("#aboutOption2").on("click", function(){
    //console.log("clicked");
    location.reload();
});

$("#projectsOption2").on("click", function(){
    //console.log("clicked");
    location.reload();
});

$("#contactOption2").on("click", function(){
    //console.log("clicked");
    location.reload();
});