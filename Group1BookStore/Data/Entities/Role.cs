using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Group1BookStore.Data.Entities
{
    public class Role : IdentityRole<int>
    {
        public virtual List<UserRole> Users { get; set; }
    }
}
