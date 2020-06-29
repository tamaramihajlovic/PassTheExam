using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RIIEdition.Data;

namespace RIIEdition.Pages.UserPages
{
    public class ProfilPageModel : PageModel
    {
        private readonly RIIDBContext db;

        [BindProperty(SupportsGet = true)]
        public User MyUser { get; set; }

        private readonly UserManager<User> userManager;

        private readonly SignInManager<User> signInManager;

        [BindProperty(SupportsGet = true)]
        public IList<QuizData> QuizData { get; set; }

        [BindProperty(SupportsGet = true)]
        public IList<FlashCardData> FlashCardData { get; set; }

        [BindProperty]
        [Display(Name = "Izmenite korisnicku sliku")]
        public IFormFile Photo { get; set; }

        [BindProperty]
        [Display(Name = "Korisnicka slika")]
        public String fileName { get; set; }

        [BindProperty(SupportsGet = true)]
        public IList<CalendarData> CalendarDatas { get; set; }

        [BindProperty(SupportsGet = true)]
        public IList<MaterijalData> MaterijalData { get; set; }

        [BindProperty(SupportsGet = true)]
        public IList<User> UsersData { get; set; }

        public ProfilPageModel(RIIDBContext db, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.db = db;

            this.userManager = userManager;

            this.signInManager = signInManager;
        }

        public async Task OnGetAsync()
        {
            MyUser = await userManager.FindByNameAsync(User.Identity.Name);
            fileName = MyUser.PictureFilePath;
            MaterijalData = db.MaterijalData.ToList();
            QuizData = db.QuizData.Where(x => x.User == MyUser).ToList();
            FlashCardData = db.FlashCardData.Where(x => x.User == MyUser).ToList();
            CalendarDatas = db.CalendarData.Where(x => x.User == MyUser).ToList();
            UsersData = db.Users.ToList();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (Photo != null)
            {
                fileName = "wwwroot/UserPictures/" + Guid.NewGuid().ToString() + "." + Photo.FileName.Split('.')[1].TrimEnd('\\');
                Photo.CopyTo(new FileStream(fileName, FileMode.Create));
            }
            else
            {
                fileName = MyUser.PictureFilePath;
            }
            var user = await userManager.FindByNameAsync(User.Identity.Name);
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
            user.PictureFilePath = fileName;

            var result = await userManager.UpdateAsync(user);
            if (MyUser.UserName != User.Identity.Name)
            {
                await signInManager.SignOutAsync();
                return RedirectToPage("/Index");
            }

            if (result.Succeeded)
                return RedirectToPage("/UserPages/ProfilPage");
            else
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
                return Page();
            }
        }

        public async Task<bool> isAdmin(User user)
        {

            var users = await userManager.GetUsersInRoleAsync("Admin");
            if (users.Contains(user))
                return true;
            else return false;

        }
        public async Task<bool> isProfessor(User user)
        {

            var users = await userManager.GetUsersInRoleAsync("Profesot");
            if (users != null && users.Contains(user))
                return true;
            else return false;

        }
    }
}
