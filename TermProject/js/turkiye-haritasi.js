
function turkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('iladi'),
          '<br>',
          event.target.parentNode.getAttribute('plakakodu'),
          '<br>',
          event.target.parentNode.getAttribute('alankodu').innerHTML= event.target.parentNode.getAttribute('alankodu'),
          '<br>',
          '</div>',
        ].join('');
      }

      console.log(event.target.parentNode.getAttribute('alankodu'));
      var city= new City(event.target.parentNode.getAttribute('id'),event.target.parentNode.getAttribute('idadi'));

      let temp=event.target.parentNode.getAttribute('iladi');
      city.name=temp;
      console.log(city.name);
    }
  );


  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
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

class City {
  constructor(id,name){
      this.id=id;
      this.name=name;
  }

  toString() {
      return this.id + '';
  }
}
