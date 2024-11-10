// background blur search for products and search and product container
const backgrSearch = document.getElementById('js-sfpb');
const searchProduct = document.getElementById('js-sfp');

// search button product header element
document.getElementById('js-button-search-header').addEventListener('click', showSearch);
document.getElementById('js-close-search').addEventListener('click', hideSearch);

backgrSearch.addEventListener('click', (event) => {
  if(event.target === backgrSearch) {
    hideSearch();
  }
});

function showSearch() {
  backgrSearch.style.display = 'block';

  setTimeout(() => {
    searchProduct.style.top = '0';
    backgrSearch.style.backdropFilter = 'blur(.2rem)';
    backgrSearch.style.backgroundColor = 'rgba(0,0,0, 0.4)';
  }, 150);
}
function hideSearch() {
  searchProduct.style.top = '-100%';
  backgrSearch.style.backdropFilter = 'none';
  backgrSearch.style.backgroundColor = 'transparent';

  setTimeout(() => {
    backgrSearch.style.display = 'none';
  }, 400);
}

// hide cookie
const hideCookies = document.querySelector('#cookies__exit');
const cookie = document.querySelector('.cookies');

window.onload = () => {
  cookie.style.display = 'bloc';
}
hideCookies.addEventListener('click', () => {
  cookie.style.display = 'none';
});

// menu
const backSidebar = document.getElementById('js-sidebar__background');
const sidebarCont = document.querySelector('.sidebar--container');

document.querySelector('.sidebar__button--open').addEventListener('click', () => {
  backSidebar.style.visibility = 'visible';
  backSidebar.style.opacity = '1';
  sidebarCont.style.left = '0';
});
backSidebar.addEventListener('click', (e) => {
  if(e.target === backSidebar) {
    hideSidebar();
  }
});
document.getElementById('js-sidebar-hide').onclick = hideSidebar;
document.getElementById('sidebar__logo').onclick = hideSidebar;

function hideSidebar() {
  sidebarCont.style.left = '-100%';
  backSidebar.style.visibility = 'hidden';
  backSidebar.style.opacity = '0';
}

// section 2
document.querySelector('#js-domains').addEventListener('click', () => {
  activeButton('#js-domains', '.section2__domain--container');
});
document.querySelector('#js-recommended').addEventListener('click', () => {
  activeButton('#js-recommended', '.section2__recommended--container');
});
document.querySelector('#js-wordpress').addEventListener('click', () => {
  activeButton('#js-wordpress', '.section2__wordpress--container');
});

function activeButton(selector, selector2) {
  const button = document.querySelector(selector);
  const content = document.querySelector(selector2);

  previousActive();

  if(!button.classList.contains('active')) {
    button.classList.add('active');
  }
  if(!content.classList.contains('display')) {
    content.classList.add('display');
  }
}
function previousActive() {
  const previousButton = document.querySelector('.active');
  const previousContent = document.querySelector('.display');

  if(previousButton) {
    previousButton.classList.remove('active');
  }
  if(previousContent) {
    previousContent.classList.remove('display');
  }
}

// section 3
document.querySelector('#js-s3__desktop--article-1').addEventListener('mouseover', () => {
  displayImageS3('#js-s3__desktop--article-1', '#js-s3__image--desktop-1');
});
document.querySelector('#js-s3__desktop--article-2').addEventListener('mouseover', () => {
  displayImageS3('#js-s3__desktop--article-2', '#js-s3__image--desktop-2');
});
document.querySelector('#js-s3__desktop--article-3').addEventListener('mouseover', () => {
  displayImageS3('#js-s3__desktop--article-3', '#js-s3__image--desktop-3');
});

function displayImageS3(article, image) {
  const myArticle = document.querySelector(article);
  const myImage = document.querySelector(image);

  previousHoverS3();

  if(!myArticle.classList.contains('s3__active')) {
    myArticle.classList.add('s3__active');
  }
  if(!myImage.classList.contains('s3__display')) {
    myImage.classList.add('s3__display');
  }
}
function previousHoverS3() {
  const s3Active = document.querySelector('.s3__active');
  const s3Display = document.querySelector('.s3__display');

  if(s3Active) {
    s3Active.classList.remove('s3__active');
  }
  if(s3Display) {
    s3Display.classList.remove('s3__display');
  }
}

// section 5 scroll items
const scrollLeftButton = document.querySelector('.js-scroll-left-button');
const scrollRightButton = document.querySelector('.js-scroll-right-button');
const cardContainer = document.querySelector('.js-scroll-container');
const cardWidth = document.querySelector('.s5__carts').offsetWidth + 16;

scrollLeftButton.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: -cardWidth,
    behavior: 'smooth'
  });
});

scrollRightButton.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: cardWidth,
    behavior: 'smooth'
  });
});

// section 8 summary, rotating arrow 
const summaryElm = document.querySelectorAll('.js-summary-click');

summaryElm.forEach((e, i) => {
  e.addEventListener('click', () => {
    const arrowElm = document.querySelectorAll('.js-translate-arrow');
    arrowElm[i].classList.toggle('rotate-arrow');
  });
});

// footer show and hide navigation
const items = document.querySelectorAll('.js-show-sub-menu-footer');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(menuItem => {
      menuItem.nextElementSibling.style.display = 'none';
      menuItem.classList.remove('active-footer');
    });

    const nextSubmenu = item.nextElementSibling;
    if(nextSubmenu.style.display === 'block') {
      nextSubmenu.style.display = 'none';
    } else {
      nextSubmenu.style.display = 'block';
      item.classList.add('active-footer');
    }
  });
});


