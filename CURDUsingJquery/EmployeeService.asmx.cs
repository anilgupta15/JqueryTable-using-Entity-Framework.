using CURDUsingJquery.Context;
using CURDUsingJquery.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace CURDUsingJquery
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]

        public string HelloWorld()
        {
            return "Hello World";
        }

        EmployeeContext _employeeContext = new EmployeeContext();

        [WebMethod]
        public List<Employee> GetAllEmployeeDetails()
        {
            return _employeeContext.Employees.ToList();
        }

        [WebMethod]
        public int UpdateEmployeeDetail(Employee employee)
        {
            _employeeContext.Employees.Add(employee);
            _employeeContext.Entry<Employee>(employee).State = System.Data.EntityState.Modified;
            int i = _employeeContext.SaveChanges();
            return i;
        }

        [WebMethod]
        public int DeleteSelectedEmployee(int id)
        {
            var employer = new Employee { ID = Convert.ToInt32(id) };
            _employeeContext.Entry<Employee>(employer).State = System.Data.EntityState.Deleted;
            int i = _employeeContext.SaveChanges();
            return i;
        }

        [WebMethod]
        public int AddNewRecord(Employee employee)
        {
            int i = 0;
            if (!string.IsNullOrWhiteSpace(employee.Name))
            {
                _employeeContext.Employees.Add(employee);
                 i = _employeeContext.SaveChanges();
                return i;
            }
            return i;
        }
    }
}
