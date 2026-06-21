using Microsoft.EntityFrameworkCore;
using Selianord.Api.Models;

namespace Selianord.Api.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<QuoteRequest> QuoteRequests { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Service> Services { get; set; }
}