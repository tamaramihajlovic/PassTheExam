using System;

namespace RIIEdition.Data
{
    public class Comments
    {
        public int Id{get;set;}

        public int? OdgovorId{get;set;}//Oznacava kome komentaru pripada

        public User User{get;set;}

        public int MaterijalDataId{get;set;}
        public string TekstKomentara{get;set;}

        public DateTime VremePostavljanja{get;set;}

        public string ocenjeniUseri{get;set;}

        public int BrojLajkova{get;set;}
    }
}