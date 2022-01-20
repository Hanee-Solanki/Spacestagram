
const api_url= "https://api.nasa.gov/planetary/apod?api_key=HMRqEUJQEbg7DGplM82Zq3WvOErMVk7CGI5wQWtd";

async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("imageTitle").innerHTML= data.title;
    document.getElementById("description").innerHTML= data.explanation;
    document.getElementById("potd").src= data.hdurl;
    document.getElementById("datePosted").innerHTML= data.date;
    document.getElementById("credits").innerHTML=data.copyright;
}

getData();

