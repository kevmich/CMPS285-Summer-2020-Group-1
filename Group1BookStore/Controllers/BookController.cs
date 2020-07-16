using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Group1BookStore.Data;
using Group1BookStore.Data.Entities;
using Group1BookStore.Features.Users.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Group1BookStore.Controllers
{
    [Route("api/Book")]
    [ApiController]

    public class BookController: ControllerBase 
    {

        private readonly DataContext context;

        public BookController(DataContext context)
        {
            this.context = context;
        }
        private static Expression<Func<Book, BookDto>> MapEntityToDto()
        {
            return x => new BookDto
            {
                Id = x.Id,
                Title = x.Title,
                Author = x.Author,
                Price = x.Price,
            };
        }
        [HttpGet("/get-by-name/{title}")]
        public ActionResult<BookDto> GetByTitle(string title)
        {
            var data = context.Set<Book>().Where(x => x.Title == title).Select(MapEntityToDto()).FirstOrDefault();

            if (data == null)
            {
                return NotFound();
            }

            return data;
        }
        [HttpGet("get-all")]
        public IEnumerable<BookDto> GetAll()
        {
            var data = context.Set<Book>().Select(MapEntityToDto()).ToList();


            return data;
        }
    }
}
