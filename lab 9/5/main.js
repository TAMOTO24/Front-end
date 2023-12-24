class Tab {
    constructor(selector) {
        this.tabsContainer = document.querySelector(selector);
        this.tabs = [];
        this.contents = [];
    }

    addTab(tabName, content) {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = tabName;
        tab.addEventListener('click', () => this.switchTab(tab));

        this.tabs.push(tab);
        this.tabsContainer.appendChild(tab);

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('tab-content', 'hidden');
        contentContainer.innerHTML = content;

        this.contents.push(contentContainer);
        this.tabsContainer.appendChild(contentContainer);

        if (this.tabs.length === 1) {
            this.switchTab(tab);
        }
    }

    switchTab(selectedTab) {
        this.tabs.forEach((tab, index) => {
            const content = this.contents[index];

            if (tab === selectedTab) {
                tab.classList.add('active');
                content.classList.remove('hidden');
            } else {
                tab.classList.remove('active');
                content.classList.add('hidden');
            }
        });
    }
}

const myTabs = new Tab('#myTabs');
myTabs.addTab('Tab 1', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perferendis, voluptas non debitis ipsa ut unde? Illum nobis, harum, tempora perspiciatis aspernatur iure consequatur, quis at vero fuga architecto praesentium.</p>');
myTabs.addTab('Tab 2', '<p>Есть такая команда, которая называется lorem. Жмем tab и как видите, у нас сгенерировался случайный текст.</p>');
myTabs.addTab('Tab 3', '<p>Если нам нужно разместить его внутри элемента p, пишем p>lorem*3</p>');