using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Group1BookStore.Data.Entities
{
    public class User : IdentityUser<int>
    {
        public string Password { get; set; }
        public virtual ICollection<UserRole> Roles { get; set; }
    }
}
