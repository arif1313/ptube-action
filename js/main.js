
const nev = ()=>{
    const firstNev = document.getElementById('firstNev');
    firstNev.classList = 'flex justify-between p-5';
    firstNev.innerHTML =` <div> <img src="./image/Logo.png" alt=""></div>
    <div> <button class="btn">Sort by view</button></div>
    <div><button class="btn btn-primary  bg-orange-600 hover:bg-orange-700"> Blog</button></div>`;

}

const allVideoContant = async (id)=>{

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = data.data;
    allContantDiaply(videos);

}
const allContantDiaply = (videos) =>{
    const cardSection = document.getElementById('cardSection');
    cardSection.classList ='grid  grid-cols-4 gap-5';
    cardSection.textContent='';
    videos.forEach(video =>{

        const cardDiv = document.createElement('div');
        cardDiv.classList = 'card card-compact h-64 bg-base-100 rounded rounded-lg  relative';
        cardDiv.innerHTML = `<figure><img src="${video.thumbnail}" alt="Shoes "  /></figure>
        
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
         
        </div>
      </div>
      
      <div class="bg-black absolute " >
      <p class="text-white">
hii it is a pra
      </p>
    </div>
      
      `;
     
      cardSection.appendChild(cardDiv);
      
     

    })
    
    if(!cardSection.textContent){
       cardSection.innerHTML = ` <img src="./image/Icon.png" alt="">`;
       
      }
      
   

}

const catagoryfath = async ()=>{

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const catagories = data.data;
    catagoriesDataDisplay(catagories);
}

const catagoriesDataDisplay = (catagories)=>{
    console.log(catagories);
    const threeButton = document.getElementById('threeButton');
    threeButton.classList='flex justify-center gap-5 p-5';
    catagories.forEach(catagorie =>{
 const div = document.createElement('div');
 div.innerHTML=`<button id="${catagorie.category}" class="btn active:bg-orange-800" onclick= "click${catagorie.category}(${catagorie.category_id})">${catagorie.category}</button>`;
 threeButton.appendChild(div);
 

    })
}
const clickAll=(id)=>{


allVideoContant(id);

    console.log(id);
}
const clickMusic=(id)=>{
    allVideoContant(id);
    console.log(id);
}
const clickComedy=(id)=>{
    allVideoContant(id);
    console.log(id);
}
const clickDrawing=(id)=>{
    allVideoContant(id);
    console.log(id);
}
 nev();
catagoryfath();
