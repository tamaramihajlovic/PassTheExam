using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RIIEdition.Data;

namespace RIIEdition.Pages.UserPages
{

    
    public class MojiBlanketiModel : PageModel
    {
        private readonly RIIDBContext db;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        [BindProperty(SupportsGet=true)]
        public IList<MaterijalData> MaterijalData{get;set;}

        [BindProperty]
        public MaterijalData SelectedData{get;set;}

        [BindProperty]
        public IList<string> Pitanja{get;set;}
          [BindProperty]
        public IList<string> Odgovori{get;set;}

          public MojiBlanketiModel(RIIDBContext db,UserManager<User> userManager,SignInManager<User> signInManager)
        {
            this.db = db;
           
            this.signInManager = signInManager;
          
            this.userManager = userManager;
        }
        public async Task OnGetAsync()
        {
            //Samo je potrebno da se ubaci za odredjenog usera
            var user=await userManager.GetUserAsync(User);
            MaterijalData=db.MaterijalData.Where(x=>x.User==user).ToList();
        }
        public async Task<IActionResult> OnPostIzbrisi(int id)
        {
            var data=await db.MaterijalData.FindAsync(id);
            db.Remove(data);
           await db.SaveChangesAsync();
            MaterijalData=await db.MaterijalData.ToListAsync();
            
            return Page();
        }
         public async  Task<IActionResult> OnPostPrikazi(int id)
        {
            MaterijalData=db.MaterijalData.ToList();
            SelectedData=await db.MaterijalData.FindAsync(id);
            Pitanja=SelectedData.PitanjaMaterijala.Split("###");
            Odgovori=SelectedData.OdgovoriMaterijala.Split("###");
            return Page();
        }

        
    }
}
