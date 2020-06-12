using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RIIEdition.Data;

namespace RIIEdition.Pages.UserPages
{
    public class ProfilPageModel : PageModel
    {
        private readonly UserManager<User> userManager;

        public ProfilPageModel(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }
        [BindProperty(SupportsGet=true)]
        public User MyUser{get;set;}
        public async Task OnGetAsync()
        {
           MyUser=await  userManager.FindByNameAsync(User.Identity.Name);
            
            
        }
    }
}
