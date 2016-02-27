using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MemorizeAmerica.Startup))]
namespace MemorizeAmerica
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
