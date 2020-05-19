using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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
        [Display(Name="Korisnicko ime")]
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
        [Display(Name="Grad")]
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
        [BindProperty]
        [Display(Name="Dodajte korisnicku sliku")]
        public IFormFile Photo{get;set;}





        public void OnGet()
        {
        }
        public async Task<IActionResult> OnPostAsync()
        {
            if(!ModelState.IsValid)
            {
                
                return Page();
              
            }
            
            else
            {
                if(Password!=ConfirmPassword)
                {
                    SifreNisuJednake="Sifre se ne poklapaju";
                    return Page();
                }
                string fileName=null;
                if(Photo!=null)
                {
                    
                    fileName="wwwroot/UserPictures/"+Guid.NewGuid().ToString()+"."+Photo.FileName.Split('.')[1].TrimEnd('\\');
                    Photo.CopyTo(new FileStream(fileName,FileMode.Create));

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
                    UserName=UserName,
                    PictureFilePath=fileName
                };
                var result=await userManager.CreateAsync(user,Password);
               

            var res=await signInManager.PasswordSignInAsync(UserName,Password,false,false);

                
                if(result.Succeeded)
                {
                    var token=await userManager.GenerateEmailConfirmationTokenAsync(user);
                    token=System.Web.HttpUtility.UrlEncode(token);
                    var confirmLink=$@"https://localhost:5001/UserPages/ConfirmEmail?userId={user.Id}&token={token}";
                    var body=$@"<h1>Hvala Vam sto ste se registrovali</h1><br />
                    <p>Nadamo se da cete uzivati u nasoj aplikaciji</p><br />
                    <a href={confirmLink}>Molimo kliknite na link da bi ste se ulogovali</a>";
            await  SendEmail.sendEmail(Email,body,"Registrovanje u nasoj aplikaciji");
                    return RedirectToPage("/UserPages/ConfirmEmail");
                }
                
                    foreach(var error in result.Errors)
                    ModelState.AddModelError("",error.Description);
                    return Page();

               
                
              

               
            }
        }
    
    }
}
