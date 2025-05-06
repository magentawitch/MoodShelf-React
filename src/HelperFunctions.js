//API Required Info
const gBooksBaseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const dictionaryBaseUrl = "https://api.datamuse.com/words?rel_syn=";



//SYNONYM FUNCTION
async function getMoodSynonym(selectedMood) {
    const mood = selectedMood;
    const endpoint = `${dictionaryBaseUrl}${mood}`;

    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}



//BUILD SEARCH QUERY

async function buildSearchQuery(mood, synonyms) {
    let searchQuery = [mood]
    let synonymsList = await synonyms;
    const minQ = Math.min(5, synonymsList.length);
        
    for (let i = 0; i < minQ; i++) {
        searchQuery.push(synonymsList[i].word)
    }
    return searchQuery
}



//GET BOOK RECOMMENDATION LIST

export async function getBookRecommendation(moodInput) {
    const searchQuery = await buildSearchQuery(moodInput, await getMoodSynonym(moodInput));
    const gBooksKey = localStorage.getItem("gBooksKey");
    const bookList = [];

    for (let i = 0; i < searchQuery.length; i++) {
        let word = searchQuery[i];
        const endpoint = `${gBooksBaseUrl}${word}+subject:fiction&key=${gBooksKey}`;

        try {
            const response = await fetch(endpoint);
            if (response.ok) {
                const data = await response.json();
               
                for (let j = 0; j < 3; j++) {
                    let book = {};
                    book.title = data.items[j].volumeInfo.title;
                    book.author = data.items[j].volumeInfo.authors;
                    book.coverImage = data.items[j].volumeInfo.imageLinks.thumbnail;
                    bookList.push(book);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return bookList;
}