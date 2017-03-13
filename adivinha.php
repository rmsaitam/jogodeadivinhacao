<?php
  if(isset($_POST["numero"]))
  {
  	   $numero = $_POST["numero"];
  	   
  	   $numero_sorteado = rand(1, 999);

       error_log("numero = " .$numero);
       error_log("numero sorteado = " .$numero_sorteado);

       //retorno status ao Ajax 1=acertou e 0=errou
  	   if($numero == $numero_sorteado)
       {

          $retorno = array("status" => 1, "numero_sorteado" => $numero_sorteado);
          echo json_encode($retorno);
       }
  	   else
       {
          $retorno = array("status" => 0, "numero_sorteado" => $numero_sorteado);
          echo json_encode($retorno);
       }
  }

?>