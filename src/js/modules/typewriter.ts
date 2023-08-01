interface TypeWriterConfig {
  element: HTMLElement,
  text: string,
  from?: number,
}

const defaultTypewriterConfig = {
  element: document.getElementById('js-typewriter'),
  text: document.getElementById('js-typewriter')?.getAttribute('data-text') || document.getElementById('js-typewriter')?.innerHTML,
  from: 0,
};

let insideHtmlTag = false;

export const typeWriter = (config?: TypeWriterConfig) => {
  const {
    element,
    text,
    from,
  } = {
    ...defaultTypewriterConfig,
    ...config,
  };

  if (!element || !text) return;
  const helperHeight = element.offsetHeight;
  let index = from;
  // Prevent Reflow if typewriterElement types over one line
  element.style.minHeight = helperHeight + 'px';

  if (index < (text.length)) {
    element.innerHTML = text.substring(0, index + 1);

    if (text[index] === '<') {
      insideHtmlTag = true;
    } else if (text[index] === '>') {
      insideHtmlTag = false;
    }

    // reduce timeout for faster writing if inside tag
    const timeout = insideHtmlTag ? 1 : 100;

    index++;
    setTimeout(function () {
      typeWriter({
        element,
        text,
        from: index,
      });
    }, timeout);
  }
};
