using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Selianord.Api.Data;
using Selianord.Api.DTOs;
using Selianord.Api.Models;

namespace Selianord.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ServiceController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public ServiceController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ServiceDto>>> GetServices()
    {
        var services = await _context.Services.ToListAsync();
        return Ok(_mapper.Map<IEnumerable<ServiceDto>>(services));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ServiceDto>> GetService(int id)
    {
        var service = await _context.Services.FindAsync(id);

        if (service == null)
            return NotFound();

        return Ok(_mapper.Map<ServiceDto>(service));
    }

    [HttpPost]
    public async Task<ActionResult<ServiceDto>> CreateService(CreateServiceDto dto)
    {
        var service = _mapper.Map<Service>(dto);

        _context.Services.Add(service);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetService),
            new { id = service.Id },
            _mapper.Map<ServiceDto>(service));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateService(int id, CreateServiceDto dto)
    {
        var service = await _context.Services.FindAsync(id);

        if (service == null)
            return NotFound();

        _mapper.Map(dto, service);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteService(int id)
    {
        var service = await _context.Services.FindAsync(id);

        if (service == null)
            return NotFound();

        _context.Services.Remove(service);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}