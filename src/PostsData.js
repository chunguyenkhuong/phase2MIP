var posts = [
        {
            "id": 0,
            "user": {
                "id": 1,
                "username": "Kimmo",
                "profileImages": "ionic/phase2MIP/img/p1.jpg"
            },
            "image": "ionic/phase2MIP/img/p2.jpg",
            "imageThumb": "ionic/phase2MIP/img/p2.jpg",
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
                "profileImages": "ionic/phase2MIP/img/p4.jpg"
            },
            "image": "ionic/phase2MIP/img/p5.jpg",
            "imageThumb": "ionic/phase2MIP/img/p5.jpg",
            "likes": 210,
            "caption": "I am legend",
            "comments": [

            ]
        }
    ]

exports.getPosts = function(){
    return posts;
}
