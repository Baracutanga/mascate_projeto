document.getElementById("bAdd").addEventListener('click', buttonAdd);

function buttonAdd() {
    const main1 = document.createElement("main")
    main1.className = "inputs"

    const main2 = document.createElement("main")
    main2.className = "inputs"

    const main3 = document.createElement("main")
    main3.className = "inputs"

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
    button.id = "bAdd"

    const bImg = document.createElement("img")
    bImg.src = 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Pacifico&display=swap'

    const bPara = document.createElement("p")
    bPara.innerText = "Adicionar mais um pedido"

    main1.appendChild(labelPedido)
    main1.appendChild(inputText)
    main2.appendChild(labelQntd)
    main2.appendChild(inputNumber)
    main3.appendChild(labelObs)
    main3.appendChild(textArea)
    // !! Arrumar problema do botão !!
    document.getElementById("formulario").appendChild(button)
    button.appendChild(bPara)
    // !! ========================= !!

    document.getElementById("formulario").appendChild(main1)
    document.getElementById("formulario").appendChild(main2)
    document.getElementById("formulario").appendChild(main3)

    document.getElementById("bAdd").style.display = 'none'
}