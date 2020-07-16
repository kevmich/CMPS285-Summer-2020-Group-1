using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace Group1BookStore.Features.Users.Dtos
{
    public class BookDto
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Author { get; set; }

        public double Price { get; set; }

    }
}
