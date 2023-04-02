const NavigationSidebar = (active) => {
    return(`
              <div class="list-group">
                <a class="list-group-item list-group-item-action">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="../HomeScreen/index.html" class="list-group-item 
                list-group-item-action ${active === 'explore' ? 'active' : null} ">
                    <i class="bi bi-house-door-fill"></i>
                    <span class="d-none d-xl-inline">Home</span>
                </a>

                <a href="../explore/index.html" class="list-group-item list-group-item-action 
                    ${active === 'explore' ? 'active' : null}">
                    <i class="bi bi-hash hash-tag-color "></i>
                    <span class="d-none d-xl-inline" >Explore</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : null} ">
                    <i class="bi bi-bell-fill"></i>
                    <span class="d-none d-xl-inline">Notification</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : null} ">
                    <i class="bi bi-envelope-fill"></i>
                    <span class="d-none d-xl-inline">Messages</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : null} ">
                    <i class="bi bi-bookmark-fill"></i>
                    <span class="d-none d-xl-inline">Bookmarks</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : null}">
                    <i class="bi bi-list-ul"></i>
                    <span class="d-none d-xl-inline">Lists</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : null}">
                    <i class="bi bi-person-fill"></i>
                    <span class="d-none d-xl-inline">Profile</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : null}">
                    <i class="bi bi-circle-fill"> <i class="bi more-dots"></i></i>
                    <span class="d-none d-xl-inline">More</span>
                </a>
          
            
                <a href="../tuit.html"
               class="btn btn-primary border-1 text-center rounded-pill w-100 mt-2">
                Tweet
                </a>
                
              </div>    
            
 `);
}
export default NavigationSidebar;