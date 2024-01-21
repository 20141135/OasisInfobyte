function convertTemp() {
    // Get input values
    var inputTemperature = document.getElementById("inputTemperature").value;
    var fromType = document.getElementById("fromType").value;

    // Perform conversion
    var Degree, Kelvin, Fahrenheit;
    switch (fromType) {
        case "fahrenheit":
            Degree = (inputTemperature - 32) * 5 / 9;
            Kelvin = (inputTemperature - 32) * 5 / 9 + 273.15;
            Fahrenheit = parseFloat(inputTemperature);
            break;
        case "degree":
            Degree = parseFloat(inputTemperature);
            Kelvin = parseFloat(inputTemperature) + 273.15;
            Fahrenheit = (9 * inputTemperature / 5) + 32;
            break;
        case "kelvin":
            Degree = parseFloat(inputTemperature) - 273.15;
            Kelvin = parseFloat(inputTemperature);
            Fahrenheit = (((inputTemperature - 273.15) * 9) / 5) + 32;
            break;
        default:
            Degree = Fahrenheit = Kelvin = "Invalid from type";
            break;
    }

    // Display result with units
    document.getElementById("Degree").value = Degree.toFixed(2) + " °C";
    document.getElementById("Fahrenheit").value = Fahrenheit.toFixed(2) + " °F";
    document.getElementById("Kelvin").value = Kelvin.toFixed(2) + " K";

    // Show the output section
    document.querySelector('.output').style.display = 'block';
}

function clearInput() {
    // Clear input values
    document.getElementById("inputTemperature").value = "";
    document.getElementById("fromType").value = "";

    // Hide the output section
    document.querySelector('.output').style.display = 'none';
}