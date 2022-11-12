package controllers

import (
	"fmt"
	"github.com/Yegor-own/est-moneta/database"
	"github.com/Yegor-own/est-moneta/models"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strconv"
	"time"
)

func Login(c *gin.Context) {

	var json models.Login
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user = models.User{
		Email: json.Email,
		//Password: json.Password,
	}
	db := database.GetConnection()
	res := db.First(&user, "email = ?", user.Email)
	if res.Error != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
		return
	}
	match := models.CheckPasswordHash(json.Password, user.Password)
	if !match {
		c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
		return
	}

	session := sessions.Default(c)
	session.Set("id", user.ID)
	session.Save()

	c.JSON(http.StatusOK, gin.H{
		"message":    "User Sign In successfully",
		"session Id": session.Get("id"),
	})
}

func Logout(c *gin.Context) {
	session := sessions.Default(c)
	session.Clear()
	session.Save()

	c.JSON(http.StatusOK, gin.H{
		"message": "Log out successfully",
	})
}

func UserShow(c *gin.Context) {
	session := sessions.Default(c)

	var user models.User
	sessionId, err := strconv.Atoi(fmt.Sprint(session.Get("id")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user.ID = uint(sessionId)

	db := database.GetConnection()
	db.First(&user)
	user.ID = 0
	user.Password = ""
	c.JSON(http.StatusOK, user)
	return

}

func UserCreate(c *gin.Context) {
	session := sessions.Default(c)
	if session.Get("id") != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Operation not premised"})
		return
	}

	var user models.User
	user.Verified = time.Date(2, 0, 0, 0, 0, 0, 0, time.UTC)
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db := database.GetConnection()
	res := db.First(&user, "email = ?", user.Email)
	log.Println(res.Error, res.RowsAffected)
	if res.RowsAffected != 0 {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Email already in use"})
		return
	}

	user.Password = models.HashPassword(user.Password)

	res = db.Create(&user)
	if res.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": res.Error})
		return
	}

	session.Set("id", user.ID)
	session.Save()

	c.JSON(http.StatusOK, gin.H{
		"message": "User created successfully",
	})
}

func UserUpdate(c *gin.Context) {
	session := sessions.Default(c)

	var user models.User
	sessionId, err := strconv.Atoi(fmt.Sprint(session.Get("id")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user.ID = uint(sessionId)

	db := database.GetConnection()
	db.First(&user)

	if err = c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	log.Println(user)
	db.Save(&user)
	c.JSON(http.StatusOK, user)
	return
}

func UserDelete(c *gin.Context) {
	session := sessions.Default(c)

	var user models.User
	sessionId, err := strconv.Atoi(fmt.Sprint(session.Get("id")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user.ID = uint(sessionId)

	db := database.GetConnection()
	res := db.Delete(&user)
	if res.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": res.Error})
		return
	}

	session.Clear()
	session.Save()

	c.JSON(http.StatusOK, gin.H{
		"message": "User deleted and log out successfully",
	})

}
