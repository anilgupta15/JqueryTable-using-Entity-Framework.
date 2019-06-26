<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CURDUsingJquery._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <script src="Scripts/Employee/Emp_DynamicTable.js"></script> 

    <div id="mainDiv" class="row" style="margin-top:2%">

     <table class="table table-bordered">
         <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Contact Number</th>
                 <th>Address</th>
                 <th>Department</th>
                 <th>Designation</th>
                 <th>Action</th>
             </tr>
         </thead>
         <tbody id="emp_tBody">
             <tr id="insertRow">
                 <td>

                 </td>
                 <td>
                     <input type="text" id="firstRowNameText" />
                 </td>
                  <td>
                      <input type="text" id="firstRowContactNumberText" />
                 </td>
                  <td>
                       <input type="text" id="firstRowAddressText" />
                 </td>
                  <td>
                       <input type="text" id="firstRowDepartmentText" />
                 </td>
                  <td>
                      <input type="text" id="firstRowDesignationText" />
                 </td>
                  <td>
                      <input type="button" value="Add Record" id="firstRowAddBtn" class="btn btn-success btn-md" style="width:49%" onclick="addNewRecord(this);"/>
                 </td>
             </tr>
         </tbody>
     </table>

    </div>

</asp:Content>
