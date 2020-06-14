using Group1BookStore.Data;
using Group1BookStore.Data.Entities;
using Group1BookStore.Features.Users.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Group1BookStore.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly DataContext dataContext;
        private readonly UserManager<User> userManager;

        public UserController(UserManager<User> userManager, DataContext dataContext)
        {
            this.userManager = userManager;
            this.dataContext = dataContext;
        }

        /*[HttpPost]
        [Route("create")]
        public async Task<ActionResult<UserDto>> CreateUser(UserCreateDto dto)
        {
            var newUser = new User
            {
                UserName = dto.Username
            };

            // wrapping in a transaction means that if part of the transaction fails, then everything saved is undone
            using(var transaction = await dataContext.Database.BeginTransactionAsync())
            {
                if(string.Equals(dto.Role, Roles.Customer))
            }
        }*/
    }
}
