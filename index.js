const container = document.querySelector('.container')
const bottomLine = document.querySelector('.bottomLine')

let array = [  'UNKNOWN - UNREG.',
  '[04/27/1972] SBA: DN: 28.500',
  'DELL TERAS JAHNE - 100006',
  '[04/27/1973] M:SBA: DC: 32.000',
  '[04/27/1974] SBA: DC: 30.000',
  'R0024P',
  '[05/27/1975] SBA: DC: 30.000',
  'COMMOKS NIGHT BUG - ROO24E',
  'UNKNOWN - UNREG.',
  '[05/27/1976] M: SR: DC: 30.000',
  'R02600R',
  '[05/27/1977] SDN: DC: 26.500',
  'MOUNTIN BOY - R00243R',
  '[01/01/1966] SSR: DC: 30.000',
  'COMMOKS SAILY OO101S',
  '[09/11/1974] M: SBA: DC: 28.500',
  'LITTLE KINGS TABLE SUPREME - A 20095',
  'UNKNOWN - UNREG.',
  'TRANS LITTLE JUNIOR - 100625',
  '[07/11/1979] M: SBC: 32.000',
  'UNKNOWN - UNREG.',
  'FALLEN ASHCROFT DARK SECRET - 144352',
  '[05/06/1978] S:SKC: DC: 31.000',
  'FIELDS - UNREG.',
  '[04/20/1971] M: SP: DC: 33.500',
  'VANILLA 3RD - 10009B',
  'SPA: DC: 32.000']

  function getRandomLine(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function getRandomPadding() {
    let padding = Math.floor(Math.random() * 10) + 0;
    return padding;
  }

  setTimeout(() => {
    
    setInterval(() => {
      let randomLine = getRandomLine(array);
      let newLine = document.createElement('p');
      newLine.textContent = randomLine;
      container.appendChild(newLine);
      bottomLine.textContent = randomLine;
      newLine.style.paddingLeft = `${getRandomPadding()}vh`;
      if (container.children.length > 46) {
        container.removeChild(container.children[0]);
      }
    }, 100); 
  }, 3000);
