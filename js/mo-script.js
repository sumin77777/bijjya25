$(document).ready(function () {
  $(".banner").slick({
    // 슬라이더 옵션
    infinite: true, // 무한 반복
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 스크롤 시 이동할 슬라이드 수
    dots: false, // 페이지네이션 점 표시
    arrows: false, // 좌우 화살표 표시
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 간격 (3초)
    fade: false, // 페이드 효과 (true로 설정하면 슬라이드 쇼로 변경)
    cssEase: "linear", // 슬라이드 전환 효과
  });
  $(".content_banner").slick({
    // 슬라이더 옵션
    infinite: true, // 무한 반복
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 스크롤 시 이동할 슬라이드 수
    dots: true, // 페이지네이션 점 표시
    arrows: false, // 좌우 화살표 표시
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 간격 (3초)
    fade: false, // 페이드 효과 (true로 설정하면 슬라이드 쇼로 변경)
    cssEase: "linear", // 슬라이드 전환 효과
  });

  $(document).ready(function () {
    // 탭 기능을 초기화하는 함수 정의
    function initTabs(tabGroupSelector, contentContainerSelector) {
      const $tabGroup = $(tabGroupSelector);
      const $contentContainer = $(contentContainerSelector);

      // 탭 클릭 이벤트 바인딩
      $tabGroup.find(".tab").click(function () {
        const $clickedTab = $(this);
        const tabId = $clickedTab.data("tab");

        // 활성화된 탭 및 콘텐츠 초기화
        $tabGroup.find(".tab").removeClass("active");
        $clickedTab.addClass("active");
        $contentContainer.find(".tab-content").removeClass("active");

        // 해당 콘텐츠 활성화
        $contentContainer.find(`[data-content="${tabId}"]`).addClass("active");
      });

      // 페이지 로드 시 첫 번째 탭 활성화
      $tabGroup.find(".tab").first().addClass("active");
      $contentContainer.find(".tab-content").first().addClass("active");
    }

    // 각 탭 그룹에 대해 함수 호출
    initTabs(".tab-group-1", ".tab-content-1");
    initTabs(".tab-group-2", ".tab-content-2");
    // 탭 그룹이 더 추가될 경우, 이 부분을 확장하면 됩니다.
  });
});
