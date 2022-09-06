
    /**
     * Animation on scroll function and init
     */
    function aos_init() {
        AOS.init({
        duration: 1000,
        // easing: 'ease-in-out',
        once: true,
        mirror: false
        });
    }
    window.addEventListener('load', () => {
        aos_init();

        // For white space animation bug solution
        //https://github.com/michalsnik/aos/issues/626
        if (screen.width < 1024) {
            setTimeout(function () {
                var x = document.querySelectorAll(".animation");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.overflowX = "hidden";
                }
            }, 500);
            //End of the solution
        }


    });

    // For Navbar icon menu and close 
    function Menu(){
        console.log('1')
        let list = document.getElementById('nav_head')

        let e = document.getElementById("menu")
        if(e.name === 'menu'){
            e.name = "close"

            list.classList.add('display')

            list.classList.remove('hidden')
            list.classList.remove('md:hidden')
            list.classList.remove('sm:hidden')
        }
        else {
            e.name = "menu", list.classList.add('hidden')
        }
  
    }

    //For Navbar closing/hidden the nav when in mobile
    function Nav(){
        let list = document.getElementById('nav_head')
        let e = document.getElementById("menu")

        e.name = "menu"
        list.classList.add('hidden')

    }
