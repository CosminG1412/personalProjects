const containerEl = document.querySelector(".container");
const careers = ["YouTuber", "Web Developer", "freelancer", "dustman", "trucker", "teacher", "programmer", "software engineer", "designer", "steel worker", "welder", "electrician"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${isVowel(careers[careerIndex][0]) ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }

    setTimeout(updateText, 300);
}

function isVowel(x)
{
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'
        || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == "U")
        return 1;
    else
        return 0;
}

