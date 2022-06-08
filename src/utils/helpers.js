export const getRandomIntByRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const remToPx = (rem) => {
  if (typeof window === `undefined`) {
    return rem;
  }

  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export function splitStringToParagraphs(string, className) {
  if (!className) {
    className = ``;
  }

  const splitText = string?.split(/\r?\n/);
  const jsx = [];

  splitText?.forEach((row, index) => {
    const rowIndex = index;

    if (row !== ``) {
      jsx.push(<p key={`split-text-${rowIndex}`} className={className} dangerouslySetInnerHTML={{ __html: row }} />);
    }
  });

  return jsx;
}
