using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Selianord.Api.Data;
using Selianord.Api.Models;

namespace Selianord.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class QuoteController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public QuoteController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<QuoteRequest>>> GetQuotes()
    {
        return await _context.QuoteRequests
            .OrderByDescending(q => q.CreatedAt)
            .ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<QuoteRequest>> GetQuote(int id)
    {
        var quote = await _context.QuoteRequests.FindAsync(id);

        if (quote == null)
            return NotFound();

        return quote;
    }

    [HttpPost]
    public async Task<ActionResult<QuoteRequest>> CreateQuote(QuoteRequest quote)
    {
        quote.CreatedAt = DateTime.UtcNow;

        _context.QuoteRequests.Add(quote);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetQuote), new { id = quote.Id }, quote);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateQuote(int id, QuoteRequest quote)
    {
        if (id != quote.Id)
        {
            return BadRequest();
        }

        _context.Entry(quote).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.QuoteRequests.Any(e => e.Id == id))
            {
                return NotFound();
            }

            throw;
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteQuote(int id)
    {
        var quote = await _context.QuoteRequests.FindAsync(id);

        if (quote == null)
            return NotFound();

        _context.QuoteRequests.Remove(quote);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}