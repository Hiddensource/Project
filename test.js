var btn = document.getElementById("btn");

btn.addEventListener("click", getUserDetails);

function getUserDetails() {
    
    

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayUserInfo(request.responseText);
        }
    };
    request.open("GET", "http://developer.goibibo.com/api/bus/search/?app_id=045ea148&app_key=3e449f37d35d060398943020050fcee5&format=json&source=lucknow&destination=delhi&dateofdeparture=20180820", true);
    request.send();
}



function displayUserInfo(response) {
    
    var data = JSON.parse(response);
    for(var i=0;i<data.data.onwardflights.length;i++){
    console.log(data.data.onwardflights[i].fare.totalfare);
    }}

