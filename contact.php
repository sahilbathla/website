<!DOCTYPE HTML>
<html>

<head>
  <title>Sahil Bathla's Den</title>
  <meta name="description" content="Sahil Bathla's official website - portfolio, blog, about me and contact me" />
  <meta name="keywords" content="sahil, bathla, portfolio, blog, about, me, contact, me " />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <!-- modernizr enables HTML5 elements and feature detects -->
  <script type="text/javascript" src="js/modernizr-1.5.min.js"></script>
</head>

<body>
  <div id="main">
    <header>

      <div id="logo">
        <div id="logo_text">
          <!-- class="logo_colour", allows you to change the colour of the text -->
          <h1><a href="index.html">Sahil <span class="logo_colour">Bathla</span></a></h1>
          <h2>In's and out's of my life</h2>
        </div>
        <p style="float: right;">
          <a href="https://github.com/sahilbathlavinsol" class="socialLink">
            <img src="images/github.png" alt="github" width="35px" height="32px" />
          </a>
          <a href="https://twitter.com/sahilbathla" class="socialLink">
            <img src="images/twitter.png" alt="twitter" />
          </a>
          <a href="https://www.facebook.com/sahilbathla1" class="socialLink">
            <img src="images/facebook.png" alt="facebook" />
          </a>

        </p>
      </div>

      <nav>
        <ul class="sf-menu" id="nav">
          <li class="selected"><a href="index.html">Home</a></li>
          <li><a href="portfolio/index.html">My Portfolio</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="contact.php">Contact Me</a></li>
        </ul>
      </nav>

    </header>

    <div id="site_content">
      <div id="sidebar_container">
        <div id="gallery">
          <ul class="images">
            <li class="show"><img width="450" height="450" src="images/1.jpg" alt="photo_one" /></li>
            <li><img width="450" height="450" src="images/2.jpg" alt="photo_two" /></li>
          </ul>
        </div>
      </div>
      <div id="content">
        <h1>Contact</h1>
        <?php

          // ini_set("display_errors", '1');
          // ini_set("log_errors", '1');
          // ini_set("error_log", "/var/www/sahilbathla/error.log");

          $to = 'sahil@vinsol.com';
          $subject = 'Enquiry from the website';
          $contact_submitted = 'Your message has been sent.';

          // Do not amend anything below here, unless you know PHP
          function email_is_valid($email) {
            return preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i',$email);
          }
          if (!email_is_valid($to)) {
            echo '<p>You must set-up a valid (to) email address before this contact page will work.</p>';
          }
          if (isset($_POST['contact_submitted'])) {
            $return = "\r";
            $youremail = trim(htmlspecialchars($_POST['your_email']));
            $yourname = stripslashes(strip_tags($_POST['your_name']));
            $yourmessage = stripslashes(strip_tags($_POST['your_message']));
            $contact_name = "Name: ".$yourname;
            $message_text = "Message: ".$yourmessage;
            $user_answer = trim(htmlspecialchars($_POST['user_answer']));
            $answer = trim(htmlspecialchars($_POST['answer']));
            $message = $contact_name . $return . $message_text;
            $headers = "From: ".$youremail;
            if (email_is_valid($youremail) && !eregi("\r",$youremail) && !eregi("\n",$youremail) && $yourname != "" && $yourmessage != "" && substr(md5($user_answer),5,10) === $answer) {
              $yourname = '';
              $youremail = '';
              $yourmessage = '';
              if(mail($to, $subject, $message, $headers))
              {
                echo '<p style="color: #C3E600;">'.$contact_submitted.'</p>';
              }
              else
              {
                echo '<p style="color: #C3E600;"> Failed to send mail </p>';
              }
            }
            else echo '<p style="color: #C3E600;">Please enter your name, a valid email address, your message and the answer to the simple maths question before sending your message.</p>';
          }
          $number_1 = rand(1, 9);
          $number_2 = rand(1, 9);
          $answer = substr(md5($number_1+$number_2),5,10);
        ?>
        <form id="contact" action="contact.php" method="post">
          <div class="form_settings">
            <p><span>Name</span><input class="contact" type="text" placeholder="Your Name.. " name="your_name" value="<?php echo $yourname; ?>" /></p>
            <p><span>Email Address</span><input class="contact" type="text" placeholder="Your Email Address.." name="your_email" value="<?php echo $youremail; ?>" /></p>
            <p><span>Message</span><textarea class="contact textarea" placeholder="Your valuable query or suggestion.." rows="5" cols="50" name="your_message"><?php echo $yourmessage; ?></textarea></p>
            <p style="padding: 10px 0; line-height: 2em;">To help prevent spam, please enter the answer to this question:</p>
            <p><span><?php echo $number_1; ?> + <?php echo $number_2; ?> = ?</span><input type="text" name="user_answer" /><input type="hidden" name="answer" value="<?php echo $answer; ?>" /></p>
            <p style="padding-top: 15px"><span>&nbsp;</span><input class="submit" type="submit" name="contact_submitted" value="send" /></p>
          </div>
        </form>
      </div>
    </div>
    <footer>
      <p>| Copyright &copy; Sahil Bathla | </p>
    </footer>
  </div>
  <!-- javascript at the bottom for fast page loading -->
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jquery.easing-sooper.js"></script>
  <script type="text/javascript" src="js/jquery.sooperfish.js"></script>
  <script type="text/javascript" src="js/image_fade.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      $('ul.sf-menu').sooperfish();
    });
  </script>
</body>
</html>