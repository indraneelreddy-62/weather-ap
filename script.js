let request = new XMLHttpRequest();
request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=oslo&appid=93f26e3c57081a6210de53b8dcfdfwa4',true)
request.onload=function(){
      if(request.status >=200 && request.status < 400){
        console.log("success")
        let data = JSON.parse(request.responseText);
        let imgsrc = 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        document.getElementById('mypara').innerHTML = data.main.temp+'F';
        document.getElementById('myimg').src=imgsrc;
        console.log(data)
      }
      else{
        console.log("cannot connect to the server")
      }
}
request.onefor = function(){
      console.log("error")
}
request.send();
