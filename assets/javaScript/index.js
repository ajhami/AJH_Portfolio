console.log("JS connected!");

// Fill-in content object
let fillIn = {
    aboutMe : {
        img : "./assets/images/dunes_profile_sm.jpg",
        p : "I am a native to the Sacramento valley, living my whole childhood in the golden state. I moved out to Utah to pursue a college education at BYU. I now have a Bachelor's of Statistics and am currently studying Full-Stack Web Development at the University of Utah. I am pursuing a career in web development.",
        option1 : {
            title : "View Resume",
            href : "./assets/images/resume.pdf"
        }
    }
}

// Find a way to use media queries, would need to hide content
// boxes upon size switch and change event listener functionality


// Media Query Match Variable
//let mq = window.matchMedia("min-width: 550px");
console.log("windowWidth = ", $(window).width());

// For whatever reason, the windowWidth variable reads 534 at 550px

// Media Query Change Event Listener
$(window).resize(function() {

    console.log("actual = ", $(window).width());
    if($(window).width() <= 534){
        console.log("Small Screen");
        clearContentLarge();
    }
    else {
        console.log("Large Screen");
        clearContentSmall();
    }

});


var clearContentSmall = function() {
    $("#about_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#projects_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#contact_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#about_content").css("display", "none");
    $("#projects_content").css("display", "none");
    $("#contact_content").css("display", "none");
};

var clearContentLarge = function() {
    $("#about_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#projects_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#contact_box").css("filter", "blur(1px) opacity(0.5) grayscale(100%)");
    $("#content_lg").css("display", "none");
};

var displayAboutContent = function() {

    $("#about_box").css("filter", "none");

    if($(window).width() <= 534){
        $("#about_main").css("height", "40.0rem");
        $("#about_box").css("height", "50%");
        $("#about_content").css("display", "inline-block");
        $("#about_title").css("bottom", "35.7rem");
    }
    else {
        $("#content_lg").css("display", "block");
        $("#content_img").attr("src", fillIn.aboutMe.img);
        $("#content_p").text(fillIn.aboutMe.p);
        $("#option1").text(fillIn.aboutMe.option1.title);
        $("#option1").attr("href", fillIn.aboutMe.option1.href);
    }
};


$("#about_main").on("click", displayAboutContent);

$("#option2").on("click", clearContentLarge);
$("#aboutOption2").on("click", function(){
    console.log("clicked");
    clearContentSmall();
    
});