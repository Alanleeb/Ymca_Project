(function() {
      var mobileThreshold = 850;
    
      var max = function() {
        var args = Array.prototype.slice.call(arguments);
        return args.sort(function(a, b){return a-b})[args.length - 1];
      };
    
      var getElementById = function(id) {
        return document.getElementById(id);
      };
    
      // Adds a class to a given DOM element (only if it isn't already there).
      //
      // el    - A DOM element.
      // klass - The class to remove.
      //
      // Returns nothing.
      var addClass = function(el, klass) {
        if (!el) return;
        var original = el.className;
        var regex = new RegExp("(?:^|\\s)" + klass + "(?!\\S)");
        if (!original.match(regex)) {
          el.className = original + " " + klass;
        }
      };
    
      // Removes a class from a given DOM element (preserving the other classes).
      //
      // el    - A DOM element.
      // klass - The class to remove.
      //
      // Returns nothing.
      var removeClass = function(el, klass) {
        if (!el) return;
        var original = el.className;
        var regex = new RegExp("(?:^|\\s)" + klass + "(?!\\S)", 'g');
        el.className = original.replace(regex, '');
      };
    
      // Cancels default event action for a given JS event. A call to this 
      // function should be placed at the end of event handlers.
      //
      // e - An Event object.
      //
      // Returns false.
      var preventDefault = function(e) {
        var evt = e ? e : window.event;
        if (evt.preventDefault) evt.preventDefault();
        if (evt.stopPropagation) evt.stopPropagation();
        evt.returnValue = false;
        return false;
      };
    
      var Widget = function(formId, options) {
        var options = options || {};
        var that = this;
    
        this.formId = formId;
    
        this.isOpen = options.isOpen || false;
        this.teaserShown = options.teaserShown == undefined ? true : options.teaserShown;
        this.enableMobile = options.enableMobile == undefined ? true : options.enableMobile;
        this.successShown = options.successShown || false;
        this.isSubmitting = options.isSubmitting || false;
        this.hideHeader = options.hideHeader || false;
        this.category = options.category || "tab";
        this.region = options.region || "bottom";
        this.side = options.side || "right";
        this.submitText = options.submitText || "Submitting...";
        this.buttonText = options.buttonText || "Sign Up";
    
        this.elements = this.fetchElements();
    
        // Bind the header click event for tabs
        if (this.category == "tab" && this.elements.toggle) { 
          this.elements.toggle.onclick = function(event) {
            that.toggle();
            return preventDefault(event);
          } ;
        }
    
        // Bind the close button click event
        if (this.elements.close) {
          this.elements.close.onclick = function(event) {
            that.toggle();
            return preventDefault(event);
          };
        }
    
        this.refresh();
      };
    
      Widget.prototype.fetchElements = function() {
        var elements = {
          container: getElementById("popup-" + this.formId),
          form: getElementById("popup-form-" + this.formId),
          toggle: getElementById("popup-toggle-" + this.formId),
          close: getElementById("popup-close-" + this.formId),
          hide: getElementById("popup-hide-" + this.formId),
          teaser: getElementById("popup-teaser-" + this.formId),
          content: getElementById("popup-content-" + this.formId),
          formPanel: getElementById("popup-form-panel-" + this.formId),
          successPanel: getElementById("popup-success-panel-" + this.formId),
          submitButton: getElementById("popup-submit-" + this.formId),
          scroll: getElementById("popup-scroll-" + this.formId),
          contentHeader: getElementById("popup-content-header-" + this.formId)
        };
    
        switch (this.category) {
        case "tab":
          elements.header = document.getElementById("popup-header-" + this.formId);
          elements.upArrow = document.getElementById("popup-tab-up-" + this.formId);
          elements.downArrow = document.getElementById("popup-tab-down-" + this.formId);
        }
    
        return elements;
      };
    
      Widget.prototype.open = function() {
        this.isOpen = true;
        this.refresh();
      };
    
      Widget.prototype.close = function() {
        this.isOpen = false;
        this.refresh();
      };
    
      Widget.prototype.toggle = function() {
        this.isOpen = !this.isOpen;
        this.refresh();
      };
    
      Widget.prototype.maxHeight = function() {
        return max(window.innerHeight, 400) * .66;
      };
    
      Widget.prototype.refresh = function() {
        // Hide/show the toggle depending on open/closed position
        if ((this.region == "bottom" || this.region == "side") && this.hideHeader === true) {
          if (this.isOpen) {
            addClass(this.elements.header, "hide");
          } else {
            removeClass(this.elements.header, "hide");
          }
        }
        
        // Calculate the header height
        if (this.region == "side" && window.innerWidth > mobileThreshold) {
          var headerHeight = 0;  
        } else {
          var headerHeight = this.elements.header ? this.elements.header.scrollHeight || 0 : 0;
        }
    
        // Reset the height of the scrollable container so content height is 
        // properly calculated, and set the scrollHeight variable
        this.elements.scroll.style.height = "auto";
      
        // Calculate the inner content height
        var contentHeight = 0;
        var children = this.elements.content.childNodes;
    
        for (var i = 0, l = children.length; i < l; i++) {
          if (children[i].style && children[i].style.display !== "none") {
            contentHeight += children[i].scrollHeight || 0;
          }
        }
        
        var height = headerHeight + contentHeight + 10; // 10px top & bottom padding
        
        // Do not allow the container to be taller than 66% of viewport
        if (this.region == "bottom" && height > this.maxHeight()) {
          height = this.maxHeight();
          contentHeight = height - headerHeight - 10;
          contentHeaderHeight = this.elements.contentHeader.scrollHeight;
          scrollContainerHeight = contentHeight - contentHeaderHeight - 60;
          addClass(this.elements.scroll, "scroll");
          this.elements.scroll.style.height = scrollContainerHeight.toString() + "px";
        } else {
          removeClass(this.elements.scroll, "scroll");
          scrollContainerHeight = this.elements.scroll.style.height;
        }
        
        if (this.category == "tab") {
          // Update arrow direction
          if (this.isOpen) {
            this.elements.downArrow.style.display = "block";
            this.elements.upArrow.style.display = "none";
          } else {
            this.elements.downArrow.style.display = "none";
            this.elements.upArrow.style.display = "block";
          } 
        }
        
        // Check viewport size, and force to render on bottom if less than the mobile threshold
        if (this.enableMobile && window.innerWidth < mobileThreshold) {
          this.refreshMobile(height, contentHeight);
        } else {
          this.refreshDesktop(height, contentHeight); 
        }
      };
    
      Widget.prototype.refreshMobile = function(height, contentHeight) {
        // Add mobile class
        removeClass(this.elements.container, "side");
        removeClass(this.elements.container, "bottom");
        removeClass(this.elements.container, "left");
        removeClass(this.elements.container, "right");
        addClass(this.elements.container, "mobile");
        
        // Update the height of the wrapper element
        this.elements.container.style.height = height.toString() + "px";
        this.elements.container.style.left = 0;
      
        if (this.category == "tab") {
          this.elements.container.style.top = "inherit";
          this.elements.container.style.bottom = 0;
    
          if (this.isOpen) {
            this.elements.container.style.bottom = "0";
          } else {
            if (this.teaserShown) {
              this.elements.container.style.bottom = "-" + contentHeight.toString() + "px";
            } else {
              this.elements.container.style.bottom = "-" + height.toString() + "px";
            }
          }
        }
      };
      
      Widget.prototype.refreshDesktop = function(height, contentHeight) {
        // Remove mobile class
        removeClass(this.elements.container, "mobile");
        removeClass(this.elements.scroll, "mobile");
        if (this.region) addClass(this.elements.container, this.region);
        if (this.side) addClass(this.elements.container, this.side);
        
        // Update the height of the wrapper element
        switch (this.region) {
        case "bottom":
          this.elements.container.style.maxHeight = height.toString() + "px";
    
          if (this.side == "left") {
            this.elements.container.style.left = "40px";
          } else {
            this.elements.container.style.right = "40px";
            this.elements.container.style.left = "inherit";
          }
    
          break;
        }
        
        if (this.category == "tab") {
          // Update the open/closed position
          switch (this.region) {
          case "bottom":
            if (this.isOpen) {
              this.elements.container.style.bottom = "0";
            } else {
              if (this.teaserShown) {
                this.elements.container.style.bottom = "-" + contentHeight.toString() + "px";
              } else {
                this.elements.container.style.bottom = "-" + height.toString() + "px";
              }
            }
    
            break;
          
          }    
        }
    
      };
    
      window.Widget = Widget;
    })();