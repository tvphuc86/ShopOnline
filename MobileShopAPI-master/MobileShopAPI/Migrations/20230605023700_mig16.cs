﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MobileShopAPI.Migrations
{
    public partial class mig16 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "Price",
                table: "subscription_package",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "subscription_package");
        }
    }
}
