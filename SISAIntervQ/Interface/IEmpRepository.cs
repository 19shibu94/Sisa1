using SISAIntervQ.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SISAIntervQ.Interface
{
    public interface IEmpRepository
    {
        IEnumerable<Employee2> GetNameList();
        IEnumerable<Employee2> GetList();
        IEnumerable<Employee2> GetListSingle(int NameCode);
        Int64 UpdateMethod(Employee2 employee2 ,int id);
    }
}
