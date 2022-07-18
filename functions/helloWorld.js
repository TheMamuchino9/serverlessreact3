exports.handler = async function(event, context)
{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    

    xmlhttp.onreadystatechange = function() {
        if (this.status == 200) {
          var json = JSON.parse(this.responseText);
          // We parse the JSON response
          //console.log(json["value"]);
          message = json["value"];
          
        }		
      };
    

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    console.log(message)
    //document.getElementById("data").innerHTML = message;
    return {
      statusCode: 200,
      body: JSON.stringify({message: message})
    };
}