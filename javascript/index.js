document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button, i) => {
    if (button.id !== null) {
      if (button.id === 'switch') {
        button.addEventListener('click', () => {
          console.log('this is switch button');
        })
      }
    }
  })
})