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

function RoomColor(rID,cID) {
    document.getElementById(rID.toString()).style.backgroundColor = `#${cID}`;
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
function stepBatch(){
    var rooms=BatchWise(100,2020)
    for(var i=0;i<rooms.length;i++){
        var curr=rooms[i]
        if(curr.batch!=null){
            if(curr.gender=="M"){
                RoomColor(curr.roomNo,"ADD8E6")
    
            }
            else{
    
                RoomColor(curr.roomNo,"FFC0CB")
            }
        }
    }
}
