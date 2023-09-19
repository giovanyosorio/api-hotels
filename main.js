const url = 'https://fakestoreapi.com/products';

const img1=document.getElementById("image1")
const img2=document.getElementById("image2")
const img3=document.getElementById("image3")
const spanError = document.getElementById('error')

async function fetchData(){
    try {
        
        const response = await fetch(url);
        const result = await response.json();
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
            }
            return array;
        }
        const randomFlags = shuffleArray([...result]).slice(0, 3);
    
        console.log(randomFlags);
        if (response.status !== 200) {
            spanError.innerHTML = "Hubo un error: " + res.status;
        } 
        image1.src=randomFlags[0].image
        image2.src=randomFlags[1].image
        image3.src=randomFlags[2].image
    } catch (error) {
        console.error(error);
    }
}
async function loadFavorites() {
    const res = await fetch(url);
    const data = await res.json();
    console.log('Favoritos')
    console.log(data)
  
    if (res.status !== 200) {
      spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }
  }
  
fetchData()

loadFavorites()