package main

import (
	"log"

	"github.com/hata-okrc/go-practice.git/controllers"
)

func main() {
	// controllers パッケージから StartWebServer を呼び出す
	err := controllers.StartWebServer()
	if err != nil {
		log.Fatal(err)
	}
}