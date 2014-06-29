/* 
Author - Sahil Bathla
Description -
*/
function drag(x) {
	
	x.ondragstart = function() { return false }
   x.style.position = 'absolute';


var IE = document.all?true:false
var drag = false;

if (!IE) document.captureEvents(Event.MOUSEMOVE)


x.onmousemove = getMouseXY;
document.onmouseup = function() {x.onmousemove = null; }


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
  x.style.left=parseInt(tempX)+'px';
  x.style.top=parseInt(tempY)+'px';
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
	document.getElementById('listTaskInput'+x).innerHTML='<input type="text" id="taskNameValue'+x+'" value="Enter Task Description" onclick="this.value=\'\'" onkeydown="keyAction(Task,'+x+')"/> <img src="images/right_sign.png" class="signs" onclick="createTask('+x+');"/><span class="error" id="taskNameUndefined'+x+'"></span>';
}
function addList()
{
	
	document.getElementById('listName').innerHTML='<input type="text" id="listNameValue" value="Enter list Name" onclick="this.value=\'\'" onkeydown="keyAction(\'createList\',0)" /> <img src="images/right_sign.png" class="signs" background:#e0e0e0; onclick="createList();"/><span class="error" id="listNameUndefined"></span>';
	
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
			width=(100+(t.listCount-3)*25)+'em';
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
		document.getElementById(listId).style.left=20*(t.listCount-1)+'em';
		document.getElementById(listId).style.width='16em'; //for IE7
		document.getElementById(listId).style.background='#f0f0f0'; //for IE7
		document.getElementById(listId).style.margin="1em"; //for IE7
		
	}
	
}