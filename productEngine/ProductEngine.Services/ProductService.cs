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

        public Product Post(Product product)
        {
            return _productData.Post(product);
        }

        public Product Put(string id, Product product)
        {
            return _productData.Put(id, product);
        }

        public bool Delete(string id)
        {
            return _productData.Delete(id);
        }
    }
}
