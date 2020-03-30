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
          protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        
        }
    }
}