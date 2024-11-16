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

// header 
// meganav
const meganav = document.querySelectorAll('.js-meganavs');
const meganavBtn = document.querySelectorAll('.js-button-meganavs');
const meganavBack = document.querySelector('.js-meganav-background');
const blurBack = document.querySelector('.js-blur-meganav');
// for header help and sign in
const buttonTooltip = document.querySelectorAll('.js-button-signin-help');
const tooltip = document.querySelectorAll('.js-signin-help');

// close meganav just mobile
document.querySelector('.js-close-meganav').addEventListener('click', () => {
  setTimeout(() => {
    meganavBack.style.display = 'none';
    meganavBtn.forEach(e => {e.classList.remove('active-meganav')});
  }, 100);
  meganav.forEach((elm) => {
    elm.style.left = '100%';
    elm.style.opacity = '0';
  });
});

// hide meganav and remove class from meganav button 
function previousMeganav() {
  // first close all previus meganav
  meganav.forEach((elm) => {
    elm.style.left = '100%';
    elm.style.opacity = '0';
  });
  // remove class from all previus button
  meganavBtn.forEach((elm) => {
    elm.classList.remove('active-meganav');
    elm.classList.add('hover-effect');
  });
}
// remove tooltip and class 
function previousTooltip() {
  // tooltip right side of header, help & sign in
  // hide all previous tooltip
  tooltip.forEach(elm => {elm.style.display = 'none'});
  // remove class from help and sign in button
  buttonTooltip.forEach(elm => {
    elm.classList.remove('active-meganav');
    elm.classList.add('hover-effect');
  });
}
// hide blurBack & meganavBack
function hideBackMega() {
  previousMeganav();

  blurBack.style.display = 'none';
  document.body.classList.remove('no-scroll');
  meganavBack.style.height = '0';
}

// show meganav desktop and mpbile
meganavBtn.forEach((elm, i) => {
  elm.addEventListener('click', () => {
    const currentMeganav = meganav[i];

    // close meganav
    if(currentMeganav.style.opacity === '1') {
      currentMeganav.style.left = '100%';
      currentMeganav.style.opacity = '0';
      elm.classList.remove('active-meganav');
      elm.classList.add('hover-effect');

      setTimeout(() => {
        meganavBack.style.height = '0';

        setTimeout(() => {
          hideBackMega();
        }, 200);
      }, 100);

    } else {
      // hide all previus meganav and remove class 
      previousMeganav();
      // show clicked meganav
      blurBack.style.display = 'block';
      meganavBack.style.display = 'block';

      // apply changes for current meganav and button
      setTimeout(() => {
        // condition for size of device
        if(window.innerWidth < 1350) {
          meganavBack.style.height = 'auto';
        } else {
          meganavBack.style.height = '450px';
        }
        
        elm.classList.add('active-meganav');
        elm.classList.remove('hover-effect');
        document.body.classList.add('no-scroll');
  
        setTimeout(() => {
          currentMeganav.style.opacity = '1';
          currentMeganav.style.left = '0';
        }, 100);
      }, 50);
    }
  });
});
blurBack.addEventListener('click', (e) => {
  if(e.target === blurBack) {
    hideBackMega();
  }
});

// background blur search for products and search and product container
const backgrSearch = document.getElementById('js-sfpb');
const searchProduct = document.getElementById('js-sfp');

// search button product header element
document.getElementById('js-button-search-header').addEventListener('click', showSearch);
document.getElementById('js-close-search').addEventListener('click', hideSearch);

backgrSearch.addEventListener('click', (e) => {
  if(e.target === backgrSearch) {
    hideSearch();
  }
});

// show search for product navigation
function showSearch() {
  backgrSearch.style.display = 'block';
  // hides meganav
  hideBackMega();

  setTimeout(() => {
    searchProduct.style.top = '0';
    backgrSearch.style.backdropFilter = 'blur(.2rem)';
    backgrSearch.style.backgroundColor = 'rgba(0,0,0, 0.4)';
  }, 150);
}
// hide search for product navigation
function hideSearch() {
  searchProduct.style.top = '-100%';
  backgrSearch.style.backdropFilter = 'none';
  backgrSearch.style.backgroundColor = 'transparent';

  setTimeout(() => {
    backgrSearch.style.display = 'none';
  }, 400);
}
// button search for products & input
const inputSearch = document.querySelector('.js-sfp-input');
const submitSearch = document.querySelector('.js-sfp-button');
 
// when in input start typing show submit button
inputSearch.addEventListener('input', () => {
  if(inputSearch.value.trim() !== '') {
    submitSearch.style.display = 'block';
  } else {
    submitSearch.style.display = 'none';
  }
});

// tooltip help & sign-in in header 
buttonTooltip.forEach((elm, i) => {
  // addeventlistener for all tooltip button
  elm.addEventListener('click', (e) => {
    // if tooltip button clicked again remove class and tooltip.
    // class for style of button when clicked
    if(tooltip[i].style.display === 'block') {
      tooltip[i].style.display = 'none';
      elm.classList.remove('active-meganav');
      elm.classList.add('hover-effect');
    } else {
      // remove class and style from all previus tooltip
      previousTooltip();
      // hide meganav and remove class from previus button
      hideBackMega();
      // add style and class to current clicked element
      tooltip[i].style.display = 'block';
      // prevent from document addEventListener
      tooltip[i].addEventListener('click', (e) => {
        e.stopPropagation();
      });
      // if screen is greater than 992px add style to clicked button
      if(window.innerWidth > 992) {
        elm.classList.add('active-meganav');
        elm.classList.remove('hover-effect');
      }
    }

    e.stopPropagation();
  });
});

// x button tooltip header, help & sign in
const hideTooltipBtn = document.querySelectorAll('.js-close-tooltip');

hideTooltipBtn.forEach(elm => {
  elm.addEventListener('click', () => {
    // remove all class and hide tooltip
    previousTooltip();
  });
});
// when out of tooltip is clicked it hides tooltip
document.addEventListener('click', () => {
  // remove all class and hide tooltip
  previousTooltip();
});

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
    const next = item.nextElementSibling;

    if(next.style.display === 'block') {
      next.style.display = 'none';
      item.classList.remove('active-footer');
    } else {
      const allSubmenu = document.querySelectorAll('.js-sub-menu-footer');
      
      allSubmenu.forEach(elm => {elm.style.display = 'none'});
      items.forEach(elm => {elm.classList.remove('active-footer')});

      next.style.display = 'block';
      item.classList.add('active-footer');
    }
  });
});

// footer chose languege and curency
const langButton = document.querySelectorAll('.js-lang-curency-button');
// L = languege, C = curency
const chooseLC = document.querySelectorAll('.js-choose-lang-curency');
// x button
const closeBtn = document.querySelectorAll('.js-x-lang-curency') ;
const arrowSvg = document.querySelectorAll('.js-arrow');
const container = document.querySelectorAll('.js-container-lang-curen');

langButton.forEach((elm, i) => {
  elm.addEventListener('click', () => {
    if(chooseLC[i].style.display === 'block') {
      chooseLC[i].style.transform = 'scaleY(0)';
      arrowSvg[i].style.transform = 'rotate(180deg)';

      setTimeout(() => {
        container[i].style.opacity = '0';

        setTimeout(() => {
          chooseLC[i].style.display = 'none';
        }, 150);
      }, 30);
    } else {
      chooseLC.forEach(elm => {
        elm.style.display = 'none';
        elm.style.transform = 'scaleY(0)';
      });
      arrowSvg.forEach(elm => {
        elm.style.transform = 'rotate(180deg)';
      });
      container.forEach(elm => {
        elm.style.opacity = '0';
      });

      chooseLC[i].style.display = 'block';
      arrowSvg[i].style.transform = 'rotate(0)';

      setTimeout(() => {
        chooseLC[i].style.transform = 'scaleY(1)';

        setTimeout(() => {
          container[i].style.opacity = '1';
        }, 200);
      }, 50);
    }
  });
});
closeBtn.forEach((elm, i) => {
  elm.addEventListener('click', () => {
    chooseLC.forEach(elm => {
      elm.style.display = 'none';
      elm.style.transform = 'scaleY(0)';
    });
    arrowSvg.forEach(elm => {
      elm.style.transform = 'rotate(180deg)';
    });
    container.forEach(elm => {
      elm.style.opacity = '0';
    });
  });
});



