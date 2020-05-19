namespace RIIEdition.Data
{
    public class MaterijalData
    {
            public int Id{get;set;}
            
            public string NazivMaterijala{get;set;}
            public string PitanjaMaterijala{get;set;}

            public string OdgovoriMaterijala{get;set;}

            public int brojOcenaJedan{get;set;}

            public int brojOcenaDva{get;set;}

            public int brojOcenaTri{get;set;}
            public int brojOcenaCetiri{get;set;}
            public int brojOcenaPet{get;set;}



            public string PredmetMaterijala{get;set;}

            
         public User User{get;set;}
    }
}