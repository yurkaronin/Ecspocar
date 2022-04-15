console.log('Account.js inited');

let tabsOptions = {
    tabGroupParentSelector: '.js-my-account-tabs', // Селектор родительского контейнера.
    tabBtnSelector: '.js-my-account-tab', // Селектор вкладки (таба).
    tabContentSelector: '.js-my-account-panel', // Селектор контентного блока.
    activationClass: 'active', // CSS класс, активирующий видимость таба и соответствующей ему контентной области.
    defaultTabToShow: '.js-my-account-tab:nth-child(1)' // Псевдокласс или иной селектор, который однозначно укажет на вкладку, которая должна быть активна по умолчанию.
};

const accountTabs = new TabMaker(tabsOptions);
accountTabs.createTabs();