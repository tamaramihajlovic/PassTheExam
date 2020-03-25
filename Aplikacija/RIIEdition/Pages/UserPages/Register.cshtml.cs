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
        [Required(ErrorMessage="Morate uneti korisničko ime.")]
        [Display(Name="Korisničko ime")]
        public string UserName{get;set;}


         [BindProperty]
        [Required(ErrorMessage="Morate uneti e-mail adresu.")]
        [DataType(DataType.EmailAddress)]
        [Display(Name="E-mail adresa")]

        public string Email{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti lozinku.")]
        [DataType(DataType.Password)]
        [Display(Name="Lozinka")]
        public string Password{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate potvrditi lozinku.")]
        [DataType(DataType.Password)]
        [Display(Name="Potvrdite lozinku")]
        public string ConfirmPassword{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti grad.")]
        [Display(Name="Grad")]
        public string City{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti broj indeksa.")]
        [Range(0,22000)]
        [Display(Name="Broj indeksa")]
        public int Index{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti ime.")]
        [Display(Name="Ime")]
        public string Name{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti prezime.")]
        [Display(Name="Prezime")]

        public string LastName{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti godinu studija.")]
        [Display(Name="Godina studija")]
        [Range(1,4)]
        
        
        public int YearOfStudy{get;set;}
        [BindProperty]
        [Required(ErrorMessage="Morate uneti pol.")]
        [Display(Name="Pol")]
        public char Gender{get;set;}


        [BindProperty]
        [Required(ErrorMessage="Morate uneti godinu rođenja.")]
        [DataType(DataType.Date)]
        [Display(Name="Godina rođenja")]
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
                    SifreNisuJednake="Lozinke koje ste uneli se ne poklapaju. Pokušajte ponovo.";
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
               

              //var res=await signInManager.PasswordSignInAsync(UserName,Password,false,false);

                
                if(result.Succeeded)
                {
                    var token=await userManager.GenerateEmailConfirmationTokenAsync(user);
                    token=System.Web.HttpUtility.UrlEncode(token);
                    var confirmLink=$@"https://localhost:5001/UserPages/ConfirmEmail?userId={user.Id}&token={token}";
                    var body=$@"<h1>Hvala Vam što ste se registrovali.</h1><br />
                    <a href={confirmLink}>Logovanje</a>";
                    await  SendEmail.sendEmail(Email,body,"Registrovanje");
                    return RedirectToPage("/UserPages/ConfirmEmail");
                }
                
                    foreach(var error in result.Errors)
                    ModelState.AddModelError("",error.Description);
                    return Page();
              
            }
        }
    
    }
}
