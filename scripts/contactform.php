<?php
// Check if the form is submitted
if ( isset( $_POST['submit'] ) ) {
	// check if the post method is used to submit the form
		$name = $_POST['formName'];
		$email = $_POST['formEmail'];
		$phcode = $_POST['formPhCode'];
		$phone = $_POST['formPhone'];
		$message = $_POST['formMessage'];
		//replace enters with \n
		$message = strtr( $message, array(  "\n" => "\\n",  "\r" => "\\r" ));
		
		$fp = fopen("formdata.csv", 'a');  //Open file for append
		if ( empty ($phone) ) {
			fputcsv($fp, array($name, $email, '', '', $message));
		}
		else {
			fputcsv($fp, array($name, $email, $phcode, $phone, $message));
		}
		fclose($fp);
}
header( "Location: ../contactme.html?thankyou" );
exit;
?>