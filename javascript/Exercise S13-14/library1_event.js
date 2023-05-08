let evt = {
    attach: function (node, eventName, func) {
        if(node.addEventListener) {
            node.addEventListener(eventName, func);
        }
    },
    dettach: function (node, eventName, func) {
        if (node.removeEventListener) {
            node.removeEventListener(eventName, func)
        }
    },
    preventDefault: function(e){
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
    }
}

let toggle = function() {
    let h2 = this;
    let div = h2.nextElementSibling;
    if (h2.hasAttribute('class')) {
        h2.removeAttribute('class');
    } else {h2.setAttribute('class','minus')};
    if (div.hasAttribute('class')) {
        div.removeAttribute('class')
    } else {div.setAttribute('class', 'open')}
}
let log = function (e) {
    console.log(e);
}
window.onload = function() {
    let faqs = document.getElementById('faqs');
    let element = faqs.getElementsByTagName('h2');
    for (let i = 0; i < element.length; i++) {
        let h2 = element[i];
        let a = h2.firstChild;
        evt.attach(h2, "click", toggle);
        evt.attach(a, "click", evt.preventDefault);
        evt.attach(a, "click", log);
        evt.attach(a, "focus", log);
        evt.attach(a, "mouseover", log);
    }
    element[0].firstElementChild.focus();
}