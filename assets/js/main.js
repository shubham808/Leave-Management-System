

function faculty(){

  arr=[];
  $.post("faculty.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){
                if(data!="failed"){
                      data=JSON.parse(data);
                      div=$("<div></div>");
                      div.append("<h2>Faculty Details</h2><br><hr><hr><br>");
                      for (var i = 0; i < data.length;  i++) {

                        div.append("<h4>"+data[i]['faculty_name']+"</h4><hr>"
                        +"<p>Faculty Id :"+data[i]['faculty_id']+"</p>"
                        +"<p>Email ID :  "+data[i]['email']+" </p>"
                        
                        +"<p>Gender : "+data[i]['faculty_gender']+"</p>"
                        +"<p>Contact : "+data[i]['faculty_contact']+"</p><h4><bold>Courses : "+"  "+data[i]['number_of_courses']+"<bold></h4>");
                        for (var j = 0; j < data[i]['number_of_courses'] ; j++) {
                          div.append("<p>Course "+(j+1)+" ID :  "+data[i]['course_id'+j+data[i]['faculty_id']]+" </p>");
                          div.append("<p>Course "+(j+1)+" Name :  "+data[i]['course_name'+j+data[i]['faculty_id']]+" </p>");
                        };
                        div.append("<h4>Description : </h4><p>"+data[i]['description']+"</p>");
                     div.append("<br><br>");
                      };

                      $('#tables').append(div);
                    }              
              }         
          }
        );
}

function checkout(){
  $('#tables').html('');
  div=$("<div><h4>Search for Leave Application</h4></div><br>");
  div.append('<input type="text" id="search" class="form-control input-lg" placeholder=" search by Application Id" ><br>');
  div.append('<button type="button" class="btn btn-info btn-lg " onclick="search()" >Search</button><br><br>');
  $('#tables').append(div);
}

function search(){
  application_id=document.getElementById('search').value;
  $.post("search.php",
         {application_id: application_id},
         function(data,textStatus){
          if(data!="Error"){
            $('#tables').html('');
            div=$("<div><h4>Search for Leave Application</h4></div><br><hr><br>");
            div.append('<input type="text" id="search" class="form-control input-lg" placeholder=" search by Application Id" ><br>');
            div.append('<button type="button" class="btn btn-info btn-lg" onclick="search()" >Search</button><br><br>');
            data = JSON.parse(data);
            div.append("<div><h2>Application Details</h2><hr><br></div>");
            div.append("<h4>Application Id : "+data['application_id']+"</h4>");
            div.append("<h4>Roll Number : "+data['roll_number']+"</h4>");
            div.append("<h4>From Date : "+data['from_date']+"</h4>");
            div.append("<h4>Till Date : "+data['till_date']+"</h4>");
            div.append("<h4>Destnation Address : "+data['address']+"</h4>");
            div.append("<h4>Reason : "+data['reason']+"</h4>");
            div.append("<h4>Item Details : "+data['item_details']+"</h4>");
            div.append("<h4>Warden Status : "+data['w_status']+"</h4>");
            div.append("<h4>Supervisor Status : "+data['s_status']+"</h4>");
             div.append("<h4>On Leave : "+data['on_leave']+"</h4>")
            div.append("<h4>Security Officer Status : "+data['so_status']+"</h4><br><br>"); 
              if(data['on_leave']==0)
              div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="_checkout(this)" >Checkout</button>');
              if(data['on_leave']==1)
              div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="checkin(this)" >Checkin</button>');
  


            $('#tables').append(div);           
          }
         });

}

function _checkout(this_application){
  this_application=this_application.parentNode;

  this_application=this_application.children;
  
  application_id=this_application[7].innerHTML;
  application_id=application_id.split(':')[1];
  application_id=application_id.trim();



  $.post("checkout.php",
         {application_id: application_id},
         function(data,textStatus){
          console.log(data);
            if(data!="Error"){
              if(data=="Approved"){
                window.location.reload();
              }
            }
         });
}

function checkin(this_application){
  this_application=this_application.parentNode;

  this_application=this_application.children;
  
  application_id=this_application[7].innerHTML;
  application_id=application_id.split(':')[1];
  application_id=application_id.trim();



  $.post("checkin.php",
         {application_id: application_id},
         function(data,textStatus){
          console.log(data);
            if(data!="Error"){
              if(data=="Back"){
                window.location.reload();
              }
            }
         });
}

function fetch_applications(){
  tab3 = document.getElementById('tab3');
  type = tab3.getAttribute('data-type');
  console.log(type);
  hostel = tab3.getAttribute('data-hostel');
  arr=[type,hostel];
  fun = document.getElementById('body');
  fun = body.getAttribute('onload');
  fun = "fetch_applications()";
  $.post("fetch_applications.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){
                if (data!="Error") {
                  $('#tables').html("");
                console.log(data=JSON.parse(data));
                for(i=0;i<data.length;i++){
                div=$("<div><h2>Application Details</h2><br><hr><br></div>");
                div.append("<h4>Application Id : "+data[i]['application_id']+"</h4>");
                div.append("<h4>Roll Number : "+data[i]['roll_number']+"</h4>");
                div.append("<h4>From Date : "+data[i]['from_date']+"</h4>");
                div.append("<h4>Till Date : "+data[i]['till_date']+"</h4>");
                div.append("<h4>Destnation Address : "+data[i]['address']+"</h4>");
                div.append("<h4>Reason : "+data[i]['reason']+"</h4>");
                div.append("<h4>Item Details : "+data[i]['item_details']+"</h4>");
                div.append("<h4>Warden Status : "+data[i]['w_status']+"</h4>");
                div.append("<h4>Supervisor Status : "+data[i]['s_status']+"</h4>");
                div.append("<h4>Security Officer Status : "+data[i]['so_status']+"</h4><br><br>"); 

                div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="approve_application(this)" >APPROVE</button>');
                div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="reject_application(this)" >REJECT</button><br><br>');
                $('#tables').append(div);
                }
                
              }
              }         
          }
        );

}

function approved(){
  tab3 = document.getElementById('tab3');
  type = tab3.getAttribute('data-type');
  console.log(type);
  hostel = tab3.getAttribute('data-hostel');
  arr=[type,hostel];
  $.post("approved.php",
          {arr: arr},
          function(data,textStatus){
            if (textStatus==="success")
              {
                if (data!="Error"){
                  console.log(data=JSON.parse(data));
                  $('#tables').html("");
                for(i=0;i<data.length;i++){
                div=$("<div><h2>Application Details</h2><br><hr><br></div>");
                div.append("<h4>Application Id : "+data[i]['application_id']+"</h4>");
                div.append("<h4>Roll Number : "+data[i]['roll_number']+"</h4>");
                div.append("<h4>From Date : "+data[i]['from_date']+"</h4>");
                div.append("<h4>Till Date : "+data[i]['till_date']+"</h4>");
                div.append("<h4>Destnation Address : "+data[i]['address']+"</h4>");
                div.append("<h4>Reason : "+data[i]['reason']+"</h4>");
                div.append("<h4>Item Details : "+data[i]['item_details']+"</h4>");
                div.append("<h4>Warden Status : "+data[i]['w_status']+"</h4>");
                div.append("<h4>Supervisor Status : "+data[i]['s_status']+"</h4>");
                div.append("<h4>Security Officer Status : "+data[i]['so_status']+"</h4><br><br>"); 

                 $('#tables').append(div);
                }
                }
              }
            });
}

function rejected(){
  tab3 = document.getElementById('tab3');
  type = tab3.getAttribute('data-type');
  console.log(type);
  hostel = tab3.getAttribute('data-hostel');
  arr=[type,hostel];
  $.post("rejected.php",
          {arr: arr},
          function(data,textStatus){
            if (textStatus==="success")
              {
                if (data!="Error"){
                  console.log(data=JSON.parse(data));
                  $('#tables').html("");
                for(i=0;i<data.length;i++){
                div=$("<div><h2>Application Details</h2><br><hr><br></div>");
                div.append("<h4>Application Id : "+data[i]['application_id']+"</h4>");
                div.append("<h4>Roll Number : "+data[i]['roll_number']+"</h4>");
                div.append("<h4>From Date : "+data[i]['from_date']+"</h4>");
                div.append("<h4>Till Date : "+data[i]['till_date']+"</h4>");
                div.append("<h4>Destnation Address : "+data[i]['address']+"</h4>");
                div.append("<h4>Reason : "+data[i]['reason']+"</h4>");
                div.append("<h4>Item Details : "+data[i]['item_details']+"</h4>");
                div.append("<h4>Warden Status : "+data[i]['w_status']+"</h4>");
                div.append("<h4>Supervisor Status : "+data[i]['s_status']+"</h4>");
                div.append("<h4>Security Officer Status : "+data[i]['so_status']+"</h4><br>"); 
                div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="approve_application(this)" >APPROVE</button><br><br>');
                 $('#tables').append(div);
                }
                }
              }
            });
}

function approve_application(this_application){
  type = document.getElementById('tab3');
  type = type.getAttribute('data-type');
this_application=this_application.parentNode;

this_application=this_application.children;
 
  application_id=this_application[1].innerHTML;
  application_id=application_id.split(':')[1];
  application_id=application_id.trim();

arr=[type,application_id];
console.log(arr);
$.post("approve.php",
      {arr: arr},
      function(data,textStatus){
        if(data!="Error"){
          console.log(data);
          approved();
        }
      }
  );

}

function reject_application(this_application){
  type = document.getElementById('tab3');
  type = type.getAttribute('data-type');
this_application=this_application.parentNode;

this_application=this_application.children;
 
  application_id=this_application[1].innerHTML;
  application_id=application_id.split(':')[1];
  application_id=application_id.trim();

arr=[type,application_id];
console.log(arr);
$.post("reject.php",
      {arr: arr},
      function(data,textStatus){
        console.log(data);
        if(data!="Error"){
          console.log(data);
          rejected();
        }
      }
  );

}

function late(){

  arr=[];
  $.post("late.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){
                if (data!="Error") {
                  $('#tables').html("");
                console.log(data=JSON.parse(data));
                for(i=0;i<data.length;i++){
                div=$("<div><h2>Student Details</h2><br><hr><br></div>");
                div.append("<h4>Application Id : "+data[i]['application_id']+"</h4>");
                div.append("<h4>Roll number : "+data[i]['roll_number']+"</h4>");
                div.append("<h4>Destination : "+data[i]['address']+"</h4>");
                div.append("<h4>Hostel Address : "+data[i]['hostel_address']+"</h4>");
                div.append("<h4>Permanent Address : "+data[i]['home_address']+"</h4>");
                div.append("<h4>On leave from : "+data[i]['from_date']+"</h4>");
                div.append("<h4>On leave till : "+data[i]['till_date']+"</h4>");
                div.append("<h4>Email-id : "+data[i]['email']+"</h4>");
                div.append("<h4>Emergency Contact : "+data[i]['emergency_contact']+"</h4><br><br>");
                $('#tables').append(div);
                }
                
              }
              }         
          }
        );

}

function on_leave(){
arr=[];
  $.post("on_leave.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){
                if (data!="Error") {
                $('#tables').html("");
                console.log(data=JSON.parse(data));
                for(i=0;i<data.length;i++){
                  div=$("<div><h2>Student Details</h2><br><hr><br></div>");
                  div.append("<h4>Application Id : "+data[i]['application_id']+"</h4>");
                  div.append("<h4>Roll number : "+data[i]['roll_number']+"</h4>");
                  div.append("<h4>Destination : "+data[i]['address']+"</h4>");
                  div.append("<h4>Hostel Address : "+data[i]['hostel_address']+"</h4>");
                  div.append("<h4>Permanent Address : "+data[i]['home_address']+"</h4>");
                  div.append("<h4>On leave from : "+data[i]['from_date']+"</h4>");
                  div.append("<h4>On leave till : "+data[i]['till_date']+"</h4>");
                  div.append("<h4>Email-id : "+data[i]['email']+"</h4>");
                  div.append("<h4>Emergency Contact : "+data[i]['emergency_contact']+"</h4><br><br>");
                  $('#tables').append(div);
                }
                  
              }
            }         
          }
        );

}

function submit_form(){    
  var arr = [
        
        document.getElementById('username').value,
        document.getElementById('password').value
  ];
  $.post("auth.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){
                data = JSON.parse(data);

                if(data!="failed"){
                  if(data['type']=='student')
                  window.location="student_data.php";
                  else
                    window.location="faculty_data.php";                
                }
              }         
          }
        );
}

function leave_apply(){
  valid = 1;
  from_date = document.getElementById('from_date').value;
  till_date = document.getElementById('till_date').value;
  roll_number = document.getElementById('roll_number').value;
    if(!roll_number.match(/^(ipg2015-)([0-9]{3})$/)){
      label("Error_rollnumber","  Incorrect Roll Number Format should be in ipg2015-118","red");
      valid = 0;
    }

    if(!(from_date.match(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/)&&till_date.match(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/)))
    {
      label("Error_date","  Incorrect Date Format should be in dd-mm-yyyy","red");
      valid = 0;
    }
    if(!valid) return false;
    var arr = [
        roll_number,
        from_date,
        till_date,
        document.getElementById('destination').value,
        document.getElementById('reason').value,
        document.getElementById('item_details').value,
        document.getElementById('hostel').value
  ];

  $.post("leave_apply.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){

                if(data!="failed")
                  //console.log(JSON.parse(data));
                  window.location.reload();              
              }         
          }
        );  
}


function student_details(){

      roll_number=document.getElementById('student_details');
      roll_number=roll_number.getAttribute('data-id');

  console.log(roll_number);
  $.post("fetch.php",
          {roll_number: roll_number},
          function(data,textStatus){
            if(textStatus==="success"){
              if(data!="Error"){
                data = JSON.parse(data);
                console.log(data);
                div=$("<div><h2>Student Details</h2><br><hr><br></div>");
                div.append("<h4>Name : "+data['name']+"</h4>");
                div.append("<h4>Roll number : "+data['student_id']+"</h4>");
                div.append("<h4>Hostel Address : "+data['hostel_address']+"</h4>");
                div.append("<h4>Permanent Address : "+data['home_address']+"</h4>");
                div.append("<h4>Contact : "+data['contact']+"</h4>");
                div.append("<h4>Current Semester : "+data['year']+"</h4>");
                div.append("<h4>Email-id : "+data['email']+"</h4>");
                div.append("<h4>Emergency Contact : "+data['emergency_contact']+"</h4><br><br>");

              }

              $('#student_details').append(div);
            }
          }
    );

    $.post("application_details.php",
      {roll_number: roll_number},
      function(data,textStatus){
        if (textStatus === "success") {
          console.log(data=JSON.parse(data));
          if(data!="Error"){
            document.getElementById('application_form').style.display = "none";
            div=$("<div><h2>Application Details</h2><br><hr><br></div>");
            div.append("<h4>Application Id : "+data['application_id']+"</h4>");
            div.append("<h4>From Date : "+data['from_date']+"</h4>");
            div.append("<h4>Till Date : "+data['till_date']+"</h4>");
            div.append("<h4>Destnation Address : "+data['address']+"</h4>");
            div.append("<h4>Reason : "+data['reason']+"</h4>");
            div.append("<h4>Item Details : "+data['item_details']+"</h4>");
            div.append("<h4>Warden Status : "+data['w_status']+"</h4>");
            div.append("<h4>Supervisor Status : "+data['s_status']+"</h4>");
            div.append("<h4>Security Officer Status : "+data['so_status']+"</h4><br>"); 
            if (data['on_leave']==1) {
                div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="extend_leave_toggle()" >EXTEND</button><br><br>');
            } 
          }
          $('#application_details').append(div);
        }
      }
    );

}

function extend_requests(){
    type = document.getElementById('tab3');
  type = type.getAttribute('data-type');
    arr=[type];
  $.post("extend_requests.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){
                if (data!="Error") {
                  $('#tables').html("");
                console.log(data=JSON.parse(data));
                for(i=0;i<data.length;i++){
                div=$("<div><h2>Extend Application Details</h2><br><hr><br></div>");
                div.append("<h4>Application Id : "+data[i]['application_id']+"</h4>");
                div.append("<h4>Extend To : "+data[i]['extend_date']+"</h4>");
                div.append("<h4>Reason : "+data[i]['reason']+"</h4><br>");
                div.append("<h4>Destination : "+data[i]['destination']+"</h4><br>");
                div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="accept_extend(this)" >ACCEPT</button><br>');
                div.append('<button type="button" class="btn btn-info btn-block btn-lg" onclick="decline_extend(this)" >DECLINE</button><br><br>');
                $('#tables').append(div);
                }
                
              }
              }         
          }
        );
}

function accept_extend(this_application){
    type = document.getElementById('tab3');
    type = type.getAttribute('data-type');
    this_application=this_application.parentNode;

    this_application=this_application.children;
 
   application_id=this_application[1].innerHTML;
   application_id=application_id.split(':')[1];
    application_id=application_id.trim();

    extend_date=this_application[2].innerHTML;
   extend_date=extend_date.split(':')[2];
    extend_date=extend_date.trim();


    arr=[type,application_id,extend_date];
    $.post("accept_request.php",
            {arr: arr},
            function(data,textStatus){
              if(textStatus==="success"){
                if(data!="Error"){
                  extend_requests();
                }
              }
            });
}


function decline_extend(this_application){
    type = document.getElementById('tab3');
    type = type.getAttribute('data-type');
    this_application=this_application.parentNode;

    this_application=this_application.children;
 
   application_id=this_application[1].innerHTML;
   application_id=application_id.split(':')[1];
    application_id=application_id.trim();

    extend_date=this_application[1].innerHTML;
   extend_date=extend_date.split(':')[1];
    extend_date=extend_date.trim();


    arr=[type,application_id,extend_date];
       $.post("decline_request.php",
            {arr: arr},
            function(data,textStatus){
              if(textStatus==="success"){
                if(data!="Error"){
                  extend_requests();
                }
              }
            });
}

function extend_leave(){
  valid = 1;
  extend_date = document.getElementById('extend_date').value;
  roll_number = document.getElementById('extend_button').getAttribute('data-id');
  

    if(!(extend_date.match(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/)))
    {
      label("Error_date_extend","  Incorrect Date Format should be in dd-mm-yyyy","red");
      valid = 0;
    }
    if(!valid) return false;
    var arr = [
        roll_number,
        extend_date,
        document.getElementById('extend_destination').value,
        document.getElementById('extend_reason').value,
  ];

console.log(arr);

  $.post("extend_leave.php",
          {arr: arr},
          function(data,textStatus){
              if(textStatus==="success"){

                if(data!="Error")
                  console.log(data);
                  window.location.reload();              
              }         
          }
        );  
}

function extend_leave_toggle() {
    var x = document.getElementById("extend");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function form_toggle(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function label(id,x,color){
    document.getElementById(id).innerHTML=x;
    document.getElementById(id).style.color=color;
}




function delete_student(this_student){

this_student=this_student.parentNode;
this_student=this_student.children;
roll_number=this_student[2].innerHTML;
roll_number=roll_number.slice(13);  

  $.post("delete.php",
      {roll_number: roll_number},
      function(data,textStatus){
          if(textStatus==="success"){
            if(data.trim()!="Error")
            window.location.reload();
          }
      }
    );
}