document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")
    const userInput = document.getElementById("search")

    const getPokemon = (pokemon) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(res => res.json())
        .then(data => renderPokemon(data))

    }

    const renderPokemon = (data) => {
        const container = document.getElementById("container")
        const card = document.createElement("div")
        const name = document.createElement("h3")
        const types = document.createElement("p")
        const sprite = document.createElement("img")
        name.innerText = data.name

        sprite.setAttribute("src", data.sprites.front_default)
        sprite.addEventListener("click", () => {
            if (sprite.src === data.sprites.back_default)
            sprite.setAttribute("src", data.sprites.front_default)
            else 
            sprite.setAttribute("src", data.sprites.back_default)
        })

        types.innerText = data.types[0].type.name
        container.appendChild(card)
        card.appendChild(name)
        card.appendChild(types)
        card.appendChild(sprite)
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        getPokemon(userInput.value)
    })


    getPokemon("pikachu")
})
