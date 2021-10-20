const submitthis = document.getElementById("1");

const saveSubject = async() => {
	let subCode = document.getElementById("subCode").value
	let subName = document.getElementById("subName").value
	let subCredits = document.getElementById("subCred").value
	let lecId = document.getElementById("lecId").value

    let response = await fetch('http://localhost:8080/subject/create',{
    method: 'POST',
    headers: {
        'Authorization': 'Basic '+btoa('admin:admin123'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        Subject Code: subCode,
        Subject Name: subName,
        Subject Credits: subCredits,
        Lecture ID#: lecId,

    })
})
console.log(response);
}

submitthis.addEventListener('click', saveSubject);