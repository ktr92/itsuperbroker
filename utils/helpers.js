
// найти в каком-либо из свойств fields в объекте obj вхождения по запросу query
export const helperFindby = function (obj, fields, query) {
  return fields.some(item => obj[item].toLowerCase().includes(query))
}

// из массива объектов data получаем объект с нужными ключами key и значениями value
export const helperSetmodel = function (data, key, value) {
  return data.reduce((obj, item) => ({ ...obj, [item[key]]: item[value] }), {})
}
