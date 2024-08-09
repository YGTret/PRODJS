// Создаем объекты для поваров с их специализациями
const chefVictor = { name: 'Виктор', specialization: 'Пицца' };
const chefOlga = { name: 'Ольга', specialization: 'Суши' };
const chefDmitry = { name: 'Дмитрий', specialization: 'Десерты' };

// Создаем коллекцию для хранения блюд и их поваров
const dishToChefMap = new Map();

// Функция для добавления блюда и повара в коллекцию
function assignDishToChef(dish, chef) {
  dishToChefMap.set(dish, chef);
}

// Добавляем блюда и их поваров
assignDishToChef('Пицца Маргарита', chefVictor);
assignDishToChef('Пицца Пепперони', chefVictor);
assignDishToChef('Суши Филадельфия', chefOlga);
assignDishToChef('Суши Калифорния', chefOlga);
assignDishToChef('Тирамису', chefDmitry);
assignDishToChef('Чизкейк', chefDmitry);

// Создаем коллекцию для хранения заказов каждого клиента
const clientOrdersMap = new Map();

// Функция для добавления заказа клиента
function placeOrder(client, dishes) {
  clientOrdersMap.set(client, dishes);
}

// Добавляем заказы
const clientAlexey = { name: 'Алексей' };
const clientMaria = { name: 'Мария' };
const clientIrina = { name: 'Ирина' };

placeOrder(clientAlexey, ['Пицца Пепперони', 'Тирамису']);
placeOrder(clientMaria, ['Суши Калифорния', 'Пицца Маргарита']);
placeOrder(clientIrina, ['Чизкейк']);

// Функция для получения информации о блюде и его поваре
function getChefForDish(dish) {
  const chef = dishToChefMap.get(dish);
  return chef ? `${chef.name} (Специализация: ${chef.specialization})` : 'Повар не найден';
}

// Функция для получения заказов клиента
function getOrdersForClient(client) {
  return clientOrdersMap.get(client) || 'Заказы не найдены';
}

// Получаем и выводим информацию о блюде и его поваре
console.log(`Повар, готовящий Пиццу Маргарита: ${getChefForDish('Пицца Маргарита')}`);
console.log(`Повар, готовящий Пиццу Пепперони: ${getChefForDish('Пицца Пепперони')}`);
console.log(`Повар, готовящий Суши Филадельфия: ${getChefForDish('Суши Филадельфия')}`);
console.log(`Повар, готовящий Суши Калифорния: ${getChefForDish('Суши Калифорния')}`);
console.log(`Повар, готовящий Тирамису: ${getChefForDish('Тирамису')}`);
console.log(`Повар, готовящий Чизкейк: ${getChefForDish('Чизкейк')}`);

// Получаем и выводим заказы клиентов
console.log(`Заказы клиента Алексей: ${getOrdersForClient(clientAlexey).join(', ')}`);
console.log(`Заказы клиента Мария: ${getOrdersForClient(clientMaria).join(', ')}`);
console.log(`Заказы клиента Ирина: ${getOrdersForClient(clientIrina).join(', ')}`);
