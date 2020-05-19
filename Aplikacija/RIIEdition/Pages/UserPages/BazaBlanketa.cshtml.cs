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
    public class BazaBlanketaModel : PageModel
    {
         private readonly RIIDBContext db;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        [BindProperty(SupportsGet=true)]
        public IList<MaterijalData> MaterijalData{get;set;}
        
          public BazaBlanketaModel(RIIDBContext db,UserManager<User> userManager,SignInManager<User> signInManager)
        {
            this.db = db;
           
            this.signInManager = signInManager;
          
            this.userManager = userManager;
        }
        public void OnGet()
        {
            //Samo je potrebno da se ubaci za odredjenog usera
            MaterijalData=db.MaterijalData.ToList();
        }

    }
}
