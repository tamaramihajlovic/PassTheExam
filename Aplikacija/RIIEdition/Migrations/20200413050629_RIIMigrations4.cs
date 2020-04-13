using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class RIIMigrations4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CalendarData_AspNetUsers_UserId1",
                table: "CalendarData");

            migrationBuilder.DropIndex(
                name: "IX_CalendarData_UserId1",
                table: "CalendarData");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "CalendarData");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "CalendarData",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_CalendarData_UserId",
                table: "CalendarData",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_CalendarData_AspNetUsers_UserId",
                table: "CalendarData",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CalendarData_AspNetUsers_UserId",
                table: "CalendarData");

            migrationBuilder.DropIndex(
                name: "IX_CalendarData_UserId",
                table: "CalendarData");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "CalendarData",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "CalendarData",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CalendarData_UserId1",
                table: "CalendarData",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_CalendarData_AspNetUsers_UserId1",
                table: "CalendarData",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
