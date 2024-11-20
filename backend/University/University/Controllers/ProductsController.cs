using Microsoft.AspNetCore.Mvc;

namespace University.Controllers;

public class Product
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public double Price { get; set; }
}

[ApiController]
[Route("[controller]")]
public class ProductsController : Controller
{
    private static List<Product> _products = [];

    [HttpGet]
    public async Task<IEnumerable<Product>> GetAll()
    {
        _products =
        [
            new Product { Id = Guid.NewGuid(), Name = "Apple", Price = 100.20 },
            new Product { Id = Guid.NewGuid(), Name = "Orange", Price = 120.20 },
            new Product { Id = Guid.NewGuid(), Name = "Banana", Price = 1300.20 },
            new Product { Id = Guid.NewGuid(), Name = "Grape", Price = 11.20 },
            new Product { Id = Guid.NewGuid(), Name = "Pitch", Price = 1.20 }
        ];
        await Task.Delay(500);
        return _products;
    }

    [HttpPost]
    public async Task Add(Product model)
    {
        await Task.Delay(500);
        model.Id = Guid.NewGuid();
        _products.Add(model);
    }

    [HttpPut("{id:guid}")]
    public async Task Edit(Product model, Guid id)
    {
        await Task.Delay(500);
        var product = _products.First(x => x.Id == id);
        product.Name = model.Name;
        product.Price = product.Price;
    }

    [HttpGet("{id:guid}")]
    public async Task<Product> Get(Guid id)
    {
        await Task.Delay(500);
        return _products.First(x => x.Id == id);
    }

    [HttpDelete("{id:guid}")]
    public async Task Delete(Guid id)
    {
        await Task.Delay(2000);
        _products.Remove(_products.First(x => x.Id == id));
    }
}