using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RIIEdition.Pages.UserPages
{
    public class QuizModel : PageModel
    {
        [BindProperty(SupportsGet=true)]
        public string Predmet{get;set;}
        public void OnGet(string predmet)
        {
            Predmet=predmet;
        }
    }
}
