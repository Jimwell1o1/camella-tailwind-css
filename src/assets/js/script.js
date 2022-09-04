
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
    });

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
  
       
        // // button.
        // let nav = document.getElementsByClassName('navbar')
        // if (nav.classList.contains('hidden')) {
        //     nav.style.display = "block"
        // } else {
        //     nav.style.display = "none"
        // }
    }

