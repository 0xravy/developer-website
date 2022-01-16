

class Body extends React.Component {
    render() {
        return (
            <section class="home-section">
                    <div class="home-content">
                        <i class='bx bx-menu' ></i>
                        <span class="text">{'{sqare}'}</span>
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
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    let btn =  sidebarBtn.style.left;
    if(sidebarBtn.style.left === 250+'px') {
        sidebarBtn.style.left = 80 + 'px';
    } else {
        sidebarBtn.style.left = 250 + 'px';
    } 
});




// ================================================