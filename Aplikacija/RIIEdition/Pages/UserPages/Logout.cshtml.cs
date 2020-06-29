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
    public class LogoutModel : PageModel
    {
        private readonly SignInManager<User> signInManager;

        public LogoutModel(SignInManager<User> signInManager)
        {
            this.signInManager = signInManager;
        }
        public void OnGet()
        {

        }
        public async Task<IActionResult> OnPostAsync()
        {
            await signInManager.SignOutAsync();
            return RedirectToPage("/Index");
        }

    }
}
