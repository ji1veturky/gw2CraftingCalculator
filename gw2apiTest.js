    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.guildwars2.com/v1/recipes.json", false);
    xhr.send();
    
   console.log(xhr.recipes);
