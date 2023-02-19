const WhoToFollowListItem = (who) => {
    return(`

    <li class="list-group-item">
     <div class="row">
     
         <div class=" col-lg-2 p-1">
             <img class="rounded-circle w-100"
               src="${who.avatarIcon}" alt="">
         </div>
         
         <div class="col-lg-6">
             <div class="fw-bold text-nowrap">
                ${who.userName}
                <i class="bi bi-check-circle verified-styling"></i>
            </div>
            
            <div class="text-secondary small">
                @${who.handle}
            </div>
              
        </div>
     
        <div class=" col-lg-4 d-flex align-items-center">
            <a href="#" class="btn btn-primary rounded-pill w-100">
                Follow
            </a>
        </div>
    </div>   
    </li>
    `);
}
export default WhoToFollowListItem;