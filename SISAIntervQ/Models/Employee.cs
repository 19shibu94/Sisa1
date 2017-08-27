using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SISAIntervQ.Models
{
    public class Employee
    {
        public Employee2 employee2 { get; set; }
        public IEnumerable<Employee2> emp2Ienu { get; set; }
        public NameList nameList { get; set; }
    }
    public class Employee2
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int RegisterId { get; set; }
        public int Mobile { get; set; }

    }
   
    public class NameList
    {
        public int Id { get; set; }
        public string Name { get; set; }
       
    }
}