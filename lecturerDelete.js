const submitthis = document.getElementById("1");
const yr = document.getElementById("2");
const text = document.getElementById("textA");

const saveLecturer = async() => {
	let id = document.getElementById("fName").value
	
    let response = await fetch('http://localhost:8080/lecturer/delete/'+id,{
    method: 'DELETE',
    headers: {
        'Authorization': 'Basic '+btoa('admin:admin123'), 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}) 
console.log(response); 
}

const showall = async() => {
	let response = await fetch('http://localhost:8080/lecturer/getall',{
    method: 'GET',
    headers: {
        'Authorization': 'Basic '+btoa('admin:admin123'), 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }}).then(response => {return response.json();
	}).then (data => {
		text.value = data
	});
}

submitthis.addEventListener('click', saveLecturer);
yr.addEventListener('click', showall);