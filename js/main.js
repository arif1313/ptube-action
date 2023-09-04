

const calculationTime = (second)=>{
const hourCount = second/3600;
const day = hourCount/24;
const hour = hourCount%24;
const min = (second%3600)/60;
if(hour===0 && min === 0){
    const totalTime ='';
    return totalTime;
}


const totalTime = `${parseInt(hour)}hrs ${parseInt(min)}min ago`;

return totalTime;

    
}

const varifi = (varifiedStatus)=>
{
    if(varifiedStatus){
        const author=` <img src="./image/varified.png" alt="" class="h-5 w-5">`;
        return author
     }
     else{ 
        const author = '';
        return author
     }
}
const nev = ()=>{
    const firstNev = document.getElementById('firstNev');
    firstNev.classList = 'flex justify-between p-5';
    firstNev.innerHTML =` <div> <img src="./image/Logo.png" alt=""></div>
    <div> <button class="btn">Sort by view</button></div>
    <div><button class="btn btn-primary text-base-100 bg-[#FF1F3D] hover:bg-[#FF1F3D] active:bg-[#FF1F3D] border-none"> Blog</button></div>`;

}

const allVideoContant = async (id)=>{

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = data.data;
    allContantDiaply(videos);

}
const allContantDiaply = (videos) =>{
    const cardSection = document.getElementById('cardSection');
    cardSection.classList ='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5';
    cardSection.textContent='';
    videos.forEach(video =>{

        const second = video.others.posted_date;
        const varifiedStatus =video.authors[0].verified;
       const  Isvarifi =varifi(varifiedStatus);
         const timeDuration = calculationTime(second);

        const cardDiv = document.createElement('div');
        
        cardDiv.classList = 'card card-compact h-72 bg-base-100 rounded rounded-lg  relative';
        cardDiv.innerHTML = `<figure><img src="${video.thumbnail}" alt="Shoes "  /></figure>
        
        <div class=" flex py-5 gap-3">
        <div class="p-2">  <img src="${video.authors[0].profile_picture}" alt="" class="rounded-full h-10 w-10"> </div>
        <div>  <h2 class="card-title">${video.title}</h2>
        <p class="flex gap-3">${video.authors[0].profile_name}  ${Isvarifi}  </p>
        <p>${video.others.views} views </p>
        </div>
        
         
        </div>
       
      </div>
      
      <div class="bg-black absolute top-32 left-44 px-2" >
      <p  class="text-white text-sm">
${timeDuration}
      </p>
    </div>
      
      `;
    
     
      cardSection.appendChild(cardDiv);
      
     

    })
    
    if(!cardSection.textContent){
       cardSection.classList.remove('grid');
       cardSection.classList.add('py-36');
       cardSection.innerHTML = ` <div class=" flex justify-center items-center"> <img  src="./image/Icon.png" alt=""> </div> <h1 class="text-2xl font-bold text-center"> Oops!! Sorry, There is no content here </h1> `;
       
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
 div.innerHTML=`<button id="${catagorie.category}" class="btn active:bg-[#FF1F3D]" onclick= "click${catagorie.category}(${catagorie.category_id})">${catagorie.category}</button>`;
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
allVideoContant(1000);
