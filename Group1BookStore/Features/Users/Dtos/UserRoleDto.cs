using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Group1BookStore.Features.Users.Dtos
{
    public class UserRoleDto
    {
        public string Username { get; set; }
        public IList<string> UserRoles { get; set; }
    }
}
