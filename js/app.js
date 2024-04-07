document.addEventListener('DOMContentLoaded', function () {
  const images = {
    'casa': {
      url: 'https://cdn-icons-png.flaticon.com/512/10751/10751558.png',
      label: 'Casa'
    },
    'caja': {
      url: 'https://cdn.icon-icons.com/icons2/945/PNG/512/Office_-12_icon-icons.com_73953.png',
      label: 'Caja'
    },
    'coco': {
      url: 'https://icons.iconarchive.com/icons/iconarchive/seaside/512/Coconut-icon.png',
      label: 'Coco'
    },
    'corre': {
      url: 'https://purepng.com/public/uploads/large/purepng.com-mario-runningmariofictional-charactervideo-gamefranchisenintendodesigner-1701528632608aaskj.png',
      label: 'Corre'
    },
    'dado': {
      url: 'https://bandkbarsupplies.com/media/catalog/product/cache/9e258016ecb5c21cebed181938df574a/i/n/ingle_dice_2.jpg',
      label: 'Dado'
    },
    'dedo': {
      url: 'https://cdn-icons-png.flaticon.com/512/3601/3601909.png',
      label: 'Dedo'
    },
    'lado': {
      url: 'https://biologydictionary.net/wp-content/uploads/2017/02/Sagittal.jpg',
      label: 'Lado'
    },
    'lago': {
      url: 'https://cdn-icons-png.flaticon.com/512/2046/2046214.png',
      label: 'Lago'
    },
    'loco': {
      url: 'https://cdn.icon-icons.com/icons2/2801/PNG/512/emoji_emoticon_crazy_icon_178551.png',
      label: 'Loco'
    },
    'lodo': {
      url: 'https://as2.ftcdn.net/v2/jpg/01/11/49/27/1000_F_111492750_gmwlvdM1YM14kxAom3czsoLtND4KJuuq.jpg',
      label: 'Lodo'
    },
    'ojo': {
      url: 'https://cdn-icons-png.flaticon.com/512/3137/3137672.png',
      label: 'Ojo'
    },
    'oso': {
      url: 'https://pngfre.com/wp-content/uploads/Bear-18.png',
      label: 'Oso'
    },
    'paja': {
      url: 'https://www.creativefabrica.com/wp-content/uploads/2023/05/28/Haystack-with-hayfork-Cartoon-farm-anim-Graphics-70763743-1-1-580x387.png',
      label: 'Paja'
    },
    'perro': {
      url: 'https://cdn-icons-png.flaticon.com/512/616/616554.png',
      label: 'Perro'
    },
    'pelo': {
      url: 'https://t3.ftcdn.net/jpg/04/14/88/84/360_F_414888486_qFYx7mbPpip7bqj9vx8V4fh3emuxQIO6.jpg',
      label: 'Pelo'
    },
    'peso': {
      url: 'https://www.verywellfit.com/thmb/wzd1sU4-ifHh1vMzSnvb2bojSrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Web_1500-2I6F6516-3fca2536caee4536aa5c685a35ec76f9.jpg',
      label: 'Peso'
    },
    'poco': {
      url: 'https://static-00.iconduck.com/assets.00/pinching-hand-emoji-2048x1808-dj8147tt.png',
      label: 'Poco'
    },
    'poso': {
      url: 'https://cdn-icons-png.flaticon.com/512/3453/3453697.png',
      label: 'Poso'
    },
    'taza': {
      url: 'https://cdn-icons-png.freepik.com/512/5740/5740834.png',
      label: 'Taza'
    },
    'torre': {
      url: 'https://cdn-icons-png.freepik.com/512/90/90397.png',
      label: 'Torre'
    },
  };
  // Get references to DOM elements
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const label1 = document.getElementById('label1');
  const label2 = document.getElementById('label2');
  const generateBtn = document.getElementById('generate-btn');

  // Array of image URLs and labels
  const pairs = [
    [
      'casa',
      'taza',
    ],
    [
      'oso',
      'ojo',
    ],
    [
      'oso',
      'poso',
    ],
    [
      'casa',
      'caja',
    ],
    [
      'paja',
      'caja',
    ],
    [
      'corre',
      'torre',
    ],
    [
      'poco',
      'poso',
    ],
    [
      'lado',
      'lago',
    ],
    [
      'lado',
      'lodo',
    ],
    [
      'lado',
      'dado',
    ],
    [
      'lodo',
      'loco',
    ],
    [
      'coco',
      'poco',
    ],
    [
      'coco',
      'loco',
    ],
    [
      'dedo',
      'dado',
    ],
    [
      'perro',
      'peso',
    ],
    [
      'perro',
      'pelo',
    ],
    [
      'peso',
      'pelo',
    ],
    // TODO:
    /*
    [
      'codo',
      'coco',
    ],
    [
      'barro',
      'carro',
    ],
    [
      'codo',
      'como',
    ],
    [
      'boca',
      'bota',
    ],
    [
      'boca',
      'bola',
    ],
    [
      'bola',
      'borra',
    ],
     */
  ];

  function shuffleImages() {
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
  }

  let index = 0;

  // Function to set random images and labels
  function setRandomImages() {
    if (index === pairs.length) {
      shuffleImages();
      index = 0;
    }
    const pair = pairs[index];
    const img1 = images[pair[0]];
    const img2 = images[pair[1]];
    image1.src = img1.url;
    label1.textContent = img1.label;
    image2.src = img2.url;
    label2.textContent = img2.label;
    index++;
  }

  // Preload images when the page loads
  // preloadImages(pairs);

  // Generate initial random images on page load
  setRandomImages();

  // Event listener for the button click
  generateBtn.addEventListener('click', function () {
    setRandomImages();
  });
});
