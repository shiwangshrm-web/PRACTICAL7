function findCareer() {

    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let skills = [];

    checkboxes.forEach((cb) => {
        skills.push(cb.value);
    });

    let result = document.getElementById("result");

    if (skills.length === 0) {
        result.innerHTML = "Please select at least one skill";
        return;
    }

    // Simple logic (LIKE YOUR STYLE)

    if (skills.includes("html") && skills.includes("css")) {
        result.innerHTML = "💻 Career: Frontend Developer <br> Learn HTML, CSS, JavaScript";
    }

    else if (skills.includes("java")) {
        result.innerHTML = "🖥 Career: Backend Developer <br> Learn Java, SQL, Spring Boot";
    }

    else if (skills.includes("python")) {
        result.innerHTML = "📊 Career: Data Analyst <br> Learn Python, Excel";
    }

    else if (skills.includes("communication")) {
        result.innerHTML = "📢 Career: Marketing / HR <br> Improve communication & management";
    }

    else {
        result.innerHTML = "No matching career found";
    }
}