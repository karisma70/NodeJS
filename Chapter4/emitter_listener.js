/**
 * Created by david on 2017-03-20.
 */
var events = require('events');

function Account(){
    this.balance = 0;
    events.EventEmitter.call( this );
    this.deposit = function(amount) {
        this.balance += amount;
        this.emit('balance Changed');
    }
    this.withdraw = function(amount){
        this.balance -= amount;
        this.emit('balance Changed');
    }
}

Account.prototype.__proto__ = events.EventEmitter.prototype;

function displayBalance(){
    console.log("Account balance : $%d", this.balance );
}

function checkOverdraw(){
    if( this.balance < 0 ){
        console.log("Account overdrawn !!!");
    }
}

function checkGoal( acc, goal ){
    if( acc.balance > goal ){
        console.log("Goal Achived !!!");
    }
}

var account = new Account();

account.on("balance Changed", displayBalance );
account.on("balance Changed", checkOverdraw );
account.on("balance Changed", function(){
   checkGoal( this, 1000 );
});

account.deposit( 220 );
account.deposit( 320 );
account.deposit( 600 );
account.withdraw( 1200 );


