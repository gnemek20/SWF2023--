const address = 'https://port-0-waatack-6g2llfkyykgm.sel3.cloudtype.app';
// const address = 'http://locahost:3000';

let checkLocationInterval;
let checkImageInterval;

checkLocation();

function post(location, form) {
  return fetch(`${address}${location}`, {
    method: 'POST',
    body: JSON.stringify({
      form: form
    })
  })
}

function checkLocation() {
  checkLocationInterval = setInterval(() => {
    const locationHref = document.location.href;
    
    if (locationHref === 'https://nft.storage/new-file/') {
      clearInterval(checkLocationInterval);
      checkImage();
    }
  }, 500)
}

function checkImage() {
  checkImageInterval = setInterval(async () => {
    const inputTag = document.querySelector('#file');

    if (inputTag.files.length > 0) {
      clearInterval(checkImageInterval);
      await uploadImage(inputTag.files[0]);
      console.log('uploaded');
    }
  }, 100)
}

async function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  // await post('/uploadImage', formData).then((res) => {
  //   console.log(res);
  // });
  await fetch(`${address}/drive/list`).then((response) => response.json()).then((result) => {
    console.log(result);
  })
}
