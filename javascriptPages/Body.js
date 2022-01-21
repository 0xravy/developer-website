let text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quas cupiditate? Odit obcaecati expedita quod eveniet repudiandae ratione iusto, deleniti porro tempora minus quam eos nobis quisquam, tenetur beatae earum?
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magnam repellendus repellat quisquam, sed ipsam sint nobis incidunt doloribus porro, dolore consectetur eum, nihil quas officiis nostrum distinctio necessitatibus labore.
`;

class Body extends React.Component {
    render() {
        return (
            <section class="home-section">
                    <div class="home-content">
                        <i class='bx bx-menu' ></i>
                        {/* <span class="text">{'{sqare}'}</span> */}
                    </div>
                    <div class='m'></div>

                    <div class="c-card">
                        <div class="c-img">
                            <img src="https://wallpaper.dog/large/5558117.png"  alt="img error" />
                        </div>
                        <div class="c-content">
                            <h1 class="c-title">
                                aravan
                            </h1>
                            <p class="c-text">
                                {text}
                            </p>
                            <button class="c-btn">
                                click me
                            </button>
                        </div>
                    </div>
            </section>
        );
    };
};

const app = document.getElementById('body');
ReactDOM.render(<Body />, app)


//  ================[ header ]====================
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".home-content");
let homeSection = document.querySelector(".home-section");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    let btn =  sidebarBtn.style.left;
    if(sidebarBtn.style.left === 250+'px') {
        sidebarBtn.style.left = 80 + 'px';
        homeSection.style.left =  78 + 'px';
        // homeSection.style.width = "calc(100% - 80+'px')";
        homeSection.style.setProperty('width', 'calc(100% - 88px)');

    } else {
        sidebarBtn.style.left = 250 + 'px';
        homeSection.style.left =  250 + 'px';
        // homeSection.style.width = "calc(100% - 250+'px')";
        homeSection.style.setProperty('width', 'calc(100% - 250px)');
    }
});
// ================================================