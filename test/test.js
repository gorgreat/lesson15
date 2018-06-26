describe('Функция sum должна возвращать тип данных true', function () {
  it('sum должно быть true', function () {
    assert.typeOf(sum(), 'boolean');
  });
});


describe('Проверка sum должно быть равно 5', function () {
  it('Изначально общая сумма равна 5', function () {
    assert.equal(sum(), 0);
  });
});

describe('Узнать, что нам вернет функция each', function () {
  it('each', function () {
    assert.typeOf(each(arr, myFunc), 'array');
  });
});


describe('Проверка на свойство length', function () {
  it('each', function () {
    assert.equal(each(arr, myFunc).length, 3);
  });
});
