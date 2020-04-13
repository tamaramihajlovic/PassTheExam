using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class RIIMigrations3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CalendarData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DatumDogadjaja = table.Column<DateTime>(nullable: false),
                    NazivDogadjaja = table.Column<string>(nullable: true),
                    UserId1 = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CalendarData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CalendarData_AspNetUsers_UserId1",
                        column: x => x.UserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CalendarData_UserId1",
                table: "CalendarData",
                column: "UserId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CalendarData");
        }
    }
}
