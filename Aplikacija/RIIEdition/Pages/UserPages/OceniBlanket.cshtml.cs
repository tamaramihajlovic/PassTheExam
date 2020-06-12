using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RIIEdition.Data;

namespace RIIEdition.Pages.UserPages
{
    public class OceniBlanketModel : PageModel
    {
        private readonly RIIDBContext db;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
          public OceniBlanketModel(RIIDBContext db,UserManager<User> userManager,SignInManager<User> signInManager)
        {
            this.db = db;
           
            this.signInManager = signInManager;
          
            this.userManager = userManager;
        }

        [BindProperty(SupportsGet=true)]
        public MaterijalData MaterijalData{get;set;}
           [BindProperty(SupportsGet=true)]
        public IList<string> Pitanja{get;set;}
          [BindProperty(SupportsGet=true)]
        public IList<string> Odgovori{get;set;}

        [BindProperty]
        public int Ocena{get;set;}
        [BindProperty(SupportsGet=true)]
        public User MyUser{get;set;}
        [BindProperty]
         [Required(ErrorMessage="Obavezno polje")]
        public string Komentar{get;set;}
         [BindProperty]
         [Required(ErrorMessage="Obavezno polje")]
         
        public string Odgovor{get;set;}
         [BindProperty(SupportsGet=true)]
         public IList<Comments> Komentari{get;set;}
         [BindProperty]
         public int KomentarId{get;set;}
        public async Task OnGetAsync(int id)
        {
            MyUser=await userManager.GetUserAsync(User);
            MaterijalData=await db.MaterijalData.FindAsync(id);
             Pitanja=MaterijalData.PitanjaMaterijala.Split("###");
            Odgovori=MaterijalData.OdgovoriMaterijala.Split("###");
            Komentari= await db.Komentari.Where(x=>x.MaterijalDataId==id).Include(y=>y.User).ToListAsync();
            
        }
        public async Task<IActionResult> OnPostOceniAsync(int id){
            Console.WriteLine(id);
            MaterijalData=await db.MaterijalData.FindAsync(id);
            var user=await userManager.GetUserAsync(User);
          
          //Admin moze da ocenjuje koliko puta hoce
           if(await userManager.IsInRoleAsync(user,"Admin")){
               oceniMaterijal(MaterijalData);
               db.MaterijalData.Update(MaterijalData);
              await db.SaveChangesAsync();
           }
           else{//akoo nije admin
                string ocenjeniBlanketi=user.OcenjeniBlanketi;
                IList<string> listaBlanketa;
                if(user.OcenjeniBlanketi==null){
                    user.OcenjeniBlanketi=MaterijalData.Id.ToString()+",";
                   await userManager.UpdateAsync(user);
                   oceniMaterijal(MaterijalData);
                         db.MaterijalData.Update(MaterijalData);
                         await db.SaveChangesAsync();
                }
                else{
                    listaBlanketa=user.OcenjeniBlanketi.Split(",").ToList();
                    if(listaBlanketa.Contains(MaterijalData.Id.ToString())){
                        
                        Console.WriteLine("Vec postoji ovakav blanket u bazi");
                    }
                    else{
                        user.OcenjeniBlanketi+=(MaterijalData.Id.ToString()+",");
                         await userManager.UpdateAsync(user);
                         oceniMaterijal(MaterijalData);
                         db.MaterijalData.Update(MaterijalData);
                         await db.SaveChangesAsync();
                    }
                }
                Console.WriteLine(ocenjeniBlanketi);
           }
          
           
            return RedirectToPage("/UserPages/BazaBlanketa");
        }
        public void oceniMaterijal(MaterijalData materijalData){
            if(Ocena==1){
                materijalData.brojOcenaJedan+=1;
            }
            else if(Ocena==2){
                materijalData.brojOcenaDva+=1;
            }
             else if(Ocena==3){
                materijalData.brojOcenaTri+=1;
            }
             else if(Ocena==4){
                materijalData.brojOcenaCetiri+=1;
            }
             else if(Ocena==5){
                materijalData.brojOcenaPet+=1;
            }
        }
        public async Task<IActionResult> OnPostKomentarisi(int id){
              var user=await userManager.GetUserAsync(User);
            var komentar=new Comments{
                OdgovorId=null,
                User=user,
                VremePostavljanja=DateTime.Now,
                BrojLajkova=0,
                TekstKomentara=Komentar,
                MaterijalDataId=id
            };
               await db.Komentari.AddAsync(komentar);
             await  db.SaveChangesAsync();
            return RedirectToPage("/UserPages/BazaBlanketa");
        }
        public string vratiTacnoVreme(DateTime vreme){
            var time=DateTime.Now-vreme;
           
          if(Int32.Parse(time.TotalSeconds.ToString().Split(",")[0])<60)
          return time.TotalSeconds.ToString().Split(",")[0]+" sekundi";
          else if(Int32.Parse(time.TotalMinutes.ToString().Split(",")[0])<60)
          return time.TotalMinutes.ToString().Split(",")[0]+" minuta";
          else if(Int32.Parse(time.TotalHours.ToString().Split(",")[0])<24)
         return  time.TotalHours.ToString().Split(",")[0]+" sati";
          else return  time.TotalDays.ToString().Split(",")[0]+" dana";


            
        }
        public async Task<IActionResult> OnPostObrisiAsync(int id){
            var komentar=await db.Komentari.FindAsync(id);
            IList<Comments> listaOdgovoraZaKomentar=await db.Komentari.Where(x=>x.OdgovorId==id).ToListAsync();
            if(listaOdgovoraZaKomentar.Count>0)
            for (int i=0; i<listaOdgovoraZaKomentar.Count;i++)
            {
                db.Komentari.Remove(listaOdgovoraZaKomentar[i]);
               await db.SaveChangesAsync();

            }
            db.Komentari.Remove(komentar);
            await db.SaveChangesAsync();
            return RedirectToPage("/UserPages/BazaBlanketa");
        }
         public async Task<IActionResult> OnPostLajkujAsync(int id){
             var komentar=await db.Komentari.FindAsync(id);
            var user=await userManager.GetUserAsync(User);
            
            if(await userManager.IsInRoleAsync(user,"Admin")){
                komentar.BrojLajkova+=1;
                db.Komentari.Update(komentar);
               await db.SaveChangesAsync();
            }
            else{
                if(komentar.ocenjeniUseri==null){
                    komentar.ocenjeniUseri=user.Id.ToString()+',';
                    komentar.BrojLajkova+=1;
                db.Komentari.Update(komentar);
               await db.SaveChangesAsync();
                }
                else{
                    var lista=komentar.ocenjeniUseri.Split(',');
                    if(!lista.Contains(user.Id.ToString())){
                         komentar.ocenjeniUseri=user.Id.ToString()+',';
                    komentar.BrojLajkova+=1;
                db.Komentari.Update(komentar);
               await db.SaveChangesAsync();

                    }

                    
                }
            }
                
              return RedirectToPage("/UserPages/OceniBlanket",new {id=komentar.MaterijalDataId});
         }
         public async Task<bool> isAdmin(User user){

             var users=await userManager.GetUsersInRoleAsync("Admin");
             if(users.Contains(user))
             return true;
             else return false;

         }
          public async Task<bool> isProfessor(User user){

             var users=await userManager.GetUsersInRoleAsync("Profesot");
             if(users!=null && users.Contains(user))
             return true;
             else return false;

         }
         public IList<Comments> nadjiOdgovoreZaDatiKomentar(Comments komentar){
             var list=db.Komentari.Where(x=>x.OdgovorId==komentar.Id).Include(x=>x.User).ToList();
           
             return list;

         }
           public IList<Comments> CistiKomentari(int id){
             return db.Komentari.Where(x=>x.OdgovorId==null && x.MaterijalDataId==id).Include(x=>x.User).ToList();

         }
            public async Task<IActionResult> OnPostOdgovori(int id){
              var user=await userManager.GetUserAsync(User);
            var komentar=new Comments{
                OdgovorId=KomentarId,
                User=user,
                VremePostavljanja=DateTime.Now,
                BrojLajkova=0,
                TekstKomentara=Odgovor,
                MaterijalDataId=id
            };
               await db.Komentari.AddAsync(komentar);
             await  db.SaveChangesAsync();
            return RedirectToPage("/UserPages/BazaBlanketa");
        }
    }
}
