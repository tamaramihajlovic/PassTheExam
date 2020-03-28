using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RIIEdition.Pages.AdminPages
{
    public class CreateRoleModel : PageModel
    {
       private readonly RoleManager<IdentityRole> roleManager;

        public CreateRoleModel(RoleManager<IdentityRole> roleManager)
        {
            this.roleManager = roleManager;
        } 
        [BindProperty]
        public string RoleName { get; set; }
        public void OnGet()
        {
        }
        public async Task<IActionResult> OnPost()
        {
            if(!ModelState.IsValid)
            return Page();
            var role=new IdentityRole()
            {
                Name=RoleName
            };
            var result=await roleManager.CreateAsync(role);
            if(result.Succeeded)
            {
                return RedirectToPage("/Index");
            }
            else
            {
                foreach(var error in result.Errors)
                ModelState.AddModelError("",error.Description);

            }
            return Page();
        }
    }
}
