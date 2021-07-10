function help(){

  return "<h3><span style=\"color:#eb926d;\">Help:</span></h3><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>about me</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>how to contact me</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>Alert I have hidden spiders here</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Languages Im comfortable with</td>\
  </tr>\
  <tr>\
    <td>resume</td>\
    <td>Download my resume here</td>\
  </tr>\
</table>";
}

function contact(){

  return "<h3><span style=\"color:#cc6666;\">Contact:</span></h3><table>\
  <tr>\
    <td>Email :</td>\
    <td><a href=\"mailto:omar1024@protonmail.com\">omar1024@protonmail.com</a></td>\
  </tr></table>";
}

function skills(){

  return "<h3><span style=\"color:#81b2be;\">Skills:</span></h3><ul><li>C/Cpp</li><li>Python</li><li>JS</li><li>GO</li></ul>";
}

function about(){

  return "<p>Hey myself Omar.Im a Software Developer</p><p>I'm currently focussing on Application development and Security</p>";
}

function resume(){

  return "<span style=\"color:#8abeb7;\"><h3>resume:</h3></span><p>\tDownload from <a href=\"src/B180363CS.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}


function links(){

  return "<span style=\"color: #b5bd68;\"><h3>Links:</h3></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/omar1024/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com/omar1024\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://stackoverflow.com/users/14024773/umar-farooq\" target=\"_blank\"><i class=\"fab fa-stackoverflow\"></i> StackOverFLow</a></li>\
  </ul>";
}


function commandProcessor(e){

  if(e.keyCode == 13){
    document.getElementById('injected').innerHTML= "";
    var txtInput = document.getElementById('txtBox').value;
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput.trim()=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + resume();
    }else if (txtInput.trim() == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput.trim() == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput.trim() == "resume") {
      document.getElementById('injected').innerHTML=resume();
    }else if (txtInput.trim()=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput.trim()=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput.trim()=="clear") {
      document.getElementById('injected').innerHTML="";
    }else {
      document.getElementById('injected').innerHTML = 'Keyword doesnt exist! Have you tried help';
    }

    document.getElementById('txtBox').value= "";
  }
}

function getBrowserSize(){
  var w, h;

    if(typeof window.innerWidth != 'undefined')
    {
     w = window.innerWidth; //other browser
     h = window.innerHeight;
    } 
    else if(typeof(document.documentElement) != 'undefined' && typeo(document.documentElement.clientWidth) != 'undefined' && document.documentElement.clientWidth != 0) 
    {
     w =  document.documentElement.clientWidth; 
     h = document.documentElement.clientHeight;
    }
    else{
     w = document.body.clientWidth; 
     h = document.body.clientHeight;
    }
  return {'width':w, 'height': h};
}

console.log("%cHello fellow developer \n\n\n Have a great day :) ","color:green,font-family:sans-serif; font-size: 20px");

if(parseInt(getBrowserSize().width) < 1024){
  alert("Use desktop for proper view of this website. You can proceed for now though :)")
}
