package database

import (
	"github.com/Yegor-own/est-moneta/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"time"
)

var DB = connectDB()

func SeedDB() {
	log.Println("Migrating...")
	DB.AutoMigrate(&models.User{})

	log.Println("Seeding...")
	DB.Create(&models.User{
		Nickname: "Jonathan",
		Email:    "jonathan@email.com",
		Password: "jonathan",
		Verified: time.Now(),
	})
	DB.Create(&models.User{
		Nickname: "Joseph",
		Email:    "joseph@email.com",
		Password: "joseph",
		Verified: time.Now(),
	})
	DB.Create(&models.User{
		Nickname: "Jotaro",
		Email:    "jotaro@email.com",
		Password: "jotaro",
		Verified: time.Now(),
	})

	log.Println("All succeed!")
}
func connectDB() *gorm.DB {
	dsn := "panda:superuser@tcp(localhost:3306)/donate?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}
	return DB
}

func GetConnection() *gorm.DB {
	return DB
}
