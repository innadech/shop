const attributes = {
  'Тип ОЗУ': 'DDR4',
  'Тип накопителя': 'SSD',
  Процессор: 'AMD',
  'Количество ядер': '4',
  'Объем накопителя': '240Gb',
  'Блок питания': '500W',
  'Объем ОЗУ': '8Gb',
  'Частота процессора': '3.8Ghz',
  'Частота ОЗУ': '3200Mhz',
  'Материнская плата': 'Asus',
}

for (const key in attributes) {
  console.log(key)
  console.log(attributes[key])
}
