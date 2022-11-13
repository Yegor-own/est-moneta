package main

import (
	"github.com/Yegor-own/est-moneta/controllers"
	"github.com/Yegor-own/est-moneta/database"
	"github.com/Yegor-own/est-moneta/middleware"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func main() {

	database.MigrateDB()
	database.SeedDB()

	router := gin.Default()
	store := cookie.NewStore([]byte("id"))
	router.Use(sessions.Sessions("user-session", store))

	router.POST("/login", controllers.Login)
	router.GET("/logout", controllers.Logout)
	router.POST("/users/create", controllers.UserCreate)

	protected := router.Group("/protected")
	protected.Use(middleware.Authentication())
	{
		protected.GET("/users/self", controllers.UserShow)
		protected.PUT("/users/self", controllers.UserUpdate)
		protected.DELETE("/users/self", controllers.UserDelete)

		protected.GET("/netmonet/connect", controllers.ConnectNetmonet)

	}

	router.Run()
}
