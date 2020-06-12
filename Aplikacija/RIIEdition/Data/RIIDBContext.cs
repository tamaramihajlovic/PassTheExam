using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace RIIEdition.Data
{
    public class RIIDBContext:IdentityDbContext<User>
        { 
            public RIIDBContext(DbContextOptions<RIIDBContext> contextOptions)
            :base(contextOptions)
        {
            
        }
        public DbSet<CalendarData> CalendarData{get;set;}

        public DbSet<MaterijalData> MaterijalData{get;set;}

        public DbSet<Comments> Komentari{get;set;}
          protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        
        }
    }
}