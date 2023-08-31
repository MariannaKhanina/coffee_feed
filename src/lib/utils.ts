export const scrollToBottom = <T>(node: Element, _: T) => {
    const scroll = () => node.scroll({
        top: node.scrollHeight,
        behavior: 'smooth',
    });
    scroll();

    return { update: scroll }
};