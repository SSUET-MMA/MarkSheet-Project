var students : any[] =[];

function saveRecord(){
	var name : string 		= (<HTMLInputElement>document.getElementById('name')).value;
	var fathername : string = (<HTMLInputElement>document.getElementById('fathername')).value;
	var math : number		= (<HTMLInputElement>document.getElementById('math')).valueAsNumber;
	var english : number	= (<HTMLInputElement>document.getElementById('english')).valueAsNumber;
	var urdu : number		= (<HTMLInputElement>document.getElementById('urdu')).valueAsNumber;
	
	if(validate(name.trim(),fathername.trim(), math, english, urdu)){
		addStudent(name.trim(),fathername.trim(), math, english, urdu);
		renderStudents();
		clearInputs();
	}
}

function validate(name : string,fathername : string, math : number, english : number, urdu : number) : boolean{
	var res	: boolean		= true;
	
	var name_msg : HTMLInputElement 	= <HTMLInputElement>document.getElementById('name_msg');
	var fathername_msg : HTMLInputElement 	= <HTMLInputElement>document.getElementById('fathername_msg');
	var math_msg : HTMLInputElement		= <HTMLInputElement>document.getElementById('math_msg');
	var english_msg : HTMLInputElement	= <HTMLInputElement>document.getElementById('english_msg');
	var urdu_msg : HTMLInputElement		= <HTMLInputElement>document.getElementById('urdu_msg');
	name_msg.innerText = '';
	fathername_msg.innerText = '';
	math_msg.innerText = '';
	english_msg.innerText = '';
	urdu_msg.innerText = '';
	
	
	if(name.length == 0){
		name_msg.innerText = 'Please Enter Name';
		res = false;
	}
	if(fathername.length == 0){
		fathername_msg.innerText = 'Please Enter Father Name';
		res = false;
	}
	
	if(isNaN(math)){
		math_msg.innerText = "Invalid number format";
		res = false;
	} else if(math < 0 || math > 100){
		math_msg.innerText = "Marks should be entered between 0-100";
		res = false;
	}
	
	if(isNaN(english)){
		english_msg.innerText = "Invalid number format";
		res = false;
	} else if(english < 0 || english > 100){
		english_msg.innerText = "Marks should be entered between 0-100";
		res = false;
	}
	
	if(isNaN(urdu)){
		urdu_msg.innerText = "Invalid number format";
		res = false;
	} else if(urdu < 0 || urdu > 100){
		urdu_msg.innerText = "Marks should be entered between 0-100";
		res = false;
	}
	
	return res;
}


function addStudent(name : string,fathername : string, math : number, english : number, urdu : number) : void{
	var student : any = {name: name,fathername: fathername, math: math, english: english, urdu: urdu};
	students.push(student);
}

function renderStudents() : void{
	var studentsTable : HTMLInputElement		= <HTMLInputElement>document.getElementById('studentsTable');
	var html = '<table id="studentsTable" cellpadding="5" border="1">'
			 + '<tr>'
			 + '<th width="60px">S.No</th>'
			 + '<th width="300px">Name</th>'
			  + '<th width="300px">FatherName</th>'
			 + '<th width="100px">Math</th>'
			 + '<th width="100px">English</th>'
			 + '<th width="100px">Urdu</th>'
			 + '<th width="100px">Total Marks</th>'
			 + '<th width="100px">Percentage</th>'
			  + '<th width="100px">Grade</th>'
			 + '</tr>'
	
	for(var k=0 ; k<students.length ; k++){
		var student = students[k];
		console.info(student.name + "," + student.fathername + "," + student.math + "," + student.english + "," + student.urdu);
		
		html += '<tr>';
		html += '<td>' + (k+1) + '</td>';
		html += '<td>' + student.name + '</td>';
		html += '<td>' + student.fathername + '</td>';
		html += '<td>' + student.math + '</td>';
		html += '<td>' + student.english + '</td>';
		html += '<td>' + student.urdu + '</td>';
		html += '<td>' + (student.math + student.english + student.urdu) + '/300</td>';
		html += '<td>' + (((student.math + student.english + student.urdu)/300)*100).toFixed(2) + '%</td>';
		html += '<td>' + Grade(student.math , student.english , student.urdu) + '</td>';
		html += '</tr>';
	}
	
	html += '</table>';
	studentsTable.innerHTML = html;
}

function clearInputs() : void{
	(<HTMLInputElement>document.getElementById('name')).value = '';
	(<HTMLInputElement>document.getElementById('fathername')).value = '';
	(<HTMLInputElement>document.getElementById('math')).value = '';
	(<HTMLInputElement>document.getElementById('english')).value = '';
	(<HTMLInputElement>document.getElementById('urdu')).value = '';
	(<HTMLInputElement>document.getElementById('grade')).value = '';
}


function Grade(math : number, english : number, urdu : number) : string {
	var Gr:string = "";
	switch (true)
	{
		case((((math + english + urdu)/300)*100)>=80):
		Gr = "A1"
		break;
		case((((math + english + urdu)/300)*100)>=70):
		Gr = "A"
		break; 
		case((((math + english + urdu)/300)*100)>=60):
		Gr = "B"
		break; 
		case((((math + english + urdu)/300)*100)>=50):
		Gr = "C"
		break; 
		case((((math + english + urdu)/300)*100)<50):
		Gr = "Fail"
		break; 
	}
	
	return Gr;
	
}