using System;
using Microsoft.AspNetCore.Identity;

namespace RIIEdition.Data
{
    public class User:IdentityUser
    {
        public int Index{get;set;}

        public int YearOfStudy{get;set;}

        public string Name{get;set;}

        public string LastName{get;set;}

        public char Gender{get;set;}

        public string City {get;set;}

        public string PictureFilePath{get;set;}
        
        public DateTime YearOfBirth {get;set;}
    }
}