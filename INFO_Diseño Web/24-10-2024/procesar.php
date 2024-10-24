<?php

    if(isset($_POST)){

        /*

        info = [
        [
            "Gabo", 
            10
        ],
        
        [
            "Gabo2", 
            7
        ]
       
        ]

        
        
        */
        $info = json_decode($_POST['info']);


        for ($i = 0; $i < 10; $i++) {
            echo 'nombre: ' . $info[$i][0] . ',&nbsp;';
            echo 'calificación: ' . $info[$i][1] . '</br>';
        }        



    }

?>