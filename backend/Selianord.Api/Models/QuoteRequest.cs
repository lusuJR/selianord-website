

namespace Selianord.Api.Models
{
    public class QuoteRequest
    {
        public int Id { get; set; }

        public string FullName { get; set; } = "";

        public string Email { get; set; } = "";

        public string Phone { get; set; } = "";

        public string Service { get; set; } = "";

        public string BudgetRange { get; set; } = "";

        public string Description { get; set; } = "";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}