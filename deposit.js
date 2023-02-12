document.getElementById('depositBtn').addEventListener('click',function(){
    // deposit input section
    const depositValue = document.getElementById('depositValue');
    const depositValueString = depositValue.value;
    const currentdepositvalue = parseFloat(depositValueString);
    
if(isNaN(currentdepositvalue)==true){
    alert('plz enter a valid number');
    return;
}

    //deposit amount display section
    const depositBalanceString = document.getElementById('depositBalanceString');
    const depositBalanceStringvalue = depositBalanceString.innerText;
    const previousdepositvalue = parseFloat(depositBalanceStringvalue);
    const totaldeposit = currentdepositvalue+previousdepositvalue;
    depositBalanceString.innerText= totaldeposit;
    
    depositValue.value = '';


    // balance section ...
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceString = totalBalance.innerText;
    const totalBalancenum = parseFloat(totalBalanceString);
    const currentTotalBalance = totalBalancenum + currentdepositvalue;
    totalBalance.innerText = currentTotalBalance;

})