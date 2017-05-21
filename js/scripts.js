function BankAccount(name, initDeposit, deposit, withdraw) {
  this.nameAccount = name;
  this.initDeposit = initDeposit;
  this.deposit = deposit;
  this.withdraw = withdraw;
}
BankAccount.prototype.depositCalculation = function() {
  return this.initDeposit += this.deposit;
}

BankAccount.prototype.withdrawCalculation = function() {

  if (this.withdraw > this.initDeposit)
  {
    alert("You don't have enough money to withdraw!");
  }
  else
  {
      return this.initDeposit -= this.withdraw;
  }
}
var reset = function() {
  $("#account-name").val("");
  $("#init-deposit").val("");
  $("#account-deposit").val("");
  $("#account-withdraw").val("");
}

$(document).ready(function() {
  $("#new-account").submit(function(event) {
  event.preventDefault();
  var nameInput = $("#account-name").val();
  var initDepositInput = parseFloat($("#init-deposit").val());
  var depositInput = parseFloat($("#account-deposit").val());
  var withdrawInput = parseFloat($("#account-withdraw").val());

  if(!initDepositInput)
  {
      initDepositInput = 0;
  }
  if(!depositInput)
  {
    depositInput = 0;
  }
  if(!withdrawInput)
  {
    withdrawInput = 0;
  }

  var newBankAccount = new BankAccount(nameInput, initDepositInput, depositInput, withdrawInput);

  newBankAccount.depositCalculation();
  newBankAccount.withdrawCalculation();

  reset();

  $("#balance").show();
  $(".name").text(newBankAccount.nameAccount);
  $(".balance").text(newBankAccount.initDeposit);

  });
});
