namespace RIIEdition.Data
{
    public class QuizData
    {
        public int Id{get;set;}
            
        public string Predmet{get;set;}

        public int Ocena{get;set;}

        public int Tezina{get;set;}

        public int BrojOsvojenihPoena{get;set;}

        public string DatumZavrsetkaKviza{get;set;}

        public User User{get;set;}
    }
}