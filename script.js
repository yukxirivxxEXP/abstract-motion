document.addEventListener("DOMContentLoaded", () => {
    createShapes(10); // Создать 10 форм
    animateText();
  });
  
  function createShapes(numShapes) {
    const container = document.querySelector('.shapes');
  
    for (let i = 0; i < numShapes; i++) {
      const shape = document.createElement('div');
      shape.classList.add('shape');
      
      // Случайное положение формы
      shape.style.top = Math.random() * 100 + 'vh'; // Вертикально
      shape.style.left = Math.random() * 100 + 'vw'; // Горизонтально
      shape.style.animationDuration = (Math.random() * 10 + 5) + 's'; // Случайная продолжительность вращения
  
      container.appendChild(shape);
    }
  }
  
  function animateText() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      letter.style.setProperty('--delay', index);
    });
  }
  