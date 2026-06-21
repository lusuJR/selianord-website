using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Selianord.Api.Data;
using Selianord.Api.DTOs;
using Selianord.Api.Models;

namespace Selianord.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProjectController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public ProjectController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectDto>>> GetProjects()
    {
        var projects = await _context.Projects.ToListAsync();
        return Ok(_mapper.Map<IEnumerable<ProjectDto>>(projects));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProjectDto>> GetProject(int id)
    {
        var project = await _context.Projects.FindAsync(id);

        if (project == null)
            return NotFound();

        return Ok(_mapper.Map<ProjectDto>(project));
    }

    [HttpPost]
    public async Task<ActionResult<ProjectDto>> CreateProject(CreateProjectDto dto)
    {
        var project = _mapper.Map<Project>(dto);

        _context.Projects.Add(project);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetProject),
            new { id = project.Id },
            _mapper.Map<ProjectDto>(project));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProject(int id, CreateProjectDto dto)
    {
        var project = await _context.Projects.FindAsync(id);

        if (project == null)
            return NotFound();

        _mapper.Map(dto, project);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProject(int id)
    {
        var project = await _context.Projects.FindAsync(id);

        if (project == null)
            return NotFound();

        _context.Projects.Remove(project);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}