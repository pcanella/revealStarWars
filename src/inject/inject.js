function observeChanges() {
    // observe basically the whole page.
     var target = document.querySelector('body');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function() {
            addSpoilerClasses();
        });
    });

    // configuration of the observer:
    var config = {
        attributes: true,
        childList: true,
        characterData: true
    };

    // pass in the target node, as well as the observer options

    observer.observe(target, config);
}

function addSpoilerClasses() {
    var el = document.querySelectorAll('.linkflair-spoil .title a.may-blank');
    for (var i = 0; i < el.length; i++) {
        el[i].classList.add('revealr');
    }
}

// do the thing.
observeChanges();
