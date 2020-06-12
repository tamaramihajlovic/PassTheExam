using System;
using System.Collections.Generic;
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

        public int Level{get;set;}

        public int UkupanBrojOsvojenihPoena{get;set;}

        public int BrojLajkova{get;set;}
        
        public DateTime YearOfBirth {get;set;}


        public string OcenjeniBlanketi{get;set;}
        public IList<CalendarData> CalendarData{get;set;}

        public IList<Comments> Comments{get;set;}

         public IList<MaterijalData> MaterijalData{get;set;}

         public IList<QuizData> QuizData{get;set;}

         

         public IList<FlashCardData> FlashCardData{get;set;}
    }
}