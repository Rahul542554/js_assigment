function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr.toFixed(2);+ ' \xB0F.';
    console.log(message);
}


cToF(12);
