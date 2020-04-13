using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RIIEdition.Data;

namespace RIIEdition.Pages.AdminPages
{
    public class ListUsersModel : PageModel
    {
        public ListUsersModel(UserManager<User> userManager,RoleManager<IdentityRole> roleManager)
        {
            UserManager = userManager;
            RoleManager = roleManager;
        }

        public UserManager<User> UserManager { get; }
        public RoleManager<IdentityRole> RoleManager { get; }

        [BindProperty(SupportsGet=true)]
        public IEnumerable<User> Users{get;set;}
        public void OnGet()
        {
            Users= UserManager.Users;
            
        }
        public async Task<IActionResult> OnPostAsync(string id)
        {
           var user=await UserManager.FindByIdAsync(id);
          var result=await UserManager.DeleteAsync(user);
          if(!result.Succeeded)
          {
              foreach (var error in result.Errors)
              {
                  ModelState.AddModelError("",error.Description);
                  return Page();
              }
          }
          return RedirectToPage();
            
        }
    }
}
