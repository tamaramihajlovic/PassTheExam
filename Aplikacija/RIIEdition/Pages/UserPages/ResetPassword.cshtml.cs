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
    public class ResetPasswordModel : PageModel
    {
        private readonly UserManager<User> userManager;

        public ResetPasswordModel(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }
        [BindProperty]
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [BindProperty]
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Nova sifra")]
        public string Password { get; set; }

        [BindProperty]
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Potvrdi novu sifra")]
        public string ConfirmPassword { get; set; }

        public string Token { get; set; }

        [BindProperty]
        public string Error { get; set; }

        public void OnGet()
        {
        }
        public async Task<IActionResult> OnPostAsync()
        {
            if (Password != ConfirmPassword)
            {
                ModelState.AddModelError("", "Passwrods do not match");
                return Page();
            }
            var user = await userManager.FindByEmailAsync(Email);
            var token = await userManager.GeneratePasswordResetTokenAsync(user);
            token = System.Web.HttpUtility.UrlEncode(token);
            var confirmLink = $@"https://localhost:5001/UserPages/ChangePassword?userId={user.Id}&token={token}&password={Password}";
            var body = $@"<h1>Saljemo vam novu sifru</h1><br />
                    <p>Nadamo se da cete uzivati u nasoj aplikaciji</p><br />
                    <a href={confirmLink}>Molimo kliknite na link da bi ste promenili sifru</a>";
            await SendEmail.sendEmail(Email, body, "Menjanje sifre");
            return RedirectToPage("/Index");
        }

    }
}
