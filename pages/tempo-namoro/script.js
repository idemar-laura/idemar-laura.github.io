function calcularDiferencaTempo(dataReferencia) {
    const dataAtual = new Date();

    // Calcula a diferença de tempo em milissegundos
    const diferencaTempo = dataAtual.getTime() - dataReferencia.getTime();
    // console.log(diferencaTempo);

    // Calcula anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

    return { anos, meses, dias, horas, minutos, segundos };
    
}

function atualizarContagemTempoNamoro(dataReferencia, intervalo, id, desc) {
    const tempoDecorridoElemento = document.getElementById(id);

    setInterval(function () {
        const diferenca = calcularDiferencaTempo(dataReferencia);
        // tempoDecorridoElemento.innerHTML = `Tempo decorrido desde ${desc}:<br>
    //   ${diferenca.anos} ${diferenca.anos <= 1 ? "ano" : "anos"}, ${diferenca.meses} meses, ${diferenca.dias} dias, ${diferenca.horas} horas, ${diferenca.minutos} minutos e ${diferenca.segundos} segundos.`;
    }, intervalo);
}

const dataReferenciaNamoro = new Date('2023-10-07T17:20');
const dataReferenciaSaida = new Date('2023-01-07T19:00');
const intervaloAtualizacao = 1000; // 1 segundo

atualizarContagemTempoNamoro(dataReferenciaSaida, intervaloAtualizacao, "tempoDecorridoSaida", "o dia mais feliz da minha vida");
atualizarContagemTempoNamoro(dataReferenciaNamoro, intervaloAtualizacao, "tempoDecorridoNamoro", "o começo do nosso namoro oficial");

var namoro = false;
document.body.addEventListener("click", (el) => {
    if (el.target.id == 'btn-tempo') {
        namoro = !namoro;
    }
    
    if(namoro){
        // document.getElementById('tempoDecorridoNamoro').style.display = 'block';
        // document.getElementById('tempoDecorridoSaida').style.display = 'none';
        document.getElementById('tempoDecorridoNamoroF').style.display = 'block';
        document.getElementById('tempoDecorridoSaidaF').style.display = 'none';
        document.getElementById('btn-tempo').innerHTML = 'Contagem de tempo de namoro'
    } else {
        // document.getElementById('tempoDecorridoNamoro').style.display = 'none';
        // document.getElementById('tempoDecorridoSaida').style.display = 'block';
        document.getElementById('tempoDecorridoNamoroF').style.display = 'none';
        document.getElementById('tempoDecorridoSaidaF').style.display = 'block';
        document.getElementById('btn-tempo').innerHTML = 'Contagem de tempo do melhor dia da minha vida'
    
    }
});











console.clear();


function CountdownTracker(label, value){

  var el = document.createElement('span');

  el.className = 'flip-clock__piece';
  el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' + 
    '<span class="flip-clock__slot">' + label + '</span>';

  this.el = el;

  var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

  this.update = function(val){
    val = ( '0' + val ).slice(-2);
    if ( val !== this.currentValue ) {
      
      if ( this.currentValue >= 0 ) {
        back.setAttribute('data-value', this.currentValue);
        bottom.setAttribute('data-value', this.currentValue);
      }
      this.currentValue = val;
      top.innerText = this.currentValue;
      backBottom.setAttribute('data-value', this.currentValue);

      this.el.classList.remove('flip');
      void this.el.offsetWidth;
      this.el.classList.add('flip');
    }
  }
  
  this.update(value);
}

// Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

function getTimeRemaining(endtime) {
  var t = Date.parse(new Date()) -  Date.parse(endtime);
  return {
    'Total': t,
    'Anos': Math.floor(t / (1000 * 60 * 60 * 24 * 365)),
    'Meses': Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
    'Dias': Math.floor(t / (1000 * 60 * 60 * 24)),
    'Horas': Math.floor((t / (1000 * 60 * 60)) % 24),
    'Minutos': Math.floor((t / 1000 / 60) % 60),
    'Segundos': Math.floor((t / 1000) % 60)
  };
}

function Clock(countdown) {
  
  var updateFn = getTimeRemaining;

  this.el = document.createElement('div');
  this.el.className = 'flip-clock';

  var trackers = {},
      t = updateFn(countdown),
      key, timeinterval;

  for ( key in t ){
    if ( key === 'Total' ) { continue; }
    trackers[key] = new CountdownTracker(key, t[key]);
    this.el.appendChild(trackers[key].el);
  }

  var i = 0;
  function updateClock() {
    timeinterval = requestAnimationFrame(updateClock);
    
    // throttle so it's not constantly updating the time.
    if ( i++ % 10 ) { return; }
    
    var t = updateFn(countdown);
    if ( t.Total < 0 ) {
      cancelAnimationFrame(timeinterval);
      for ( key in trackers ){
        trackers[key].update( 0 );
      }
      callback();
      return;
    }
    
    for ( key in trackers ){
      trackers[key].update( t[key] );
    }
  }

  setTimeout(updateClock,500);
}

var deadline = new Date(Date.parse(dataReferenciaNamoro) + 12 * 24 * 60 * 60 * 1000);
var c = new Clock(deadline, function(){ alert('countdown complete') });
document.getElementById('tempoDecorridoNamoroF').appendChild(c.el);

var clock = new Clock(new Date(Date.parse(dataReferenciaSaida) + 12 * 24 * 60 * 60 * 1000));
document.getElementById('tempoDecorridoSaidaF').appendChild(clock.el);

