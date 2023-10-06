
const url = "https://fakestoreapi.com/products";
const urlAdd = "https://fakestoreapi.com/carts";
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const img4 = document.getElementById("image4");
const spanError = document.getElementById("error");

async function fetchData() {
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
    image1.src = randomFlags[0].image;
    image2.src = randomFlags[1].image;
    image3.src = randomFlags[2].image;
  } catch (error) {
    console.error(error);
  }
}
async function loadFavorites() {
  const res = await fetch(url);
  const data = await res.json();
  console.log("Favoritos");
  console.log(`data,${data}`);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

async function addnewProduct(){
    const res=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {
                title:"test product",
                price:20,
                description:"lorem impsun",
                image: 'https://i.pravatar.cc',
                category:"electronic"
            }
        )
    })
    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
      }
    const data=await res.json()
    img4.src=data.image
    products()
    console.log("method",res)
    console.log("body",data)
}

async function addCarts(){
    const res=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {
                userId:5,
                date:"2020-02-03",
                products:[{productId:5,quantity:1},{productId:1,quantity:5}]
            }
        )
    })
    const data=await res.json() 
    console.log("method",res)
    console.log("body",data);
    
}

fetchData();
loadFavorites();
