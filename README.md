# Run Api

1. npm install
2. npm start

#Api Url Post

Url:- http://localhost:3000/api

Header:- Content-Type:application/json

Request Body:

[
{"weight":1,"text":"All About Birds"},
{"weight":2,"text":"Kinds of Birds"},
{"weight":3,"text":"The Finch"},
{"weight":3,"text":"The Swan"},
{"weight":2,"text":"Habitats"},
{"weight":3,"text":"Wetlands"}
]

Response:- 

[
    {
        "title": "All About Birds",
        "subHeaders": [
            {
                "title": "Kinds of Birds",
                "subHeaders": [
                    {
                        "title": "The Finch",
                        "subHeaders": []
                    },
                    {
                        "title": "The Swan",
                        "subHeaders": []
                    }
                ]
            },
            {
                "title": "Habitats",
                "subHeaders": [
                    {
                        "title": "Wetlands",
                        "subHeaders": []
                    }
                ]
            }
        ]
    }
]
