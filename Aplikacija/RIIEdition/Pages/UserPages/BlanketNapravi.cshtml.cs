using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RIIEdition.Data;

namespace RIIEdition.Pages.UserPages {
   

   [BindProperties]
    public class BlanketNapraviModel : PageModel {

        private readonly UserManager<User> userManager;
        private readonly RIIDBContext db;

        public BlanketNapraviModel (UserManager<User> userManager, RIIDBContext db) {
            this.db = db;
            this.userManager = userManager;

        }

        
        [Display (Name = "Ocena materijala")]
       

        public string OpisMaterijala { get; set; }
        
       
        [Display (Name = "Pitanja materijala")]
        public string PitanjaMaterijala { get; set; }

        [Display (Name = "Odgovori materijala")]
       
        public string OdgovoriMaterijala { get; set; }

        [Display (Name = "Naziv materijala")]
       
        public string NazivMaterijala { get; set; }

        [Display (Name = "Ocena materijala")]
       

        public double OcenaMaterijala { get; set; }

        [Display (Name = "Predmet materijala")]
       


        public string PredmetMaterijala { get; set; }

        
        public User CurrentUser{get;set;}
        public void OnGet () { }
        public async Task<IActionResult> OnPost () {

            
            var user = await userManager.GetUserAsync (User);
            MaterijalData materijalData = new MaterijalData {
                NazivMaterijala = NazivMaterijala,

                PredmetMaterijala = PredmetMaterijala,
                PitanjaMaterijala=PitanjaMaterijala,
                brojOcenaJedan=0,
                brojOcenaDva=0,
                brojOcenaTri=0,
                brojOcenaCetiri=0,
                brojOcenaPet=0,
                OdgovoriMaterijala=OdgovoriMaterijala,
                User=user
            };
            await db.MaterijalData.AddAsync(materijalData);
            await db.SaveChangesAsync();

            return RedirectToPage("/UserPages/MojiBlanketi");
        }
    }
}