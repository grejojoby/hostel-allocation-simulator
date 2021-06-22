$("#colorFormID").submit(function(e) {
    e.preventDefault();
});

var tableContainer = document.getElementById('table-container');

var buildingCount = 4;
var roomsPerBuilding = 24;

function ColorRoom() {
    var roomID = document.forms["colorForm"]["roomNo"].value;
    var hexCode = document.forms["colorForm"]["colorCode"].value;
    // console.log("roomID"+roomID);
    RoomColor(roomID,hexCode);
}

function RoomColor(rID,cID,batch) {
    document.getElementById(rID.toString()).style.backgroundColor = `#${cID}`;
    if(batch!=null){

        document.getElementById(rID.toString()).textContent=String(batch)
    }
    else{
        document.getElementById(rID.toString()).textContent=rID

    }
}

function tableAdd() {
    tableContainer.innerHTML = '';
    var count = 100;
    for (let i = 0; i < buildingCount; i++) {
        document.querySelector('#table-container').insertAdjacentHTML(
            'beforeend',
            `<div class="col-6 px-5 py-5">
      <table class="table table-bordered align-middle text-center">
          <tr>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
          </tr>
          <tr>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
          </tr>
          <tr>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
          </tr>
          <tr>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
              <td id="${++count}">${count}</td>
          </tr>
          
      </table>
  </div>`
        )
    }
}


tableAdd()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
var pinkList=["FCEAEB","F4C9D5","E68AAE","E06A9B"]
var blueList=["ABBCEA","92B4E3","7BA4DD","628DD6"]
var GlobalBatch=2020
var tcurrBatch=0
var removeBatchFlag=true
var started=false;
function stepBatch(){
    if(tcurrBatch>=4 && removeBatchFlag){
        console.log("remove")

       var rooms= RemovePrevBatch(GlobalBatch)
       removeBatchFlag=false
    }
    else{
        document.getElementById("notes").innerHTML=String(GlobalBatch)+" Batch enters the hostel"
        var rooms=BatchWise(getRandomIntInclusive(20,90),GlobalBatch)
        removeBatchFlag=true
        GlobalBatch+=1
        tcurrBatch+=1
    }


    for(var i=0;i<rooms.length;i++){
        var curr=rooms[i]
        if(curr.batch!=null){
            if(curr.gender=="M"){
                RoomColor(curr.roomNo,blueList[curr.current-1],curr.batch+"("+String(curr.current)+")")
    
            }
            else if(curr.gender=="F"){
                
                RoomColor(curr.roomNo,pinkList[curr.current-1],curr.batch+"("+String(curr.current)+")")
            }
            
        }
        else{
            // console.log(curr.roomNo,"ffff",null)
            RoomColor(curr.roomNo,"ffff",null)

        }
    }

    document.getElementById("totalStudents").innerHTML="Total students = "+String(TotalStudent)
    if(started){
        setTimeout(stepBatch,document.getElementById("vol").value)
    }
}

function start(){
    started=true
    stepBatch()
}
function stop(){
    started=false

}