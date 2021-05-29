using ProductEngine.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace productEngine.data
{
    public class ProductData
    {
        private static List<Product> _products = GetDummyData();

        static private List<Product> GetDummyData()
        {
            _products = new List<Product>();
            _products.Add(new Product()
            {
                Id = "CX001",
                Name = "Mobile",
                Description = "Samsung Galaxy M02s (Blue,3GB RAM, 32GB Storage) | 5000 mAh | Triple Camera",
                price = 123945,
                model = "C7-pro",
                averageRatings = 3
            });
            _products.Add(new Product()
            {
                Id = "CX002",
                Name = "Wireless Power Bank",
                Description = "i GEAR 5000 mAh Wireless Power Bank with Type C Support, Qi Wireless Charging",
                price = 45687,
                model = "iS10",
                averageRatings = 4
            });
            return _products;
        }

        public List<Product> Get()
        {
            return _products;
        }

        public Product Get(string id)
        {
            var product = _products.Where(p => p.Id.Equals(id)).SingleOrDefault();
            if (product == null)
            {
                throw new Exception("Product not found with Id " + id);
            }
            return product;
        }

        public Product Post(Product product)
        {
            product.Id = Guid.NewGuid().ToString();
            _products.Add(product);
            return product;
        }

        public Product Put(string id, Product newProduct)
        {
            var oldProduct = _products.Where(p => p.Id.Equals(id)).SingleOrDefault();
            if (oldProduct != null)
            {
                _products.Remove(oldProduct);
                _products.Add(newProduct);
            }
            else
            {
                throw new Exception("Product not found with Id " + newProduct.Id);
            }
            return newProduct;
        }

        public bool Delete(string id)
        {
            bool successful = false;
            var product = _products.Where(p => p.Id.Equals(id)).SingleOrDefault();
            if (product != null)
            {
                successful = _products.Remove(product);
            }
            else
            {
                throw new Exception("Product not found with Id " + id);
            }
            return successful;
        }

    }
}
