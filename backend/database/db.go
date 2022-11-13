package database

import (
	"github.com/Yegor-own/est-moneta/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"time"
)

var DB = connectDB()

func MigrateDB() {
	log.Println("Migrating...")
	DB.AutoMigrate(&models.User{})
}

func SeedDB() {

	log.Println("Seeding...")
	DB.Create(&models.User{
		Nickname:    "Jonathan",
		FullName:    "JoJo Joestar",
		Email:       "jonathan@email.com",
		Password:    models.HashPassword("jonathan"),
		Verified:    time.Now(),
		PhoneNumber: "no phone",
	})
	DB.Create(&models.User{
		Nickname:    "Joseph",
		FullName:    "JoJo Joestar",
		Email:       "joseph@email.com",
		Password:    models.HashPassword("joseph"),
		Verified:    time.Now(),
		PhoneNumber: "no phone",
	})
	DB.Create(&models.User{
		Nickname:    "Jotaro",
		FullName:    "JoJo Joestar",
		Email:       "jotaro@email.com",
		Password:    models.HashPassword("jotaro"),
		Verified:    time.Now(),
		PhoneNumber: "+79221891712",
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
