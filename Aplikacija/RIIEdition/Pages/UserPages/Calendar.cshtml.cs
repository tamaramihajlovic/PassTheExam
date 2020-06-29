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
    public class CalendarModel : PageModel
    {
        private readonly RIIDBContext db;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        [BindProperty(SupportsGet = true)]
        public string[] Dogadjaji { get; set; }
        [BindProperty(SupportsGet = true)]
        public int[] Dani { get; set; }
        [BindProperty(SupportsGet = true)]
        public string[] Meseci { get; set; }
        [BindProperty(SupportsGet = true)]
        public bool[] CeliDani { get; set; }

        [BindProperty(SupportsGet = true)]
        public double[] Pocetak { get; set; }

        [BindProperty(SupportsGet = true)]
        public double[] Zavrsetak { get; set; }
        [BindProperty(SupportsGet = true)]
        public string[] OpisDogadjaja { get; set; }
        [BindProperty(SupportsGet = true)]
        public IList<CalendarData> CalendarDatas { get; set; }
        //Post propertiji
        [BindProperty]
        [Required(ErrorMessage = "Naziv dogadjaja je obavezan")]
        public string NoviDogadjaj { get; set; }
        [BindProperty]
        public string NoviOpisDogadjaja { get; set; }

        [Display(Name = "Celodnevni dogadjaj")]
        [BindProperty]
        public bool CeoDan { get; set; }
        [BindProperty]
        public string Mesec { get; set; }
        [BindProperty]
        public int Dan { get; set; }
        [BindProperty]
        [Display(Name = "Pocetak dogadjaja")]
        public string NoviPocetak { get; set; }
        [BindProperty]
        [Display(Name = "Kraj dogadjaja")]
        public string NoviZavrsetak { get; set; }



        public CalendarModel(RIIDBContext db, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.db = db;
            this.userManager = userManager;
            this.signInManager = signInManager;
        }


        public async Task OnGetAsync()
        {
            var user = await userManager.GetUserAsync(User);
            if (user != null)
            {
                CalendarDatas = db.CalendarData.Where(x => x.User == user).ToList();

            }

        }
        public async Task<IActionResult> OnPostAsync()
        {
            var user = await userManager.GetUserAsync(User);
            if (!ModelState.IsValid)
            {

                return Page();
            }

            else
            {

                CalendarData date = new CalendarData
                {
                    Dan = Dan,
                    Mesec = Mesec,
                    User = user,
                    Pocetak = NoviPocetak,
                    Zavrestak = NoviZavrsetak,
                    opisDogadjaja = NoviOpisDogadjaja,
                    NazivDogadjaja = NoviDogadjaj,
                    CeoDan = CeoDan
                };
                await db.CalendarData.AddAsync(date);
                await db.SaveChangesAsync();

                return RedirectToPage("/UserPages/Calendar");
            }

        }
        public async Task<IActionResult> OnPostDeleteAsync(int Id)
        {
            var item = await db.CalendarData.FindAsync(Id);
            db.CalendarData.Remove(item);
            await db.SaveChangesAsync();
            return RedirectToPage();
        }

    }
}
