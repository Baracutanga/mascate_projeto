document.getElementById("bAdd").addEventListener('click', buttonAdd);

function buttonAdd() {

    const linha = document.createElement("hr")

    const main1 = document.createElement("main")
    main1.className = "inputs"

    const main2 = document.createElement("main")
    main2.className = "inputs"

    const main3 = document.createElement("main")
    main3.className = "inputs"

    const br = document.createElement("br")

    const labelPedido = document.createElement("label")
    labelPedido.textContent = "Pedido:"

    const labelQntd = document.createElement("label")
    labelQntd.textContent = "Quantidade:"

    const labelObs = document.createElement("label")
    labelObs.textContent = "Observações:"

    const inputText = document.createElement("input")
    inputText.type = "text"
    inputText.style.marginBottom = "10px"

    const inputNumber = document.createElement("input")
    inputNumber.type = "number"
    inputNumber.style.marginBottom = "10px"

    const textArea = document.createElement("textarea")

    const button = document.createElement("button")
    button.type = "button"
    button.style.display = "flex"
    button.style.alignItems = "center"
    button.style.width = "fit-content"
    button.style.height = "fit-content"
    button.style.background = "none"
    button.style.border = "none"
    button.style.fontFamily = "Jost"
    button.style.color = "rgba(84, 56, 20, 0.5)"
    button.style.fontSize = "12pt"
    button.id = "bAdd2"

    const bImg = document.createElement("img")
    bImg.src = "img/add.png"
    bImg.alt = "add"
    bImg.style.width = "12%"

    const bPara = document.createElement("p")
    bPara.innerText = "Adicionar mais um pedido"

    bPara.addEventListener('mouseenter', function () {
        bPara.style.textShadow = "2px 1px 2px rgba(0,0,0,0.2)"
        bPara.style.transition = "text-shadow 0.1s ease-out 0.1s"
    })

    bPara.addEventListener('mouseout', function () {
        bPara.style.textShadow = ""
        bPara.style.transition = ""
    })

    main1.appendChild(linha)
    main1.appendChild(labelPedido)
    main1.appendChild(inputText)
    main2.appendChild(labelQntd)
    main2.appendChild(inputNumber)
    main3.appendChild(labelObs)
    main3.appendChild(br)
    main3.appendChild(textArea)
    document.getElementById("formulario").appendChild(button)
    button.appendChild(bImg)
    button.appendChild(bPara)

    document.getElementById("formulario").appendChild(main1)
    document.getElementById("formulario").appendChild(main2)
    document.getElementById("formulario").appendChild(main3)
    document.getElementById("formulario").appendChild(button)
    document.getElementById("formulario").appendChild(document.getElementById("btn-enviar"))

    document.getElementById("bAdd").style.display = 'none'

    // Click do segundo pedido
    button.addEventListener('click', function () {

        const linha = document.createElement("hr")

        const main1 = document.createElement("main")
        main1.className = "inputs"

        const main2 = document.createElement("main")
        main2.className = "inputs"

        const main3 = document.createElement("main")
        main3.className = "inputs"

        const br = document.createElement("br")

        const labelPedido = document.createElement("label")
        labelPedido.textContent = "Pedido:"

        const labelQntd = document.createElement("label")
        labelQntd.textContent = "Quantidade:"

        const labelObs = document.createElement("label")
        labelObs.textContent = "Observações:"

        const inputText = document.createElement("input")
        inputText.type = "text"
        inputText.style.marginBottom = "10px"

        const inputNumber = document.createElement("input")
        inputNumber.type = "number"
        inputNumber.style.marginBottom = "10px"

        const textArea = document.createElement("textarea")

        const button = document.createElement("button")
        button.type = "button"
        button.style.display = "flex"
        button.style.alignItems = "center"
        button.style.width = "fit-content"
        button.style.height = "fit-content"
        button.style.background = "none"
        button.style.border = "none"
        button.style.fontFamily = "Jost"
        button.style.color = "rgba(84, 56, 20, 0.5)"
        button.style.fontSize = "12pt"
        button.id = "bAdd3"

        const bImg = document.createElement("img")
        bImg.src = "img/add.png"
        bImg.alt = "add"
        bImg.style.width = "12%"

        const bPara = document.createElement("p")
        bPara.innerText = "Adicionar mais um pedido"

        bPara.addEventListener('mouseenter', function () {
            bPara.style.textShadow = "2px 1px 2px rgba(0,0,0,0.2)"
            bPara.style.transition = "text-shadow 0.1s ease-out 0.1s"
        })

        bPara.addEventListener('mouseout', function () {
            bPara.style.textShadow = ""
            bPara.style.transition = ""
        })

        main1.appendChild(linha)
        main1.appendChild(labelPedido)
        main1.appendChild(inputText)
        main2.appendChild(labelQntd)
        main2.appendChild(inputNumber)
        main3.appendChild(labelObs)
        main3.appendChild(br)
        main3.appendChild(textArea)
        document.getElementById("formulario").appendChild(button)
        button.appendChild(bImg)
        button.appendChild(bPara)

        document.getElementById("formulario").appendChild(main1)
        document.getElementById("formulario").appendChild(main2)
        document.getElementById("formulario").appendChild(main3)
        document.getElementById("formulario").appendChild(button)
        document.getElementById("formulario").appendChild(document.getElementById("btn-enviar"))

        document.getElementById("bAdd2").style.display = 'none'
    })
}