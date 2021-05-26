using productEngine.data;
using ProductEngine.Models;
using System;
using System.Collections.Generic;

namespace ProductEngine.Services
{
    public class ProductService
    {
        ProductData _productData;
        public ProductService()
        {
            _productData = new ProductData();
        }
        public List<Product> Get()
        {
            return _productData.Get();
        }

        public Product Get(string id)
        {
            Product product = _productData.Get(id);
            return product;
        }

        Product Post(Product product)
        {
           
            return product;
        }

        Product Put(Product product)
        {
            
            return product;
        }

        bool Delete(string id)
        {
            return false;
        }
    }
}
