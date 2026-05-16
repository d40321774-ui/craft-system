const CRAFT_DATABASE = {
  "Зброярня": {
    "COMPONENTS": {
      "Залізний злиток": { "Залізна руда": 10, "Вугілля": 5, "_output": 1 },
      "Мідний злиток": { "Мідна руда": 10, "Вугілля": 5, "_output": 1 },
      "Злиток сталі": { "Залізний злиток": 10, "Вугілля": 5, "_output": 1 },
      "Пружина": { "Залізний злиток": 2, "_output": 25 },
      "Гільза": { "Мідний злиток": 1, "_output": 100 }, 
      "Куля": { "Залізний злиток": 1, "_output": 100 },  
      "Порох": { "Сірка": 1, "Вугілля": 2, "_output": 20 }, 
      "Корпус Револьвера": { "Залізний злиток": 1, "_output": 1 },
      "Корпус карабіна": { "Залізний злиток": 3, "Мідний злиток": 1, "_output": 1 },
      "Корпус дробовика": { "Злиток сталі": 1, "Брус": 2, "_output": 1 }, 
      "Руків'я": { "Брус": 1, "_output": 2 }, 
      "Приклад": { "Брус": 1, "_output": 1 },
      "Залізний ствол": { "Залізний злиток": 1, "_output": 1 },
      "Сталевий ствол": { "Злиток сталі": 1, "_output": 1 },
      "Корпус гвинтівки": { "Злиток сталі": 1, "Брус": 2, "_output": 1 },
      "Набір для чистки зброї": { "Мідний злиток": 1, "Жир": 5, "Пружина": 2, "_output": 1 },
      "Прості запчастини зброї": { "Залізний злиток": 1, "Брус": 1, "Набір для чистки зброї": 1, "_output": 1 },
      "Звичайні запчастини зброї": { "Злиток сталі": 1, "Брус": 3, "Набір для чистки зброї": 1, "_output": 1 },
      "Якісні запчастини зброї": { "Мідний злиток": 1, "Злиток сталі": 1, "Брус": 10, "Набір для чистки зброї": 3, "_output": 1 },
      "Набої для револьвера": { "Гільза": 20, "Куля": 20, "Порох": 4, "_output": 1 },
      "Набої для карабіна": { "Гільза": 50, "Куля": 50, "Порох": 5, "_output": 1 },
      "Набої для дробовика": { "Гільза": 20, "Куля": 40, "Порох": 25, "_output": 1 },
      "Набої для варміт": { "Гільза": 50, "Куля": 50, "Порох": 1, "_output": 1 },
      "Набої для гвинтівки": { "Гільза": 20, "Куля": 20, "Порох": 25, "_output": 1 },
      "Набої для слонової гвинтівки": { "Гільза": 10, "Куля": 10, "Порох": 30, "_output": 1 },
    },
    "RECIPES": {
      "Ковбойський револьвер": { "Корпус Револьвера": 1, "Руків'я": 1, "_output": 1 },
      "Револьвер Шофілда": { "Корпус Револьвера": 1, "Залізний ствол": 1, "Руків'я": 1, "Прості запчастини зброї": 1, "_output": 1 },
      "Самовзводний револьвер": { "Корпус Револьвера": 1, "Руків'я": 1, "Залізний ствол": 1, "Прості запчастини зброї": 1, "_output": 1 },
      "Флотський револьвер": { "Корпус Револьвера": 1, "Руків'я": 1, "Сталевий ствол": 1, "Прості запчастини зброї": 1, "_output": 1 },
      "Карабін": { "Корпус карабіна": 1, "Приклад": 1, "Залізний ствол": 1, "Звичайні запчастини зброї": 1, "_output": 1 },
      "Карабін Генрі": { "Корпус карабіна": 1, "Приклад": 1, "Сталевий ствол": 1, "Якісні запчастини зброї": 1, "Мідний злиток": 1, "_output": 1 },
      "Карабін Еванса": { "Корпус карабіна": 1, "Приклад": 1, "Сталевий ствол": 1, "Якісні запчастини зброї": 1, "Прості запчастини зброї": 2, "_output": 1 },
      "Карабін Вінчестера": { "Корпус карабіна": 1, "Приклад": 1, "Сталевий ствол": 1, "Якісні запчастини зброї": 2, "_output": 1 },
      "Слонова гвинтівка": { "Корпус дробовика": 1, "Приклад": 1, "Залізний ствол": 2, "Якісні запчастини зброї": 2, "_output": 1 },
      "Гинтівка Спрінгфілда": { "Корпус гвинтівки": 1, "Приклад": 1, "Сталевий ствол": 1, "Якісні запчастини зброї": 1, "_output": 1 },
      "Болотова гвинтівка": { "Корпус гвинтівки": 1, "Приклад": 1, "Сталевий ствол": 1, "Якісні запчастини зброї": 1, "Прості запчастини зброї": 2, "_output": 1 },
      "Магазинний дробовик": { "Корпус дробовика": 1, "Приклад": 1, "Сталевий ствол": 1, "Якісні запчастини зброї": 1, "_output": 1 },
      "Двохствольна рушниця": { "Корпус дробовика": 1, "Приклад": 1, "Залізний ствол": 2, "Якісні запчастини зброї": 1, "_output": 1 },
      "Обріз": { "Корпус дробовика": 1, "Приклад": 1, "Залізний ствол": 2, "Якісні запчастини зброї": 2, "_output": 1 }
    }
  },
  "Аптека": {
    "COMPONENTS": {
      "Спирт": { "Цукор": 5, "Дріжджі": 1, "_output": 1 },
      "Дистильована вода": { "Вода": 10, "_output": 5 }
    },
    "RECIPES": {
      "Бинт": { "Тканина": 2, "Спирт": 1, "_output": 5 },
      "Аптечка": { "Бинт": 3, "Дистильована вода": 1, "Знеболювальне": 1, "_output": 1 }
    }
  }
};


const prices = {
    "Залізна руда": 1.5,
    "Вугілля": 0.5,
    "Мідна руда": 2.0,
    "Сірка": 3.0,
    "Брус": 1.0,
    "Жир": 0.8,
    "Цукор": 0.5,
    "Дріжджі": 0.2,
    "Вода": 0.1,
    "Тканина": 1.2,
    "Знеболювальне": 5.0
};


const priceListEl = document.getElementById('price-list');
const categorySelect = document.getElementById('category-select');
const categoryToggle = document.getElementById('category-toggle');
const itemSelect = document.getElementById('item-select');
const selectedItemsList = document.getElementById('selected-items-ul');
const itemModal = document.getElementById('item-modal');
const modalItemGrid = document.getElementById('modal-item-grid');
const totalCostEl = document.getElementById('total-cost');
const missingPricesEl = document.getElementById('missing-prices');
const warehouseStatusEl = document.getElementById('warehouse-status');
const directRecipeEl = document.getElementById('direct-recipe');
const deepRecipeEl = document.getElementById('deep-recipe');
const warehouseModal = document.getElementById('warehouse-modal');
const warehouseListEl = document.getElementById('warehouse-list');
const warehouseItemName = document.getElementById('warehouse-item-name');
const warehouseItemQty = document.getElementById('warehouse-item-qty');
const warehouseAddItemBtn = document.getElementById('warehouse-add-item');

const STORAGE_KEY = 'craft-calc-state';
let selectedItems = [];
let selectedItemsByCategory = {};
let warehouseItemsByCategory = {
    "Зброярня": [],
    "Аптека": []
};
let customRecipes = {
    "Зброярня": { RECIPES: {}, COMPONENTS: {} },
    "Аптека": { RECIPES: {}, COMPONENTS: {} }
};

function getIconForText(text, category) {
    const lower = text.toLowerCase();
    const weaponKeys = ['револьвер', 'карабін', 'дробовик', 'гвинтівка', 'зброяр', 'зброя', 'револьвер', 'пістолет', 'стріл'];
    for (let key of weaponKeys) {
        if (lower.includes(key)) return '⚔';
    }
    return '⛏';
}

function normalizeSelectedItems(items, category) {
    const db = CRAFT_DATABASE[category];
    return (Array.isArray(items) ? items : []).map(raw => {
        if (typeof raw === 'string') {
            return { name: raw, qty: 1 };
        }
        if (raw && typeof raw === 'object') {
            return {
                name: raw.name || raw.item || '',
                qty: Math.max(1, parseInt(raw.qty, 10) || 1)
            };
        }
        return null;
    }).filter(item => item && db && (db.RECIPES[item.name] || db.COMPONENTS[item.name]));
}

function getStoredState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        console.warn('Неможливо прочитати збережений стан', e);
        return null;
    }
}

function saveState() {
    selectedItemsByCategory[categorySelect.value] = selectedItems;
    const state = {
        category: categorySelect.value,
        selectedItemsByCategory,
        warehouseItemsByCategory,
        customRecipes
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const state = getStoredState();
    if (!state) return;

    if (state.category && CRAFT_DATABASE[state.category]) {
        categorySelect.value = state.category;
        categoryToggle.checked = state.category === 'Аптека';
    }

    if (state.selectedItemsByCategory && typeof state.selectedItemsByCategory === 'object') {
        selectedItemsByCategory = state.selectedItemsByCategory;
    }

    if (Array.isArray(state.selectedItems) && state.category) {
        selectedItemsByCategory[state.category] = state.selectedItems;
    }

    for (let cat in selectedItemsByCategory) {
        selectedItemsByCategory[cat] = normalizeSelectedItems(selectedItemsByCategory[cat], cat);
    }

    if (state.warehouseItemsByCategory && typeof state.warehouseItemsByCategory === 'object') {
        warehouseItemsByCategory = Object.assign({}, warehouseItemsByCategory, state.warehouseItemsByCategory);
    } else if (Array.isArray(state.warehouseItems)) {
        warehouseItemsByCategory[state.category || 'Зброярня'] = state.warehouseItems;
    }

    if (state.customRecipes && typeof state.customRecipes === 'object') {
        customRecipes = Object.assign(customRecipes, state.customRecipes);
    }

    mergeCustomRecipes();

    selectedItems = selectedItemsByCategory[categorySelect.value] || [];
}

function init() {
    
    let progress = 0;
    const bar = document.getElementById('loading-bar');
    const text = document.getElementById('loading-text');
    
    const messages = [
        "Підключення до архівів...",
        "Завантаження реєстру...",
        "Синхронізація цін...",
        "Розшифровка бази...",
        "Доступ дозволено."
    ];
    
    let interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress > 100) progress = 100;
        if (bar) bar.style.width = progress + '%';
        
        if (text) {
            if (progress < 25) text.textContent = messages[0];
            else if (progress < 50) text.textContent = messages[1];
            else if (progress < 75) text.textContent = messages[2];
            else if (progress < 95) text.textContent = messages[3];
            else text.textContent = messages[4];
        }
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden');
            }, 500); 
        }
    }, 150);

    populateCategories();
    categorySelect.value = getActiveCategory();
    loadState();
    updateTheme();
    renderPriceInputs(categorySelect.value);
    populateItems();
    updateSelectedItemsDisplay();
    calculate();
    
    
    categoryToggle.addEventListener('change', () => {
        categorySelect.value = getActiveCategory();
        updateTheme();
        selectedItems = selectedItemsByCategory[categorySelect.value] || [];
        renderPriceInputs(categorySelect.value);
        populateItems();
        updateSelectedItemsDisplay();
        saveState();
        calculate();
    });
    itemSelect.addEventListener('change', () => {
        updateSelectedItemsDisplay();
        calculate();
    });

    document.getElementById('open-item-modal').addEventListener('click', openItemModal);
    document.getElementById('close-modal').addEventListener('click', closeItemModal);
    document.getElementById('open-warehouse-modal').addEventListener('click', openWarehouseModal);
    document.getElementById('close-warehouse-modal').addEventListener('click', closeWarehouseModal);
    warehouseAddItemBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addWarehouseItem();
    });

}

function updateTheme() {
    const cat = categorySelect.value;
    if (cat === "Аптека") {
        document.body.className = "theme-pharmacy";
    } else {
        document.body.className = "theme-weapon";
    }

    document.getElementById('label-weapon').classList.toggle('active', cat !== 'Аптека');
    document.getElementById('label-pharmacy').classList.toggle('active', cat === 'Аптека');
}

function getActiveCategory() {
    return categoryToggle.checked ? "Аптека" : "Зброярня";
}

function updateSelectedItemsDisplay() {
    selectedItemsList.innerHTML = '';
    if (selectedItems.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'немає';
        selectedItemsList.appendChild(li);
        return;
    }

    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'selected-item-row';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;
        nameSpan.className = 'selected-item-name';

        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.min = '1';
        qtyInput.value = item.qty;
        qtyInput.className = 'custom-input selected-item-qty';
        qtyInput.addEventListener('input', (event) => {
            const newQty = Math.max(1, parseInt(event.target.value, 10) || 1);
            item.qty = newQty;
            event.target.value = newQty;
            selectedItemsByCategory[categorySelect.value] = selectedItems;
            saveState();
            calculate();
        });

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'custom-btn selected-item-remove';
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', () => {
            selectedItems = selectedItems.filter(sel => sel.name !== item.name);
            selectedItemsByCategory[categorySelect.value] = selectedItems;
            saveState();
            updateSelectedItemsDisplay();
            renderItemModalButtons();
            calculate();
        });

        li.appendChild(nameSpan);
        li.appendChild(qtyInput);
        li.appendChild(removeBtn);
        selectedItemsList.appendChild(li);
    });
}

function openItemModal() {
    renderItemModalButtons();
    itemModal.classList.remove('hidden');
}

function closeItemModal() {
    itemModal.classList.add('hidden');
}

function openWarehouseModal() {
    renderWarehouseModal();
    warehouseModal.classList.remove('hidden');
}

function closeWarehouseModal() {
    warehouseModal.classList.add('hidden');
}

function renderWarehouseModal() {
    renderWarehouseItems();
}

function renderWarehouseItems() {
    warehouseListEl.innerHTML = '';
    const category = categorySelect.value;
    const categoryWarehouse = warehouseItemsByCategory[category] || [];

    if (categoryWarehouse.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Список порожній. Додайте перший товар.';
        li.className = 'warehouse-empty';
        warehouseListEl.appendChild(li);
        return;
    }

    categoryWarehouse.forEach((item, index) => {
        const li = document.createElement('li');

        const itemText = document.createElement('span');
        itemText.textContent = `${item.name} — ${item.qty}`;

        const controlWrap = document.createElement('span');
        controlWrap.className = 'warehouse-item-actions';

        const btnAdd = document.createElement('button');
        btnAdd.type = 'button';
        btnAdd.className = 'custom-btn warehouse-action-btn';
        // btnAdd.textContent = 'Додати';

        const btnRemove = document.createElement('button');
        btnRemove.type = 'button';
        btnRemove.className = 'custom-btn warehouse-action-btn danger';
        btnRemove.textContent = 'Видалити';

        const btnEdit = document.createElement('button');
        btnEdit.type = 'button';
        btnEdit.className = 'custom-btn warehouse-action-btn';
        btnEdit.textContent = 'Редагувати';

        controlWrap.appendChild(btnAdd);
        controlWrap.appendChild(btnEdit);
        controlWrap.appendChild(btnRemove);

        li.appendChild(itemText);
        li.appendChild(controlWrap);

        warehouseListEl.appendChild(li);

        const db = CRAFT_DATABASE[category];
        const available = db && (db.RECIPES[item.name] || db.COMPONENTS[item.name]);

        if (!available || selectedItems.some(sel => sel.name === item.name)) {
            btnAdd.disabled = true;
        }

        btnAdd.addEventListener('click', () => {
            if (!selectedItems.some(sel => sel.name === item.name) && available) {
                selectedItems.push({ name: item.name, qty: 1 });

                selectedItemsByCategory[category] = selectedItems;

                saveState();
                updateSelectedItemsDisplay();
                renderItemModalButtons();
                calculate();
            }
        });

        btnRemove.addEventListener('click', () => {
            categoryWarehouse.splice(index, 1);

            warehouseItemsByCategory[category] = categoryWarehouse;

            saveState();
            renderWarehouseItems();
            calculate();
        });

        // =========================
        // РЕДАГУВАННЯ
        // =========================

        btnEdit.addEventListener('click', () => {

            li.innerHTML = '';
            li.classList.add('warehouse-editing');

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.value = item.name;
            nameInput.className = 'custom-input';

            const qtyInput = document.createElement('input');
            qtyInput.type = 'number';
            qtyInput.min = '1';
            qtyInput.value = item.qty;
            qtyInput.className = 'custom-input';

            const saveBtn = document.createElement('button');
            saveBtn.className = 'custom-btn';
            saveBtn.textContent = 'Зберегти';

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'custom-btn danger';
            cancelBtn.textContent = 'Скасувати';

            li.appendChild(nameInput);
            li.appendChild(qtyInput);
            li.appendChild(saveBtn);
            li.appendChild(cancelBtn);

            saveBtn.addEventListener('click', () => {

                const newName = nameInput.value.trim();
                const newQty = Math.max(1, parseInt(qtyInput.value, 10) || 1);

                if (!newName) {
                    alert('Введіть назву');
                    return;
                }

                categoryWarehouse[index] = {
                    name: newName,
                    qty: newQty
                };

                warehouseItemsByCategory[category] = categoryWarehouse;

                saveState();
                renderWarehouseItems();
                calculate();
            });

            cancelBtn.addEventListener('click', () => {
                renderWarehouseItems();
            });
        });
    });
}

function addWarehouseItem() {
    const category = categorySelect.value;
    const name = warehouseItemName.value.trim();
    const qty = parseInt(warehouseItemQty.value, 10) || 1;
    if (!name) return;
    warehouseItemsByCategory[category] = warehouseItemsByCategory[category] || [];
    warehouseItemsByCategory[category].push({ name, qty });
    warehouseItemName.value = '';
    warehouseItemQty.value = '1';
    saveState();
    renderWarehouseItems();
    calculate();
}

function addCustomRecipe() {
    const name = newRecipeName.value.trim();
    const type = newRecipeType.value;
    const ingredientsText = newRecipeIngredients.value.trim();
    const output = parseInt(newRecipeOutput.value, 10) || 1;
    if (!name || !ingredientsText) return;

    const recipe = {};
    const parts = ingredientsText.split(',');
    parts.forEach(part => {
        const [key, value] = part.split(':').map(str => str.trim());
        if (key) {
            recipe[key] = parseFloat(value) || 1;
        }
    });
    recipe._output = output;

    customRecipes[categorySelect.value] = customRecipes[categorySelect.value] || { RECIPES: {}, COMPONENTS: {} };
    customRecipes[categorySelect.value][type][name] = recipe;
    mergeCustomRecipes();
    populateItems();
    renderItemModalButtons();
    saveState();

    newRecipeName.value = '';
    newRecipeIngredients.value = '';
    newRecipeOutput.value = '1';
}

function mergeCustomRecipes() {
    for (let cat in customRecipes) {
        if (!CRAFT_DATABASE[cat]) continue;
        CRAFT_DATABASE[cat].RECIPES = Object.assign({}, CRAFT_DATABASE[cat].RECIPES, customRecipes[cat].RECIPES);
        CRAFT_DATABASE[cat].COMPONENTS = Object.assign({}, CRAFT_DATABASE[cat].COMPONENTS, customRecipes[cat].COMPONENTS);
    }
}

function renderItemModalButtons() {
    const cat = categorySelect.value;
    modalItemGrid.innerHTML = '';
    const db = CRAFT_DATABASE[cat];
    if (!db) return;

    const items = [...Object.keys(db.RECIPES), ...Object.keys(db.COMPONENTS)].sort((a, b) => a.localeCompare(b, 'uk'));
    items.forEach(item => {
        const isSelected = selectedItems.some(sel => sel.name === item);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'modal-item-btn' + (isSelected ? ' selected' : '');
        button.innerHTML = `
            <span class="modal-item-icon">${getIconForText(item, cat)}</span>
            <span>${item}</span>
            <span class="modal-item-action">${isSelected ? 'Зняти' : 'Вибрати'}</span>
        `;
        button.addEventListener('click', () => toggleModalItem(item));
        modalItemGrid.appendChild(button);
    });
}

function toggleModalItem(itemName) {
    if (selectedItems.some(item => item.name === itemName)) {
        selectedItems = selectedItems.filter(item => item.name !== itemName);
    } else {
        selectedItems.push({ name: itemName, qty: 1 });
    }
    selectedItemsByCategory[categorySelect.value] = selectedItems;
    saveState();
    updateSelectedItemsDisplay();
    renderItemModalButtons();
    calculate();
}

function renderPriceInputs(category) {
    const cat = category || categorySelect.value;
    const db = CRAFT_DATABASE[cat];
    if (!db) return;

    let baseMaterials = new Set();
    const allRecipes = {...db.COMPONENTS, ...db.RECIPES};

    for (let itemName in allRecipes) {
        let recipe = allRecipes[itemName];
        for (let ing in recipe) {
            if (ing === "_output") continue;
            if (!allRecipes[ing]) {
                baseMaterials.add(ing);
            }
        }
    }

    let sortedMats = Array.from(baseMaterials).sort((a, b) => a.localeCompare(b, 'uk'));
    priceListEl.innerHTML = '';

    sortedMats.forEach(mat => {
        if (!prices.hasOwnProperty(mat)) prices[mat] = 0;

        const div = document.createElement('div');
        div.className = 'price-item';
        div.id = 'price-item-' + mat.replace(/\s+/g, '-');
        div.innerHTML = `
            <span>${mat}</span>
            <input type="number" class="price-input" data-mat="${mat}" value="${prices[mat]}" min="0" step="0.01">
        `;
        priceListEl.appendChild(div);
    });

    document.querySelectorAll('.price-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const mat = e.target.getAttribute('data-mat');
            const val = parseFloat(e.target.value) || 0;
            prices[mat] = val;
            calculate();
        });
    });
}

function populateCategories() {
    categorySelect.innerHTML = '';
    for (let cat in CRAFT_DATABASE) {
        let opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        categorySelect.appendChild(opt);
    }
}

function populateItems() {
    const cat = categorySelect.value;
    itemSelect.innerHTML = '';
    if (!CRAFT_DATABASE[cat]) return;
    
    const db = CRAFT_DATABASE[cat];
    const items = [...Object.keys(db.RECIPES), ...Object.keys(db.COMPONENTS)].sort((a, b) => a.localeCompare(b, 'uk'));
    
    items.forEach(item => {
        let opt = document.createElement('option');
        opt.value = item;
        opt.textContent = item;
        itemSelect.appendChild(opt);
    });

    updateSelectedItemsDisplay();
}

function calculate() {
    const sheetName = categorySelect.value;
    const quantity = 1;

    if (selectedItems.length === 0) {
        totalCostEl.textContent = '$0.00';
        missingPricesEl.textContent = '';
        warehouseStatusEl.textContent = '';
        directRecipeEl.textContent = '-';
        deepRecipeEl.innerHTML = '';
        return;
    }

    directRecipeEl.textContent = getDirectRecipeList(sheetName, selectedItems, 1);

    let missing = [];
    let totalCost = 0;
    selectedItems.forEach(item => {
        totalCost += getDeepCost(sheetName, item.name, prices, missing) * item.qty;
    });

    
    document.querySelectorAll('.price-item').forEach(el => el.classList.remove('error-highlight'));

    if (missing.length > 0) {
        let uniqueMissing = [...new Set(missing)];
        totalCostEl.textContent = '---';
        missingPricesEl.textContent = "⚠️ Немає цін: " + uniqueMissing.join(", ");
        
        
        uniqueMissing.forEach(m => {
            let el = document.getElementById('price-item-' + m.replace(/\s+/g, '-'));
            if (el) el.classList.add('error-highlight');
        });
    } else {
        totalCostEl.textContent = totalCost.toFixed(2);
        missingPricesEl.textContent = '';
    }

    const deepData = getDeepFlatRecipeData(sheetName, selectedItems, 1);
    renderDeepRecipe(deepData);

    const warehouseAvailability = getWarehouseAvailability(sheetName, selectedItems);
    warehouseStatusEl.textContent = warehouseAvailability.message;
    warehouseStatusEl.classList.toggle('warehouse-warning', !warehouseAvailability.ok);
}


function getDirectRecipeList(sheetName, items, qty) {
    const db = CRAFT_DATABASE[sheetName];
    let lines = [];

    items.forEach(item => {
        const itemName = item.name || item;
        const itemQty = item.qty || 1;
        const recipe = db.RECIPES[itemName] || db.COMPONENTS[itemName];
        if (!recipe) {
            lines.push(`${itemName}: рецепт не знайдено`);
            return;
        }

        const totalQty = itemQty * qty;
        let parts = [];
        for (let ing in recipe) {
            if (ing === "_output") continue;
            parts.push(`${ing}: ${recipe[ing] * totalQty}`);
        }
        lines.push(`${itemName} ×${totalQty} → ${parts.join(" | ")}`);
    });

    return lines.join("\n");
}

function getDeepFlatRecipeData(sheetName, items, qty) {
    const db = CRAFT_DATABASE[sheetName];
    let totals = {};
    
    function collect(itemName, multiplier, visited = new Set()) {
        if (visited.has(itemName)) {
            return;
        }
        visited.add(itemName);

        const recipe = db.RECIPES[itemName] || db.COMPONENTS[itemName];
        if (recipe) {
            let out = recipe["_output"] || 1;
            for (let ing in recipe) {
                if (ing === "_output") continue;
                collect(ing, (recipe[ing] * multiplier) / out, new Set(visited));
            }
        } else {
            totals[itemName] = (totals[itemName] || 0) + multiplier;
        }
    }
    
    items.forEach(item => {
        const itemName = item.name || item;
        const itemQty = item.qty || 1;
        collect(itemName, itemQty * qty);
    });
    return totals;
}

function buildWarehouseMap(sheetName) {
    const categoryWarehouse = warehouseItemsByCategory[sheetName] || [];
    return categoryWarehouse.reduce((map, item) => {
        if (!item || !item.name) return map;
        map[item.name] = (map[item.name] || 0) + (parseInt(item.qty, 10) || 0);
        return map;
    }, {});
}

function getWarehouseAvailability(sheetName, items) {
    const db = CRAFT_DATABASE[sheetName];
    const inventory = buildWarehouseMap(sheetName);
    const missing = [];

    items.forEach(item => {
        const itemName = item.name || item;
        const itemQty = item.qty || 1;
        const recipe = db.RECIPES[itemName] || db.COMPONENTS[itemName];
        if (!recipe) return;

        for (let ing in recipe) {
            if (ing === '_output') continue;
            const required = recipe[ing] * itemQty;
            const available = inventory[ing] || 0;
            if (available < required) {
                missing.push(`${ing}: потрібно ${required}, на складі ${available}`);
            }
        }
    });

    if (missing.length === 0) {
        return { ok: true, message: 'На складі є всі необхідні інгредієнти.' };
    }

    return { ok: false, message: 'Недостатньо матеріалів: ' + missing.join('; ') };
}

function renderDeepRecipe(totals) {
    deepRecipeEl.innerHTML = '';
    const inventory = buildWarehouseMap(categorySelect.value);
    let sortedResources = Object.keys(totals).sort((a, b) => a.localeCompare(b, 'uk'));
    
    sortedResources.forEach(res => {
        let amount = totals[res];
        let formattedAmount = amount % 1 === 0 ? amount : amount.toFixed(2);
        let li = document.createElement('li');
        
        let price = prices[res] || 0;
        let lineTotal = price * amount;
        const available = inventory[res] || 0;
        const isEnough = available >= amount;
        const availabilityText = available > 0 ? `на складі ${available}` : 'на складі немає';
        
        if (prices[res] > 0 || prices[res] === 0 && prices.hasOwnProperty(res)) {
            li.innerHTML = `
                <span class="res-name">• ${res}: ${formattedAmount} шт.</span>
                <span class="res-cost">$${lineTotal.toFixed(2)}</span>
                <span class="res-availability ${isEnough ? 'res-available' : 'res-unavailable'}">${isEnough ? 'достатньо' : 'недостатньо'} (${availabilityText})</span>
            `;
        } else {
            li.innerHTML = `
                <span class="res-name">• ${res}: ${formattedAmount} шт.</span>
                <span class="res-missing">Ціна не вказана ⚠️</span>
                <span class="res-availability ${isEnough ? 'res-available' : 'res-unavailable'}">${isEnough ? 'достатньо' : 'недостатньо'} (${availabilityText})</span>
            `;
        }
        deepRecipeEl.appendChild(li);
    });
}

function getDeepCost(sheetName, name, pricesObj, missing, visited = new Set()) {
    if (visited.has(name)) {
        return 0;
    }
    visited.add(name);

    if (pricesObj.hasOwnProperty(name) && pricesObj[name] > 0) return pricesObj[name];
    if (pricesObj.hasOwnProperty(name) && pricesObj[name] === 0) return 0; 
    
    const db = CRAFT_DATABASE[sheetName];
    const recipe = db.RECIPES[name] || db.COMPONENTS[name];
    
    if (recipe) {
        let sum = 0;
        let out = recipe["_output"] || 1;
        for (let ing in recipe) {
            if (ing === "_output") continue;
            sum += getDeepCost(sheetName, ing, pricesObj, missing, new Set(visited)) * recipe[ing];
        }
        return sum / out;
    }
    if (!missing.includes(name)) {
        missing.push(name);
    }
    return 0;
}


document.addEventListener('DOMContentLoaded', init);
