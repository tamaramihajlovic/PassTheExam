using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class RIIMigration10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DatumZavrsetkaKviza",
                table: "QuizData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DatumZavrsetkaKviza",
                table: "QuizData");
        }
    }
}
