
const api_url= "https://api.nasa.gov/planetary/apod?api_key=HMRqEUJQEbg7DGplM82Zq3WvOErMVk7CGI5wQWtd";
var imgBox = document.getElementById('imgBox');

async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    if(response){
        addNewImageContainer(data);
    }
}

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

    imgBox.appendChild(newImageContainer);
    
}

getData();

