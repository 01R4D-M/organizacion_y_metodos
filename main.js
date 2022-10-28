const form = document.querySelector("#form");
const result = document.querySelector("#result");

result.classList.add("hidden");

const resultnombres = document.querySelector("#resultnombres")
const resultapellidos = document.querySelector("#resultapellidos")
const resultcuil = document.querySelector("#resultcuil")
const resultlegajo = document.querySelector("#resultlegajo")
const resultbasico = document.querySelector("#resultbasico")
const resultproductividad = document.querySelector("#resultproductividad")
const resultpresentismo = document.querySelector("#resultpresentismo")
const resultferiados = document.querySelector("#resultferiados")
const resultextras50 = document.querySelector("#resultextras50")
const resultextras100 = document.querySelector("#resultextras100")
const resultjubilacion = document.querySelector("#resultjubilacion")
const resultobrasocial = document.querySelector("#resultobrasocial")
const resultinssjp = document.querySelector("#resultinssjp")
const resultaguinaldo = document.querySelector("#resultaguinaldo")
const resultvacaciones = document.querySelector("#resultvacaciones")
const resultbruto = document.querySelector("#resultbruto")
const resultdeducciones = document.querySelector("#resultdeducciones")
const resultneto = document.querySelector("#resultneto")

const checkValue = (value) => {
    if(value === "") return "---";
    else if(isNaN(value)) return "---";
    else return Math.round(value * 100) / 100;
}

const checkText = (value) => {
    if(value === "") return "---";
    else return value;
}

const generar = () => {    
    result.classList.remove("hidden");
    
    const inputnombres = document.querySelector("#nombres").value
    const inputapellidos = document.querySelector("#apellidos").value
    const inputcuil = document.querySelector("#cuil").value
    const inputlegajo = document.querySelector("#legajo").value
    const inputbasico = checkValue(document.querySelector("#basico").value)
    const inputextras50 = checkValue(document.querySelector("#extras50").value)
    const inputextras100 = checkValue(document.querySelector("#extras100").value)
    const inputferiados = checkValue(document.querySelector("#feriados").value)
    const inputjustificadas = checkValue(document.querySelector("#justificadas").value)
    const inputinjustificadas = checkValue(document.querySelector("#injustificadas").value)
    const inputaguinaldo = document.querySelector("#aguinaldo:checked")
    const inputvacaciones = document.querySelector("#vacaciones:checked")

    const valorhora = inputbasico / 176
    
    resultnombres.innerHTML = checkText(inputnombres)
    resultapellidos.innerHTML = checkText(inputapellidos)
    resultcuil.innerHTML = checkValue(inputcuil)
    resultlegajo.innerHTML = checkValue(inputlegajo)
    resultbasico.innerHTML = checkValue(inputbasico)

    const productividad = checkValue(inputbasico * 0.1)
    resultproductividad.innerHTML = `${productividad}`

    var justificadas
    if(inputjustificadas === null || isNaN(inputjustificadas)) justificadas = 0
    else justificadas = inputjustificadas
    const porc_faltas = () => {
        if(justificadas + inputinjustificadas > 5) {return 0.25}
        else {return 0.05 * (justificadas + inputinjustificadas)}
    }
    const presentismo = checkValue((inputbasico * 0.25) - (inputbasico * porc_faltas()))
    resultpresentismo.innerHTML = `${presentismo} (${justificadas} faltas justificadas)`
    
    const extras50 = checkValue(valorhora * inputextras50 / 2)
    resultextras50.innerHTML = `${extras50}`

    const extras100 = checkValue(valorhora * inputextras100)
    resultextras100.innerHTML = `${extras100}`

    resultferiados.innerHTML = `${checkValue(inputferiados * valorhora * 8)}`

    const jubilacion = checkValue(checkValue(inputbasico * 0.11))
    resultjubilacion.innerHTML = `${jubilacion}`
    
    const obrasocial = checkValue(checkValue(inputbasico * 0.03))
    resultobrasocial.innerHTML = `${obrasocial}`

    const inssjp = checkValue(checkValue(inputbasico * 0.03))
    resultinssjp.innerHTML = `${inssjp}`

    if(inputaguinaldo !== null){
        const aguinaldo = checkValue((inputbasico + productividad + presentismo + extras50 + extras100) / 2)
        resultaguinaldo.innerHTML = `${aguinaldo}`
    }
    else {
        const aguinaldo = "---"
        resultaguinaldo.innerHTML = `${aguinaldo}`
    }

    if(inputvacaciones !== null){
        const vacaciones = checkValue((inputbasico + presentismo + productividad) / 2)
        resultvacaciones.innerHTML = `${vacaciones}`
    }
    else resultvacaciones.innerHTML = "---"

    const bruto = checkValue(inputbasico + productividad + presentismo + extras50 + extras100)
    resultbruto.innerHTML = `${bruto}`

    const deducciones = checkValue(jubilacion +  obrasocial + inssjp)
    resultdeducciones.innerHTML = `${deducciones}`

    const neto = checkValue(bruto - deducciones)
    resultneto.innerHTML = `${neto}`

    form.classList.add("hidden");
}

const volver = () => {
    result.classList.add("hidden");
    form.classList.remove("hidden");
}
