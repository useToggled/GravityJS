var Gravity = (function() {
  var gravity = {
    transition: function(config) {
      var element = document.querySelector(config.element);
      var startState = config.from;
      var endState = config.to;
      var easingFunction = this.easingFunctions[config.easing] || this.easingFunctions['ease-out'];
      var duration = config.duration || 1000;

      var startTime = performance.now();

      var animate = function(timestamp) {
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);

        var interpolatedState = {};

        for (var prop in startState) {
          if (endState.hasOwnProperty(prop)) {
            interpolatedState[prop] = startState[prop] + (endState[prop] - startState[prop]) * easingFunction(progress);
          }
        }

        for (var styleProp in interpolatedState) {
          element.style[styleProp] = interpolatedState[styleProp] + (styleProp === 'opacity' ? '' : 'px');
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else if (config.onComplete) {
          config.onComplete();
        }
      };

      requestAnimationFrame(animate);
    },

    easingFunctions: {
      'linear': function(t) { return t; },
      'ease-in': function(t) { return t * t; },
      'ease-out': function(t) { return t * (2 - t); },
      // Add more easing functions here
    },

    addHoverEffect: function(config) {
      var buttons = document.querySelectorAll(config.elements);

      var defaultHoverShade = config.defaultHoverShade || 20;
      var easingFunction = this.easingFunctions[config.easing] || this.easingFunctions['ease-out'];
      var duration = config.duration || 300;

      buttons.forEach(function(button) {
        var originalColor = getComputedStyle(button).backgroundColor;
        var hoverColor = config.hoverColor || calculateHoverColor(originalColor, defaultHoverShade);
        button.style.transitionDuration = duration + 'ms'

        button.addEventListener('mouseenter', function() {
          button.style.backgroundColor = hoverColor;
          button.style.transition = 'background-color ' + duration + 'ms ' + easingFunction;
        });

        button.addEventListener('mouseleave', function() {
          button.style.backgroundColor = originalColor;
          button.style.transition = 'background-color ' + duration + 'ms ' + easingFunction;
        });
      });

      function calculateHoverColor(color, shade) {
        var rgb = color.match(/\d+/g);
        for (var i = 0; i < 3; i++) {
          rgb[i] = Math.max(0, parseInt(rgb[i]) - shade);
        }
        return 'rgb(' + rgb.join(',') + ')';
      }
    },

    setDimensions: function(config) {
      var element = document.querySelector(config.element);
      var dimensionType = config.dimensionType || 'width';
      var newDimension = parseInt(config.newDimension);
      var duration = config.duration || 500;

      var startDimension = parseInt(getComputedStyle(element)[dimensionType]);
      var startTime = performance.now();

      var animate = function(timestamp) {
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var currentDimension = startDimension + (newDimension - startDimension) * progress;

        element.style[dimensionType] = currentDimension + 'px';

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    },

    addClickEffect: function(config) {
      var elements = document.querySelectorAll(config.elements);
      var scaleValue = config.scaleValue || 1.1;
      var duration = config.duration || 200;

      elements.forEach(function(element) {
        element.style.transition = 'transform ' + duration + 'ms ease-in-out';
        element.style.cursor = 'pointer';

        element.addEventListener('click', function() {
          element.style.transform = 'scale(' + scaleValue + ')';
          setTimeout(function() {
            element.style.transform = 'scale(1)';
          }, duration);
        });
      });
    }
  };

  return gravity
})();
