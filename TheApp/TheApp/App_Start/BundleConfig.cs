using System.Web;
using System.Web.Optimization;

namespace TheApp
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/base").Include(
                        "~/Content/css/base.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-*",
                        "~/Scripts/angular-ui/ui-bootstrap.js"
                        ));
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Content/app/app.js"));
        }
    }
}