using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Identity;
using RIIEdition.Data;
using System.ComponentModel.DataAnnotations;

namespace RIIEdition.Pages.UserPages
{
    public class UserPasswordChangeModel : PageModel
    {
        [BindProperty]
        [DataType(DataType.Password)]
        [Required]
        public string CurrentPassword { get; set; }

        [BindProperty]
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Nova sifra")]
        public string NewPassword { get; set; }

        [BindProperty]
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Potvrdi novu sifru")]
        public string ConfirmNewPassword { get; set; }

        [BindProperty]
        public string Error { get; set; }

        [BindProperty(SupportsGet = true)]
        public User MyUser { get; set; }

        [BindProperty(SupportsGet = true)]
        public string Email { set; get; }

        private readonly UserManager<User> userManager;

        private readonly SignInManager<User> signInManager;

        private readonly RIIDBContext db;
        public UserPasswordChangeModel(RIIDBContext db, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.db = db;
            this.userManager = userManager;
            this.signInManager = signInManager;
        }
        public async Task OnGetAsync()
        {
            MyUser = await userManager.FindByNameAsync(User.Identity.Name);
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (NewPassword != null)
            {
                var user = await userManager.FindByNameAsync(User.Identity.Name);
                if (Email == null) { /**/ }
                if (NewPassword != ConfirmNewPassword)
                {
                    ModelState.AddModelError("", "Passwords do not match");
                    return Page();
                }

                // compute the new hash string
                var newPassword = userManager.PasswordHasher.HashPassword(user, NewPassword);
                user.PasswordHash = newPassword;
                var res = await userManager.UpdateAsync(user);
                await signInManager.SignOutAsync();
                if (NewPassword != null) { return RedirectToPage("/UserPages/Login"); }
                else { return Page(); }

            }
            return RedirectToPage("/UserPages/UserPasswordChange");
        }
    }
}


