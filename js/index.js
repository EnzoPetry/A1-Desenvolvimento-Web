$(document).ready(function ()
{
	$(".thumb img").on("mouseover", function ()
	{
		$(this).css("filter", "grayscale(0%)").css("cursor", "pointer")
	})

	$(".thumb img").on("mouseout", function ()
	{
		$(this).css("filter", "grayscale(90%)")
	})

	$(".thumb img").on("click", function ()
	{
		$("#modal").modal("toggle")
		$("#modal-imagem").attr("src", $(this).attr("src"))
	})

	$("#telefone").off().on("keyup", function ()
	{
		var telefoneAtual = IMask(
			document.getElementById("telefone"), {
			mask: "(00) 00000-0000"
		})

		$(this).val(telefoneAtual.value)
	})

	$("#enviar-form").off().on("click", function ()
	{
		var formData = $("#form-contato").serialize()

		// TODO: enviar o form para o backend
		console.log(formData)
	})
})
