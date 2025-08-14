export function getCaretCoordinates(
    textarea: HTMLTextAreaElement,
    position: number
): { left: number; top: number } {
    const div = document.createElement('div');
    const style = getComputedStyle(textarea);

    for (const prop of [
        'boxSizing',
        'width',
        'height',
        'overflowX',
        'overflowY',
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
        'fontStyle',
        'fontVariant',
        'fontWeight',
        'fontStretch',
        'fontSize',
        'fontSizeAdjust',
        'lineHeight',
        'fontFamily',
        'textAlign',
        'textTransform',
        'textIndent',
        'textDecoration',
        'letterSpacing',
        'wordSpacing',
    ]) {
        // @ts-ignore
        div.style[prop] = style[prop];
    }

    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.whiteSpace = 'pre-wrap';
    div.style.wordWrap = 'break-word';
    div.style.top = textarea.offsetTop + 'px';
    div.style.left = textarea.offsetLeft + 'px';

    const value = textarea.value.substring(0, position);
    div.textContent = value.replace(/\n$/, '\n\u200b');
    if (value.endsWith('\n')) {
        div.textContent += '\u200b';
    }

    document.body.appendChild(div);

    const span = document.createElement('span');
    span.textContent = textarea.value.substring(position) || '.';
    div.appendChild(span);

    const rect = span.getBoundingClientRect();
    const divRect = div.getBoundingClientRect();

    const left = rect.left - divRect.left;
    const top = rect.top - divRect.top;

    document.body.removeChild(div);

    return { left, top };
}
