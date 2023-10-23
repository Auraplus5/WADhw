//fetch("https://api.jsonbin.io/v3/b/653666d354105e766fc5f276")
fetch("res/json/myjson.json")
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        data.forEach(post => {
            let div = document.createElement('div');
            div.classList.add('post');

            let h3 = document.createElement('h3');
            let p = document.createElement('p');

            h3.innerText = post.title;
            p.innerText = post.body;

            div.appendChild(h3);
            div.appendChild(p);

            document.body.appendChild(div);
        });
    });