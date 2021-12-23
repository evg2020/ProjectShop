const tabs =(headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    function hideTabContent(){
         contents.forEach(item =>{
             item.style.display ='none';
         });
         tabs.forEach(item=>{
             item.classList.remove(activeClass);            
         });
    }

    function showTabContent(i = 0){
        contents[i].style.display ='block';
        tabs[i].classList.add(activeClass);

    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
            const target = e.target;
            console.log(e.target);
            console.log(e.target.parentNode);
            if (target && (target.classList.contains(tabSelector.replace(/\./, "") )  || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, "") ))) {
                tabs.forEach((item, i) => {
                    if(item === target  || item === target.parentNode) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
    });
};


export default tabs;
