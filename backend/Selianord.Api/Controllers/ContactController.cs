using AutoMapper;
using Selianord.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Selianord.Api.Data;
using Selianord.Api.Models;

namespace Selianord.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ContactController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public ContactController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactDto>>> GetContacts()
    {
        var contacts = await _context.Contacts
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync();

        return Ok(_mapper.Map<IEnumerable<ContactDto>>(contacts));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ContactDto>> GetContact(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);

        if (contact == null)
            return NotFound();

        return Ok(_mapper.Map<ContactDto>(contact));
    }

    [HttpPost]
    public async Task<ActionResult<ContactDto>> CreateContact(CreateContactDto dto)
    {
        var contact = _mapper.Map<Contact>(dto);

        contact.CreatedAt = DateTime.UtcNow;

        _context.Contacts.Add(contact);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetContact),
            new { id = contact.Id },
            _mapper.Map<ContactDto>(contact));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateContact(int id, CreateContactDto dto)
    {
        var contact = await _context.Contacts.FindAsync(id);

        if (contact == null)
            return NotFound();

        _mapper.Map(dto, contact);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContact(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);

        if (contact == null)
            return NotFound();

        _context.Contacts.Remove(contact);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}