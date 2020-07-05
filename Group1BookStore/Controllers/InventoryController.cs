using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Group1BookStore.Data;
using Group1BookStore.Store;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Group1BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private readonly DataContext dataContext;

        public InventoryController(DataContext dataContext)
        {
            this.dataContext = dataContext;

        }
        [HttpPost]
        public ActionResult<InventoryDto> create(InventoryDto targetValue)
        {
            var data = dataContext.Set<Inventory>().Add(new Inventory);
            {
                Book = targetValue.Book;
                Date = targetValue.Date;
                Console = targetValue.Console; 
            }
        }
    }
}
