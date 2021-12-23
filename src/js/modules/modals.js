const modals = () => {
    function bindModal(triggerSelector, modalWindowSelector, closeBtnSelector){
        const trigger = document.querySelectorAll(triggerSelector);
        const closeBtn = document.querySelector(closeBtnSelector);
        const modalWindow = document.querySelector(modalWindowSelector);

        trigger.forEach(item =>{
            item.addEventListener('click', (event) => {
                if(event.target){
                    event.preventDefault;
                }
                modalWindow.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.bode.classList.add =('modal-open')
            });
        });

        closeBtn.addEventListener('click', () => {
            modalWindow.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open')
        });
        
        modalWindow.addEventListener('click', (e) => {
            if(e.target === modalWindow){
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open')
            }
        });
    }

    function showModalByTime(selector, time){
        setTimeout(function(){
            document.querySelector(selector).style.display ='block';
            document.body.style.overflow = 'hidden';            
        },time);
    }

//    const callEngineerBtn = document.querySelector('.popup_engineer_btn')
//    const modalEngineerWindow = document.querySelector('.popup_engineer')
//    const closeBtnModalEngWindow = document.querySelector('.popup_engineer .popup_close')
//    bindModal(callEngineerBtn, modalEngineerWindow, closeBtnModalEngWindow )

    bindModal( '.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close'  );
    bindModal( '.phone_link', '.popup', '.popup .popup_close');    
    // showModalByTime('.popup', 60000);


};


export default modals;