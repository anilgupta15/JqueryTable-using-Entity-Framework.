using CURDUsingJquery.Context;
using CURDUsingJquery.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace CURDUsingJquery.BusinessService
{
    public class EmployeeService
    {
        EmployeeContext _employeeContext = new EmployeeContext();

        [WebMethod]
        public List<Employee> GetAllEmployeeDetails()
        {
            return _employeeContext.Employees.ToList();
        }
    }
}