function h(tag, props, children) {
    const element = document.createElement(tag);
    if (props !== null && props !== undefined) {
        Object.keys(props).forEach(key => {
            if (Object.prototype.hasOwnProperty.call(element, key)) {
                element[key] = props[key];
            } else if (key === 'class') {
                element.classList.add(props[key])
            }
        })
    }
       
    if (children instanceof Array) {
        children.forEach(child => {         
            element.append(child);
        })
    } else {
        element.innerText = children
    }
    return element;
}
function mount(vnode, container) {
    container.append(vnode);
}
const vdom = h('div', { class: 'red' }, [
    h('span', null, 'hello'),
    h('p', null, [
        h('strong', null, 'this is strong'),
        h('i', null, 'this is italic'),
        'this is just text'
    ])
])

mount(vdom, document.getElementById('app'))

console.log(vdom);
