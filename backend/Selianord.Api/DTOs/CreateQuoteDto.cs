namespace Selianord.Api.DTOs;

public class CreateQuoteDto
{
    public string FullName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Phone { get; set; } = string.Empty;

    public string Service { get; set; } = string.Empty;

    public string BudgetRange { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;
}