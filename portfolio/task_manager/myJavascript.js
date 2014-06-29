/* 
Author - Sahil Bathla
Description -
*/
function offset_x(o) {
    var l =o.offsetLeft; 
    while (o=o.offsetParent)
    	l += o.offsetLeft;
    return l;
}
function offset_y(o) {
    var l =o.offsetTop; 
    while (o=o.offsetParent)
    	l += o.offsetTop;
    return l;
}
function drag(x) {
	
//x.ondragstart = function() { return false }
    
  x.style.position = 'absolute';
  initial_x=offset_x(x);
  initial_y=offset_y(x);
  var list_old=parseInt((initial_x/200)+1);
  //alert(list_old);


var IE = document.all?true:false
//var drag = false;

if (!IE) document.captureEvents(Event.MOUSEMOVE)

document.onmousemove = getMouseXY;
document.onmouseup = function() {
	document.onmousemove = null;
	var list_new=parseInt((parseInt(x.style.left)/200)+1);
	list_new=list_old+list_new-1;
	if(list_new>0&&list_new<=t.listCount)
	{
		document.getElementById('listTask'+list_old).removeChild(x);
		document.getElementById('listTask'+list_new).appendChild(x);
	}
	x.style.position = '';
	x.style.left='';
	x.style.top='';
	
	 
  }


var tempX = 0;
var tempY = 0;


function getMouseXY(e) {
	tempX=0;tempY=0;
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft
    tempY = event.clientY + document.body.scrollTop
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX
    tempY = e.pageY
  }  
  x.style.left=(tempX-initial_x)+'px';
  x.style.top=(tempY-initial_y)+'px';
  return true;
  
 
}


}

function Task(description){
this.desc=description; // task description
}

function List(name){
this.name=name;
this.tasks=new Array();
this.taskCount=0;
}

function TaskManager()
{
	this.List = new Array();
	this.listCount=0;
}
var t; // global variable for task manager



function initiateTaskManager()
{
	t= new TaskManager();
}

function keyAction(x,y)
{
	document.onkeydown = checkKeycode
	function checkKeycode(e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	if(x==''); 
	else 
	if(keycode==13&&x=='createList')
	createList();
	else if(keycode==13&&y!=0)
	createTask(y);
	}
}

function removeTask(listId,taskId)
{
	
	document.getElementById('listTask'+listId).removeChild(taskId);
}

function createTask(listId)
{
	var height;
	listId-=1;
	var taskId="List"+listId+"Task"+t.List[listId].taskCount;
	t.List[listId].taskCount++;
	listId+=1;
	var taskname=document.getElementById('taskNameValue'+listId).value;
	if(taskname==''||taskname.length==0||taskname=='Enter Task Description')
	{
	document.getElementById('taskNameUndefined'+listId).innerHTML="Enter Task Description";
	document.getElementById("taskNameValue"+listId).focus();
	}
	else
	{
		
		var node=document.createElement("div");
		node.setAttribute("class","task");
		node.setAttribute("id",taskId);
		node.innerHTML='<div class="taskTitle">'+taskname+'<img src="images/wrong_sign.png" class="signs" align="right" onClick="removeTask('+listId+','+taskId+');"  /></div>' ;
		document.getElementById('listTask'+listId).insertBefore(node,document.getElementById('listTask'+listId).firstChild);
		document.getElementById('listTaskInput'+listId).innerHTML='';
		
		document.getElementById(taskId).onmousedown=function(){drag(this);};
		
	}
	
}

function addTask(x)
{
	document.getElementById('listTaskInput'+x).innerHTML='<input type="text" id="taskNameValue'+x+'" value="" onclick="this.value=\'\'" onkeydown="keyAction(Task,'+x+')"/> <img src="images/right_sign.png" class="signs" onclick="createTask('+x+');"/><span class="error" id="taskNameUndefined'+x+'"></span>';
	document.getElementById('taskNameValue'+x).focus();
}
function addList()
{
	
	document.getElementById('listName').innerHTML='<input type="text" id="listNameValue" value="" onclick="this.value=\'\'" onkeydown="keyAction(\'createList\',0)" /> <img src="images/right_sign.png" class="signs" background:#e0e0e0; onclick="createList();"/><span class="error" id="listNameUndefined"></span>';
	document.getElementById('listNameValue').focus();
	
}

function createList()
{
	var width;
	var listname=document.getElementById('listNameValue').value;
	if(listname==''||listname.length==0||listname=='Enter list Name')
	{
	document.getElementById('listNameUndefined').innerHTML="Please Enter a listname";
	document.getElementById("listNameValue").focus();
	}
	else
	{
		t.List[t.listCount]=new List(listname);
		t.listCount+=1;
			if(t.listCount>3)
			{
			width=(100+(t.listCount-3)*20)+'em';
			document.getElementById('mainContainer').style.width = width; 
			}
			
		listId="list"+t.listCount;
		var node=document.createElement("div");
		//alert(listName);
		node.setAttribute("class","list");
		node.setAttribute("id",listId);
		node.innerHTML='<div class="listTitle">List : '+listname+'</div><div id="listTask'+t.listCount+'"></div><div id="listTaskInput'+t.listCount+'"></div><p class="addItem" onClick="addTask('+t.listCount+');">+ Add a Task</p>';
		document.getElementById('mainContainer').insertBefore(node,document.getElementById('mainContainer').firstChild);
		document.getElementById('listName').innerHTML='';
		
		document.getElementById(listId).style.position="absolute";
		document.getElementById(listId).style.top="5em";
		document.getElementById(listId).style.left=250*(t.listCount-1)+'px';
		document.getElementById(listId).style.width='200px'; //for IE7
		document.getElementById(listId).style.background='#f0f0f0'; //for IE7
		document.getElementById(listId).style.margin="1em"; //for IE7
		
	}
	
}