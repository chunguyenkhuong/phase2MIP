var posts = [
        {
            "id": 0,
            "user": {
                  "id": 1,
                  "username": "Kimmo",
                  "profileImages": "img/max.png"
            },

            "image": "img/max.png",
            "imageThumb": "img/max.png",
            "likes": 1320,
            "comments": [
                {
                    "id": 0,
                    "user": {
                        "id": 2,
                        "username": "Pyhtio"
                },
                    "comment": "nothing",
                },

                {
                    "id": 1,
                    "user": {
                        "id": 3,
                        "username": "Tapio"
                },
                    "comment": "thanks",
                }
            ]
        },

        {
                "id": 1,
            "user": {
                "id": 2,
                "username": "Vihtori",
                "profileImages": "img/ben.png"
            },
            "image": "img/ben.png",
            "imageThumb": "img/ben.png",
            "likes": 210,
            "comments": [
              {
                  "id": 2,
                  "user": {
                      "id": 4,
                      "username": "Pyhtio"
              },
                  "comment": "nothing",
              },

              {
                  "id": 3,
                  "user": {
                      "id": 5,
                      "username": "Tapio"
              },
                  "comment": "thanks",
              }

            ]
        },

        {
            "id": 2,
            "user": {
                  "id": 3,
                  "username": "Kimmo",
                  "profileImages": "img/max.png"
            },

            "image": "img/max.png",
            "imageThumb": "img/max.png",
            "likes": 1320,
            "comments": [
                {
                    "id": 4,
                    "user": {
                        "id": 6,
                        "username": "Pyhtio"
                },
                    "comment": "nothing",
                },

                {
                    "id": 5,
                    "user": {
                        "id": 7,
                        "username": "Tapio"
                },
                    "comment": "thanks",
                }
            ]
        }

    ]

exports.getPosts = function(){
    return posts;
}
