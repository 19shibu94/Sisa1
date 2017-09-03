using SISAIntervQ.Interface;
using SISAIntervQ.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SISAIntervQ.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IEmpRepository _stateRepo;
        public EmployeeController(IEmpRepository stateRepo)
        {
            _stateRepo = stateRepo;

        }

        // GET: Employee
        public ActionResult Index(int p)
        {
            IEnumerable<Employee2> emp2 = new List<Employee2>();
            Employee2 emp3 = new Employee2();
            if (p == 0)
            {
                Employee emp = new Employee();
                
                ViewBag.NameList = (from n in _stateRepo.GetNameList() select new SelectListItem { Text = n.Name, Value = n.Id.ToString() }).ToList();
                emp2 = _stateRepo.GetList();
                ViewBag.first = 0;
                return View(emp2);
            }
            else
            {
                ViewBag.NameList = (from n in _stateRepo.GetNameList() select new SelectListItem { Text = n.Name, Value = n.Id.ToString() }).ToList();
                emp2 = _stateRepo.GetListSingle(p);
                ViewBag.first = 1;
                return View(emp2);
            }
            
        }

        public ActionResult NameList(int NameCode)
        {


            return RedirectToAction("Index", new { p = NameCode });
        }


        // GET: Employee/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Employee/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Employee/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Employee/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Employee/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, Employee2 employee2)
        {
            try
            {
               Int64 res= _stateRepo.UpdateMethod(employee2,id);

               return RedirectToAction("Index", new { p = 0 });
            }
            catch
            {
                return View();
            }
        }

        // GET: Employee/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Employee/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
