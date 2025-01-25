const newsList = document.querySelectorAll('.today-news');
const imageFolder = '../images/news-page/image';
const startIndex = 3;
const endIndex = 10;

const rootStyles = getComputedStyle(document.documentElement);
const colors = [
  rootStyles.getPropertyValue('--first-link-bg-color').trim(),
  rootStyles.getPropertyValue('--second-link-bg-color').trim(),
  rootStyles.getPropertyValue('--third-link-bg-color').trim(),
  rootStyles.getPropertyValue('--fourth-link-bg-color').trim(),
  rootStyles.getPropertyValue('--fifth-link-bg-color').trim(),
];

const addArticles = () => {
  for (let i = startIndex; i < endIndex; i++) {
    newsList.forEach((newsElement) => {
      const article = document.createElement('div');
      article.classList.add('article');

      const img = document.createElement('img');
      img.src = `../images/news-page/image${i}.png`;
      img.alt = 'Article Image';
      article.appendChild(img);

      const articleInfo = document.createElement('div');
      articleInfo.classList.add('article-info');

      const articleTitle = document.createElement('h4');
      articleTitle.classList.add('article-title');
      articleTitle.textContent = `Article Title ${i + 1}`;
      articleTitle.textContent =
        'Lorem Ipsum is simply dummy text dummy text ? ';

      const articleLink = document.createElement('a');
      articleLink.classList.add('article-link');
      articleLink.href = '#';
      articleLink.textContent = 'Read More';

      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      articleLink.style.backgroundColor = randomColor;

      articleInfo.appendChild(articleLink);
      articleInfo.appendChild(articleTitle);

      article.appendChild(articleInfo);
      newsElement.appendChild(article);
    });
  }
};

addArticles();
