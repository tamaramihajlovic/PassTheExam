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
    public class ChangePasswordModel : PageModel
    {
        private readonly UserManager<User> userManager;

        public ChangePasswordModel(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }
        [BindProperty(SupportsGet = true)]
        public string Naziv { get; set; }
        public async Task<IActionResult> OnGetAsync(string userId, string token, string password)
        {

            var user = await userManager.FindByIdAsync(userId);
            var result = await userManager.ResetPasswordAsync(user, token, password);
            if (result.Succeeded)
                Naziv = "Uspesno ste promenili sifru";
            else
                Naziv = "Doslo je do greske pri menjaju sifre";
            return Page();
        }

    }
}