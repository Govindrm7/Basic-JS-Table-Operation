document.addEventListener("DOMContentLoaded", function () {

  selectRow();
});

var addButton = document.getElementById('addbtn');
var studentCounter = 3;
var table = document.getElementById('myTable');


addButton.addEventListener('click', function () {
  var newRow = document.createElement('tr');
  var dropdownDetails = document.createElement('tr')
  studentCounter++

  newRow.innerHTML = `
    <td><input type = "checkbox"
    onclick="checkboxClick(${studentCounter});"
    id="student${studentCounter}_id" / > <br/> <br/> <img src = "down.png"
    width = "25px"/> </td>
    <td> Student ${studentCounter}</td>
    <td> New Teacher ${studentCounter}</td>
    <td>Approved</td>
    <td>Fall</td>
    <td>TA</td>
    <td>12345</td>
    <td>100%</td>
    <td id="delete-row-${studentCounter}" style="display: none;"> <button> Delete </button></td >
    <td id="edit-row-${studentCounter}" style="display: none;"><button class="edit-button">Edit</button></td >
  `;

  dropdownDetails.innerHTML = `
      <td colspan = "8" >
        Advisor: <br /> <br />
        Award Details <br />
        Summer 1 - 2014(TA) <br />
        Budget Number: <br />
        Tuition Number: <br />
        Comments: <br /> <br /> <br />
        Award Status: <br /> <br /> <br />
        `;

  newRow.id = `student${studentCounter}_id`;

  table.appendChild(newRow);
  table.appendChild(dropdownDetails);

  selectRow(studentCounter);



  alert(`New Student Added Successfully: Student ${studentCounter - 1}`);
});

function checkboxClick(id) {
  var row = document.getElementById(`student${id}_id`);
  var deleteBtn = document.getElementById(`delete-row-${id}`);
  var editBtn = document.getElementById(`edit-row-${id}`);
  editBtn.onclick = function () {
    prompt(`Edit Student ${id} details?`)
  }

  deleteBtn.onclick = function () {
    table.deleteRow(row.rowIndex);
    alert(`Row Deleted`);

    if (anyChecked()) {
      deleteTitle.style.display = 'table-cell'
      editTitle.style.display = 'table-cell'
      document.getElementById('subbutton').disabled = false;
    } else {
      deleteTitle.style.display = 'none'
      editTitle.style.display = 'none'
      document.getElementById('subbutton').disabled = true;


    }
  }

  if (deleteBtn.style.display !== 'none') {
    deleteBtn.style.display = 'none';
  } else {
    deleteBtn.style.display = 'table-cell';
  }

  if (editBtn.style.display !== 'none') {
    editBtn.style.display = 'none';
  } else {
    editBtn.style.display = 'table-cell';
  }

  if (row.classList.contains('selected')) {
    row.classList.remove('selected');
  } else {
    row.classList.add('selected');
  }

  var deleteTitle = document.getElementById('deleteTitle');
  var editTitle = document.getElementById('editTitle');


  if (anyChecked()) {
    deleteTitle.style.display = 'table-cell'
    editTitle.style.display = 'table-cell'
    document.getElementById('subbutton').disabled = false;
  } else {
    deleteTitle.style.display = 'none'
    editTitle.style.display = 'none'
    document.getElementById('subbutton').disabled = true;


  }

}

function selectRow(id) {
  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  let row = document.getElementById(`student${id}_id`)

}


document.getElementById('myTable').addEventListener('click', function () {
  var dropdownArrows = document.querySelectorAll('img[src="down.png"]');

  dropdownArrows.forEach(function (arrow) {
    arrow.addEventListener('click', function () {
      var parentRow = this.closest('tr');
      var dropDownRow = parentRow.nextElementSibling;
      dropDownRow.classList.toggle('dropDownRow-hidden');
    });
  });


  var editButtons = document.getElementsByClassName('edit-button');


  selectRow();

})

function anyChecked() {
  var checkboxes = document.querySelectorAll("input[type='checkbox']");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true;
    }
  }

  return false;
}