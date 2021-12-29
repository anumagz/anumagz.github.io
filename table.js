function addRows() {
          
    var keySkills = document.getElementById("skills");
    var workExp = document.getElementById("workexp");
    var qualification = document.getElementById("qual");
    var organization = document.getElementById("org");
    var contentType = document.getElementById("content");
    var language = document.getElementById("lang");
    var projects = document.getElementById("projects");
    var linkedIn = document.getElementById("linkedIn");

    

    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= keySkills.value;
    row.insertCell(2).innerHTML= workExp.value;
    row.insertCell(3).innerHTML= qualification.value;
    row.insertCell(4).innerHTML= organization.value;
    row.insertCell(5).innerHTML= contentType.value;
    row.insertCell(6).innerHTML= language.value;
    row.insertCell(7).innerHTML= projects.value;
    row.insertCell(8).innerHTML= linkedIn.value;

}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}


