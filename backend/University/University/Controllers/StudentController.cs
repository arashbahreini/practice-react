using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace University.Controllers;

public class Student
{
    public Guid ID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}

[ApiController]
[Route("[controller]")]
public class StudentController: Controller
{
    private static List<Student> _students = [];

    public StudentController()
    {
        // _students = new List<Student>(new[]
        // {
        //     new Student { FirstName = "Arash", LastName = "Bahreini" },
        //     new Student { FirstName = "Ali", LastName = "Bagheri" }
        // });
    }

    // [HttpGet("get-all")]
    [HttpGet]
    public async Task<IEnumerable<Student>> GetAll()
    {
        await Task.Delay(500);
        return _students;
    }

    [HttpPost]
    public async Task Add(Student model)
    {
        await Task.Delay(500);
        model.ID = Guid.NewGuid();
        _students.Add(model);
    }
    
    [HttpPut("{id:guid}")]
    public async Task Add(Student model, Guid id)
    {
        await Task.Delay(500);
        var student = _students.First(x => x.ID == id);
        student.FirstName = model.FirstName;
        student.LastName = model.LastName;
    }
    
    [HttpGet("{id:guid}")]
    public async Task<Student> Get(Guid id)
    {
        await Task.Delay(500);
        return _students.First(x => x.ID == id);
    }

    [HttpDelete("{id:guid}")]
    public async Task Delete(Guid id)
    {
        await Task.Delay(2000);
        _students.Remove(_students.First(x => x.ID == id));
    }
}