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
        [BindProperty(SupportsGet=true)]
        public User MyUser{get;set;}

        private readonly UserManager<User> userManager;

        public ProfilPageModel(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }

        public async Task OnGetAsync()
        {
           MyUser=await  userManager.FindByNameAsync(User.Identity.Name);
        }

        public async Task<IActionResult> OnPostAsync()
        {
          var user = await  userManager.FindByNameAsync(User.Identity.Name);
          user.UserName = MyUser.UserName; 
          user.Email = MyUser.Email;
          user.Name = MyUser.Name;
          user.LastName = MyUser.LastName;
          user.Gender = MyUser.Gender;
          user.YearOfBirth = MyUser.YearOfBirth;
          user.PhoneNumber = MyUser.PhoneNumber;
          user.City = MyUser.City;
          user.Index = MyUser.Index;
          user.YearOfStudy = MyUser.YearOfStudy;
         
          var result=await userManager.UpdateAsync(user);
          if(result.Succeeded)
          return RedirectToPage("/UserPages/ProfilPage");
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
