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
    document.getElementById(rID.toString()).textContent=String(batch)
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

function tableGenerate() {
    tableContainer = "";
    // console.log("Generate Start");
    // console.log(tableContainer);
    for (let i = 0; i < buildingCount; i++) {
        // console.log("Loop");
        tableContainer += `<div class="col-6 px-5 py-5">
        <table class="table table-bordered align-middle text-center">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>`
        document.getElementById('table-container').innerHTML = tableContainer;
    }
}
tableAdd()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
var GlobalBatch=2020
function stepBatch(){
    GlobalBatch+=1;
    var rooms=BatchWise(getRandomIntInclusive(88,100),GlobalBatch)
    for(var i=0;i<rooms.length;i++){
        var curr=rooms[i]
        if(curr.batch!=null){
            if(curr.gender=="M"){
                RoomColor(curr.roomNo,"ADD8E6",curr.batch+"("+String(curr.current)+")")
    
            }
            else if(curr.gender=="F"){
    
                RoomColor(curr.roomNo,"FFC0CB",curr.batch+"("+String(curr.current)+")")
            }
            else{
                RoomColor(curr.roomNo,"ffff","NA")

            }
        }
    }
}
