
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

    function removeMargin(){
        if (screen.width < 1024) {
            setTimeout(function () {
                var x = document.querySelectorAll(".animation");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.overflowX = "hidden";
                }
            }, 500);
            //End of the solution
        }
    }

    // For Navbar icon menu and close 
    function Menu(e){
        console.log('1')
        let list = document.getElementById('nav_head')

        if(e.name === 'menu-outline'){

            list.classList.add('display')
            list.classList.remove('hidden')
            e.removeAttribute('id');
            e.name = "close-outline"
        }
        else if (e.name === 'close-outline'){
            e.removeAttribute('id');
            e.name = "menu-outline"
            list.classList.remove('display')
            list.classList.add('hidden')


        }
  
    }

    //For Navbar closing/hidden the nav when in mobile
    // function Nav(){
    //     list = document.getElementById('nav_head')
    //     e = document.getElementById('menu')

    //         e.removeAttribute('id');
    //         e.name = "menu-outline"
    //         e.id = "menu"
    //         list.classList.add('hidden')
    //         list.classList.remove('display')
    //         list.classList.remove('sticky')

    

    // }
