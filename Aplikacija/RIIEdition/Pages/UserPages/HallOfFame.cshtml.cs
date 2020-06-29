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

namespace MyApp.Namespace
{
    public class HallOfFameModel : PageModel
    {
        private readonly RIIDBContext db;

        [BindProperty(SupportsGet = true)]
        public User MyUser { get; set; }

        private readonly UserManager<User> userManager;

        [BindProperty(SupportsGet = true)]
        public IList<QuizData> QuizData { get; set; }

        [BindProperty(SupportsGet = true)]
        public IList<User> UsersData { get; set; }

        public HallOfFameModel(RIIDBContext db, UserManager<User> userManager)
        {
            this.db = db;

            this.userManager = userManager;
        }

        public async Task OnGetAsync()
        {
            MyUser = await userManager.FindByNameAsync(User.Identity.Name);
            QuizData = db.QuizData.ToList();
            UsersData = db.Users.ToList();
        }
    }
}
