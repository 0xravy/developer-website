const a = {
    content: ['home', 'about', 'help', 'say']
}

class Header extends React.Component {
    render () {
        return (
            <header>
                <div class="sidebar close">
                    <div class="logo-details">
                        <img class='logo' src='https://images-ext-1.discordapp.net/external/2j3e2H6mV4L8Dueu4fg_ao7ugAm8OcpTRHkzDpXaFkY/%3Fsize%3D1024/https/cdn.discordapp.com/icons/820757242214481940/a_a335871c2b50bd75b4c11646550f8f6c.gif' />
                        <span class="logo_name">CodingLab</span>
                    </div>
                    <ul class="nav-links">
                        <li>
                            <a href="#">
                                <i class='bx bx-grid-alt' ></i>
                                <span class="link_name">Dashboard</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Category</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="iocn-link">
                                <a href="#">
                                <i class='bx bx-collection' ></i>
                                <span class="link_name">language</span>
                                </a>
                                <i class='bx bxs-chevron-down arrow' ></i>
                            </div>
                            <ul class="sub-menu">
                                <li><a class="link_name" href="#">Category</a></li>
                                <li><a href="#">HTML & CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                                <li><a href="#">PHP & MySQL</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">Java</a></li>
                                <li><a href="#">C#</a></li>
                                <li><a href="#">C/C++</a></li>

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
                                <i class='bx bx-cog' ></i>
                                <span class="link_name">Setting</span>
                            </a>
                            <ul class="sub-menu blank">
                                <li><a class="link_name" href="#">Setting</a></li>
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

                <section class="home-section">
                    <div class="home-content">
                        <i class='bx bx-menu' ></i>
                        <span class="text">Welcome to aravan learn</span>
                    </div>
                </section>

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



const app = document.getElementById('app');

ReactDOM.render(<App />, app);


//  ================[ header ]====================
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", function() {
    sidebar.classList.toggle("close")
});
// ================================================