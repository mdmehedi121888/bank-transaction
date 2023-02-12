document.getElementById('withdrawBtn').addEventListener('click',function(){
    // withdraw input section

    const withdrawValue = document.getElementById('withdrawValue');
    const withdrawValueString= withdrawValue.value;
    const withdrawValuenum = parseFloat(withdrawValueString);

if(isNaN(withdrawValuenum)==true){
    alert('plz enter a vlaid num');
    return;
}

    //withdraw display section
    const WithdrawBalance = document.getElementById('WithdrawBalance');
    const WithdrawBalancestring = WithdrawBalance.innerText;
    const WithdrawBalancenum = parseFloat(WithdrawBalancestring);
    // const currentWithdrawBalance = WithdrawBalancenum + withdrawValuenum;
    // WithdrawBalance.innerText = currentWithdrawBalance;
    withdrawValue.value = '';


    // connection between total balance and withdraw section
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceString = totalBalance.innerText;
    const totalBalancenum = parseFloat(totalBalanceString);
    // const afterWithdrawtotalbalance = totalBalancenum - currentWithdrawBalance;
    // totalBalance.innerText=afterWithdrawtotalbalance;

    if(withdrawValuenum>totalBalancenum)
    alert('sorry!!! you don have sufficient balance');
    else{
        const currentWithdrawBalance = WithdrawBalancenum + withdrawValuenum;
    WithdrawBalance.innerText = currentWithdrawBalance;
    const afterWithdrawtotalbalance = totalBalancenum - withdrawValuenum;
    totalBalance.innerText=afterWithdrawtotalbalance;
    }
})