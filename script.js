
const api_url= "https://api.nasa.gov/planetary/apod?api_key=HMRqEUJQEbg7DGplM82Zq3WvOErMVk7CGI5wQWtd";
var imageContainer = document.getElementById('imageContainer');

async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    if(response){
        addNewImageContainer(data);
        // console.log(data);
        // console.log(imageContainer);
    }

  
}

function addNewImageContainer(newData){
    //create a new element for image container
    var newImageContainer = document.createElement('div');
    newImageContainer.className = 'imageContainer';

    var newImage = document.createElement('img');
    newImage.className = 'img-fluid';
    newImageContainer.appendChild(newImage);
    newImage.src = newData.url;

    var newTitle = document.createElement('h4');
    newTitle.className = 'imageTitle';
    newImageContainer.appendChild(newTitle);
    newTitle.appendChild(document.createTextNode(newData.title));

    var newCredits = document.createElement('h6');
    newImageContainer.appendChild(newCredits);

    var newDate = document.createElement('h6');
    newDate.className = 'datePosted';
    newImageContainer.appendChild(newDate);
    newDate.appendChild(document.createTextNode(newData.date));


    var newDescription = document.createElement('p');
    newDescription.className = 'description';
    newImageContainer.appendChild(newDescription);
    newDescription.appendChild(document.createTextNode(newData.explanation));


    // console.log(newImageContainer);
    // console.log(newData);
    console.log(newImageContainer);
    // imageContainer.appendChild(newImageContainer);


    
}


getData();

