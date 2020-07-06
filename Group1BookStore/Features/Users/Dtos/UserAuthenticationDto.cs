using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Group1BookStore.Features.Users.Dtos
{
    public class UserAuthenticationDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
