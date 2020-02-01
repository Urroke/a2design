const GetRandomNumber = (a, b) => {
  return Math.floor(Math.abs((b - a) * Math.random()));
};

const FindError = rgb =>
  Math.sqrt(
    Math.pow(rgb[1] - rgb[2], 2) +
      Math.pow(rgb[0] - rgb[1], 2) +
      Math.pow(rgb[0] - rgb[2], 2)
  ) / Math.sqrt(256 * 256 * 2);

export default (deltaMin, deltaMax, minBrightness, maxBrightness) => {
  const maxDelta = Math.pow(maxBrightness / 0.33, 2); //Дабы цикл не стал бесконечным

  if (maxDelta < deltaMax) {
    deltaMax = maxDelta;
    deltaMin = 0.0;
  }
  if (deltaMin === 0) deltaMin += 0.00001;
  const rgb = [0, 0, 0];
  while (
    FindError(rgb) > deltaMax ||
    deltaMin > FindError(rgb) ||
    (rgb[0] + rgb[1] + rgb[2]) / 768.0 > maxBrightness ||
    (rgb[0] + rgb[1] + rgb[2]) / 768.0 < minBrightness
  ) {
    for (let i = 0; i < 3; i++) rgb[i] = GetRandomNumber(0, 256);
  }
  return rgb;
};

// (0, 0.1) серые цвета
// (0.4, 0.6) Самое то
// (0.9, 1.0) Токсичные
// чем больше дельта тем более цвет токсичный (не серый), задаем диапазон дельт

// Третий параметр регулирует яркость, чтобы белый цвет не сливался с цветом аватарк, 0.1 , очень темные 0.2 темные
