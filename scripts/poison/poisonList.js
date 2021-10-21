import { usePoison } from "./poisonDataProvider.js";
import { Poison } from "./poisonHTMLtemp.js";

export const PoisonList = () => {
    const contentElement = document.querySelector(".poisonArray")
    const poisons = usePoison ()

    let poisonHTMLRepresentations = " "
    for (const singlePoisonArray of poisons) {
        poisonHTMLRepresentations += Poison(singlePoisonArray)
    }
    contentElement.innerHTML += ` 
    <section class="container__poisonArray">
     ${poisonHTMLRepresentations}
    </section>
    `
    }