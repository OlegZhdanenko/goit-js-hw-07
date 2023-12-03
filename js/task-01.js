const list = document.querySelectorAll('#categories>li.item')

console.log(`Number of categories:${list.length}`);

const newList = list.forEach(item => {
    const categoryName = item.querySelector("h2");
    const liCount = item.querySelectorAll("li")
    console.log(`Category:${categoryName.textContent}`);
    console.log(`Elements:${liCount.length}`);
})