using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RIIEdition.Pages.AdminPages
{
    public class ListRolesModel : PageModel
    {
          private readonly RoleManager<IdentityRole> roleManager;

        public ListRolesModel(RoleManager<IdentityRole> roleManager)
        {
            this.roleManager = roleManager;
        }
        [BindProperty(SupportsGet=true)]
        public IEnumerable<IdentityRole> Roles{get;set;}
        public void OnGet()
        {
            Roles=roleManager.Roles;
        }
    }
}
