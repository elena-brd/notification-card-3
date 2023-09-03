const btnNotification = document.querySelector('.btn-notification');
const btnClose = document.querySelector('.close');
const notificationMsgText = document.querySelector('.notification-msg-text');
const btnReadAll = document.querySelector('.btn-read-all');
const btnDecline = document.querySelector('.btn-decline');
const btnAccept = document.querySelector('.btn-accept');
const msgInfo = document.querySelector('.msg-info');


function newMsgDisplay() {
    notificationMsgText.style.display = 'block';
}

function removeMsg() {
    notificationMsgText.style.display = 'none'
}

function clearAll() {
    const card = document.querySelector('.card');
    card.style.padding = '2rem'
    card.textContent = 'Nothing To Display'
}

function declined() {
    msgInfo.textContent = 'Paul Saga Notification was declined';
    btnDecline.style.display = 'none'
    btnAccept.style.display = 'none'
}

btnNotification.addEventListener('click', newMsgDisplay);
btnClose.addEventListener('click', removeMsg);
btnReadAll.addEventListener('click', clearAll);
btnDecline.addEventListener('click', declined);



