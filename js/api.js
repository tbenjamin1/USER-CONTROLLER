function button(){
    document.getElementById('post').style.display='none';
    window.location.reload();
}
function postData(event){

    const userId=event.target.dataset.userId
    
    const userName=event.target.dataset.userName
    fetch("https://jsonplaceholder.typicode.com/posts/"+userId)

    .then(response => {
        console.log(response);

        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
            
        }).then(data =>{ 

            console.log(data);

            const userPost = [data].map(user =>{
                
               
                return`
               
                
          <div class="modal">
            <header class="modal-header">
              <h2>${user.title}</h2>
            </header>
            <div class="post">
              <p class="body">${user.body}</p>
            </div>
            <footer class="modal-footer">
              <p>Posted by ${userName}</p>
              <button class="modal-btn" onclick=button()>cancel
             
              </button>
            </footer>
          </div>
          
                `;
            })
            .join("");
            document.querySelector("#post")
            .insertAdjacentHTML("afterbegin",userPost);

        })

        
    
    
}




// let userId=null;
async  function fetchData(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{

if(!response.ok){
    throw Error("ERROR");
}
return response.json();
    
})
.then(data =>{


const html = data.map(user =>{
    const userId=user.id;
    const userName=user.name;
    
    return`
    <div class="user" >
    <h1>Name: ${user.name}</h1>
    <p>email: ${user.email}</p>
    <button type="button" class="btn" data-user-id=${userId} data-user-name=${userName}  >Post </button>
    </div>
    `;
})
.join("");


 document.querySelector("#dispaly")
.insertAdjacentHTML("afterbegin",html);
Array.from(document.querySelectorAll('.btn')).forEach(btn=>{
        btn.addEventListener('click',postData)
    })
})



}
fetchData();


