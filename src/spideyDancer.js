var SpideyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="spideyDancer"></span>');
  // var SpideyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return SpideyDancer;
  this.$node.removeClass('dancer').addClass('lisaSimpson');
  this.$node.attr('src', 'img/simpsonsGiphy.gif');
  
};

SpideyDancer.prototype = Object.create(Dancer.prototype);
SpideyDancer.prototype.constructor = SpideyDancer;

SpideyDancer.prototype.oldStep = Dancer.prototype.step;

SpideyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

