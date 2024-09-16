function init()
{
    // Fahrenheit to Celsius Listeners
    document.getElementById('fahrenheit-input')
        .addEventListener('submit', (e) =>
        {
            e.preventDefault();
            document.getElementById('celsius-output')
                .textContent += String(fahrenheitCelsiusConversion() + '\xB0C');
        });

    document.getElementById('f-button')
        .addEventListener('click', (e) =>
        {
            e.preventDefault();
            document.getElementById('celsius-output')
                .textContent += String(fahrenheitCelsiusConversion() + '\xB0C');
        });


    // Celsius to Fahrenheit Listeners
    document.getElementById('celsius-input')
        .addEventListener('submit', (e) =>
        {
            e.preventDefault();
            document.getElementById('fahrenheit-output')
                .textContent += String(celsiusFahrenheitConversion() + '\xB0F');
        });

    document.getElementById('c-button')
        .addEventListener('click', (e) =>
        {
            e.preventDefault();
            document.getElementById('fahrenheit-output')
                .textContent += String(celsiusFahrenheitConversion() + '\xB0F');
        });

    // Data Conversion Listeners
    document.getElementById('data-input')
        .addEventListener('keyup', () =>
        {
            updateDataOutput();
        });

    document.getElementById('data-type-input')
        .addEventListener('change', () =>
        {
            updateDataOutput();
        });

    document.getElementById('data-type-output')
        .addEventListener('change', () =>
        {
            updateDataOutput();
        });

}
function fahrenheitCelsiusConversion()
{
    let fahrenheit = Number(document.getElementById("fahrenheit-input").value);
    return (5/9 * (fahrenheit-32)).toFixed(2);
}

function celsiusFahrenheitConversion()
{
    let celsius = Number(document.getElementById("celsius-input").value);
    return (celsius * 9 / 5 + 32).toFixed(2);
}

function dataConversion(input)
{
    const kb = 2**10;
    const mb = 2**20;
    const gb = 2**30;
    const tb = 2**40;
    const pb = 2**50;

    let inputType = document.getElementById('data-type-input').value;

    let byteInput = input;

    switch(inputType)
    {
        case 'b':
            byteInput = input;
            break;
        case 'kb':
            byteInput = input * kb;
            break;
        case 'mb':
            byteInput = input * mb;
            break;
        case 'gb':
            byteInput = input * gb;
            break;
        case 'tb':
            byteInput = input * tb;
            break;
        case 'pb':
            byteInput = input * pb;
            break;
    }

    let outputType = document.getElementById('data-type-output').value;
    let output;

    switch(outputType)
    {
        case 'b':
            output = byteInput;
            break;
        case 'kb':
            output = byteInput / kb;
            break;
        case 'mb':
            output = byteInput / mb;
            break;
        case 'gb':
            output = byteInput / gb;
            break;
        case 'tb':
            output = byteInput / tb;
            break;
        case 'pb':
            output = byteInput / pb;
            break;
    }


    return output;
}

function updateDataOutput()
{
    let input = parseInt(document.getElementById('data-input').value);
    console.log(input);

    document.getElementById('data-output').textContent = 'Data Size Output: ';

    let result = dataConversion(input);
    console.log(result);

    if (String(result).includes("e")) // Accounts for large negative exponents
    {
        document.getElementById('data-output')
            .textContent += dataConversion(input).toExponential();
    }
    else
    {
        document.getElementById('data-output')
            .textContent += parseInt(dataConversion(input));
    }

}


init();



