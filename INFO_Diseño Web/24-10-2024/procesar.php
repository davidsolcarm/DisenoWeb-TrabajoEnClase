<?php

    if(isset($_POST)){

        $info = json_decode($_POST['info']);

       
        //Traer la calificación máxima
        $minarray = [];
        for ($i = 0; $i < 10; $i++) {
            array_push($minarray, $info[$i][1]);
        }        
        $minValueArray = min($minarray);

        //Traer la calificación mínima
        $maxValueArray = max($minarray);

        //Promedio de las calificacione
        $suma = 0;
        $promedio = 0;

        for ($j = 0; $j < 10; $j++) {
            $suma = $info[$j][1] + $suma;
        }
        
        $promedio = $suma/10;

        //Reprobados 
        $reprobados = 0;

        for ($k = 0; $k < 10; $k++) {
            if ($info[$k][1] < 6) {
                $reprobados++;
            }
        }

        //Reprobados 
        $aprobados = 0;

        for ($l = 0; $l < 10; $l++) {
            if ($info[$l][1] >= 6) {
                $aprobados++;
            }
        }


        //Peores Alumno
        $peoresAlumnos = '';

        for ($l = 0; $l < 10; $l++) {
            if ($info[$l][1] < 6) {
                $peoresAlumnos = $peoresAlumnos . $info[$l][0] . ', ';
            }
        }

        //Mejores Alumnos
        $mejoresAlumnos = '';

        for ($l = 0; $l < 10; $l++) {
            if ($info[$l][1] >= 6) {
                $mejoresAlumnos = $mejoresAlumnos . $info[$l][0] . ', ';
            }
        }        



        



        //echo de los arrays
        echo('<u>Valor min:</u> ' . $minValueArray . '<br>' );
        echo('<u>Valor max:</u> ' . $maxValueArray . '<br>');
        echo('<u>Valor promedio:</u> ' . $promedio . '<br>');
        echo('<u>Reprobados:</u> ' . $reprobados . '<br>');
        echo('<u>Aprobados:</u> ' . $aprobados . '<br>');
        echo('<u>Peores Alumnos:</u> ' . $peoresAlumnos . '<br>');
        echo('<u>Mejores Alumnos:</u> ' . $mejoresAlumnos . '<br>');


        

    }

?>