const numStars = 500;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}

const getResidentsBtn = document.querySelector('button');

const getResidents = event => {
    if(!document.querySelector('h2')){
        axios.get('https://swapi.dev/api/planets/?search=Alderaan').then((res) =>{
            let residentsURLS = res.data.results[0].residents
            
            for(let i=0; i<residentsURLS.length; i++){
                axios.get(residentsURLS[i]).then((res) => {
                    let h2 = document.createElement('h2');
                    h2.textContent = res.data.name
                    document.querySelector('body').appendChild(h2);
                })
            }
        })
    } else {
        console.log('Alderaan Residents already added')
    }
}

getResidentsBtn.addEventListener('click', getResidents)