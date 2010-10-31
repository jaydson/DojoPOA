$(document).ready(function(){
	
	module("DojoPOA");
	test("Requirementos Basicos", function() {
		expect(3);
		ok( DojoPOA, "DojoPOA" );
		ok( jQuery, "jQuery" );
		ok( $, "$" );
	});

	
	module("DojoPOA.util");	
	test("strrev()",function(){
		expect(6);
		equals( DojoPOA.util.strrev(1), false, "Passando Numero");
		var arr = new Array();
		equals( DojoPOA.util.strrev(arr), false, "Passando Array");
		equals( DojoPOA.util.strrev(), false, "Sem passar valor algum");
		equals( DojoPOA.util.strrev("teste"), "etset", "Deve retornar a string 'teste' ao contrário('etset')");
		equals( DojoPOA.util.strrev("teste denovo"), "ovoned etset", "Teste com espaço. Deve retornar a string 'teste denovo' ao contrário('ovoned etset')");
		equals( DojoPOA.util.strrev("teste abração"), "oãçarba etset", "Teste com caracteres especiais. Deve retornar a string 'teste abração' ao contrário('oãçarba etset')");
	});
	
	test("trim()",function(){
		equals( DojoPOA.util.trim("    Bem vindo ao Dojo POA   "), "Bem vindo ao Dojo POA", "Testando frase com espaços a esquerda e direita");
		equals( DojoPOA.util.trim("    Bem vindo ao Dojo POA"), "Bem vindo ao Dojo POA", "Testando frase com espaços a esquerda");
		equals( DojoPOA.util.trim("Bem vindo ao Dojo POA   "), "Bem vindo ao Dojo POA", "Testando frase com espaços a direita");
	});
	
	module("DojoPOA.math");	
	test("isPositive()",function(){
		equals( DojoPOA.math.isPositive(1), true, "Passando Numero inteiro positivo");
		equals( DojoPOA.math.isPositive(-1), false, "Passando Numero inteiro negativo");
		equals( DojoPOA.math.isPositive("a"), false, "Passando uma String");
	});
	
	test("getDivsors()",function(){
		var array1 = [1,2,5],
		array2 = [1],
		array3 = [1, 2, 3, 4, 6];
		same(array1, DojoPOA.math.getDivsors(10), "Precisa retornar um Array com os divisores de 10");
		same(array2, DojoPOA.math.getDivsors(2), "Precisa retornar um Array com os divisores de 2");
		same(array3, DojoPOA.math.getDivsors(12), "Precisa retornar um Array com os divisores de 10");
	});
	
	test("isPerfectNumber()",function(){
		equals(DojoPOA.math.isPerfectNumber(6), true, "Passando 6, deve retornar true");
		equals(DojoPOA.math.isPerfectNumber(28), true, "Passando 28, deve retornar true");
		equals(DojoPOA.math.isPerfectNumber(1), false, "Passando 1, deve retornar false");
		equals(DojoPOA.math.isPerfectNumber(-1), false, "Passando inteiro negativo, deve retornar false");
		
		var perfectNumbers = [6,28,496,8128,33550336];
		for(var i=0;i<perfectNumbers.length;i++){
			equals(DojoPOA.math.isPerfectNumber(perfectNumbers[i]), true, "Testando com " + perfectNumbers[i]);
		}
	});
	
});