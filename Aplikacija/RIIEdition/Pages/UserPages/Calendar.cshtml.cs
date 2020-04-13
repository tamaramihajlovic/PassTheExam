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
    public class CalendarModel : PageModel
    {
        private readonly RIIDBContext db;
        private readonly UserManager<User> userManager;

        [BindProperty(SupportsGet=true)]
        public string[] Dogadjaji{get;set;}
        [BindProperty(SupportsGet=true)]
        public int [] Dani{get;set;}
        [BindProperty(SupportsGet=true)]
        public string[] Meseci{get;set;}
         [BindProperty(SupportsGet=true)]
        public bool[] CeliDani{get;set;}

        [BindProperty(SupportsGet=true)]
        public double[] Pocetak{get;set;}

        [BindProperty(SupportsGet=true)]
        public double[] Zavrsetak{get;set;}


        public CalendarModel(RIIDBContext db,UserManager<User> userManager)
        {
            this.db = db;
            this.userManager = userManager;
        }
      public int BrojacDana{get;set;}=0;
        
        
        public async Task OnGetAsync()
        {
            var user=await userManager.GetUserAsync(User);
            if(user!=null)
            {
           Dogadjaji= db.CalendarData.Where(x=>x.User==user).Select(x=>x.NazivDogadjaja).ToArray();
            Dani=db.CalendarData.Where(x=>x.User==user).Select(x=>x.Dan).ToArray();
             Meseci=db.CalendarData.Where(x=>x.User==user).Select(x=>x.Mesec).ToArray();
                
            }
            
        }
    }
}
