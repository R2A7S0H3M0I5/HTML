function calculateAge() {
    const birthdate = new Date(document.getElementById("birth_date").value);
    const today = new Date();

    if (isNaN(birthdate.getTime())) {
        document.getElementById("age").innerText = "Please enter a valid date.";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("age").innerText = "Your age is: " + age + " years.";
}
