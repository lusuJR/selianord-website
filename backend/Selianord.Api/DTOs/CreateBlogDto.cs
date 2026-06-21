namespace Selianord.Api.DTOs
{
    public class CreateBlogDto
    {
        public string Title { get; set; } = string.Empty;

        public string Content { get; set; } = string.Empty;

        public string Author { get; set; } = string.Empty;

        public DateTime PublishedDate { get; set; }
    }
}