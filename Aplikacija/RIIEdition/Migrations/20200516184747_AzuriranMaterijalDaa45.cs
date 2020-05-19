using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class AzuriranMaterijalDaa45 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OcenaMaterijala",
                table: "MaterijalData");

            migrationBuilder.AddColumn<int>(
                name: "brojOcenaCetiri",
                table: "MaterijalData",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "brojOcenaDva",
                table: "MaterijalData",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "brojOcenaJedan",
                table: "MaterijalData",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "brojOcenaPet",
                table: "MaterijalData",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "brojOcenaTri",
                table: "MaterijalData",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "brojOcenaCetiri",
                table: "MaterijalData");

            migrationBuilder.DropColumn(
                name: "brojOcenaDva",
                table: "MaterijalData");

            migrationBuilder.DropColumn(
                name: "brojOcenaJedan",
                table: "MaterijalData");

            migrationBuilder.DropColumn(
                name: "brojOcenaPet",
                table: "MaterijalData");

            migrationBuilder.DropColumn(
                name: "brojOcenaTri",
                table: "MaterijalData");

            migrationBuilder.AddColumn<double>(
                name: "OcenaMaterijala",
                table: "MaterijalData",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
