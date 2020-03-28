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
    public class EditUsersRolesModel : PageModel
    {
         private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<User> userManager;
        
        [BindProperty(SupportsGet=true)]
        public string RoleName { get; set; }

        [BindProperty(SupportsGet=true)]
        public string Id { get; set; }

        [BindProperty(SupportsGet=true)]
        public List<User> Users{get;set;}=new List<User>();
        [BindProperty]
        public List<string> UserNames{get;set;}
        [BindProperty(SupportsGet=true)]
        public List<bool> AreChecked{get;set;}


        public EditUsersRolesModel(RoleManager<IdentityRole> roleManager,UserManager<User> userManager)
        {
            this.roleManager = roleManager;
            this.userManager = userManager;
        } 
        
        public async Task OnGetAsync(string roleName)
        {
            RoleName=roleName;
            var role=await roleManager.FindByNameAsync(RoleName);
            Id=role.Id;
            Users=userManager.Users.ToList();
            AreChecked=new List<bool>(Users.Count);
            for(int i=0;i<Users.Count;i++)
            {
                AreChecked.Add(await IsInRole(Users[i]) ? true :false) ;
            }
          

        }
        public async Task<bool> IsInRole(User user)
        {
            return await userManager.IsInRoleAsync(user,RoleName);
        }
        public async Task<IActionResult> OnPostAsync()
        {
           
            
            for(int i=0;i<userManager.Users.ToList().Count;i++)
            { 
                var user=userManager.Users.ToList()[i];

                Console.WriteLine(user.Name);
                if(UserNames.Contains(user.Id))
                {
                    if(!await IsInRole(user))
                  await  userManager.AddToRoleAsync(user,RoleName);
                }
                else
                {
                    if(await IsInRole(user))
                    {
                        await userManager.RemoveFromRoleAsync(user,RoleName);
                    }
                }
            }
            return RedirectToPage("/AdminPages/ListRoles");
        }
    }
}
