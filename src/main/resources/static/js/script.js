let plantStage = 0;
let growTimer = null;
const plantImage = document.getElementById('plantImage');

const images = {
    0: '',
    1: '/images/seed.png',
    2: '/images/sprout.png',
    3: '/images/flower.png'
};

function updateField() {
    if (images[plantStage]) {
        plantImage.src = images[plantStage];
        plantImage.classList.add('visible');
    } else {
        plantImage.classList.remove('visible');
    }
}

function plantSeed() {
    if (plantStage === 0) {
        plantStage = 1;
        updateField();
        startGrowing();
    } else {
        alert("이미 씨앗이 심어졌어요!");
    }
}

function startGrowing() {
    if (growTimer) clearInterval(growTimer);

    growTimer = setInterval(() => {
        if (plantStage < 3) {
            plantStage++;
            updateField();
        } else {
            clearInterval(growTimer);
        }
    }, 3000);
}

function waterPlant() {
    showWaterAnimation();
    if (plantStage < 3 && plantStage > 0) {
        plantStage++;
        updateField();
    } else if (plantStage === 0) {
        alert("먼저 씨앗을 심어야 해요!");
    } else {
        alert("이미 다 자랐어요!");
    }
}

function showWaterAnimation() {
    const waterImg = document.createElement('img');
    waterImg.src = '/images/water.png';
    waterImg.className = 'water-animation';
    document.body.appendChild(waterImg);

    setTimeout(() => waterImg.remove(), 1500);
}

function harvest() {
    if (plantStage === 3) {
        showHarvestMessage();
        plantStage = 0;
        updateField();
    } else {
        alert("아직 수확할 수 없어요!");
    }
}

function showHarvestMessage() {
    const message = document.createElement('div');
    message.innerHTML = "🌸 수확 성공! 축하해요! 🌸";
    message.className = 'harvest-message';
    document.body.appendChild(message);

    setTimeout(() => message.remove(), 3000);
}

updateField();