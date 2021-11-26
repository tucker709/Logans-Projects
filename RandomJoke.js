fetch('https://api.icndb.com/jokes/random/100')
.then(function(r){return r.json();})
.then(function(obj){
    if(obj.type == "success"){
        let jokes_array = [];
        for(let value of obj.value){
                        jokes_array.push(value.joke);
                }
        return jokes_array;
    }else{
       throw 'Error occured with fetch!'
    }
}).then(function(jokes_array){
    let joke_button = document.querySelector('#joke_button');
    joke_button.addEventListener('click',function(_e){
        let random_joke = jokes_array[Math.floor(Math.random()*jokes_array.length)];
        let h1 = document.querySelector("#joke_area");
        h1.innerText = random_joke;
        console.log(random_joke);
        })
})
