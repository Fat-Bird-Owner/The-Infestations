Events.on(WithdrawEvent, event => {
    
    if (Vars.headless) return;
    
    const build = event.build;
    const item = event.item;
    const amount = event.amount;

    const text = "Taken " + amount + " " + item.localizedName + " from " + build.block.localizedName;

    Vars.ui.hudfrag.showToast(text);
});
