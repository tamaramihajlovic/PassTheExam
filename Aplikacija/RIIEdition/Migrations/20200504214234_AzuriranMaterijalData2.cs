using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class AzuriranMaterijalData2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OpisMaterijala",
                table: "MaterijalData");

            migrationBuilder.AddColumn<string>(
                name: "OdgovoriMaterijala",
                table: "MaterijalData",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PitanjaMaterijala",
                table: "MaterijalData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OdgovoriMaterijala",
                table: "MaterijalData");

            migrationBuilder.DropColumn(
                name: "PitanjaMaterijala",
                table: "MaterijalData");

            migrationBuilder.AddColumn<string>(
                name: "OpisMaterijala",
                table: "MaterijalData",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
