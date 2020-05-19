using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
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
        [Required(ErrorMessage="Ovo polje je obavezno")]
      [BindProperty]
      [Display(Name="Korisnicko ime")]
      public string UserName{get;set;}
      [BindProperty]
      [Required(ErrorMessage="Ovo polje je obavezno")]
      [Display(Name="Lozinka")]
      [DataType(DataType.Password)]
      public string Password{get;set;}
      [BindProperty]

      [Display(Name="Zapamti me")]
      public bool RememberMe{get;set;}
      [BindProperty(SupportsGet=true)]
      public IList<AuthenticationScheme> ExternalLogins{get;set;}
       
        public LoginModel(UserManager<User> userManager,SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }
        public async Task OnGetAsync()
        {
            ExternalLogins=(await signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
        }
        public async Task<IActionResult> OnPostAsync()
        {
            ExternalLogins=(await signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
            if(!ModelState.IsValid)
            {
                return Page();
            }
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
                           
                    ModelState.AddModelError("","Logovanje nije uspelo, molimo pokusajte ponovo");
                    
                }
            }
            else
            {
                 ModelState.AddModelError("","Pogresili ste sifru ili korisnicko ime");
            }
            return Page();
        }
        public IActionResult OnPostGoogle(string provider)
        {
            
            var redirectUrl="https://localhost:5001/UserPages/ExternalLoginCallback";
            var properties=signInManager.ConfigureExternalAuthenticationProperties(provider,redirectUrl);
            return new ChallengeResult(provider,properties);
        }
    }
}
