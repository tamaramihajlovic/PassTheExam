using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class RIIMigrations6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "CeoDan",
                table: "CalendarData",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Pocetak",
                table: "CalendarData",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Zavrestak",
                table: "CalendarData",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "opisDogadjaja",
                table: "CalendarData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CeoDan",
                table: "CalendarData");

            migrationBuilder.DropColumn(
                name: "Pocetak",
                table: "CalendarData");

            migrationBuilder.DropColumn(
                name: "Zavrestak",
                table: "CalendarData");

            migrationBuilder.DropColumn(
                name: "opisDogadjaja",
                table: "CalendarData");
        }
    }
}
