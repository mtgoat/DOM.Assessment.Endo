export const Poison = (taco) => {
    return `
    <ul class="poison-entry${taco.id}">
        <li class="poison-entry idNun">ID: ${taco.id}</li>
        <li class="poison-entry species">Species: ${taco.species}</li>
        <li class="poison-entry commonName">Common Name: ${taco.commonName}</li>
        <li class="poison-entry fatal">Fatal: ${taco.fatal}</li>
        <li class="poison-entry antidoet">Antidote: ${taco.antidote}</li>
    </ul>
    `
}