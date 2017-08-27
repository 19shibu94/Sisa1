using Dapper;
using SISAIntervQ.Interface;
using SISAIntervQ.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SISAIntervQ.Repository
{
    public class EmpRepository : IEmpRepository
    {
        private IDbConnection con;
        static string connectionString = ConfigurationManager.ConnectionStrings["EmpConstr"].ConnectionString;
        public EmpRepository()
            : base()
        {
            con = new SqlConnection(connectionString);
        }
        public IEnumerable<Employee2> GetNameList()
        {
            var p = new DynamicParameters();

          //  p.Add("name", name);
            const string storedProcedure = "NameList_GetList";
            var ret = con.Query<Employee2>(storedProcedure, commandType: CommandType.StoredProcedure);
            return ret;
        }
        public IEnumerable<Employee2> GetList()
        {
            var p = new DynamicParameters();

            //  p.Add("name", name);
            const string storedProcedure = "Emp_GetList";
            var ret = con.Query<Employee2>(storedProcedure, commandType: CommandType.StoredProcedure);
            return ret;

        }
        public IEnumerable<Employee2> GetListSingle(int NameCode)
        {
            var p = new DynamicParameters();

            p.Add("NameCode", NameCode);
            const string storedProcedure = "Emp_GetListSingle";
            var ret = con.Query<Employee2>(storedProcedure, p,commandType: CommandType.StoredProcedure);
            return ret;

        }
        public Int64 UpdateMethod(Employee2 employee2,int id)
        {
            var p = new DynamicParameters();

            p.Add("Name", employee2.Name);
            p.Add("RegisterId", employee2.RegisterId);
            p.Add("Mobile", employee2.Mobile);
            p.Add("Id", id);
            p.Add("Result", dbType: DbType.Int64, direction: ParameterDirection.Output);
            const string storedProcedure = "Emp_Update";
            var ret = con.Query<Employee2>(storedProcedure, p, commandType: CommandType.StoredProcedure);
            long Result = p.Get<long>("Result");
            return Result;
        }
    }
}