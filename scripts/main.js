Events.on(WithdrawEvent, event => {
    var build = event.build;
    var item = event.item;
    var amount = event.amount;

    var text = "Taken " + amount + " " + item.localizedName + " from " + build.block.localizedName;

    Vars.ui.hudfrag.showToast(text);
});
