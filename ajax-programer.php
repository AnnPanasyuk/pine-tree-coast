<?php
    $subject = 'Заявка с сайта';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['info'])) {
        $subject = $_POST['info'];
    }
    if(isset($_POST['contact_name'])) {
        $name = substr(htmlspecialchars(trim($_POST['contact_name'])), 0, 100);
        $mess .= '<b>Имя:</b>' . $name . '<br>';
    }
    if(isset($_POST['contact_tel'])) {
        $tel = substr(htmlspecialchars(trim($_POST['contact_tel'])), 0, 100);
        $mess .= '<b>Телефон:</b>' . $tel . '<br>';
    }
    if(isset($_POST['contact_email'])) {
        $mail = substr(htmlspecialchars(trim($_POST['contact_email'])), 0, 100);
        $mess .= '<b>Почта:</b>' . $mail . '<br>';
    }
    $mess .= '<hr>';
    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->AddAddress('panasyuk20anna@gmail.com','');   // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка
    $mail->Body = $mess;
    if(isset($_FILES['file0'])) {
                if($_FILES['file0']['error'] == 0){
                $mail->AddAttachment($_FILES['file0']['tmp_name'], $_FILES['file0']['name']);
            }
        }
    if(isset($_FILES['file1'])) {
            if($_FILES['file1']['error'] == 0){
            $mail->AddAttachment($_FILES['file1']['tmp_name'], $_FILES['file1']['name']);
        }
    }
    if(isset($_FILES['file2'])) {
            if($_FILES['file2']['error'] == 0){
            $mail->AddAttachment($_FILES['file2']['tmp_name'], $_FILES['file2']['name']);
        }
    }
    if(isset($_FILES['file3'])) {
            if($_FILES['file3']['error'] == 0){
            $mail->AddAttachment($_FILES['file3']['tmp_name'], $_FILES['file3']['name']);
        }
    }
    if(isset($_FILES['file4'])) {
            if($_FILES['file4']['error'] == 0){
            $mail->AddAttachment($_FILES['file4']['tmp_name'], $_FILES['file4']['name']);
        }
    }
    // отправляем наше письмо
    if (!$mail->Send()){
        die ('Mailer Error: ' . $mail->ErrorInfo);
    }else{
        echo 'true';
    }?>