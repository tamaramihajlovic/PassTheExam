using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class DodateNoveStveiUBazi35 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_AspNetUsers_UserId",
                table: "Comments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Comments",
                table: "Comments");

            migrationBuilder.RenameTable(
                name: "Comments",
                newName: "Komentari");

            migrationBuilder.RenameIndex(
                name: "IX_Comments_UserId",
                table: "Komentari",
                newName: "IX_Komentari_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Komentari",
                table: "Komentari",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Komentari_AspNetUsers_UserId",
                table: "Komentari",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Komentari_AspNetUsers_UserId",
                table: "Komentari");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Komentari",
                table: "Komentari");

            migrationBuilder.RenameTable(
                name: "Komentari",
                newName: "Comments");

            migrationBuilder.RenameIndex(
                name: "IX_Komentari_UserId",
                table: "Comments",
                newName: "IX_Comments_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Comments",
                table: "Comments",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_AspNetUsers_UserId",
                table: "Comments",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
