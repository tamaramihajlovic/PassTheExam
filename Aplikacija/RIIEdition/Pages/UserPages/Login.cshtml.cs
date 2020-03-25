using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RIIEdition.Data;

namespace RIIEdition.Pages.UserPages
{
    public class LoginModel : PageModel
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
      [BindProperty]
      [Display(Name="Korisničko ime")]
      public string UserName{get;set;}
      [BindProperty]
      [Display(Name="Lozinka")]
      [DataType(DataType.Password)]
      public string Password{get;set;}
      [BindProperty]
      [Display(Name="Zapamti me")]
      public bool RememberMe{get;set;}
       
        public LoginModel(UserManager<User> userManager,SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }
        public void OnGet()
        {
        }
        public async Task<IActionResult> OnPostAsync()
        {
            var user=await userManager.FindByNameAsync(UserName);
         
            
            //On ne udje ovde
            if(user!= null && await userManager.CheckPasswordAsync(user,Password))
            {
                
                var result=await signInManager.PasswordSignInAsync(UserName,Password,RememberMe,false);
                if(result.Succeeded)
                {
                    
                   return RedirectToPage("/Index");
                }
                else
                {
                           
                    ModelState.AddModelError("","Logovanje nije uspelo. Molimo Vas da pokušate ponovo.");
                    
                }
            }
            else
            {
                 ModelState.AddModelError("","Pogrešili ste korisničko ime ili lozinku. Molimo Vas da pokušate ponovo.");
            }
            return Page();
        }
    }
}
