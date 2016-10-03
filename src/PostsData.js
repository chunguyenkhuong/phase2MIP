var posts = [
        {
            "id": 0,
            "user": {
                "id": 1,
                "username": "Kimmo",
                "profileImages": "img/p1.jpg"
            },
            "image": "img/p1.jpg",
            "imageThumb": "img/p1.jpg",
            "likes": 1320,
            "caption": "my new style",
            "comments": [
                {
                    "id": 0,
                    "user": {
                        "id": 2,
                        "username": "Pyhtio"
                    },
                    "comment": "nothing",
                    "userRefs": [],
                },
                {
                    "id": 1,
                    "user": {
                        "id": 3,
                        "username": "Tapio"
                    },
                    "comment": "thanks",
                    "userRefs": ["Kimmo"],
                    "tags": []
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
            "caption": "I am legend",
            "comments": [

            ]
        }
    ]

exports.getPosts = function(){
    return posts;
}
