package main

import (
	"fmt"
	"net/http"
)



func main() {
	fmt.Println("Hello World!!")

	router := http.NewServeMux()
	router.HandleFunc("/", Home)

	http.ListenAndServe(":8080", router)
}

func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Println("home")
}