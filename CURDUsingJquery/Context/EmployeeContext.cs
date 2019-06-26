using CURDUsingJquery.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CURDUsingJquery.Context
{
    public class EmployeeContext:DbContext
    {
        public EmployeeContext():base("name=EmployeeDbContext")
        {

        }

       public DbSet<Employee> Employees { get; set; }
    }
}