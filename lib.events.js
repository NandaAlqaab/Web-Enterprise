import { EventEmitter } from 'events';

const emmiter = new EventEmitter();

emmiter.on('send_email', (email_address)=>{
    console.info('Email success sent to: ' + email_address);
});

function forgotPassword(){
    console.log('Start Forgot Password Process');
    emmiter.emit('send_email','alqaab@gmail.com')
};

forgotPassword();