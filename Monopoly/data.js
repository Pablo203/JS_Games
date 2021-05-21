var specialCards = {
    "chest": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    "chance": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 17, 18, 19],
    "fields": {
        "special": [0, 10, 20, 30],
        "chances": [7, 22, 36],
        "chests": [2, 17, 33],
        "taxes": [4, 38]
    },
    "cards": {
        "1": "Idź na start",

        "2": "Bank się pomylił. Dostajesz 200$",
        "3": "Płacisz rachunek za lekarza. Zapłać 50$",
        "4": "Za sprzedaż udziałów dostajesz 50$",

        "5": "Wyjdź z więzienia",
        "6": "Idziesz do więzienia",

        "7": "Dostajesz po 50$ od każdego z graczy",
        "8": "Dostajesz 100$ jako prezent na święta",
        "9": "Zwrot podatku. Dosatjesz 20$",
        "10": "Są Twoje urodziny. Dostajesz 10$ od każdego z graczy",
        "11": "Wypłata ubezpieczenia. Dostajesz 100$",
        "12": "Rachunki ze szpitala. Zapłać 50$",
        "13": "Rachunki ze szkoły. Zapłać 50$",
        "14": "Otrzymujesz 25$ za konsultacje",

        "15": "Musisz zapłacić za naprawę ulicy. Płacisz 40$ za każdy dom oraz 115$ za każy hotel który posiadasz",

        "16": "Dostajesz w spadku 100$",




        "17": "Idź na start", 
        "18": "Idź do Illinois",
        "19": "Idź do St. Charles Place",
        "20": "Idź do najbliższej placówki (Elektrownia Wodociągi() jeśli nie jest kupiona możesz ją kupić jeśli jest kupiona zapłać właścicielowi",
        "21": "Idź do najbliższych kolei, jeśli nie są kupione możesz je kupić jeśli jest kupiona zapłać właścicielowi",

        "22": "Bank wypłaca Ci 50$",

        "23": "Wyjdź z więzienia",
        "24": "Cofnij się o 3 pola",
        "25": "Idź prosto do więzienia",
        "26": "Robisz remont generalnych swoich posiadłości. Za każdy dom zapłać 25$ a za każdy hotel 100$",

        "27": "Zapłac podatek w wysokości 15$",

        "28": "Idź do Południowych kolei",
        "29": "Idź do Board Walk",

        "30": "Płacisz każdemu z graczy 50$", 
        "31": "Dostajesz 150$",
        "32": "Wygrywasz konkurs krzyżówek. Dostajesz 100$"
        //To finish: 20, 21
    }
};

var property = {
    "0" : {
        "color" : "white",
        "name" : "start",
        "value" : "start"
    },
    "1" : {
        "color" : "brown",
        "name" : "Mediter",
        "value" : 60,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "2" : {
        "color" : "white",
        "name" : "Chest",
        "value" : "chest",
        "own" : " "
    },
    "3" : {
        "color" : "brown",
        "name" : "Baltic",
        "value" : 60,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "4" : {
        "color" : "white",
        "name" : "Tax",
        "value" : "Pay",
        "own" : " "
    },
    "5" : {
        "color" : "black",
        "name" : "Railroad S",
        "value" : 200,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "6" : {
        "color" : "lightblue",
        "name" : "Oriental",
        "value" : 100,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "7" : {
        "color" : "white",
        "name" : "Chance",
        "value" : "Chance",
        "own" : " "
    },
    "8" : {
        "color" : "lightblue",
        "name" : "Vermont",
        "value" : 100,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "9" : {
        "color" : "lightblue",
        "name" : "Connecticut",
        "value" : 120,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "10" : {
        "color" : "white",
        "name" : "Jail",
        "value" : "Fuck off",
        "own" : " "
    },
    "11" : {
        "color" : "pink",
        "name" : "St. Charles Place",
        "value" : 140,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "12" : {
        "color" : "#CDF0AE",
        "name" : "Power plant",
        "value" : 150,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "13" : {
        "color" : "pink",
        "name" : "States",
        "value" : 140,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "14" : {
        "color" : "pink",
        "name" : "Virginia",
        "value" : 160,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "15" : {
        "color" : "black",
        "name" : "Railroad W",
        "value" : 200,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "16" : {
        "color" : "orange",
        "name" : "St.James Place",
        "value" : 180,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "17" : {
        "color" : "white",
        "name" : "Chest",
        "value" : "chest",
        "own" : " "
    },
    "18" : {
        "color" : "orange",
        "name" : "Tennesse",
        "value" : 180,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "19" : {
        "color" : "orange",
        "name" : "New York",
        "value" : 200,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "20" : {
        "color" : "white",
        "name" : "Parking",
        "value" : "none",
        "own" : " "
    },
    "21" : {
        "color" : "red",
        "name" : "Kentucky",
        "value" : 220,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "22" : {
        "color" : "white",
        "name" : "chance",
        "value" : "Chance",
        "own" : " "
    },
    "23" : {
        "color" : "red",
        "name" : "Indiana",
        "value" : 220,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "24" : {
        "color" : "red",
        "name" : "Illinois",
        "value" : 230,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "25" : {
        "color" : "black",
        "name" : "Railroad N",
        "value" : 200,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "26" : {
        "color" : "yellow",
        "name" : "Atlantic",
        "value" : 260,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "27" : {
        "color" : "yellow",
        "name" : "Ventnor",
        "value" : 260,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "28" : {
        "color" : "#CDF0AE",
        "name" : "Water Works",
        "value" : 150,
        "price_default" : 10,
        "own" : " "
    },
    "29" : {
        "color" : "yellow",
        "name" : "Marvin",
        "value" : 280,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "30" : {
        "color" : "white",
        "name" : "JAIL",
        "value" : "none",
        "own" : " "
    },
    "31" : {
        "color" : "green",
        "name" : "Pacific",
        "value" : 300,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "32" : {
        "color" : "green",
        "name" : "North Carolina",
        "value" : 300,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "33" : {
        "color" : "white",
        "name" : "chest",
        "value" : "Chest",
        "own" : " "
    },
    "34" : {
        "color" : "green",
        "name" : "Pensylvania",
        "value" : 320,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "35" : {
        "color" : "black",
        "name" : "Railroad E",
        "value" : 200,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "36" : {
        "color" : "white",
        "name" : "chance",
        "value" : "none",
        "own" : " "
    },
    "37" : {
        "color" : "blue",
        "name" : "Park Place",
        "value" : 350,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    },
    "38" : {
        "color" : "white",
        "name" : "TAX",
        "value" : "Luxury",
        "own" : " "
    },
    "39" : {
        "color" : "blue",
        "name" : "Board Walk",
        "value" : 400,
        "house" : 0,
        "hotel" : 0,
        "house_price" : 40,
        "hotel_price" : 200,
        "price_default" : 200,
        "own" : " "
    }
};