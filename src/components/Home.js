import './Home.css'
import { NavLink } from "react-router-dom";


function Home() {

  return <>

    <header>
      <div class="navbar">
        <div class="navlogo">
          {/* <div class="logo border" ></div> */}
        </div>


        <div style={{ marginRight: '250px' }} class="nav-search">
          <select style={{ border: 'none' }} class="border-0 search-option1">
            <option value="All" style={{ backgroundColor: 'rgb(35,47,62)' }} class="border-0  search-option2">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" class="search-input" />
          <div class="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

        </div>




      </div>
      <div class="second-nav" style={{ backgroundColor: 'rgb(35,47,62)', position: 'absolute' }}>



      </div>
    </header>



    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_toys_2x-NEW._CB575816411_.jpg" class="d-block w-100" alt="..." />
        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/JupiterGW/P2_GW_Home-decor--furnishings_PC_3000x1200_Unrec._CB574640172_.jpg" class="d-block w-100" alt="..." />
        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Jupiter_2023/Phase2/Shoes_HB/Unrec/1/Revised/3000_rev_unrec_shoes._CB574675462_.jpg" class="d-block w-100" alt="..." />
        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/5thFearPhase1/D98300308_Jupiter1_PC_Hero_3000x1200._CB575894269_.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jup23p1/unrecheroroe/upd/MA_3000._CB576088600_.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_20_1X_EN._CB576365685_.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PCAcc/Jupiter/Hero/CA_DesktopHeroTemplate_1500x600_2023_1._CB575874664_.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>



    <main>
      <div class="main">
        <div class="msg">
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <NavLink to href="#">Click here to go to amazon.in</NavLink ></p>
        </div>
      </div>
      <div class="shop">
        <div class="shop1 box">
          <div class="box1-content">
            <h2>Toys Under $30</h2>
            <div class="box1-img" style={{ backgroundImage: ' url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}
          </div>
        </div>
        <div class="shop2 box">
          <div class="box1-content">
            <h2>Deals & Promotions</h2>
            <div class="box1-img" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}
          </div>
        </div>
        <div class="shop3 box">
          <div class="box1-content">
            <h2>Health & Care</h2>
            <div class="box1-img" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}
          </div>
        </div>
        <div class="shop4 box">
          <div class="box1-content">
            <h2>New arrivals in Toys</h2>
            <div class="box1-img" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}
          </div>
        </div>        <div class="shop1 box">
          <div class="box1-content">
            <h2>For Mens</h2>
            <div class="box1-img" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}

          </div>
        </div>
        <div class="shop2 box">
          <div class="box1-content">
            <h2>Kindle E readers</h2>
            <div class="box1-img" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}
          </div>
        </div>
        <div class="shop3 box">
          <div class="box1-content">
            <h2>Home refresh ideas</h2>
            <div class="box1-img" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}
          </div>
        </div>
        <div class="shop4 box">
          <div class="box1-content">
            <h2>Laptops & Tablets</h2>
            <div class="box1-img" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg)' }}></div>
            {/* <p><NavLink to ="#">Shop now</NavLink ></p> */}
          </div>
        </div>
      </div>
    </main>

  </>
}

export default Home;