import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {

    return (`
        
            <div class = "wrapper">
                <i class="bi bi-search m-5 position-absolute"></i>
                <input type = "text" placeholder="Search Twitter" class = "rounded-pill m-4 pt-2 pb-2"/>
                <i class="bi bi-gear-fill fa-1 ms-1 "></i>
            </div>

            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">
                        For you
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="news.html">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="sports.html">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link " href="entertainment.html">
                        Entertainment
                    </a>
                </li>
            </ul>
            
                  <div class="position-relative">
                <img class="w-100 mt-2"
                     src="../../images/download.jpg" alt="">
                <h2 class="position-absolute bottom-0 ms-2 text-light">
                    SpaceX's Spaceship
                </h2>
            </div>
            
             ${PostSummaryList()}

    `);
}
export default ExploreComponent;