$(document).ready(function(){

    projectData = { 
      'soapBox' : 
      { 'title' : 'SoapBox', 'video_url' : 'http://www.youtube.com/embed/rNDB4Y_mo0M' ,'step_install' : 
        [
        '<li> * If you can\'t view the video kindly visit the live demonstration at <a href="http://soapbox-by-sahil.heroku.com"> Heroku </a></li>',
        '<li> * Download the project executables from <a href="https://github.com/sahilbathlavinsol/soapbox"><u>Github</u></a></li>'
        ],
        'project_detail' : 'This is a live rails project which is based on company based social network. You are only connected with people in your organization. It has all the features of any social networking website like followings, groups, url sharing etc to make the interaction more convenient and effecient. If you would like to contribute to this open source project, kindly contact me at sahilbathla1@gmail.com',
        'prerequisite_list':
        [
          '<p># You would need Rails(>4.0)</p>',
          '<p># MySQL Client + Server',
        ]
      },

      'virtual_pro' : 
      { 'title' : 'Virtual Pro', 'video_url' : 'http://www.youtube.com/embed/1zxRL2utUqg' ,'step_install' : 
        [
        '<li> * If you can\'t view the video kindly download the demonstration from <a href="files/Virtual Pro Demonstration.mp4"><u>here</u></a> (Right Click and save target as..)</li>',
        '<li> * Download the project executables from <a href="files/VirtualPro.zip"><u>here</u></a></li>'
        ],
        'project_detail' : 'This is one of my major projects that I did in college. Server Application that you will have to execute in your computer is built in Java and thus requires JRE to run the JAR executable and the mobile application(Galaxy I9003 apk) is built using mosync development kit.(Note: If you want the mobile application for any specific phone please drop a mail as this application may not run in few mobiles as it was deployed as a Galaxy I9003 application)',
        'prerequisite_list':
        [
          '<p># You would need  Java Run Time Environment Download from <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html"><u> Here</u></a></p>',
          '<p># Any 64/32 bit machine(computer) that allows jar to execute</p>',
          '<p># Samsung Galaxy SL/S or any high end android device(if it doesn\'t run drop a mail and I will provide you your device specific file)</p>'
        ]
      },

      'ar_sketching' : 
      { 'title' : 'AR SKetching Tool', 'video_url' : 'http://www.youtube.com/embed/BITReuooEHU' ,'step_install' : 
        [
        '<li> * If you can\'t view the video kindly download the demonstration from <a href="files/ARsketching Demonstration.mp4"><u>here</u></a> (Right Click and save target as..)',
        '<li> * Download the executables from <a href="files/ARsketching.zip"><u>here</u></a></li>'
        ],
        'project_detail' : 'This project is done by me and my college mates using Augmented Reality. We have used the standard AR Toolkit to develop this project.(Note : - The executable is the module I worked on. You just need one marker to draw anything on the screen)',
        'prerequisite_list':
        [
          '<p># You need to have  a webcamera and its drivers installed</p>',
          '<p># You need a marker . Download & take a print of this <a href="files/MarkerV.png"><u>marker</u></a></p>',
          '<p># Extract the zip file and copy the dll files in your c:/windows/system32 folder.</p>',
          '<p># Run the file Working module/Arsketch.exe  </p>',
          '<p># If any .dll file is still missing download it from the internet </p>'
        ]
      },

      'bubble_breaker' : 
      { 'title' : 'Bubble Breaker', 'video_url' : 'http://www.youtube.com/embed/X1sq8Elnuzk' ,'step_install' : 
        [
        '<li> * If you can\'t view the video kindly download the demonstration from <a href="files/Bubble Breaker.mp4"><u>here</u></a> (Right Click and save target as..)',
        '<li> * Download the project executables from <a href="files/BubbleBreaker.zip"><u>here</u></a></li>'
        ],
        'project_detail' : 'This is a game developed using XNA game studio.If you are familiar with C/C++ style programing you can build 2D games like this using XNA studio. Refer this tutorial <a href="http://msdn.microsoft.com/en-us/library/bb203893.aspx"><u>here</u></a>',
        'prerequisite_list':
        [
          '<p># You would need windows platform with .NET framework (it is pre-installed in windows vista and 7). For older versions check <a href="http://www.microsoft.com/net/download "><u>here</u></a></p>',
          '<p># Extract the zip file and rename the setup.exel file to setup.exe file and follow the installation instructions.</p>'
        ]
      },

      'cartoon_me' : 
      { 'title' : 'Cartooning Videos', 'video_url' : 'http://www.youtube.com/embed/RzEPKHrCerU' ,'step_install' : 
        [
        '<li> * If you can\'t view the video kindly download the demonstration from <a href="files/Demonstration.mp4"><u>here</u></a> (Right Click and save target as..)',
        '<li> * Download the project executables from <a href="files/cartoonMe.zip"><u>here</u></a></li>'
        ],
        'project_detail' : ' I made this project in my Multimedia Computing course and it is done by developing a filter using Adobe PixelBender and then applying this filter on the video being played.',
        'prerequisite_list':
        [
          '<p># <a href="http://www.softpedia.com/get/Multimedia/Video/Video-Players/SWF-Player.shtml"><u># A swf player</u></a></p>',
          '<p># (Use chrome/firefox browser in case you don\'t have a swf player)</p>'
        ]
      }


   }

    $(".dropbtn").click(function(){
      $("#dropdown").slideToggle("slow");
      $(this).toggleClass("active");
    });

    tryit = function()
    {
      $("#dropdown").slideDown("slow");
      $('#dropdown').focus();
    }

    fillPage = function()
    {
      if(window.location.href.indexOf('project.html') != -1)
      {
        key = location.hash.replace('#', '')
        if(projectData[key] == undefined)
          key = 'virtual_pro'
        $('title').text(projectData[key].title)
        $('#videoHeading').text(projectData[key].title);
        $('#videoSource').attr('src', projectData[key].video_url);
        $('#projectDetail').html(projectData[key].project_detail);
        for(i = 0; i < projectData[key].step_install.length; i = i + 1)
        {
          $('#stepInstall').append(projectData[key].step_install[i]);
        }
        for(i = 0; i < projectData[key].prerequisite_list.length; i = i + 1)
        {
          $('#prerequisteList').append(projectData[key].prerequisite_list[i]);
        }
      }
    }

    ajaxMail = function() {
      $('#submitMessage').click(function(){
        $.post( "send_mail.php", { name: $('#name').val(), email_address: $('#email_address').val(), message: $('#message').val() } )
         .done(function( response ) { $('#mailResult').text(response).hide().fadeIn(1000) });
      });
    }

    fillPage();
    ajaxMail();
    
  });