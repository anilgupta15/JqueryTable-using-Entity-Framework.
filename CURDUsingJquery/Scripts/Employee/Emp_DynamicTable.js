$(document).ready(function () {
    BindTable();
});


function BindTable() {
    

    $.ajax({
        type: "POST",
        url: "/EmployeeService.asmx/GetAllEmployeeDetails",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            $.each(r.d, function (i, v) {
                var id = i + 1;
                $("#emp_tBody").append("<tr>" +
                    "<td><input type='Hidden' id="+v.ID+">" + id + "</td>" +
                    "<td>" + v.Name + "</td>" +
                    "<td>" + v.ContactNumber + "</td>" +
                    "<td>" + v.Address + "</td>" +
                    "<td>" + v.Department + "</td>" +
                    "<td>" + v.Designation + "</td>" +
                    
                    "<td  style='width:20%'><input type='button' style='width:49%' class='btn btn-primary btn-md' id=\"edit" + v.ID + "\" title='Edit' onclick='onEditButtonClick(this)' value='Edit'>" +
                    "<input type='button' style='width:49%' class='btn btn-primary btn-md updateBtn' id=\"Update" + v.ID + "\" title='Update' onclick='updateRowContent(this)' value='Update'>"+
                    "<input type='button' style='width:49%;margin-left:1%' class='btn btn-primary btn-md' id=\"delete" + v.ID + "\" title='Delete' onclick='deleteSelectedRow(" + v.ID +")' value='Delete'>" +
                    "</td > ");
            });
        },
        error: function (r) {
            alert(r.responseText);
        },
        failure: function (r) {
            alert(r.responseText);
        },
        complete: function (r) {
            $('.updateBtn').hide();
        }
    });
}
function onEditButtonClick(obj) {
     
    $(obj).hide();
    $(obj).parent().find('input[type=button]').eq(1).show();
    var arr = Array.from($(obj).parent().parent().children());
    for (var i = 1; i < arr.length - 1; i++) {
        $(arr[i]).attr("contenteditable", true);
    }
}

function updateRowContent(details) {
    var arr = Array.from($(details).parent().parent().children());
    for (var i = 1; i < arr.length - 1; i++) {
        $(arr[i]).removeAttr("contenteditable", true);
    }
    var employeeData = {};
    employeeData.ID = arr[0].children[0].id;
    employeeData.Name = arr[1].innerText;
    employeeData.ContactNumber = arr[2].innerText;
    employeeData.Address = arr[3].innerText;
    employeeData.Department = arr[4].innerText;
    employeeData.Designation = arr[5].innerText;

    var emp = {};
    emp.employee = employeeData;
    $.ajax({
        type: "POST",
        url: "/EmployeeService.asmx/UpdateEmployeeDetail",
        data: JSON.stringify(emp),
        contentType: "application/json; charset=utf-8",
        success: function (r) {
        },
        complete: function (r) {
            $('.updateBtn').hide();
        }
    });
    $(details).parent().find('input[type=button]').eq(0).show();
    $(details).hide();
    
}

function deleteSelectedRow(Id) {
    var emp = {};
    emp.id = Id;
    $.ajax({
        type: "POST",
        url: "/EmployeeService.asmx/DeleteSelectedEmployee",
        data: JSON.stringify(emp),
        contentType: "application/json; charset=utf-8",
        success: function (r) {
            $("#emp_tBody").find("tr:gt(0)").remove();
            BindTable();
        },
        error: function (r) {
            alert(r.responseText);
        },
        complete: function (r) {
            
        }
    });
}

function addNewRecord(obj) { 
    var employeeData = {};
    
    employeeData.Name = $('#firstRowNameText').val();
    employeeData.ContactNumber = $('#firstRowContactNumberText').val();
    employeeData.Address = $('#firstRowAddressText').val();
    employeeData.Department = $('#firstRowDepartmentText').val();
    employeeData.Designation = $('#firstRowDesignationText').val();

    var emp = {};
    emp.employee = employeeData;
    $.ajax({
        type: "POST",
        url: "/EmployeeService.asmx/AddNewRecord",
        data: JSON.stringify(emp),
        contentType: "application/json; charset=utf-8",
        success: function (r) {
            var parentId = $(obj).parents().eq(2).find("tr:last-child").find("td:first-child>input[type=hidden]").attr("id");
            var ID =parseInt(parentId) + 1;
            var tdId = $(obj).parents().eq(2).find("tr:last-child").find("td:first-child")[0].innerText;
            var id =parseInt(tdId) + 1;
            $("#emp_tBody").append("<tr>" +
                "<td><input type='Hidden' id=" + parentId + ">" + id + "</td>" +
                "<td>" + $('#firstRowNameText').val() + "</td>" +
                "<td>" + $('#firstRowContactNumberText').val() + "</td>" +
                "<td>" + $('#firstRowAddressText').val() + "</td>" +
                "<td>" + $('#firstRowDepartmentText').val() + "</td>" +
                "<td>" + $('#firstRowDesignationText').val() + "</td>" +
                "<td  style='width:20%'><input type='button' style='width:49%' class='btn btn-primary btn-md' id=\"edit" + parentId + "\" title='Edit' onclick='onEditButtonClick(this)' value='Edit'>" +
                "<input type='button' style='width:49%;display:none;' class='btn btn-primary btn-md updateBtn' id=\"Update" + parentId + "\" title='Update' onclick='updateRowContent(this)' value='Update'>" +
                "<input type='button' style='width:49%;margin-left:1%' class='btn btn-primary btn-md' id=\"delete" + parentId + "\" title='Delete' onclick='deleteSelectedRow(" + parentId + ")' value='Delete'>" +
                "</td > ");
        },
        error: function (r) {
            alert(r.responseText);
        },
        complete: function (r) {
            clearTextBox();
        }
    });
}
function clearTextBox() {
    $('#firstRowNameText').val("");
    $('#firstRowContactNumberText').val("");
    $('#firstRowAddressText').val("");
    $('#firstRowDepartmentText').val("");
    $('#firstRowDesignationText').val("");
}