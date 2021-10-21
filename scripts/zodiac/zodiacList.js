import { UseZodiac } from "./zodiacDataProvider.js";
import { Zodiac } from "./zodiacHTMLtemp.js";

export const ZodiacList = () => {
    const contentElement = document.querySelector(".zodiacArray")
    const zodiacs = UseZodiac ()

    let zodiacHTMLRepresentations = ""
    for (const singleZodiacArray of zodiacs) {
        zodiacHTMLRepresentations += Zodiac(singleZodiacArray)
    }
    contentElement.innerHTML += `
    <section class="container__zodiacArray">
     ${zodiacHTMLRepresentations}
    </section>
    `
}