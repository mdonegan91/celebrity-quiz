//User Interface Logic

function hideResultsandError() {
    document.getElementById("error-message").setAttribute("class", "hidden")

    document.getElementById("georgeClooney").setAttribute("class", "hidden");
    document.getElementById("mariahCarey").setAttribute("class", "hidden");
    document.getElementById("edSheeran").setAttribute("class", "hidden");
    document.getElementById("drake").setAttribute("class", "hidden");
    document.getElementById("michaelJordan").setAttribute("class", "hidden");
    document.getElementById("donaldGlover").setAttribute("class", "hidden");
}

// Onload function
window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResultsandError();
        const age = parseInt(document.querySelector("input#age").value);
        const gender = document.querySelector("input#gender").value;
        if (age && gender) {
            if (age <= 49 && gender === "male") {
                document.getElementById("georgeClooney").removeAttribute("class");
            } else if (age >= 50 && gender === "male") {
                document.getElementById("mariahCarey").removeAttribute("class");
            } else if (age <= 49 && gender === "female") {
                document.getElementById("edSheeran").removeAttribute("class");
            } else if (age >= 50 && gender === "female") {
                document.getElementById("drake").removeAttribute("class");
            } else if (age <= 49 && gender === "nonbinary") {
                document.getElementById("michaelJordan").removeAttribute("class");
            } else if (age >= 50 && gender === "nonbinary") {
                document.getElementById("donaldGlover").removeAttribute("class");
            };
        };
    };
};