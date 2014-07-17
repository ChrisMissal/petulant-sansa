namespace TheApp.Controllers
{
    using System.Web.Mvc;

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Compu-Global-Hyper-Mega-Net";
            return View();
        }
    }
}
