document.addEventListener("DOMContentLoaded", function () {
  // 전역 변수 및 요소 선택

  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".left_float a");
  const sections = document.querySelectorAll(".section");
  const totalSections = sections.length;

  // --- 풀페이지 스크롤 상태 변수 ---
  let currentSectionIndex = 0;
  let isScrolling = false;
  const SCROLL_DURATION = 1000;
  const transitionTiming = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

  // 헬퍼 함수

  function updateHeaderStyle(index) {
    const isScrolled = sections[index].id !== "main-section";
    header?.classList.toggle("scrolled", isScrolled);
  }

  function updateActiveLink(index) {
    const targetId = sections[index].id;
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${targetId}`
      );

      if (targetId === "menu-section") {
        link.classList.remove("menu-nav-link");
        if (link.getAttribute("href") === "#menu-section") {
          link.classList.add("menu-nav-link", "active");
        }
      } else {
        link.classList.remove("menu-nav-link");
      }
    });
  }

  function initializeCurrentSection() {
    let minDistance = Infinity;
    sections.forEach((section, index) => {
      const distance = Math.abs(window.scrollY - section.offsetTop);
      if (distance < minDistance) {
        minDistance = distance;
        currentSectionIndex = index;
      }
    });
  }

  // 풀페이지 스크롤 로직

  function scrollToSection(index) {
    if (index < 0 || index >= totalSections || isScrolling) {
      return;
    }

    isScrolling = true;
    currentSectionIndex = index;

    updateHeaderStyle(currentSectionIndex);
    updateActiveLink(currentSectionIndex);

    const targetScrollTop = sections[index].offsetTop;

    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
      if (
        sections[index].id === "menu-section" &&
        typeof updateMenuDimensions === "function"
      ) {
        updateMenuDimensions();
        goToMenuSlide(menuCurrentIndex);
      }
    }, SCROLL_DURATION);
  }

  // 휠 이벤트 리스너
  // --- PC용 휠 이벤트 ---
  window.addEventListener(
    "wheel",
    (event) => {
      if (isScrolling || event.deltaY === 0) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      scrollToSection(currentSectionIndex + direction);
    },
    { passive: false }
  );

  // --- 모바일용 터치 이벤트 --- ⭐ 여기를 새로 추가
  let touchStartY = 0;
  let touchEndY = 0;
  const TOUCH_THRESHOLD = 50;

  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  });

  window.addEventListener("touchend", (e) => {
    touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (isScrolling) return;
    if (diff > TOUCH_THRESHOLD) scrollToSection(currentSectionIndex + 1);
    else if (diff < -TOUCH_THRESHOLD) scrollToSection(currentSectionIndex - 1);
  });

  // 네비게이션 링크 클릭 이벤트
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetIndex = Array.from(sections).findIndex(
        (sec) => sec.id === targetId
      );

      if (targetIndex !== -1) {
        scrollToSection(targetIndex);
      }
    });
  });

  // 메인 섹션 슬라이드 스크립트

  const slidesContainer = document.querySelector(".slides.main-container");
  const slides = document.querySelectorAll(".slide");
  const slideNavButtons = document.querySelectorAll("#float_div button");
  const slideTransitionDuration = "0.3s";

  let slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;
  const totalSlides = slides.length;
  let mainSlideIndex = 0;

  let mainIsDragging = false;
  let mainStartX = 0;
  let mainLastX = 0;
  let mainCurrentTranslate = 0;
  let mainPrevTranslate = 0;

  function showMainSlide(index) {
    let newIndex = Math.max(0, Math.min(totalSlides - 1, index));

    mainSlideIndex = newIndex;

    slidesContainer.style.transition = `transform ${slideTransitionDuration} ${transitionTiming}`;
    slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;
    mainCurrentTranslate = -mainSlideIndex * slideWidth;
    slidesContainer.style.transform = `translateX(${mainCurrentTranslate}px)`;
    mainPrevTranslate = mainCurrentTranslate;

    slideNavButtons.forEach((button, i) => {
      button.classList.toggle("active", i === mainSlideIndex);
    });
  }

  // 드래그 시작
  slidesContainer.addEventListener("mousedown", (event) => {
    event.preventDefault();
    mainIsDragging = true;
    mainStartX = event.clientX;
    mainLastX = event.clientX;
    slidesContainer.style.transition = "none";
    slidesContainer.classList.add("dragging");
  });

  // 드래그 이동
  slidesContainer.addEventListener("mousemove", (event) => {
    if (!mainIsDragging) return;
    event.preventDefault();
    const currentX = event.clientX;
    mainLastX = currentX;
    const distanceX = currentX - mainStartX;
    let newTranslate = mainPrevTranslate + distanceX;
    const maxTranslate = 0;
    const minTranslate = -(totalSlides - 1) * slideWidth;

    newTranslate = Math.max(minTranslate, Math.min(maxTranslate, newTranslate));

    slidesContainer.style.transform = `translateX(${newTranslate}px)`;
  });

  // 드래그 종료
  const endMainDrag = (event) => {
    if (!mainIsDragging) return;
    mainIsDragging = false;
    slidesContainer.classList.remove("dragging");

    const movedBy = mainLastX - mainStartX;
    const threshold = slideWidth * 0.25;

    if (movedBy < -threshold) {
      showMainSlide(mainSlideIndex + 1);
    } else if (movedBy > threshold) {
      showMainSlide(mainSlideIndex - 1);
    } else {
      showMainSlide(mainSlideIndex);
    }
  };

  window.addEventListener("mouseup", endMainDrag);
  slidesContainer.addEventListener("mouseleave", () => {
    if (mainIsDragging) {
      endMainDrag({});
    }
  });

  // 네비게이션 버튼 클릭 이벤트
  slideNavButtons.forEach((button, i) => {
    button.addEventListener("click", () => showMainSlide(i));
  });

  //  메뉴 섹션 슬라이드 스크립트 (왼쪽 정렬 로직)

  const menuslidesViewport = document.querySelector(".menuslides-viewport");
  const menuslidesContainer = document.querySelector(
    ".menuslides-viewport .menuslides"
  );
  const menuSlides = Array.from(
    document.querySelectorAll(".menuslides-viewport .menuslide")
  );
  const prevBtn = document.querySelector(".menu-btn .prev-btn");
  const nextBtn = document.querySelector(".menu-btn .next-btn");

  const menuTransitionDuration = "0.5s";
  const menuTotalSlides = menuSlides.length;
  let menuCurrentIndex = 0;

  // ⭐ 바운스 저항 계수 (유지)
  const BOUNCE_FACTOR = 4;

  let menuSlideWidth = 0;
  let menuSlideStepWidth = 0;
  // let viewportCenterOffset = 0; // 중앙 정렬이 아니므로 필요 없음

  let menuIsDragging = false;
  let menuStartX = 0;
  let menuLastX = 0;
  let menuCurrentTranslate = 0;
  let menuPrevTranslate = 0;

  if (menuslidesContainer && menuSlides.length > 0 && prevBtn && nextBtn) {
    // 치수 계산 및 업데이트 (왼쪽 정렬을 위해 수정)
    window.updateMenuDimensions = function () {
      if (!menuslidesViewport || menuSlides.length === 0) return;

      menuSlideWidth = menuSlides[0].offsetWidth;
      const style = window.getComputedStyle(menuSlides[0]);
      const marginRight = parseFloat(style.marginRight) || 0;
      // 슬라이드 너비 + 마진 = 한 칸 이동 거리
      menuSlideStepWidth = menuSlideWidth + marginRight;

      goToMenuSlide(menuCurrentIndex, false);
    };

    // 버튼 상태 업데이트 (유지)
    function updateButtonState() {
      prevBtn.disabled = menuCurrentIndex <= 0;
      nextBtn.disabled = menuCurrentIndex >= menuTotalSlides - 1;
    }

    // 활성 슬라이드 스타일 적용 (유지)
    function applyActiveStyle() {
      menuSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === menuCurrentIndex);
      });
    }

    // 특정 인덱스로 이동 (왼쪽 경계 정렬 로직으로 수정)
    window.goToMenuSlide = function (index, useAnimation = true) {
      let newIndex = Math.max(0, Math.min(menuTotalSlides - 1, index));

      menuCurrentIndex = newIndex;

      // 0을 기준으로 현재 인덱스 * 이동 거리를 음수로 적용
      const targetTranslate = -newIndex * menuSlideStepWidth;

      if (useAnimation) {
        menuslidesContainer.style.transition = `transform ${menuTransitionDuration} ${transitionTiming}`;
      } else {
        menuslidesContainer.style.transition = "none";
      }

      menuCurrentTranslate = targetTranslate;
      menuslidesContainer.style.transform = `translateX(${menuCurrentTranslate}px)`;
      menuPrevTranslate = menuCurrentTranslate;

      updateButtonState();
      applyActiveStyle();
    };

    // 드래그 시작 (유지)
    menuslidesContainer.addEventListener("mousedown", (event) => {
      event.preventDefault();
      menuIsDragging = true;
      menuStartX = event.clientX;
      menuLastX = event.clientX;
      menuslidesContainer.style.transition = "none";
      menuslidesContainer.classList.add("dragging");
    });

    // 드래그 이동 (바운스 로직을 왼쪽 정렬에 맞게 수정)
    menuslidesContainer.addEventListener("mousemove", (event) => {
      if (!menuIsDragging) return;

      event.preventDefault();
      const currentX = event.clientX;
      menuLastX = currentX;
      const distanceX = currentX - menuStartX;

      let newTranslate = menuPrevTranslate + distanceX;

      const maxTranslate = 0; // 첫 번째 슬라이드가 가장 왼쪽 (왼쪽 경계)
      const minTranslate =
        -(menuTotalSlides * menuSlideStepWidth) +
        menuslidesViewport.offsetWidth; // 전체 길이에서 뷰포트 너비만큼 뺀 값 (오른쪽 경계)

      const lastSlideLeftEdgeTranslate =
        -(menuTotalSlides - 1) * menuSlideStepWidth;

      // 메뉴 슬라이드 뷰포트 너비
      const viewportWidth = menuslidesViewport.offsetWidth;

      // 0: 첫 번째 슬라이드 왼쪽 경계.
      // -(menuTotalSlides - 1) * menuSlideStepWidth: 마지막 슬라이드가 첫 번째 슬라이드의 위치에 있을 때.
      const theoreticalMinTranslate =
        -(menuTotalSlides - 1) * menuSlideStepWidth;

      // ⭐ 바운스 로직 적용 (경계를 넘어갈 때 저항)
      if (newTranslate > maxTranslate) {
        // 왼쪽으로 더 못 가고 당겨질 때 (newTranslate는 양수)
        const overflow = newTranslate - maxTranslate;
        newTranslate = maxTranslate + overflow / BOUNCE_FACTOR;
      } else if (newTranslate < theoreticalMinTranslate) {
        // 오른쪽으로 더 못 가고 당겨질 때 (newTranslate는 음수)
        const overflow = theoreticalMinTranslate - newTranslate;
        newTranslate = theoreticalMinTranslate - overflow / BOUNCE_FACTOR;
      }

      menuslidesContainer.style.transform = `translateX(${newTranslate}px)`;
    });

    // 드래그 종료 (유지)
    const endMenuDrag = (event) => {
      if (!menuIsDragging) return;
      menuIsDragging = false;
      menuslidesContainer.classList.remove("dragging");

      const movedBy = menuLastX - menuStartX;
      const threshold = menuSlideStepWidth * 0.2;
      let nextIndex = menuCurrentIndex;

      if (movedBy < -threshold) {
        nextIndex = Math.min(menuTotalSlides - 1, menuCurrentIndex + 1);
      } else if (movedBy > threshold) {
        nextIndex = Math.max(0, menuCurrentIndex - 1);
      }

      goToMenuSlide(nextIndex);
    };

    window.addEventListener("mouseup", endMenuDrag);
    menuslidesContainer.addEventListener("mouseleave", () => {
      if (menuIsDragging) {
        endMenuDrag({});
      }
    });

    // 네비게이션 버튼 클릭 이벤트 (유지)
    prevBtn.addEventListener("click", () =>
      goToMenuSlide(menuCurrentIndex - 1)
    );
    nextBtn.addEventListener("click", () =>
      goToMenuSlide(menuCurrentIndex + 1)
    );

    // 초기화 (유지)
    updateMenuDimensions();
    goToMenuSlide(menuCurrentIndex);
  }

  // Intersection Observer (스크롤 애니메이션)

  const animatedElements = document.querySelectorAll(
    ".menu-text, .franchise-intro, .mega-text, .event-title"
  );
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.target.closest("#menu-section")) {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      } else {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  animatedElements.forEach((element) => {
    if (element) {
      observer.observe(element);
    }
  });

  // 초기 로드 및 리사이즈 이벤트
  //

  initializeCurrentSection();
  updateHeaderStyle(currentSectionIndex);
  updateActiveLink(currentSectionIndex);
  showMainSlide(mainSlideIndex);

  window.addEventListener("resize", () => {
    // 메인 슬라이드 리사이즈
    slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;
    showMainSlide(mainSlideIndex);

    // 메뉴 슬라이드 리사이즈 (바운스 로직을 위해 치수 재계산)
    if (menuslidesContainer) {
      updateMenuDimensions();
    }
  });
});

// 첫 섹션 이후에 로고 밝아짐 효과
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!hamburger || !mobileNav) {
    console.error("❌ hamburger 또는 mobile-nav를 찾을 수 없습니다.");
    return;
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  mobileNav.addEventListener("wheel", function (e) {
    e.stopPropagation(); // 모바일 메뉴 내부에서 휠 이벤트만 작동
  });
});

// 오른쪽 플로팅 메뉴 토글

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".right-toggle-btn");
  const rightFloat = document.querySelector(".right_float");

  toggleBtn.addEventListener("click", () => {
    rightFloat.classList.toggle("active");
  });
});
