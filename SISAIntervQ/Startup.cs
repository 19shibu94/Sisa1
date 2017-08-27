using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SISAIntervQ.Startup))]
namespace SISAIntervQ
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
