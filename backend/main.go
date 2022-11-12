package main

import (
	"github.com/Yegor-own/est-moneta/controllers"
	"github.com/Yegor-own/est-moneta/middleware"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func main() {

	//database.SeedDB()

	router := gin.Default()
	store := cookie.NewStore([]byte("id"))
	router.Use(sessions.Sessions("user-session", store))

	router.POST("/login", controllers.Login)
	router.GET("/logout", controllers.Logout)
	router.POST("/users/create", controllers.UserCreate)

	protected := router.Group("/protected")
	protected.Use(middleware.Authentication())
	{
		protected.GET("/users/:id", controllers.UserShow)
		protected.PUT("/users/:id", controllers.UserUpdate)
		protected.DELETE("/users/:id", controllers.UserDelete)

	}

	router.Run()
}
