using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RIIEdition.Data;

namespace RIIEdition.Pages.UserPages
{

    public class ExternalLoginCallbackModel : PageModel
    {
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;

        public ExternalLoginCallbackModel(SignInManager<User> signInManager, UserManager<User> userManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }


        public async Task<IActionResult> OnGetAsync()
        {

            var info = await signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {

                ModelState.AddModelError("", "Error loading external logging information");
                return RedirectToPage("UserPages/Login");
            }
            var signInResult = await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey,
            isPersistent: false, bypassTwoFactor: true);

            if (signInResult.Succeeded)
            {

                return RedirectToPage("/Index");
            }
            else
            {

                var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                if (email != null)
                {

                    var user = await userManager.FindByEmailAsync(email);

                    await signInManager.SignInAsync(user, isPersistent: false);

                    return RedirectToPage("/Index");
                }

            }

            ModelState.AddModelError("", "Ne postoji registrovani korisnik sa ovom adresom");
            return RedirectToPage("/UserPages/Login");



        }

    }
}
