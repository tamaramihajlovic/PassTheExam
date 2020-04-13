using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class RIIMigrations5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DatumDogadjaja",
                table: "CalendarData");

            migrationBuilder.AddColumn<int>(
                name: "Dan",
                table: "CalendarData",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Mesec",
                table: "CalendarData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Dan",
                table: "CalendarData");

            migrationBuilder.DropColumn(
                name: "Mesec",
                table: "CalendarData");

            migrationBuilder.AddColumn<DateTime>(
                name: "DatumDogadjaja",
                table: "CalendarData",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
