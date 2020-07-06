using Group1BookStore.Data;
using Group1BookStore.Data.Entities;
using Group1BookStore.Features.Users.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpPost]
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
                if(string.Equals(dto.Role, Roles.Customer, StringComparison.InvariantCultureIgnoreCase))
                {
                    return BadRequest(new { message = "Employees should not be able to create Customers." });
                }

                if(!await dataContext.Roles.AnyAsync(x => x.Name == dto.Role))
                {
                    return BadRequest(new { message = "The role you are trying to assing does not exist." });
                }

                var identityResult = await userManager.CreateAsync(newUser, dto.Password);
                if (!identityResult.Succeeded)
                {
                    return BadRequest(new { message = "Unable to create user with given Username and Password. Verify Password meets specifications." });
                }

                var roleResult = await userManager.AddToRoleAsync(newUser, dto.Role);
                if (!roleResult.Succeeded)
                {
                    return BadRequest(new { message = "Unable to add role to desired user. Verify that Role exists." });
                }

                transaction.Commit(); // This marks our work is done, and sends information to the database.

                return Created(string.Empty, new UserDto
                {
                    Username = newUser.UserName
                });
            }
        }
    }
}
