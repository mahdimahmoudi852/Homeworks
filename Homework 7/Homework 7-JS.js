function myFunction(){
    //JavaScript Can Change HTML Content
    if(document.getElementById("title").innerHTML=="Are you ready?"){
        document.getElementById("title").innerHTML= "This text has changed with JS!";
        return;
    }
    if(document.getElementById("title").innerHTML=="This text has changed with JS!"){
        document.getElementById("title").innerHTML= "What color is the background?";
        return;
    }
    //JavaScript Can Change HTML Attribute Values
    if(document.getElementById("title").innerHTML=="What color is the background?"){
        document.getElementById("background").background="Images/Background1.jpg";
        document.getElementById("title").innerHTML="The background has changed with JS!";
        return;
    }
    if(document.getElementById("title").innerHTML=="The background has changed with JS!"){
        document.getElementById("background").background="";
        document.getElementById("title").innerHTML= "What color is this text?";
        return;
    }
    //JavaScript Can Change HTML Styles (CSS)
    if(document.getElementById("title").innerHTML=="What color is this text?"){
        document.getElementById("title").style= "color:yellow;";
        document.getElementById("title").innerHTML="Now yellowed with JS!";
        return;
    }
    if(document.getElementById("title").innerHTML=="Now yellowed with JS!"){
        document.getElementById("title").style= "color:white;";
        document.getElementById("title").innerHTML= "Is there a JAVA SCRIPT under the button?";
        return;
    }
    //JavaScript Can Hide HTML Elements
    if(document.getElementById("title").innerHTML=="Is there a JAVA SCRIPT under the button?"){
        document.getElementById("JS").style="display:none;";
        document.getElementById("title").innerHTML= "Now hidden with JS!";
        return;
    }
    if(document.getElementById("title").innerHTML=="Now hidden with JS!"){
        document.getElementById("title").innerHTML="Lets show it again."
        return;
    }
    //JavaScript Can Show HTML Elements
    if(document.getElementById("title").innerHTML=="Lets show it again."){
        var JS = document.getElementById("JS");
        if (JS.style.display == "none")
            JS.style.display = "block";
        document.getElementById("title").innerHTML="Now you can see it again with JS!";
        return;
    }
    if(document.getElementById("title").innerHTML=="Now you can see it again with JS!"){
        document.getElementById("title").style="display:none;";
        document.getElementById("button").style="display:none;";
    }
}
