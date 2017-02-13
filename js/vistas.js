var vistas = {

    global : function(){

        /*Funciones generales del sitio*/

        loadSection("home.html");

        $('html').on("click",".change-section",function(e){

            e.preventDefault();
            var section = $(this).attr('section');
            loadSection(section);

        });

    },
    home : function(){

        /*Función default*/

    }

};