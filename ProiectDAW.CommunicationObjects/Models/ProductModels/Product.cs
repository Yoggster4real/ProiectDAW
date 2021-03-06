using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProiectDAW.CommunicationObjects.Models.ProductModels
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public float Price { get; set; }

        public string Description { get; set; }
        public Category Category { get; set; }

        public byte[] Image { get; set; }
    }
}
