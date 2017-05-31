<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Student Leave Management System</title>
    <!-- BOOTSTRAP CORE STYLE CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONT AWESOME CSS -->
<link href="assets/css/font-awesome.min.css" rel="stylesheet" />
     <!-- FLEXSLIDER CSS -->
<link href="assets/css/flexslider.css" rel="stylesheet" />
    <!-- CUSTOM STYLE CSS -->
    <link href="assets/css/style.css" rel="stylesheet" />    
  <!-- Google	Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css' />
</head>
<body onload="faculty()" id="body" >
   <?php session_start();  ?>
 <div class="navbar navbar-inverse navbar-fixed-top " id="menu">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img class="logo-custom" src="assets/img/logo180-50.png" alt=""  /></a>
            </div>
            <div class="navbar-collapse collapse move-me">
                <ul class="nav navbar-nav navbar-right">
                    <?php if($_SESSION['type']==="student"){ ?>
                    <li ><a href="student_data.php">STUDENTS</a></li>
                    <?php } ?>
                    <li><a href="faculty_data.php">FACULTY</a></li>
                    <?php if($_SESSION['type']!=="student"){ ?>
                    <li><a href="#" id="tab3" data-hostel= <?php echo $_SESSION['hostel']  ?> data-id= <?php echo $_SESSION['roll_number']  ?> data-type= <?php echo $_SESSION['type']  ?> ></a></li>
                    <li ><a  onclick="late()">LATE</a></li>
                    <li ><a onclick= "on_leave()">ON LEAVE</a></li>
                    <li ><a onclick="fetch_applications()">APPLICATIONS</a></li>
                    <li ><a onclick ="approved()">APPROVED</a></li>
                    <li ><a onclick ="rejected()">REJECTED</a></li>
                    <li ><a onclick="extend_requests()">EXTEND REQUESTS</a></li>
                    <?php } ?> 
                    <?php if($_SESSION['type']==="security"){ ?>
                    <li ><a onclick ="checkout()">CHECKOUT</a></li>
                    <?php } ?>
                    <li ><a href="index.php">LOGOUT</a></li>
                </ul>
            </div>
           
        </div>
    </div>
      <!--NAVBAR SECTION END-->
<br><br>
    <div id="contact-sec"   >
           <div class="overlay">
 <div class="container set-pad">

             <!--/.HEADER LINE END-->
           <div class="row set-row-pad"  data-scroll-reveal="enter from the bottom after 0.5s" >
           
               
                
                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <div id="tables"  ></div>           
                </div>
               </div>
                </div>
          </div> 
       </div>
     <div class="container">
             <div class="row set-row-pad"  >
    <div class="col-lg-4 col-md-4 col-sm-4   col-lg-offset-1 col-md-offset-1 col-sm-offset-1 " data-scroll-reveal="enter from the bottom after 0.4s">

                    <h2 ><strong>Our Location </strong></h2>
        <hr />
                    <div >
                        <h4>ABV-IIITM, Morena Link Road</h4>
                        <h4>Gwalior</h4>
                        <h4><strong>Call:</strong>  +919910011990 </h4>
                        <h4><strong>Email: </strong>director@iiitm.ac.in</h4>
                    </div>


                </div>
                 <div class="col-lg-4 col-md-4 col-sm-4   col-lg-offset-1 col-md-offset-1 col-sm-offset-1" data-scroll-reveal="enter from the bottom after 0.4s">

                    <h2 ><strong>Social Conectivity </strong></h2>
        <hr />
                    <div >
                        <a href="http://www.facebook.com">  <img src="assets/img/Social/facebook.png" alt="" /> </a>
                     <a href="http://www.google.com"> <img src="assets/img/Social/google-plus.png" alt="" /></a>
                     <a href="http://www.twitter.com"> <img src="assets/img/Social/twitter.png" alt="" /></a>
                    </div>
                    </div>


                </div>
                 </div>
     <!-- CONTACT SECTION END-->
    <div id="footer">
           <a href="http://binarytheme.com" style="color: #fff" target="_blank">Created for: SAD Project </a>
    </div>
     <!-- FOOTER SECTION END-->
   
    <!--  Jquery Core Script -->
    <script  src="assets/js/jquery-3.2.0.min.js"></script>
    <!--  Core Bootstrap Script -->
    <script src="assets/js/bootstrap.js"></script>
    <!--  Flexslider Scripts --> 
         <script src="assets/js/jquery.flexslider.js"></script>
     <!--  Scrolling Reveal Script -->
    <script src="assets/js/scrollReveal.js"></script>
    <!--  Scroll Scripts --> 
    <script src="assets/js/jquery.easing.min.js"></script>
    <!--  Custom Scripts --> 
    
	<script type="text/javascript" src="assets/js/main.js"></script>
         
</body>
</html>
