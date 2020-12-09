function buscarPorTarjeta() {
    var tarjeta = document.getElementById("tarjeta").value;
    if (tarjeta == "") {
        document.getElementById("informacion").innerHTML = "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert("llegue");
            document.getElementById("informacion").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../../admin/controlador/listar_pedidos.php?tarjeta="+tarjeta+"&comida="+"",true);
    xmlhttp.send();
    }

    return false;
}

function listarPedidoComida() {
    console.log("Entro");
    var tarjeta = document.getElementById("comida1").value;
    console.log(tarjeta);
    if (tarjeta == "") {
        document.getElementById("informacion2").innerHTML = "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //alert("llegue");
                document.getElementById("informacion2").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../../admin/controlador/listarComidaPedido.php?tarjeta="+tarjeta,true);
        xmlhttp.send();
    }
    return false;
}

function buscarTarjeta() {
    console.log("Entro");
    var tarjeta = document.getElementById("tarjeta1").value;
    console.log(tarjeta);
    if (tarjeta == "") {
        document.getElementById("informacion").innerHTML = "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //alert("llegue");
                document.getElementById("informacion").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../../admin/controlador/buscar.php?tarjeta="+tarjeta,true);
        xmlhttp.send();
    }
    return false;
}

function buscarPorComida() {
    var comida = document.getElementById("comida").value;
    if (comida == "") {
        document.getElementById("informacion").innerHTML = "";
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert("llegue");
            document.getElementById("informacion").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../../admin/controlador/listar_pedidos.php?comida="+comida+"&tarjeta="+"",true);
    xmlhttp.send();
    }
    
    return false;
}