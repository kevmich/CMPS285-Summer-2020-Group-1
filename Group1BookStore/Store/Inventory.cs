using Group1BookStore.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Group1BookStore.Store
{
    public class Inventory
    {
    public int Id { get; set; }
    public string Book { get; set; }
    public DateTimeOffset Date { get; set; }
    public string Genre { get; set; }
    public User User { get; set; }
    }
}
