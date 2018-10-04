var phrases = [
  '"No, this is Patrick!"',
  'Sit up straight. Relax your shoulders. That\'s it.',
  'A cookie cake can be a cookie if you\'re hungry enough.',
  'A circle, cut into triangles, placed in a square box. Pizza.',
  'You\'re doing fantastic today, just so you know.',
  'Humans are just three-pound brains piloting a slab of meat.',
  'You can do the thing! We believe in you!',
  'You can count on yourself! No, seriously. Just do it on your fingers.',
  'The best investment you have is yourself.',
  'Pie? 7/10. Ice cream? 8/10. You? 10/10.',
  'Want to see a star up close? Look down. You. You\'re the star.',
  'Sometimes things just don\'t work out, but that\'s okay.',
  'Poultry farmers are just chicken tenders.'
]

function newPhrase() {
  var num = Math.floor(Math.random() * (phrases.length));
  document.getElementById('quote').innerHTML = phrases[num];
}

window.onload = newPhrase;
