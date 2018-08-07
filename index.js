var btn = document.getElementById("btn");

btn.addEventListener("click", getUserDetails);

function getUserDetails() {
    var ab = document.getElementById("a").innerText;
    alert(ab);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayUserInfo(request.responseText);
        }
    };
    request.open("GET", "http://developer.goibibo.com/api/bus/search/?app_id=045ea148&app_key=3e449f37d35d060398943020050fcee5&format=json&source=lucknow&destination=delhi&dateofdeparture=20180820", true);
    request.send();
}


var Detail=[];
function displayUserInfo(response) {
    
    var val="";
    var data = JSON.parse(response);
    for(var i=0;i<data.data.onwardflights.length;i++){
    //data.data.onwardflights[i].BPPrims.list[0];
     val=data.data.onwardflights[i].origin;
    var obj = {};
    obj['origin'] = val;
    
    val=data.data.onwardflights[i].rating;
    obj['rating'] = val;

    val=data.data.onwardflights[i].DepartureTime;
    obj['departureTime'] = val;

    val=data.data.onwardflights[i].duration;
    obj['duration'] = val;
    
    val=data.data.onwardflights[i].avlWindowSeats;
    obj['avlWindowSeats'] = val;

    val=data.data.onwardflights[i].seat;
    obj['seat'] = val;

    val=data.data.onwardflights[i].busCondition;
    obj['busCondition'] = val;

    val=data.data.onwardflights[i].destination;
    obj['destination'] = val;

    val=data.data.onwardflights[i].amenities;
    obj['amenities'] = val;

    val=data.data.onwardflights[i].ArrivalTime;
    obj['ArrivalTime'] = val;

    val=data.data.onwardflights[i].zeroCancellationTime;
    obj['zeroCancellationTime'] = val;

    val=data.data.onwardflights[i].gps;
    obj['gps'] = val;

    val=data.data.onwardflights[i].depdate;
    obj['depdate'] = val;

    val=data.data.onwardflights[i].BusType;
    obj['BusType'] = val;

    val=data.data.onwardflights[i].TravelsName;
    obj['TravelsName'] = val;

    val=data.data.onwardflights[i].fare.totalfare;
    obj['fare'] = val;

    val=data.data.onwardflights[i].BPPrims.list[0].BPLocation;
    obj['BPLocation'] = val;

    val=data.data.onwardflights[i].DPPrims.list[0].DPAddress;
    obj['DPAddress'] = val;

    val=data.data.onwardflights[i].RouteSeatTypeDetail.list[0].SeatsAvailable;
    obj['SeatsAvailable'] = val;
    Detail.push(obj);

}}
console.log(Detail);