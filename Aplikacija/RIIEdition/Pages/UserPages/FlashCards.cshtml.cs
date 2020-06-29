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
    public class FlashCardsModel : PageModel
    {


        [BindProperty(SupportsGet = true)]
        public string Predmet { get; set; }

        [Display(Name = "brojPoenaDbFK")]
        [BindProperty(SupportsGet = true)]
        public string brojPoenaDbFK { get; set; }

        [Display(Name = "datumZavrsetkaDbFK")]
        [BindProperty(SupportsGet = true)]
        public string datumZavrsetkaDbFK { get; set; }

        [Display(Name = "predmetDbFK")]
        [BindProperty(SupportsGet = true)]
        public string predmetDbFK { get; set; }

        private readonly UserManager<User> userManager;
        private readonly RIIDBContext db;

        public FlashCardsModel(UserManager<User> userManager, RIIDBContext db)
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
            FlashCardData flashCardData = new FlashCardData
            {
                Opis = brojPoenaDbFK,
                Ocena = 0,
                Tezina = 0,
                NazivPredmeta = predmetDbFK,
                DatumZavrsetkaFK = datumZavrsetkaDbFK,
                User = user
            };
            await db.FlashCardData.AddAsync(flashCardData);
            await db.SaveChangesAsync();

            return RedirectToPage("/UserPages/Kvizovi");
        }
    }
}
