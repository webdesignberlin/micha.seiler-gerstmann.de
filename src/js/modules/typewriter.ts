interface TypeWriterConfig {
  element: HTMLElement,
  text: string,
  from?: number,
}
export const typeWriter = (config: TypeWriterConfig) => {
  const {
    element = document.getElementById('js-typewriter'),
    text = document.getElementById('js-typewriter')?.getAttribute('data-text'),
    from = 0,
  } = config;

  if (!element || !text) return;
  const helperHeight = element.offsetHeight;
  let index = from;
  /* Prevent Reflow if typewriterElement types over one line */
  element.style.minHeight = helperHeight + 'px';

  if (index < (text.length)) {
    element.innerHTML = text.substring(0, index+1);

    index++;
    setTimeout(function() {
      typeWriter(config);
    }, 100);
  }
};
