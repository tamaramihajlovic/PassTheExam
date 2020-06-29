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
    public class QuizModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public string Predmet { get; set; }

        [Display(Name = "brojPoenaDb")]
        [BindProperty(SupportsGet = true)]
        public int brojPoenaDb { get; set; }

        [Display(Name = "datumZavrsetkaDb")]
        [BindProperty(SupportsGet = true)]
        public string datumZavrsetkaDb { get; set; }

        [Display(Name = "predmetDb")]
        [BindProperty(SupportsGet = true)]
        public string predmetDb { get; set; }

        private readonly UserManager<User> userManager;
        private readonly RIIDBContext db;

        public QuizModel(UserManager<User> userManager, RIIDBContext db)
        {
            this.db = db;
            this.userManager = userManager;
        }
        public void OnGet(string predmet)
        {
            Predmet = predmet;
        }

        public async Task<IActionResult> OnPostAsync()
        {
            var user = await userManager.GetUserAsync(User);
            QuizData quizData = new QuizData
            {
                Predmet = predmetDb,
                Ocena = 0,
                Tezina = 0,
                BrojOsvojenihPoena = brojPoenaDb,
                DatumZavrsetkaKviza = datumZavrsetkaDb,
                User = user
            };
            await db.QuizData.AddAsync(quizData);
            await db.SaveChangesAsync();

            return RedirectToPage("/UserPages/Kvizovi");
        }
    }
}
