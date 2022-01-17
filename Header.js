

class Header extends React.Component {
    render () {
        return (
            <header>
                <div class="sidebar close">
                    <div class="logo-details">
                        <img class='logo' src='https://images-ext-1.discordapp.net/external/2j3e2H6mV4L8Dueu4fg_ao7ugAm8OcpTRHkzDpXaFkY/%3Fsize%3D1024/https/cdn.discordapp.com/icons/820757242214481940/a_a335871c2b50bd75b4c11646550f8f6c.gif' />
                        <span class="logo_name">Sqare++</span>
                    </div>
                    <ul class="nav-links">
                        <li>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Category</a></li>
                            </ul>
                        </li>


                        <li>
                            <a href="#">
                                <i class='bx bxs-bookmark-alt'></i>
                                <span class="link_name">Supervisor</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Supervisor</a></li>
                            </ul>
                        </li>
                        
                        <li>
                            <a href="#">
                                <i class='bx bx-compass' ></i>
                                <span class="link_name">Explore</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Explore</a></li>
                            </ul>
                        </li>

                        
                        <li>
                            <a href="#">
                            <i class='bx bxs-news bx-tada' ></i>
                                <span class="link_name">News</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">News</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#">
                                <i class='bx bxs-crown bx-tada' ></i>
                                <span class="link_name">Competition</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Competition</a></li>
                            </ul>
                        </li>
                          

                        <li>
                            <div class="iocn-link">
                                <a href="#">
                                <i class='bx bx-collection' ></i>
                                <span class="link_name">Language</span>
                                </a>
                                <i class='bx bxs-chevron-down arrow' ></i>
                            </div>
                            <ul class="sub-menu">


                                <li><a class="link_name" href="#">Language</a></li>
                                
                                <li><a href="#">
                                    <i class='fnt fab fa-html5'>HTML<i class='fnt fab fa-css3'>Css </i></i>
                                </a></li>

                                <li><a href="#">
                                    <i class='fnt fab fa-js-square' > Javascript </i>
                                </a></li>

                                <li><a href="#">
                                    <i class='fnt fab fa-php'> PHP</i>
                                </a></li>

                                <li><a href="#">
                                    <i class="fnt fab fa-python"> Python </i>
                                </a></li>
  
                                <li><a href="#">
                                    <i class="fnt fab fa-java"> Java </i>
                                </a></li>

                                <li><a href="#">
                                    <i class="fnt fas fa-hashtag">C#</i>
                                </a></li>

                                <li><a href="#">
                                    <i class='fnt bx bxl-c-plus-plus '>C/C++</i>
                                </a></li>


                            </ul>
                        </li>

                        <li>
                            <a href="#">
                                <i class='bx bx-support' ></i>
                                <span class="link_name">Support</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Support</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#">
                                <i class='bx bx-cog' ></i>
                                <span class="link_name">Settings</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Settings</a></li>
                            </ul>
                        </li>

                        <li>
                            <div class="profile-details">
                                <div class="profile-content">
                                {/* <img src="image/profile.jpg" alt="profileImg">--> */}
                                </div>
                                <div class="name-job">
                                <div class="profile_name">sign in</div>
                                <div class="job">Web Desginer</div>
                                </div>
                                <i class='bx bx-log-out' ></i>
                            </div>
                        </li>


                    </ul>
                </div>

                

            </header>

            
        );

        

    };
};



class App extends React.Component {
    render () {
        return (
            <>
                <Header />
            </>
        );

    }

};



const app = document.getElementById('header');

ReactDOM.render(<App />, app);


