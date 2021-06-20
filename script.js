var tableContainer = document.getElementById('table-container');

var buildingCount = 4;
var roomsPerBuilding = 24;

function tableAdd() {
    tableContainer.innerHTML = '';
    for (let i = 0; i < buildingCount; i++) {
        document.querySelector('#table-container').insertAdjacentHTML(
            'beforeend',
            `<div class="col-6 px-5 py-5">
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
        )
    }
}

function tableGenerate() {
    tableContainer = "";
    console.log("Generate Start");
    console.log(tableContainer);
    for (let i = 0; i < buildingCount; i++) {
        console.log("Loop");
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
