namespace RIIEdition.Data
{
    public class FlashCardData
    {
        
            public int Id{get;set;}
            
            public string Opis{get;set;}

            public int Ocena{get;set;}

            public int Tezina{get;set;}

            public string NazivPredmeta{get;set;}
            
            public User User{get;set;}
    }
}