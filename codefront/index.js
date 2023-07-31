// 게시물 - 이미지 업로더의 셀렉터
// body > div.__fb-light-mode.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > form > div > div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j > div > div > div > div.xb57i2i.x1q594ok.x5lxg6s.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1e4zzel.x78zum5.xdt5ytf.x1iyjqo2 > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div.xexx8yu.x1sxyh0.x18d9i69.xurb0ha > div > div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x193iq5w.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.x1y1aw1k.xwib8y2 > div > div > div > div.x78zum5.x1n2onr6.xh8yej3 > div > div > div

// 게시물 - 예시 이미지의 셀렉터
// body > div.__fb-light-mode.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > form > div > div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j > div > div > div > div.xb57i2i.x1q594ok.x5lxg6s.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1e4zzel.x78zum5.xdt5ytf.x1iyjqo2 > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div.xexx8yu.x1sxyh0.x18d9i69.xurb0ha > div > div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x193iq5w.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.x1y1aw1k.xwib8y2 > div > div > div > div:nth-child(1) > div > div > img

let checkImageInterval;

// 현재 페이지가 facebook일 때만 실행
const locationHref = document.location.href;
if (locationHref === 'https://www.facebook.com/') {
  // 0.1초마다 게시물에 이미지를 업로드 하는 지 체크
  checkImageInterval = setInterval(() => {
    const imageTag = document.querySelector('body > div.__fb-light-mode.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > form > div > div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j > div > div > div > div.xb57i2i.x1q594ok.x5lxg6s.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1e4zzel.x78zum5.xdt5ytf.x1iyjqo2 > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div.xexx8yu.x1sxyh0.x18d9i69.xurb0ha > div > div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x193iq5w.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.x1y1aw1k.xwib8y2 > div > div > div > div:nth-child(1) > div > div > img');

    // 만약 이미지를 업로드한 경우
    if (imageTag !== null) {
      // interval 해제
      clearInterval(checkImageInterval);

      // 기존의 src는 어카운트가 있어야만 접속 가능
      // 해당 src를 망가뜨리면 모두가 접속 가능한 대체 src로 재구성
      imageTag.src = 'https://www.google.com';

      // src 재구성 대기
      setTimeout(() => checkedImage(), 3000);
    }
  }, 100)
}

function checkedImage() {
  console.log('check')

  const image = document.querySelector('body > div.__fb-light-mode.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > form > div > div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j > div > div > div > div.xb57i2i.x1q594ok.x5lxg6s.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1e4zzel.x78zum5.xdt5ytf.x1iyjqo2 > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div.xexx8yu.x1sxyh0.x18d9i69.xurb0ha > div > div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x193iq5w.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.x1y1aw1k.xwib8y2 > div > div > div > div:nth-child(1) > div > div > img');
  window.open(image.src);
}