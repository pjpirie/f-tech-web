<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
</body>
</html>
<?php
// setting up variables from form input values
$firstname = $_POST['firstName'];
$secondname = $_POST['secondName'];
$telephone = $_POST['telephone']
$reason = $_POST['reason'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$message = wordwrap($message,70);// word wraps the message if greater than 70 char long

// composing the email
$email_from = 'form_enquiry@f-tech.tech';
$email_subject = "New message from website";
$email_body = "You have received a new message from the user $firstname $secondname.\n".
		"Their type of enquiry is $reason.\n".
                            "Here is the message:\n $message".
	  "They can be contacted by telephone at: $telephone or by email at $visitor_email."

	  
 $to = "30305419@cityofglacol.ac.uk";
 $headers = "From: $email_from \r\n";
 $headers .= "Reply-To: $visitor_email \r\n";

// checking if the email contains injections - spam characters if so returns messae to site
function IsInjected($str)

{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
          '(%08+)',
           '(%09+)'
           );
      
    $inject = join('|', $injections);
    $inject = "/$inject/i";
  
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}
if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

// the command to send the email to the email address
 mail($to,$email_subject,$email_body,$headers);


?>
