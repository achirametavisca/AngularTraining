using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductEngine.Models;
using ProductEngine.Services;

namespace productEngine.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ProductService _productService;
        public ProductController()
        {
            _productService = new ProductService();
        }
        // GET: api/Product
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            try
            {
                return _productService.Get();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        // GET: api/Product/5
        [HttpGet("{id}", Name = "Get")]
        public Product Get(string id)
        {
            try
            {
                return _productService.Get(id);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        // POST: api/Product
        [HttpPost]
        public Product Post([FromBody] Product product)
        {
            try
            {
                return _productService.Post(product);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public Product Put(string id, [FromBody] Product product)
        {
            try
            {
                return _productService.Put(id, product);
            }
            catch (Exception ex) { throw ex; }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public bool Delete(string id)
        {
            try
            {
                return _productService.Delete(id);
            }
            catch (Exception ex) { throw ex; }
        }
    }
}
