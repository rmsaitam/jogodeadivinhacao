$(document).ready(function(){
  $("#form_adivinha").submit(function(){
      var numero = $("#numero").val();
      //alert(numero);

      $.ajax({
          url: "adivinha.php",
          type: "POST",
          data: "numero=" +numero,
          dataType: "json",
          
          error: function(XMLHttpRequest, textStatus, errorThrown){
          	$("#erro").html("houve algum problema!");
          },
          success: function(retorno){
          	 if(retorno.status == 1){
                //alert("retorno = " +retorno);
                $("#mensagem").show();
                $("#mensagem").html("Parabéns você acertou o número. <br /> O número sorteado foi " +retorno.numero_sorteado);
             }
          	 	
          	 else{
                //alert("retorno = " +retorno);
                $("#mensagem").show();
                $("#mensagem").html("Que pena, você errou o número. Tente novamente! <br /> O número sorteado foi " +retorno.numero_sorteado);
             }
          	 	
          }
      });
      return false;
  	});
});