namespace CURDUsingJquery.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FirstMigratio : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Department = c.String(),
                        Designation = c.String(),
                        ContactNumber = c.String(),
                        Address = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
