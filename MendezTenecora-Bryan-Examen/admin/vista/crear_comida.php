<!DOCTYPE html>
<html lang="es">

    <head>
        <title>Comidas</title>
        <link rel="stylesheet" type="text/css" href="../../public/css/style_crear_comida.css">
        <meta charset="utf-8" />
    </head>
    <body id="cuerpo">
        <div class="contenedor">
            <?php
                include '../../config/conexionBD.php'; 
                $pedido = $_GET["pedido"];
            ?>
            <header id="cabecera">
                <nav class="menu">
                    <h3 class="titulo_menu">Menu</h3>
                    <ul>
                        <li><a href="../../public/vista/listar_pedidos.html">Listar Pedido</a></li>
                        <li><a href="../../public/vista/index.html">Menu</a></li>
                    </ul>
                </nav>
            </header>
            <div class="logo">
                <img class=img_logo src="../../public/img/excelencias.png" alt="Logo del Restaurante">
            </div>
            <div class="separador">
                <h2>COMIDA</h2>
            </div>
            <div class="cont_form">
                <form class="formulario01" method="POST" onsubmit="" action="../controlador/agregar_comida.php?pedido=<?php echo $pedido ?>">
                    <h2>Agregar Comida</h2>
                    <label>&#8226; Nombre Comida:</label>
                    <input type="text" id="nombre" name="nombre"/>
                    <label>&#8226; Precio:</label>
                    <input type="text" id="precio" name="precio"/>
                    <input id="terminar" type="button" value="Terminar Pedido" onclick="location.href='../../public/vista/listar_pedidos.html'"/>
                    <input id="agregar" type="submit" value="Agregar">
                    <input id="cancelar" type="button" value="Cancelar" onclick="location.href='../../public/vista/index.html'"/>
                    <div></div>
                </form>
            </div>
            <?php
                $conn->close(); 
            ?>
            <div></div>
            <div class="menu_comida">
                <table class="menu_tabla">
                    <caption>Menú</caption>
                    <tr>
                        <th>PLATO</th>
                        <th>PRECIO</th>
                    </tr>
                    <tr>
                        <td>Encebollado</td>
                        <td>1.75</td>
                    </tr>
                    <tr>
                        <td>Chaulafan</td>
                        <td>1.75</td>
                    </tr>
                    <tr>
                        <td>Arroz con Camarones</td>
                        <td>1.75</td>
                    </tr>
                    <tr>
                        <td>Broster</td>
                        <td>1.75</td>
                    </tr>
                    <tr>
                        <td>Churrasco</td>
                        <td>1.75</td>
                    </tr>
                </table>
            </div>
            <div class="imagenes">
                <h2>Platos a la carta</h2>
                <img class="img_encebollado" src="../../public/img/encebollado.jpg" alt="Encebollado">
                <img class="img_bandera" src="../../public/img/bandera.png" alt="Bandera">
                <img class="img_camarones" src="../../public/img/camarones.jpg" alt="Plato de Camarones">
                <img class="img_churrascos" src="../../public/img/churrasco.jpg" alt="Plato de Churrascos">
        </div>
        </div>
    </body>
</html>