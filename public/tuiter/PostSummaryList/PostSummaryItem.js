
const PostSummaryItem = (post) => {

    return(`
    
        <a class = "list-group-item" href ="#">
        
            <div class = "row">
                
                <div class = "col-sm-9 col-md-10">
                    
                    <div class = "text-secondary ${!post.topic ? "d-none" : null }">
                        ${post.topic}
                    </div>
              
                    <div class = "fw-bold ${!post.userName ? 'd-none' : null}" >
                        ${post.userName}
                       <i class="bi bi-check-circle verified-styling"></i>
                        <span class="text-secondary small fw-normal">
                        - ${post.time} 
                     </span> 
                    </div>
                    
                    <div class = "fw-bold">
                        ${post.title}
                    </div>
                    
                    <div class = "text-secondary small ${!post.tweets ? "d-none" : null}">
                        ${post.tweets} 
                    </div>
                                
                </div>
                
                <div class = 'col'>
                    <img class = "w-100" src="${post.image}" alt = ''>
                </div>       
            
            </div>
        </a>
    
    `);
}
export default PostSummaryItem;