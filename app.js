class SiteSimples {


    muda_tema = () => {
        var className = document.body.className;
        if (className == "light-theme") {
            document.body.setAttribute("class","dark-theme");
            document.querySelector('.btn').textContent = "Light";
        } else {
            document.body.setAttribute("class","light-theme");
            document.querySelector('.btn').textContent = "Dark";
        }
        console.log('current class name: ', className);
    }

    listenners = () => {
        document.querySelector('.btn').addEventListener('click', //this.muda_tema()
         function(){
            let site = new SiteSimples();
            site.muda_tema();
            //SiteSimples.muda_tema();
        }
        );
    }


    start = () => {
        console.log('inicio')
        this.listenners();
    }

  

  

    
}

