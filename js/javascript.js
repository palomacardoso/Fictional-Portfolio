function validacaocontato ()
{
	if (document.form.nome.value == "" || document.form.telefone.value == "" || document.form.mensagem.value == "")
	{
		alert('Por favor, preencha todos os campos');
		document.form.nome.focus();
		document.form.telefone.focus();
		document.form.mensagem.focus();
		return false;
	}
	
	if (document.form.email.value == "" || document.form.email.value.indexOf('@') == -1 || document.form.email.value.indexOf('.') == -1)
	{
		alert('Por favor, digite um endereço de e-mail válido');
		document.form.email.focus();
		return false;
	}
}

function validacaoOrcamento ()
{
	if (document.formorcamento.nome.value == "" || document.formorcamento.telefone.value == "" || document.formorcamento.atuacao.value == "" || document.formorcamento.publico.value == "" || document.formorcamento.servicos.value == "" || document.formorcamento.observacoes.value == "")
	{
		alert('Por favor, preencha todos os campos');
		document.formorcamento.nome.focus();
		document.formorcamento.telefone.focus();
		document.formorcamento.atuacao.focus();
		document.formorcamento.publico.focus();
		document.formorcamento.servicos.focus();
		document.formorcamento.observacoes.focus();
		return false;
	}
	
	if (document.formorcamento.email.value == "" || document.formorcamento.email.value.indexOf('@') == -1 || document.formorcamento.email.value.indexOf('.') == -1)
	{
		alert('Por favor, digite um endereço de e-mail válido');
		document.formorcamento.email.focus();
		return false;
	}
}

var intervalo = 3000;

function slide1()
{

	document.getElementById("banner").src = "img/banner2.jpg";
	setTimeout("slide2()",intervalo);
}

function slide2()
{
	document.getElementById("banner").src = "img/banner1.jpg";
	setTimeout("slide3()",intervalo);
}

function slide3()
{
	document.getElementById("banner").src = "img/banner2.jpg";
	setTimeout("slide1()",intervalo);
}