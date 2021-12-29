function addRow() {
    var business = document.getElementById("business");
    var detail = document.getElementById("details");
    var date = document.getElementById("date");
    var office = document.getElementById("office");
    var services = document.getElementById("services");
    var phone = document.getElementById("phone");
    var linked = document.getElementById("linked");

    var table = document.getElementById("myTableData1");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= business.value;
    row.insertCell(2).innerHTML= detail.value;
    row.insertCell(3).innerHTML= date.value;
    row.insertCell(4).innerHTML= office.value;
    row.insertCell(5).innerHTML= services.value;
    row.insertCell(6).innerHTML= phone.value;
    row.insertCell(7).innerHTML= linked.value;}
     
    function deleteRow(obj) {
      
        var index = obj.parentNode.parentNode.rowIndex;
        var table = document.getElementById("myTableData1");
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

 