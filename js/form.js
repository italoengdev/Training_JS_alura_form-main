//função anonima
titulo.addEventListener('click', function () {
  alert('clica não')
})

var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  //Extraindo informacoes do paciente do form
  var paciente = obtemPacienteDoFormulario(form)
  console.log(paciente)
  var erros = validaPaciente(paciente)
  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    return
  }
  //cria a tr e a td do paciente
  adicionaPacienteNaTabela(paciente)
  //adicionando o paciente na tab ela.

  form.reset()
  var mensagensErro = document.querySelector('#mensagens-erro')
  mensagensErro.innerHTML = ''
})

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente
}

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

  return pacienteTr
}

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente)
  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)
}

function montaTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro')
  ul.innerHTML = ''

  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}
