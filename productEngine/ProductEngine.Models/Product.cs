using System;

namespace ProductEngine.Models
{
    public class Product
    {
        public string Id;
        public string Name;
        public string Description;
        public decimal price;
        public string model;
        public int averageRatings;
        public ProductReview Review;
    }
}
