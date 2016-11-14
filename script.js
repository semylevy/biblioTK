$(function() {

    var ini = "b";

    var numArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

    var cubE;
    var fechaE;
    var horaE;
    var matriculaE;
    // Get the form.
    var form = $('#date_time_form');

    // Get the messages div.
    var blocks = $('#blocks');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();

        var arrayData = $(form).serializeArray();

        fechaE = arrayData[0].value;

        horaE = arrayData[1].value;

        // Get the messages div.
        var formMessages = $('#form-messages');

        var responseArray;

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })

        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            if(response == -1) {
              for(i = 0; i < 8; i++) {
                var str = ini.concat(numArray[i]);
                document.getElementById(str).style.backgroundColor = "green";
              }
            } else {
              responseArray = response.toString();

              // Set the message text.
              for(i = 0; i < responseArray.length; i++) {
                //$(num).style.backgroundColor
                var str = ini.concat(responseArray[i]);
                document.getElementById(str).style.backgroundColor = "red";
              }
              for(i = 0; i < 8; i++) {
                var str = ini.concat(numArray[i]);
                var color = document.getElementById(str).style.backgroundColor;
                if(color != "red") {
                  document.getElementById(str).style.backgroundColor = "green";
                }
              }
            }

        })

        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });

    // Get the modal
    var modal = document.getElementById('modalReserva');

    // Get the button that opens the modal
    var btn = document.getElementById("b1");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    var cerrar = document.getElementById("botonCerrar");

    var apartar = document.getElementById("botonApartar");

    // When the user clicks on the button, open the modal
    /*btn.onclick = function() {
        modal.style.display = "block";
    }*/


    var str1 = ini.concat(numArray[0]);
    var bot1 = document.getElementById(str1);
    bot1.onclick = function() {
        if(document.getElementById(str1).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 1;
        }
        else if(document.getElementById(str1).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    var str2 = ini.concat(numArray[1]);
    var bot2 = document.getElementById(str2);
    bot2.onclick = function() {
        if(document.getElementById(str2).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 2;
        } else if(document.getElementById(str2).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    var str3 = ini.concat(numArray[2]);
    var bot3 = document.getElementById(str3);
    bot3.onclick = function() {
        if(document.getElementById(str3).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 3;
        } else if(document.getElementById(str3).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    var str4 = ini.concat(numArray[3]);
    var bot4 = document.getElementById(str4);
    bot4.onclick = function() {
        if(document.getElementById(str4).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 4;
        } else if(document.getElementById(str3).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    var str5 = ini.concat(numArray[4]);
    var bot5 = document.getElementById(str5);
    bot5.onclick = function() {
        if(document.getElementById(str5).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 5;
        } else if(document.getElementById(str4).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    var str6 = ini.concat(numArray[5]);
    var bot6 = document.getElementById(str6);
    bot6.onclick = function() {
        if(document.getElementById(str6).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 6;
        } else if(document.getElementById(str6).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    var str7 = ini.concat(numArray[6]);
    var bot7 = document.getElementById(str7);
    bot7.onclick = function() {
        if(document.getElementById(str7).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 7;
        } else if(document.getElementById(str7).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    var str8 = ini.concat(numArray[7]);
    var bot8 = document.getElementById(str8);
    bot8.onclick = function() {
        if(document.getElementById(str8).style.backgroundColor == "green") {
          modal.style.display = "block";
          cubE = 8;
        } else if(document.getElementById(str8).style.backgroundColor == "red") {
          alert("Por favor seleccione un cubículo disponible");
        } else {
          alert("Por favor seleccione una fecha y hora");
        }
        console.log(cubE);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    cerrar.onclick = function() {
        modal.style.display = "none";
    }

    apartar.onclick = function() {
      matriculaE = document.getElementById("inputMatricula").value;
      $.ajax({
          type: 'POST',
          url: 'reserva.php',
          data: {date: fechaE, time: horaE, cubiculo:cubE, matricula:matriculaE}
      })

      .done(function(response) {

        console.log("SUCCESS");
        alert("Se ha creado exitosamente la reservación");
        modal.style.display = "none";
        document.getElementById('consul').click();

      })

      .fail(function(data) {

        console.log(data.responseText);
        alert("Ha ocurrido un error, por favor intente de buevo más tarde");

      });
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});
