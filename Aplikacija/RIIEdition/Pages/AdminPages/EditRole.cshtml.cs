using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RIIEdition.Data;

namespace RIIEdition.Pages.AdminPages
{
    public class EditRoleModel : PageModel
    {
         private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<User> userManager;

        public EditRoleModel(RoleManager<IdentityRole> roleManager,UserManager<User> userManager)
        {
            this.roleManager = roleManager;
            this.userManager = userManager;
        } 
        [BindProperty(SupportsGet=true)]
        public string Id{get;set;}
       

        [BindProperty]
        [Required(ErrorMessage="Ovo polje je obavezno")]
        
        public string RoleName{get;set;}

        public List<User> Users{get;set;}=new List<User>();
        public async Task OnGetAsync(string id)
        {
          
          var role=await roleManager.FindByIdAsync(id);
            Id=role.Id;
            RoleName=role.Name;
            foreach(var user in userManager.Users)
            {
                if(await userManager.IsInRoleAsync(user,role.Name))
                    Users.Add(user);

            }
        }
        public async Task<IActionResult> OnPostAsync()
        {
         
          var role=await roleManager.FindByIdAsync(Id);
          role.Name=RoleName;
          var result=await roleManager.UpdateAsync(role);
          if(result.Succeeded)
          return RedirectToPage("/AdminPages/ListRoles");
          else
          {
              foreach (var error in result.Errors)
              {
                  ModelState.AddModelError("",error.Description);
              }
              return Page();
          }
        }

    }
}
