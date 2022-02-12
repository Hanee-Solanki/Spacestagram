

//set current Date as maximum date in calender
document.getElementById("datepicker").setAttribute("max",today);

var updatedDate;
var today= new Date();
var minDate= new Date();
minDate.setFullYear(2022,01,01);

var url= "https://api.nasa.gov/planetary/apod?";
var apiKey= "api_key=HMRqEUJQEbg7DGplM82Zq3WvOErMVk7CGI5wQWtd";

var flexContainer = document.getElementById('flex-container');

//function that fetches data from NASA's API
async function getData(){
   
    while(minDate <= today){   
        var dd=minDate.getDate();
        var mm= minDate.getMonth()+1;
        var yyyy= minDate.getFullYear();
        if(dd<10)
            dd= '0' +dd;
         
        if(mm<10)
            mm= '0' +mm;
        updatedDate= yyyy + '-'+ mm+ '-'+ dd;
    
        var api_url= url+ "date=" + updatedDate + "&"+apiKey;
        var response = await fetch(api_url);
        const data = await response.json();
        if(response){
            addNewImageContainer(data);
        }
    minDate.setDate(minDate.getDate() +1);
    }

}

//function to add new Image Container
function addNewImageContainer(newData){
    
    //create a new element for image container
    var newImageContainer = document.createElement('div');
    newImageContainer.className = 'imageContainer';

    //create a new element for image and append to new Image container
    var newImage = document.createElement('img');
    newImage.className = 'img-fluid';
    newImageContainer.appendChild(newImage);
    newImage.src = newData.url;

    //create a new element for title and append to new Image container
    var newTitle = document.createElement('h4');
    newTitle.className = 'imageTitle';
    newImageContainer.appendChild(newTitle);
    newTitle.appendChild(document.createTextNode(newData.title));

    // var newCredits = document.createElement('h6');
    // newImageContainer.appendChild(newCredits);

    //create a new element for date and append to new Image container
    var newDate = document.createElement('h6');
    newDate.className = 'datePosted';
    newImageContainer.appendChild(newDate);
    newDate.appendChild(document.createTextNode(newData.date));

    //create a new element for description and append to new Image container
    var newDescription = document.createElement('p');
    newDescription.className = 'description';
    newImageContainer.appendChild(newDescription);
    newDescription.appendChild(document.createTextNode(newData.explanation));

    flexContainer.insertBefore(newImageContainer,flexContainer.firstChild);
    
}

getData();

//Event handlers
// var selectContainers= document.getElementsByClassName("imageContainer");
// for(var i=0; i<selectContainers.length;i++){
//     selectContainers[i].addEventListener("click",openImage,false);
// }
// //function for 'click' event
// function openImage(){
//     console.log("1");

// }
