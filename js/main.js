

const arr= [];
const arrNumber = [];
const sort= (arr) =>{
    for(const  numArray of arr) {
const numberA = parseFloat(numArray)
arrNumber.push(numberA);
    }
 


}

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
    <div> <button onclick="sort(arr)" class="btn">Sort by view</button></div>
    <div><button onclick="blogWrite()" class="btn btn-primary text-base-100 bg-[#FF1F3D] hover:bg-[#FF1F3D] active:bg-[#FF1F3D] border-none"> Blog</button></div>`;

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

        const view =video.others.views;
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
        <p>${view} views </p>
        </div>
        
         
        </div>
       
      </div>
      
      <div class="bg-black absolute top-32 left-44 px-2" >
      <p  class="text-white text-sm">
${timeDuration}
      </p>
    </div>
      
      `;
    
     arr.push(view);
     
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

   
}
const clickMusic=(id)=>{
    allVideoContant(id);
    
  
}
const clickComedy=(id)=>{
    allVideoContant(id);
   
}
const clickDrawing=(id)=>{
    allVideoContant(id);
   
}
 nev();
catagoryfath();
allVideoContant(1000);
const blogWrite = ()=>{

    const main = document.getElementById('main') ;
    main.innerHTML =` <section>
    <h1 class="text-2xl font-bold text-center mb-7 underline"> Question 1: Discuss the scope of var, let, and const
    </h1>
    <div class="flex justify-around">
        <div>
            <h2 class="text-xl font-bold"> var</h2>

            <li>variable can redeclared</li>
            <li>can be re-assign </li>
            <li> It do not mantain Block Scope</li>

        </div>
        <div>
            <h2 class="text-xl font-bold"> Let</h2>

            <li>variable can not be redeclared</li>
            <li>can be re-assign </li>
            <li> It mantain Block Scope</li>

        </div>
        <div>
            <h2 class="text-xl font-bold"> Const</h2>

            <li>variable can not be redeclared</li>
            <li>can not be re-assign </li>
            <li> It mantain Block Scope</li>

        </div>

    </div>
    <div>
        <section class="m-7">
            <h1 class="text-2xl font-bold text-center"> question 2: Tell us the use cases of null and undefined</h1>
            <h2 class="text-xl font-bold"> Undefined </h2>
            <li>Variable not initialized</li>
            <li>Function With No return</li>
            <li> perameter that is not pass</li>
            <li> If return has nothing on the right side </li>
            <li>properly missing </li>
            <li>array position not set in the range</li>

            <h2 class="text-xl font-bold"> Null </h2>
            <li>blank arry </li>
            <li>blank object </li>
            <li>blank string </li>

        </section>
        <h1 class="text-2xl font-bold   text-center"> Question 3:What do you mean by REST API?</h1>
        <p class="p-7"> REST API is a way of accessing web services in a simple and flexible way without having any
            processing.
            It’s used to fetch or give some information from a web service.
        </p>
    </div>
</section>`;
}
