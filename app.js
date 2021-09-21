let characters = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicleType:"Truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicleType:"Tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicleType:"Car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicleType:"Plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicleType:"Truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicleType:"Tank"},
];

// let i = 0

for(let i = 0; i < characters.length; i++){
    let transHub = document.createElement("div");
    let img = document.createElement("img");
    let transVehicle = document.createElement("p");
    let transName = document.createElement("p");
    let transClass = document.createElement("p");

    transHub.classList.add("character");
    transVehicle.classList.add("vehicle");

    transName.innerHTML = "Name: " + characters[i].name;
    transClass.innerHTML = "Class: " + characters[i].class.toUpperCase();
    transVehicle.innerHTML = "Vehicle: " + characters[i].vehicleType;

    if(characters[i].vehicleType == "Truck"){
        transVehicle.style.color = "blue";
    }
    else if (characters[i].vehicleType == "Tank"){
        transVehicle.style.color = "green";
    }
    else if (characters[i].vehicleType == "Car"){
        transVehicle.style.color = "gold";
    }
    else if (characters[i].vehicleType == "Plane"){
        transVehicle.style.color = "white";
    }



    if(characters[i].afl == "autobot"){
        transHub.classList.add("autobot");
        img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    }
    else if(characters[i].afl == "decepticon") {
        transHub.classList.add("decepticon");
        img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    }

    transHub.appendChild(img);
    transHub.appendChild(transName);
    transHub.appendChild(transClass);
    transHub.appendChild(transVehicle);

    document.body.appendChild(transHub);


}



// Do not write any elements into your HTML file.

// Loop through the above array to append a div using .append() into the body tag.

// The appended div should always have the ".character" class.

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line.

// If the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// In the top right, based on the top information, insert an img elemnt for either the autobot or decepticon.

// Link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png.

// Link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png.

// In the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER').

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// Truck=blue
// Tank=green
// Car=gold
// Plane=white
  

