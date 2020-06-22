************************************************************
   Tecnologias usadas
************************************************************
    -HMTL
    -CSS
    -Sass
    -JavaScript
    -Google Maps
    -Bootstrap
    -(Normalize.css)
    -(Font Awesome)
    -(Google Fonts)


Editor de codigo utilizado: Visual Studio Code


************************************************************
    Pasos que realice para la realizacion de la prueba
************************************************************

 1.- El mismo dia que recibi la prueba comence armando el HTML y pasé toda la tipografia e imagenes.

 2.- Dia siguiente (Dia 2) me enfoque en hacer todo el CSS con preprocesador Sass, Bootstrap, Google Fonts y Font Awesome, luego revisar la url que me enviaron para conocer la informacion que me habian enviado.

 3.- Dia 3, utilice este dia mas que nada para documentarme sobre la api de googlemaps, crear la credencial para tener acceso y hacer pruebas a parte para entender como funciona esa api y ver que informacion era necesaria para su funcionamiento.

 4.- Dia 4, realice todo el funcionamiento del mapa de la siguiente forma:

    4.1.- Crear los elementos (Li, Label, Checkbox) los cuales iban a contener las direcciones almacenadas en la url, identificando a los elementos necesarios con su Id y name.

    4.2.- Crear el mapa y marcar en él las direcciones.

    4.3- Realizar el funcionamiento de los elementos (Checkbox) para el marcaje y desmarcaje.


************************************************************
    Inconvenientes
************************************************************

1.- Los primeros inconvenientes se presentaron al segundo dia, la momento de realizar el Css, el primero fue la busqueda de una tipografia que se ajuste o coincidiera el logo turbus, el texto, ademas del color del navbar, el icon que va al lado de share, también al momento de añadirle estilo a la seccion donde van los logos de las distintas empresas, la mayoria las busque en google otras las corte del archivo que me enviaron, casi todas las edite en un tamaño de 400 pixeles para que se ajustaran mejor. Otro de los inconvenientes que tuve fue en el footer, debido a que las  tres secciones que lleva cada información no logré separarlas de forma simétrica, asi que tuve que utilizar otra forma para que las tres secciones se pudierna ver separadas como la imagen.

2.- Para el tercer dia mi inconveniente fue como crear la credencial en googlemaps, porque no entendia si debia pagar o no para poder activarla, asi que cada vez que llegaba a una sección donde pedían información personal (Tarjeta de Credito) lo rechazaba, vi algunos videos tutoriales de cómo hacerlo y en ninguno le pedia tal informacion incluso uno de esos decía que no era necesario para su funcionamiento, al final despues de habilitar varias opciones me seguía arrojando el error (enable billing error), asi que me vi en la obligación de dar la información para solventar el problema y dio resultado, por fortuna no cobran nada durante los 365 dias.

3.- Para el cuarto dia surgieron varios incovenientes, cuando creaba cada elemento (Li, Label, Checkbox) y le inseraba la información que iban a mostrar, estos no se ajusrtabaa los estilos que le habia definido, asi que tuve que realizar cambios en esa area de la seccion map-container. Otro de los inconvenientes que se me presento fue en como cambiar el icon de la marca en el mapa al momento de seleccionar una direccion, al principio al momento de seleccionar una direccion estos lo que hacian era montar la nueva marca sobre la que ya estaba, asi que volvi a documentarme de como deshabilitar la marca que ya estaba y colocar la marca que se estaba seleccionando. En ese caso logre solventarlo creando un array de marcas, luego buscar la informacion de la nueva marca, y por ultimo buscar esa nueva marca en el array de marcas y cambiarle el icon. Por ultimo debi modificar el estilo del icon por default que trae el googlemaps debido a que el diseño de la nueva marca no eran parecidos, asi que tuve que cambiar el diseño de la marca por otro que fuera igual a la nueva marca.
