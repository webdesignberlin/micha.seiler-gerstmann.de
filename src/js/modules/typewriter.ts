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
  /* Prevent Reflow if typewriterElement types over one line */
  element.style.minHeight = helperHeight + 'px';

  if (index < (text.length)) {
    element.innerHTML = text.substring(0, index+1);

    index++;
    setTimeout(function() {
      typeWriter({
        element,
        text,
        from: index,
      });
    }, 100);
  }
};
