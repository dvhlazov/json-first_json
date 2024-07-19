document.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get('/json-article');
    const article = response.data;

    const root = document.querySelector('.article');
    const titleArticle = root.querySelector('#title');
    const textArticle = root.querySelector('#text-content');

    titleArticle.textContent = article.title;
    textArticle.textContent = article.textContent;
});