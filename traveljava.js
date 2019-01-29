

// // geolocation

function success(position) 
 {
 var latitude = position.coords.latitude;
 var longitude = position.coords.longitude;
 var altitude = position.coords.altitude;
 var speed = position.coords.speed;

 console.log(latitude, longitude);
 }

navigator.geolocation.getCurrentPosition(success);

 function geoError(errorObj) {
     alert('uh oh, somthings not right...');
 }
 navigator.geolocation.getCurrentPosition(success, geoError);




// code is refernced from htoveys repl.it page on table arrays


var images = ['jsphotoone.jpg', 'jsphototwo.jpg', 'jsphotothree.jpg', 'jsphotofour.jpg'];

// hotel descriptions

var descriptions = ['Follow a hiking trail just 10 minutes from The Shore Hotel Resort and Spa to get to this amazing lookout!',
'This is a beautful paradise only a few steps away from the hotel of your dreams',
'Here in the Candian rocky mountains are many diffrent trails that willgive you nsane photo oppertunities',
'Come visit scotland and get a taste for the great outdoors!'];

var links = [];

var table = document.createElement('table');
var tr = document.createElement('tr');

var th1 = document.createElement('th');
var imageHeader = document.createTextNode('Images');
th1.appendChild(imageHeader);
tr.appendChild(th1);

var th2 = document.createElement('th');
var descriptionHeader = document.createTextNode('Descriptions');
th2.appendChild(descriptionHeader);
tr.appendChild(th2);

table.appendChild(tr);


for (var i = 0; i < images.length; i++) {
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var image = document.createElement('img');
    image.src = images[i];
    td1.appendChild(image);
    tr.appendChild(td1);
    
    var td2 = document.createElement('td');
    var paragraph = document.createElement('p');
    var paragraphText = document.createTextNode(descriptions[i]);
    paragraph.appendChild(paragraphText);
    td2.appendChild(paragraph);
    tr.appendChild(td2);

    table.appendChild(tr);
};
 
document.body.appendChild(table);



// submit button and error messages


var submitButton = document.getElementById('submitBtn');

var errorName = document.getElementById('errorName');
var errorCity = document.getElementById('errorCity');



errorName.style.display = "none";
errorCity.style.display = "none";



submitButton.addEventListener('click', function(event){
    // code goes here
    var name = document.form1.FullName.value;
    var cityq = document.form1.city.value; // might need cityone
    

// validating name

    if(!name){
        event.preventDefault();
        errorName.style.display = "block";
    }
//validating city
    if(!cityq){
        event.preventDefault();
        errorCity.style.display = "block";
    }

});


// LOGO Animation








