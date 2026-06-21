using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Selianord.Api.Data;
using Selianord.Api.DTOs;
using Selianord.Api.Models;

namespace Selianord.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public BlogController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<BlogDto>>> GetBlogs()
    {
        var blogs = await _context.Blogs
            .OrderByDescending(b => b.PublishedDate)
            .ToListAsync();

        return Ok(_mapper.Map<IEnumerable<BlogDto>>(blogs));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BlogDto>> GetBlog(int id)
    {
        var blog = await _context.Blogs.FindAsync(id);

        if (blog == null)
            return NotFound();

        return Ok(_mapper.Map<BlogDto>(blog));
    }

    [HttpPost]
    public async Task<ActionResult<BlogDto>> CreateBlog(CreateBlogDto dto)
    {
        var blog = _mapper.Map<Blog>(dto);

        if (blog.PublishedDate == default)
            blog.PublishedDate = DateTime.UtcNow;

        _context.Blogs.Add(blog);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetBlog),
            new { id = blog.Id },
            _mapper.Map<BlogDto>(blog));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBlog(int id, CreateBlogDto dto)
    {
        var blog = await _context.Blogs.FindAsync(id);

        if (blog == null)
            return NotFound();

        _mapper.Map(dto, blog);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBlog(int id)
    {
        var blog = await _context.Blogs.FindAsync(id);

        if (blog == null)
            return NotFound();

        _context.Blogs.Remove(blog);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}