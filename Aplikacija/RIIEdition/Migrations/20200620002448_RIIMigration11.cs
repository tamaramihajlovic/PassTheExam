using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class RIIMigration11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DatumZavrsetkaFK",
                table: "FlashCardData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DatumZavrsetkaFK",
                table: "FlashCardData");
        }
    }
}
