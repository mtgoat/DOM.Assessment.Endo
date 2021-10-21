export const Zodiac = (taco) => {
    return`
    <ul class="zodiac-entry${taco.id}">
        <li class="zodiac-entry idNun">ID: ${taco.id}</li>
        <li class="zodiac-entry name">Name: ${taco.name}</li>
        <li class="zodiac-entry mascot">Mascot: ${taco.mascot}</li>
        <li class="zodiac-entry dates">Dates: ${taco.dates}</li>
        <li class="zodiac-entry element">Element: ${taco.element}</li>
        <li class="zodiac-entry wvAnimal">WV Animal: ${taco.wvAnimal}</li>
    </ul>
    `
}