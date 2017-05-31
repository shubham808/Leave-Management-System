
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" type="text/css" href="assets/css/login.css" />
<script  src="assets/js/jquery-3.2.0.min.js"></script>
<script type="text/javascript" src="assets/js/main.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.js"></script>
<title>Atal Bihari Vajpayee- Indian Institute of Information Technology and Management</title>
<style>
body,h1,h5 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.bgimg {
    background-image: url('assets/img/students.jpg');
    min-height: 100%;
    background-position: center;
    background-size: cover;
}
</style>
</head>
<body>

<!-- Header -->
<div class="bgimg w3-display-container w3-text-white">
  <div class="w3-display-middle w3-jumbo">
    <p>STUDENT LEAVE MANAGEMENT SYSTEM</p>
  </div>
  <div class="w3-display-topleft w3-container w3-xlarge">
    <p><button onclick="document.getElementById('login').style.display='block'" class="w3-button w3-black">LOGIN</button></p>
    <p><button onclick="document.getElementById('contact').style.display='block'" class="w3-button w3-black">CONTACT US</button></p>
  </div>
  <div class="w3-display-bottomleft w3-container">
    <p class="w3-xlarge">SYSTEM ANALYSIS AND DESIGN</p>
    <p class="w3-large">2017</p>
    
  </div>
 </div>

<div id="login" class="w3-modal" >
  <div class="w3-modal-content w3-animate-zoom">
    <div class="w3-container w3-black w3-display-container">
      <span onclick="document.getElementById('login').style.display='none'" class="w3-button w3-display-topright w3-large">x</span>
      <h1>LOGIN</h1>
     </div>
     <div class="w3-container" style="color:black">
      <input class="w3-input w3-padding-16 w3-border" type="text" name="username" id="username" placeholder=" Username" required name="Username">
       <label id="Invalid" ></label>
       <input class="w3-input w3-padding-16 w3-border" type="password" name="password" id="password" placeholder="Password" required name="Password"><br>
       <button class="w3-button" onclick="submit_form()" value="Login"  id="submit" type="submit">LOGIN</button><br><br>
  </div>
</div>
</div>

<div id="contact" class="w3-modal" >
  <div class="w3-modal-content w3-animate-zoom">
    <div class="w3-container w3-black w3-display-container">
      <span onclick="document.getElementById('contact').style.display='none'" class="w3-button w3-display-topright w3-large">x</span>
      <h1>CONATCT US</h1>
     </div>
     <div class="w3-container" style="color:black">
     <br>
     <p> HARITHA SREEDHARAN NAIR </p>
     <p style="color:grey"> IPG 2015 - 035 </p><br>
     <p> JALAJ KRISHNA VARSHNEY </p>
     <p style="color:grey"> IPG 2015 - 036 </p><br>
     <p> SALONI RAJEEV KUMAR </p>
     <p style="color:grey"> IPG 2015 - 082 </p><br>
     <p> SHUBHAM SHUKLA </p>
     <p style="color:grey"> IPG 2015 - 118 </p><br>
  </div>
</div>
</div>


</body>
</html>