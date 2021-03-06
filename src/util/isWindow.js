
export default function getWindow(node) {
    return node === node.window
        ? node
        : node.nodeType === 9
            ? node.defaultView || node.parentWindow
            : false;
}
