package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/Yegor-own/est-moneta/database"
	"github.com/Yegor-own/est-moneta/models"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"io"
	"log"
	"net/http"
	"strconv"
)

func ConnectNetmonet(c *gin.Context) {
	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://admin.netmonet.co/api/external/v1/workplace/list", nil)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	req.Header.Set("Authorization", "Token YzA1ZDU5MDEtNzE3Mi00OTM2LWFmNWYtNDMyMWVmYWY2Njk5OnN1djRONkIwcHlGNmJKWDUzb2VoZDRleDMwYlo2WVBrNkVqT0tVVmE2NFBv")
	res, err := client.Do(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	tmp, err := io.ReadAll(res.Body)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	var org []models.Organization
	err = json.Unmarshal(tmp, &org)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	id := org[0].Groups[0].Id
	log.Println(id)
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

	reg := models.Registration{
		CodeId:                  nil,
		Sector:                  "tip",
		IsDuplicateCodesAllowed: nil,
		GroupId:                 id,
		FirstName:               user.FullName,
		LastName:                user.FullName,
		PhoneNumber:             user.PhoneNumber,
	}

	tmp, err = json.Marshal(reg)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	//bytes.NewReader(tmp)
	//req, err = http.Post("https://admin.netmonet.co/api/external/v1/waiter/registration/data", "application/json", bytes.NewBuffer(tmp))
	req, err = http.NewRequest("POST", "https://admin.netmonet.co/api/external/v1/waiter/registration/data", bytes.NewReader(tmp))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	req.Header.Set("Authorization", "Token YzA1ZDU5MDEtNzE3Mi00OTM2LWFmNWYtNDMyMWVmYWY2Njk5OnN1djRONkIwcHlGNmJKWDUzb2VoZDRleDMwYlo2WVBrNkVqT0tVVmE2NFBv")
	req.Header.Set("Content-Type", "application/json")
	res, err = client.Do(req)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	tmp, err = io.ReadAll(res.Body)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	log.Println(string(tmp))

	var code struct {
		Code string
	}
	err = json.Unmarshal(tmp, &code)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user.Code = code.Code

	db.Save(&user)

	//https://netmonet.co/tip/

	c.JSON(http.StatusOK, gin.H{
		"message": "Your link https://netmonet.co/tip/" + code.Code,
		"link":    "https://netmonet.co/tip/" + code.Code,
	})
}
