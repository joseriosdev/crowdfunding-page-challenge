const bookmarkStorageKey = 'bookmarked';
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const bookmarkElmt = document.querySelector('.bookmark-container');
const handleMouseEnter = () => handleBookmarkHover(true);
const handleMouseLeave = () => handleBookmarkHover(false);

document.addEventListener('DOMContentLoaded', () => handleBookmark(bookmarkElmt, false));
bookmarkElmt.addEventListener('mouseenter', handleMouseEnter);
bookmarkElmt.addEventListener('mouseleave', handleMouseLeave);

burger.addEventListener('click', () => 
{
  burgerMenu.classList.toggle('open');
  burger.classList.toggle('ex');
  document.querySelector('body').classList.toggle('overflow-hidden');
});


function bookmarkClick(e, element)
{
  e.preventDefault();
  handleBookmark(element, true);
}

function handleBookmark(element, toggle)
{
  const rootedStyles = window.getComputedStyle(document.documentElement);
  let isBookmarked = !!localStorage.getItem(bookmarkStorageKey);
  const circle = document.querySelector('circle');
  const path = document.querySelector('path');
  const button = element.firstElementChild.nextElementSibling;

  if(toggle)
  {
    localStorage.setItem(bookmarkStorageKey, isBookmarked ? '' : '1');
    isBookmarked = !isBookmarked;
  }

  if(isBookmarked)
  {
    circle.style.fill = rootedStyles.getPropertyValue('--cyan').trim();
    path.style.fill = 'white';
    console.log('TRUE');
    button.textContent = 'Bookmarked';
    button.style.color = rootedStyles.getPropertyValue('--cyan').trim();
  }
  else
  {
    circle.style.fill = rootedStyles.getPropertyValue('--bookmark-circle').trim();
    path.style.fill = rootedStyles.getPropertyValue('--bookmark-path').trim();
    button.textContent = 'Bookmark';
    button.style.color = rootedStyles.getPropertyValue('--dark-grey').trim();
  }
}

function handleBookmarkHover(isEntered)
{
  const rootedStyles = window.getComputedStyle(document.documentElement);
  const isBookmarked = !!localStorage.getItem(bookmarkStorageKey);
  const circle = document.querySelector('circle');
  const button = document.querySelector('.bookmark-btn');

  if(isBookmarked)
  {
    circle.style.fill = rootedStyles.getPropertyValue(isEntered ? '--dark-cyan' : '--cyan').trim();
    button.style.color = rootedStyles.getPropertyValue('--cyan').trim();
  }
  else
  {
    circle.style.fill = rootedStyles.getPropertyValue(isEntered ? '--dark-grey' : '--bookmark-circle').trim();
    button.style.color = rootedStyles.getPropertyValue('--dark-grey').trim();
  }
}