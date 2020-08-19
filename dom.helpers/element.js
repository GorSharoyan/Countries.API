export function element(tagName) {
    return function(attrs, children = []) {
        const elem = document.createElement(tagName);

        for (const key in attrs) {
            elem[key] = attrs[key];
        }

        children.forEach(child => {
            if (typeof child === 'string') {
                elem.appendChild(document.createTextNode(child))
            } else {
                elem.appendChild(child)
            }
        });

        return elem;
    }
}

