package models

type Organization struct {
	Id          int
	AliasId     any
	Name        string
	FeePlanId   int
	AccessScope string
	Groups      []struct {
		Id        string
		Name      string
		Codes     any
		CreatedAt int
		IconDto   any
		Splits    any
		Bucket    bool
	}
	Bucket bool
}

type Registration struct {
	CodeId                  interface{} `json:"codeId"`
	Sector                  string      `json:"sector"`
	IsDuplicateCodesAllowed interface{} `json:"isDuplicateCodesAllowed"`
	GroupId                 string      `json:"groupId"`
	FirstName               string      `json:"firstName"`
	LastName                string      `json:"lastName"`
	PhoneNumber             string      `json:"phoneNumber"`
}
