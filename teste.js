function add(a, b, c) {
    return a + b + c;
  }

  QUnit.test("add", function (){
    QUnit.test('three numbers', function(assert) {
        assert.equal(add(1, 2, 4), 10);
      });
});

QUnit.test("NotOk", function (assert){
    assert.notOk(true, "Teste NotOk");
});

QUnit.test("Equal", function (assert){
   var a = 1;
   var b = "2";

   assert.equal(a,b, "Teste =");
});

QUnit.test("Pergunta", function (assert){
    var a = 950;
    var b = 50;

    //Eu e meu amigo temos R$1000 Juntos, mas meu amigo tem R$950 a mais que eu, quanto eu tenho?
    assert.equal((a, b), 25);
 });

QUnit.test("Vetores", function (assert){
    var v1 = ['um', 'dois', 'três'];
    var v2 = ['um', 'dois', 'três'];

    assert.notDeepEqual(v1, v2, "Teste de igualdade dos vetores");
});