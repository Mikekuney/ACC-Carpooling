var api_key = '02f2795b43078e88ef905f7d5da7';

// url = 'https://api.sportsdata.io/v3/cbb/scores/json/TeamSchedule/{season}/{team}';
// headers = {'Ocp-Apim-Subscription-Key': '{key}'.format(key=api_key)}

// jsonData = requests.get(url, headers=headers).json();

// console.log(jsonData);

var teamSchedule = function(){
    console.log('hit')
    // event.preventDefault();
    var apiUrl = "https://noahs-server-proj1.herokuapp.com/https://api.sportsdata.io/v3/cbb/scores/json/Games/2021";
    var requests = {
        method: "GET",
        headers: {'Ocp-Apim-Subscription-Key': '{key}'.format(key=api_key)}
    }
    fetch(apiUrl,requests).then(function(response){
       if(response.ok){
            response.json().then(function(data){
                console.log(data);
            })
       }

    })

};
teamSchedule();
                //apikey 02f2795b43078e88ef905f7d5da7