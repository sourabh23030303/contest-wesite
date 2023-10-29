
 const image=["https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoKVrlUt2nspjzNDqY-pAffNsQoYkHKgIIgTg2BrP6U_MMvWqbjX3OtfbI5XBvc1WeCA&usqp=CAU"]
 const randomImage = Math.floor(Math.random() * image.length);
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
       
     return v.json()
}).then((objecthai)=>{
    console.log(objecthai)//fetched data is in array format with kesy(1,2,3 here) and value or vo value  object hai
   let ihtml = ""
    for(item in objecthai){ //item yha pe 0,1,2,3,4,5,..49 hai or uski value detail hai
      console.log(objecthai[item]) // values nikal li arrays ki
           ihtml += ` <div class="card" style="width: 18rem;">
          <img src=${image[Math.floor(Math.random() * image.length)]}>
           <div class="card-body">
             <h5 class="card-title">${objecthai[item].name}</h5> 
             <h5 class="card-title">starts at ${objecthai[item].start_time}</h5>
             <h5 class="card-title">ends on ${objecthai[item].end_time}</h5>
             <h5 class="card-title">site name: ${objecthai[item].site}</h5>
             
             <a href="${objecthai[item].url}" class="btn btn-primary">go to participate</a>
           </div>
         </div>
           `                           

           cardcontainer.innerHTML = ihtml//card container mai inner html karo jiska name ihtml hai or i html mai cards ka loop lyaga hai
        }
})

//yha pe mene cardcontainer id mai call card likha hai





















