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
    public class RegisterModel : PageModel
    {
        
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
       
        public RegisterModel(UserManager<User> userManager,SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }
        [BindProperty]
        [Required(ErrorMessage="Morate uneti korisnicko ime")]
        public string UserName{get;set;}


         [BindProperty]
        [Required(ErrorMessage="Morate uneti email adresu")]
        [DataType(DataType.EmailAddress)]

        public string Email{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti sifru")]
        [DataType(DataType.Password)]
        [Display(Name="Lozinka")]
        public string Password{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate potvrditi lozinku")]
        [DataType(DataType.Password)]
        [Display(Name="Potvrdi Lozinku")]
        public string ConfirmPassword{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Grad je obavezno polje")]
        public string City{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Broj indeksa je obavezno polje")]
        [Range(10000,20000)]
        [Display(Name="Broj Indeksa")]
        public int Index{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Ime je obavezno polje")]
        [Display(Name="Ime")]
        public string Name{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Prezime je obavezno polje")]
        [Display(Name="Prezime")]

        public string LastName{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Godina studija je obavezno polje")]
        [Display(Name="Godina studija")]
        [Range(1,4)]
        
        
        public int YearOfStudy{get;set;}
        [BindProperty]
        [Required(ErrorMessage="pol je obavezno polje")]
        [Display(Name="Pol")]
        public char Gender{get;set;}


        [BindProperty]
        [Required(ErrorMessage="Godina Rodjenja je obavezno polje")]
        [DataType(DataType.Date)]
        [Display(Name="Godina rodjenja")]
        public DateTime YearOfBirth{get;set;}

        [BindProperty]
        public string SifreNisuJednake{get;set;}





        public void OnGet()
        {
        }
        public async Task<IActionResult> OnPostAsync()
        {
            if(!ModelState.IsValid)
            return Page();
            else
            {
                if(Password!=ConfirmPassword)
                {
                    SifreNisuJednake="Sifre se ne poklapaju";
                    return Page();
                }
                var user =new User{
                    Email=Email,
                    City=City,
                    Name=Name,
                    LastName=LastName,
                    Index=Index,
                    YearOfBirth=YearOfBirth,
                    YearOfStudy=YearOfStudy,
                    Gender=Gender,
                    UserName=UserName
                };
                var result=await userManager.CreateAsync(user,Password);
                if(!result.Succeeded)
                {
                    foreach(var error in result.Errors)
                    ModelState.AddModelError("",error.Description);
                    return Page();

                }
                return RedirectToPage("/Index");

               
            }
        }
    
    }
}
