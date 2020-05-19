using Microsoft.EntityFrameworkCore.Migrations;

namespace RIIEdition.Migrations
{
    public partial class DodatiRazlicitEMogucnosti : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BrojLajkova",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Level",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UkupanBrojOsvojenihPoena",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "FlashCardData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Opis = table.Column<string>(nullable: true),
                    Ocena = table.Column<int>(nullable: false),
                    Tezina = table.Column<int>(nullable: false),
                    NazivPredmeta = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlashCardData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FlashCardData_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MaterijalData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OpisMaterijala = table.Column<string>(nullable: true),
                    OcenaMaterijala = table.Column<double>(nullable: false),
                    PredmetMaterijala = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaterijalData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MaterijalData_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "QuizData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Predmet = table.Column<string>(nullable: true),
                    Ocena = table.Column<int>(nullable: false),
                    Tezina = table.Column<int>(nullable: false),
                    BrojOsvojenihPoena = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuizData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_QuizData_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FlashCardData_UserId",
                table: "FlashCardData",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_MaterijalData_UserId",
                table: "MaterijalData",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_QuizData_UserId",
                table: "QuizData",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlashCardData");

            migrationBuilder.DropTable(
                name: "MaterijalData");

            migrationBuilder.DropTable(
                name: "QuizData");

            migrationBuilder.DropColumn(
                name: "BrojLajkova",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Level",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "UkupanBrojOsvojenihPoena",
                table: "AspNetUsers");
        }
    }
}
