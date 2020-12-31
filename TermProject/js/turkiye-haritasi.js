let lat = 41.015137;
let lon = 28.979530;
let liste = new Array();
let liste2 = new Array();
let liste3 = new Array();
async function turkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  liste3 = resolve(heva(lat, lon));
  element.addEventListener(
    'mouseover',
    function (event) {

      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris' && event.target.parentNode.getAttribute != null) {

        lat = event.target.parentNode.getAttribute('lat');
        lon = event.target.parentNode.getAttribute('long');
        liste3 = resolve(heva(lat, lon));
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('iladi'),
          '<br>',
          "Place kodu: " + event.target.parentNode.getAttribute('plakakodu'),
          '<br>',
          "Phone kodu: " + event.target.parentNode.getAttribute('alankodu'),
          '<br>',
          "Weather :" + liste3[0],
          '<br>',
          "Temperature :" + liste3[1] + "°",
          '<br>',
          "Wind :" + liste3[2] + "km/s",
          '<br>',
          '</div>',
        ].join('');
      }
    }
  );


  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';

      if (event.pageX > 150) {
        info.style.left = event.pageX - 150 + 'px';
      }
      else {
        info.style.left = event.pageX + 'px';
      }
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (
          id === 'guney-kibris'
        ) {
          return;
        }

      }
    }
  );
}

async function toJSON(url) {
  let r = await fetch(url)
  if (!r.ok) error(r.statusText)
  return r.json()
}

async function heva(latidute, longitude) {

  var lat = latidute;
  var lon = longitude;
  var accessKey = "5ff5f6121eced2f3ad373070cbbb2040";


  const U = "https://api.openweathermap.org/data/2.5/weather?"
  let url = U + "lat=" + lat + "&lon=" + lon + "&APPID=" + accessKey;
  let data = await toJSON(url);

  let weather = data.weather[0].description;
  var celsius = convert(data.main.temp).toFixed(0);
  var speed = (data.wind.speed * 3.6).toFixed(2);
  liste[0] = weather;
  liste[1] = celsius;
  liste[2] = speed;

  return liste;
}

function resolve(pro) {

  Promise.resolve(pro).then(function (val) {
    liste2 = val;
  });
  return liste2;
}


function convert(kelvin) {
  return (kelvin - 273.15);
}