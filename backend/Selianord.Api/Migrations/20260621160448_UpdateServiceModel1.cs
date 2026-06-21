using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Selianord.Api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateServiceModel1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Services",
                newName: "Title");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Services",
                newName: "Name");
        }
    }
}
