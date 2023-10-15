const images = [];

for (let i = 1; i < 20; i++) {
  images.push(`${i}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
