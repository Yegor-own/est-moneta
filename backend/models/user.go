package models

import (
	"gorm.io/gorm"
	"time"
)

type User struct {
	gorm.Model
	Nickname string
	Email    string
	Password string
	Verified time.Time
}
