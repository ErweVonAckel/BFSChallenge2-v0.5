document.querySelector('#boton').addEventListener('click', function(){
  apidata();
});

function apidata (){
  let url = 'https://api.thecatapi.com/v1/images/search';

  const api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();

  api.onreadystatechange = function(){

    if(this.status == 200 && this.readyState == 4){

      let data = JSON.parse(this.responseText);
      const picture = document.querySelector("img");
      picture.src = data[0].url;
      


      
    }
  }
}